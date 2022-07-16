export default class SeedModel {
    readonly dieSize: number;
    readonly color: number[];
    readonly pattern: string;
    readonly wateringsPerGrowthStage: number;

    constructor(wateringsPerGrowthStage: number, dieSize: number, color: number[], pattern: string) {
        this.wateringsPerGrowthStage = wateringsPerGrowthStage;
        this.dieSize = dieSize;
        this.color = color;
        this.pattern = pattern;
    }
}