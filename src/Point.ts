import {
	toNumbers
} from './util';

export default class Point {

	static parse(point: string, defaultValue = 0) {

		const [
			x = defaultValue,
			y = x
		] = toNumbers(point);

		return new Point(x, y);
	}

	static parsePath(path: string) {

		const points = toNumbers(path);
		const len = points.length;
		const pathPoints: Point[] = [];

		for (let i = 0; i < len; i += 2) {
			pathPoints.push(new Point(points[i], points[i + 1]));
		}

		return pathPoints;
	}

	constructor(
		public x: number,
		public y: number
	) {}

	angleTo(point: Point) {
		return Math.atan2(point.y - this.y, point.x - this.x);
	}

	applyTransform(transform: number[]) {

		const {
			x,
			y
		} = this;
		const xp = x * transform[0] + y * transform[2] + transform[4];
		const yp = x * transform[1] + y * transform[3] + transform[5];

		this.x = xp;
		this.y = yp;
	}
}
