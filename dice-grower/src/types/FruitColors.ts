export class FruitColors {
    color:[number, number, number];
    constructor(color:[number, number, number]){
        this.color = colorPicker()
    }
    function colorPicker() {
        let pickR = Math.floor(Math.random()*256);
        let pickG = Math.floor(Math.random()*256);
        let pickB = Math.floor(Math.random()*256);
        return [pickR, pickG, pickB]
    }
}