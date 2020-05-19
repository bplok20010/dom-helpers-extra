import offset from "../lib/offset";

describe("offset", () => {
	beforeEach(() => {
		document.body.innerHTML = `
        <div id="scrollview" style="top: 100px; left: 100px; padding: 10px;width: 200px; height: 200px; position:relative; overflow: auto; background: #ccc;">
            <div style="padding: 400px; ">
                <p id="el" style="width:50px; height: 50px; margin:0; padding: 0; background:#000; color: #FFF;">
                    test
                </p>
            <div>
        </div>
        `;
	});

	it("setOffset -1", () => {
		offset(el, { left: 0, top: 0 });
		let coords = offset(el);
		expect(~~coords.top).toBe(0);
		expect(~~coords.left).toBe(0);

		expect(parseInt(el.style.left, 10)).toEqual(-518);
		expect(parseInt(el.style.top, 10)).toEqual(-518);

		offset(el, {
			left: 0,
			top: 0,
			using: pos => {
				expect(pos.left).toEqual(-518);
				expect(pos.top).toEqual(-518);
			},
		});
	});

	it("setOffset -2", () => {
		scrollview.scrollTop = 100;
		offset(el, { left: 0, top: 0 });
		const coords = offset(el);

		expect(~~coords.top).toBe(0);
		expect(~~coords.left).toBe(0);

		expect(parseInt(el.style.left, 10)).toEqual(-518);
		expect(parseInt(el.style.top, 10)).toEqual(-418);
	});
});
