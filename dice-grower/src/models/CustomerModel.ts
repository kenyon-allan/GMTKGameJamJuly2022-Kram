export default class CustomerModel {
    color:Array<Number>;
    dieShape:number;
    diePattern:string;
    dieValue:number;

    constructor() {
        this.color = this.colorPicker();
        this.dieShape = this.diePicker();
        this.diePattern = this.patternPicker();
        this.dieValue = this.pricePicker(this.dieShape, this.diePattern);
    }
    private colorPicker() {
        let pickR = Math.floor(Math.random()*256);
        let pickG = Math.floor(Math.random()*256);
        let pickB = Math.floor(Math.random()*256);
        return [pickR, pickG, pickB]
    }
    private diePicker() {
        // pick between d4 (0), d6(1), d8(2), d10(3), d12(4), d20(5) with d4 as the default dieShape
        let customSides = Math.floor(Math.random() * (6))
        let dieShape = 4;
        if (customSides === 0) {
            dieShape = 4;
        }
        else if (customSides === 1) {
            dieShape = 6;
        }
        else if (customSides === 2) {
            dieShape = 8;
        }
        else if (customSides === 3) {
            dieShape = 10;
        }
        else if (customSides === 4) {
            dieShape = 12;
        }
        else if (customSides === 5) {
            dieShape = 20;
        }

        return dieShape;
    }
    private patternPicker() {
        let possiblePatterns = ["solid", "split", "swirl", "speckled", "gradient"];
        return possiblePatterns[Math.floor(Math.random()*6)];
    }
    private pricePicker(Shape, Pattern) {
        return (Shape*0.5 + Pattern*2)
    }
}