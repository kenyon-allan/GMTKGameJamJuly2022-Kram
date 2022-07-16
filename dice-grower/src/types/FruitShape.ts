export class FruitShape {
    dieShape:number;
    constructor(dieShape:number) {
        this.dieShape = numberofsides()
    }
    function numberofsides() {
        // pick between d4 (0), d6(1), d8(2), d10(3), d12(4), d20(5)
        let customSides = Math.floor(Math.random() * (6))
        if (customSides == 0) {
            let dieShape = 4;
        }
        else if (customSides == 1) {
            let dieShape = 6;
        }
        else if (customSides == 2) {
            let dieShape = 8;
        }
        else if (customSides == 3) {
            let dieShape = 10;
        }
        else if (customSides == 4) {
            let dieShape = 12;
        }
        else if (customSides == 5) {
            let dieShape = 20;
        }

        return dieShape;
    }
}