class Shapes {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);
    }
}


class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}


class Circle extends Shapes {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
}


class Square extends Shapes {
    render() {
        return `<rect x="50" y="200" width="200" fill="${this.color}"/>`;
    }
}


module.exports = {Triangle, Circle, Square};