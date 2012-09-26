/**
 * Creates a new rectangle (x, y, width, height).
 */
var IgeRect = function (x, y, width, height) {
	// Set values to the passed parameters or
	// zero if they are undefined
	this.x = x = x !== undefined ? x : 0;
	this.y = y = y !== undefined ? y : 0;
	this.width = width = width !== undefined ? width : 0;
	this.height = height = height !== undefined ? height : 0;

	return this;
};

/**
 * Returns boolean indicating if the passed x, y is
 * inside the rectangle.
 * @param x
 * @param y
 * @return {Boolean}
 */
IgeRect.prototype.xyInside = function (x, y) {
	return x >= this.x && y > this.y && x <= this.x + this.width && y <= this.y + this.height;
};

/**
 * Returns boolean indicating if the passed point is
 * inside the rectangle.
 * @param {IgePoint} point
 * @return {Boolean}
 */
IgeRect.prototype.pointInside = function (point) {
	return x >= this.x && point.y > this.y && point.x <= this.x + this.width && point.y <= this.y + this.height;
};

/**
 * Returns boolean indicating if the passed IgeRect is
 * intersecting the rectangle.
 * @param {IgeRect} rect
 * @return {Boolean}
 */
IgeRect.prototype.rectIntersect = function (rect) {
	if (rect) {
		var sX1 = this.x,
			sY1 = this.y,
			sW = this.width,
			sH = this.height,

			dX1 = rect.x,
			dY1 = rect.y,
			dW = rect.width,
			dH = rect.height,

			sX2 = sX1 + sW,
			sY2 = sY1 + sH,
			dX2 = dX1 + dW,
			dY2 = dY1 + dH;

		if (sX1 < dX2 && sX2 > dX1 && sY1 < dY2 && sY2 > dY1) {
			return true;
		}
	}

	return false;
};

/**
 * Returns a string representation of the rect's x, y, width,
 * height, converting floating point values into fixed using the
 * passed precision parameter. If no precision is specified
 * then the precision defaults to 2.
 * @param {Number=} precision
 * @return {String}
 */
IgeRect.prototype.toString = function (precision) {
	if (precision === undefined) { precision = 2; }
	return this.x.toFixed(precision) + ',' + this.y.toFixed(precision) + ',' + this.width.toFixed(precision) + ',' + this.height.toFixed(precision);
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = IgeRect; }