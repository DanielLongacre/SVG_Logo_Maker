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