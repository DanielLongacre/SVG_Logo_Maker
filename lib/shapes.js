class Shapes {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}


class Triangle extends Shapes {
    render() {
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`;
    }
}


class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="75" style="fill:${this.color}"/>`;
    }
}


class Square extends Shapes {
    render() {
        return `<rect x="50" y="200" width="200" height="200" style="fill:${this.color}"/>`;
    }
}


module.exports = {Triangle, Circle, Square};