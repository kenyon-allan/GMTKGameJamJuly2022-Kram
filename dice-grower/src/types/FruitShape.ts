export class FruitShape {
    
    dieShape:number;

    constructor() {
        this.dieShape = this.numberofsides()
    }
    private numberofsides() {
        // pick between d4 (0), d6(1), d8(2), d10(3), d12(4), d20(5)
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
}