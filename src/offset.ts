import getOffset from "dom-helpers/offset";
import css from "dom-helpers/css";
import position from "dom-helpers/position";

function offset(node: HTMLElement): ReturnType<typeof getOffset>;
function offset(
	node: HTMLElement,
	coords: {
		left?: number;
		top?: number;
	}
): void;
function offset(
	node: HTMLElement,
	coords?: {
		left?: number;
		top?: number;
	}
) {
	if (!coords) {
		return getOffset(node);
	}

	let curPosition,
		curLeft,
		curCSSTop,
		curTop,
		curOffset,
		curCSSLeft,
		calculatePosition,
		positionState = css(node, "position"),
		props: {
			left?: string;
			top?: string;
		} = {};

	// Set position first, in-case top/left are set even on static elem
	if (positionState === "static") {
		node.style.position = "relative";
	}

	curOffset = getOffset(node);
	curCSSTop = css(node, "top");
	curCSSLeft = css(node, "left");
	calculatePosition =
		(positionState === "absolute" || positionState === "fixed") &&
		(curCSSTop + curCSSLeft).indexOf("auto") > -1;

	// Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if (calculatePosition) {
		curPosition = position(node);
		curTop = curPosition.top;
		curLeft = curPosition.left;
	} else {
		curTop = parseFloat(curCSSTop) || 0;
		curLeft = parseFloat(curCSSLeft) || 0;
	}

	if (coords.top != null) {
		props.top = coords.top - curOffset.top + curTop + "px";
	}
	if (coords.left != null) {
		props.left = coords.left - curOffset.left + curLeft + "px";
	}

	css(node, props);

	return;
}

export default offset;
