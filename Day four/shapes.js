class Shape {
  getArea() {  throw new Error("getArea() must be implemented");
  }
  getPerimeter() {
    throw new Error("getPerimeter() must be implemented");
  }
  toString() {
    return `Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }

  getPerimeter() {
    return 4 * this.side;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

export { Shape, Rectangle, Square, Circle };
