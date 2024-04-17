class Shape{
    constructor(radius =0,base=0,height=0,sideA=0,sideB=0 ) {
        this.radius = radius;
        
        this.base = base;
        this.height = height;
        
        this.sideA = sideA;
        this.sideB = sideB;

    }

    calculateArea(){
        return Math.PI * Math.pow(this.radius,2);
    }

    calculatePerimeter(){
        return 2 * Math.PI * this.radius;
    }
}

class Circle extends Shape{

    constructor(radius){
        super(radius);
    }

    calculateArea(){
        return Math.PI * Math.pow(this.radius,2);
    }

    calculatePerimeter(){
        return 2 * Math.PI * this.radius;
    }

}

class Rectange extends Shape{
    constructor(length,width) {
        super();
        this.length = length;
        this.width = width;

    }

    calculateArea(){
        return this.width * this.length;
    }

    calculatePerimeter(){
        return 2*(this.length + this.width);
    }
}

class Triangle extends Shape{
    constructor(base=0,height=0,sideA=0,sideB=0,baseC=0) {
        //For Area
        super(0,base,height,sideA,sideB);
        //For Perimeter
        this.baseC =  baseC;
    }

    calculateArea(){
        return (this.base * this.height)/2;
    }

    calculatePerimeter(){
        return (this.sideA+this.sideB+this.baseC);
    }
}

const circle = new Circle(5);
console.log(`Circle - Area : ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectange(4,6);
console.log(`Rectangle - Area : ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(8,6,5,7,10);
console.log(`Triangle - Area : ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);