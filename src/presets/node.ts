
/**
 * XML/HTML parser from string into DOM Document.
 */
// tslint:disable-next-line: interface-over-type-literal
type DOMParser = {
	prototype: any;
	new (): any;
};

/**
 * `node-canvas` exports.
 */
interface ICanvas {
	createCanvas(width: number, height: number): any;
	loadImage(src: string): Promise<any>;
}

interface IConfig {
	/**
	 * XML/HTML parser from string into DOM Document.
	 */
	DOMParser: DOMParser;
	/**
	 * `node-canvas` exports.
	 */
	canvas: ICanvas;
	/**
	 * WHATWG-compatible `fetch` function.
	 */
	fetch: typeof fetch;
}

/**
 * Options preset for `node-canvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @param config.canvas - `node-canvas` exports.
 * @param config.fetch - WHATWG-compatible `fetch` function.
 */
export function node({
	DOMParser,
	canvas,
	fetch
}: IConfig) {
	return {
		window:          null as null,
		ignoreAnimation: true,
		ignoreMouse:     true,
		DOMParser,
		fetch,
		createCanvas:    canvas.createCanvas,
		createImage:     canvas.loadImage
	};
}
