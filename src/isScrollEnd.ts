export default function isScrollEnd(node: HTMLElement, dir: "x" | "y" = "y") {
	return dir === "y"
		? node.scrollTop >= node.scrollHeight - node.clientHeight - (node.scrollTop > 0 ? 2 : 0)
		: node.scrollLeft >= node.scrollWidth - node.clientWidth - (node.scrollLeft > 0 ? 2 : 0);
}
