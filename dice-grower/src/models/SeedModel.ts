export default class SeedModel {
    private dieSize: number;
    private color: number[];
    private pattern: string;
    private wateringsPerGrowthStage: number;

    constructor(wateringsPerGrowthStage: number, dieSize: number, color: number[], pattern: string) {
        this.wateringsPerGrowthStage = wateringsPerGrowthStage;
        this.dieSize = dieSize;
        this.color = color;
        this.pattern = pattern;
    }

    get seedWateringsPerStage() {
        return this.wateringsPerGrowthStage;
    }
    get seedSize() {
        return this.dieSize;
    }
    get seedColor() {
        return this.color;
    }
    get seedPattern() {
        return this.pattern;
    }

    public changeWaterings(newWaterings: number) {
        this.wateringsPerGrowthStage = newWaterings;
    }
    public changeSize(newSize: number) {
        this.dieSize = newSize;
    }
    public changeColor(newColor: number[]) {
        this.color = newColor;
    }
    public changePattern(newPattern: string) {
        this.pattern = newPattern;
    }
}