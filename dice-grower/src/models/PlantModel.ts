import FruitModel from "./FruitModel";
import FlowerModel from "./FlowerModel";
import { GrowthStages } from "../types/GrowthStages";
export default class PlantModel {
    private privateCurrentStage: GrowthStages;
    private privateCurrentWaterings: number = 0;
    readonly fruit: FruitModel;
    readonly flower: FlowerModel;
    readonly wateringsPerGrowthStage: number;
    
    constructor(wateringsPerGrowthStage: number, fruit: FruitModel, flower: FlowerModel) {
        this.wateringsPerGrowthStage = wateringsPerGrowthStage;
        this.fruit = fruit;
        this.flower = flower;
        this.privateCurrentStage = GrowthStages.SEED;
    }

    get currentWaterings(): number {
        return this.privateCurrentWaterings;
    }

    get currentStage(): GrowthStages {
        return this.privateCurrentStage;
    }

    // TODO: build me
    water() {

    }
}