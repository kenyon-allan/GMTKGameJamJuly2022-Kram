import SeedModel from "./SeedModel";

export default class FruitModel {
    private dieSize: number;
    private color: number[];
    private pattern: string;
    private seed: SeedModel;
    constructor(dieSize: number, color: number[], pattern: string, seed: SeedModel) {
        this.dieSize = dieSize;
        this.color = color;
        this.pattern = pattern;
        this.seed = seed;
    }

    get fruitSize(): number {
        return this.dieSize;
    }
    get fruitColor(): number[] {
        return this.color;
    }
    get fruitPattern(): string {
        return this.pattern;
    }
    get fruitSeed(): SeedModel {
        return this.seed;
    }
}