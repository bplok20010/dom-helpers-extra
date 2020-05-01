import hasScroll from "../lib/hasScroll";

describe("hasScroll", () => {
	beforeEach(() => {
		document.body.innerHTML = `
        <div id="box" style="border: 10px solid red; padding: 10px;width: 200px; height: 200px; position:relative; overflow: auto; ">
            <div id="content" style="height: 100px; width: 100px"></div>
        </div>
        `;
	});

	it("hasScroll -1", () => {
		expect(hasScroll(box, "y")).toEqual(false);
		expect(hasScroll(box, "x")).toEqual(false);
	});

	it("setOffset -2", () => {
		content.style.height = "201px";
		expect(hasScroll(box, "y")).toEqual(true);
		expect(hasScroll(box, "x")).toEqual(false);
	});

	it("setOffset -3", () => {
		content.style.height = "201px";
		content.style.width = "201px";
		expect(hasScroll(box, "y")).toEqual(true);
		expect(hasScroll(box, "x")).toEqual(true);
	});
});
