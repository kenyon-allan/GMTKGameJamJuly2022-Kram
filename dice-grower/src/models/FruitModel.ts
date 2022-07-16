export default class FruitModel {
    readonly dieSize: number;
    readonly color: string;
    readonly pattern: string;
    constructor(dieSize: number, color: string, pattern: string, lifespan: number) {
        this.dieSize = dieSize;
        this.color = color;
        this.pattern = pattern;
    }

    get fruitSize(): number {
        return this.dieSize;
    }
    get fruitColor(): string {
        return this.color;
    }
    get fruitPattern(): string {
        return this.pattern;
    }
}