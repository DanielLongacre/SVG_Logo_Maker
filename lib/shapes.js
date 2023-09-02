class Shapes {
    constructor(numOfSides) {
        this.numOfSides = numOfSides;
    }
}


class Triangle extends Shapes {
    constructor(numOfSides) {
        super(3)
    }
}


class Circle extends Shapes {
    constructor(numOfSides) {
        super(0);
    }
}


class Square extends Shapes {
    constructor(numOfSides) {
        super(4);
    }
}


module.exports = Shapes;