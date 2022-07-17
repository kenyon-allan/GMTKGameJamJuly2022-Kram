export class FruitColors {
    color: Array<Number>;
    public constructor(){
        this.color = this.colorPicker()
    }
    private colorPicker() {
        let pickR = Math.floor(Math.random()*256);
        let pickG = Math.floor(Math.random()*256);
        let pickB = Math.floor(Math.random()*256);
        return [pickR, pickG, pickB]
    }
}