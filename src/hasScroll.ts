// import css from "dom-helpers/css";

export default function hasScroll(node: HTMLElement, dir: "x" | "y" = "y") {
	// if (css(node, "overflow") === "hidden") { // visible hidden
	// 	return false;
	// }

	// if (dir === "x" && css(node, "overflow-x") === "hidden") {
	// 	return false;
	// }

	// if (dir === "y" && css(node, "overflow-y") === "hidden") {
	// 	return false;
	// }

	if (dir === "y") {
		return node.scrollHeight > node.clientHeight;
	} else {
		return node.scrollWidth > node.clientWidth;
	}
}
