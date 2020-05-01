import isScrollEnd from "../lib/isScrollEnd";

describe("isScrollEnd", () => {
	beforeEach(() => {
		document.body.innerHTML = `
         <div id="box" style="border: 10px solid red; padding: 10px;width: 200px; height: 200px; position:relative; overflow: auto; ">
            <div id="content" style="height: 400px; width: 400px"></div>
        </div>
        `;
	});

	it("isScrollEnd -y", () => {
		box.scrollTop = 100;
		expect(isScrollEnd(box)).toEqual(false);

		box.scrollTop = 400;
		expect(isScrollEnd(box)).toEqual(true);
	});

	it("isScrollEnd -x", () => {
		box.scrollLeft = 100;
		expect(isScrollEnd(box, "x")).toEqual(false);

		box.scrollLeft = 400;
		expect(isScrollEnd(box, "x")).toEqual(true);
	});

	it("isScrollEnd -xy", () => {
		box.scrollTop = 400;
		box.scrollLeft = 400;
		expect(isScrollEnd(box, "x")).toEqual(true);
		expect(isScrollEnd(box, "x")).toEqual(true);
	});
});
