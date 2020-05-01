export default function domReady(fn: () => void) {
	function trigger() {
		window.document.removeEventListener("DOMContentLoaded", trigger);
		window.removeEventListener("load", trigger);
		fn();
	}

	// check if document is already loaded
	if (window.document.readyState === "complete") {
		window.setTimeout(fn);
	} else {
		// Works for modern browsers and IE9
		window.document.addEventListener("DOMContentLoaded", trigger);

		// Fallback to window.onload for others
		window.addEventListener("load", trigger);
	}
}
