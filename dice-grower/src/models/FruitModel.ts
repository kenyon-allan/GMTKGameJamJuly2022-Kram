export default class FruitModel {
    readonly dieSize: number;
    readonly color: string;
    readonly pattern: string;
    readonly lifespan: number;
    constructor(dieSize: number, color: string, pattern: string, lifespan: number) {
        this.dieSize = dieSize;
        this.color = color;
        this.pattern = pattern;
        this.lifespan = lifespan;
    }
}