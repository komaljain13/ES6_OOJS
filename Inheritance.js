var shape = {
	type: 'shape',
	getType: function() {
		return this.type;
	},
	
}

function Triangle(a, b, c) {
	this.type = 'triangle';
	this.a = a;
	this.b = b;
	this.c = c;
}
Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle

// not sure why the question asked to add getPerimeter to
// the prototype. shape.getPerimeter() will give NaN now
Triangle.prototype.getPerimeter = function() {
	return this.a + this.b + this.c;
}
console.log("=========Inheritance==========");
var t = new Triangle(1,2,3);
console.log(t.constructor === Triangle);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

for(var p in t) {
	if(t.hasOwnProperty(p)) {
		console.log(p + ':' + t[p]);
	}
}
