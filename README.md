# dom-helpers-extra

Related extension of dom-helpers

## Install

```
npm install --save dom-helpers-extra
```

## Usage

```js
import css from "dom-helpers/css";
import offset from "dom-helpers-extra/offset";

css(node, "display");

offset(node);

offset(node, {
	left: 100,
	top: 100,
});
```

## Methods

-   `offset(node: HTMLElement, coords?: {left?: number, top?: number})`
-   `domReady(fn: () => void)`
-   `hasScroll(node: HTMLElement, dir?: "x" | "y" = "y"): boolean`
-   `isScrollEnd(node: HTMLElement, dir?: "x" | "y" = "y"): boolean`
-   `ResizeObserver` use `resize-observer-polyfill`
-   `scrollIntoView` alias of `dom-helpers/scrollTo`
