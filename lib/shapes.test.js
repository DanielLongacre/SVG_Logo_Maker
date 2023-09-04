const {Triangle, Circle, Square} = require("./shapes");

//Triangle Test
describe('Triangle', () => {
    it('Creates triangle', () => {
        const shape = new Triangle();
        var color = ('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`)
    });

});

//Circle Test
describe('Circle', () => {
    it('Created circle', () => {
        const shape = new Circle();
        var color = ('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
});

//Square Test
describe('Square', () => {
    it('Created square', () => {
        const shape = new Square();
        var color = ('green');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="200" width="200" fill="${color}"/>`);
    });
});