import getOffset from "dom-helpers/offset";
import css from "dom-helpers/css";
import position from "dom-helpers/position";

function offset(node: HTMLElement): ReturnType<typeof getOffset>;
function offset(
	node: HTMLElement,
	coords: {
		left?: number;
		top?: number;
		using: (pos: { left?: number; top?: number }) => void;
	}
): void;
function offset(
	node: HTMLElement,
	coords?: {
		left?: number;
		top?: number;
		using: (pos: { left?: number; top?: number }) => void;
	}
) {
	if (!coords) {
		return getOffset(node);
	}

	let curPosition: ReturnType<typeof position>,
		curLeft: number,
		curCSSTop: string,
		curTop: number,
		curOffset: ReturnType<typeof getOffset>,
		curCSSLeft: string,
		calculatePosition: boolean,
		positionState = css(node, "position"),
		props: {
			left?: string;
			top?: string;
		} = {};
	let targetPos: {
		left?: number;
		top?: number;
	} = {};

	// Set position first, in-case top/left are set even on static elem
	if (positionState === "static") {
		node.style.position = "relative";
	}

	curOffset = getOffset(node);
	curCSSTop = css(node, "top") as string;
	curCSSLeft = css(node, "left") as string;
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
		targetPos.top = coords.top - curOffset.top + curTop;
		props.top = targetPos.top + "px";
	}
	if (coords.left != null) {
		targetPos.left = coords.left - curOffset.left + curLeft;
		props.left = targetPos.left + "px";
	}

	if (coords.using) {
		coords.using(targetPos);
	} else {
		css(node, props);
	}

	return;
}

export default offset;
