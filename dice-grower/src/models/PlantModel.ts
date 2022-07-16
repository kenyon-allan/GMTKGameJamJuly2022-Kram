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

    water() {
        this.privateCurrentWaterings += 1;
        if (this.privateCurrentWaterings === this.wateringsPerGrowthStage) {
            if (this.privateCurrentStage === GrowthStages.SEED) {
                this.privateCurrentStage = GrowthStages.SPROUT;
            }
            else if (this.privateCurrentStage === GrowthStages.SPROUT) {
                this.privateCurrentStage = GrowthStages.FLOWER;
            }
            else if (this.privateCurrentStage === GrowthStages.FLOWER) {
                this.privateCurrentStage = GrowthStages.FRUIT;
            }
            this.privateCurrentWaterings = 0;
        }
    }

    fertilize() {
        if (this.privateCurrentStage === GrowthStages.SEED) {
            this.privateCurrentStage = GrowthStages.SPROUT;
        }
        else if (this.privateCurrentStage === GrowthStages.SPROUT) {
            this.privateCurrentStage = GrowthStages.FLOWER;
        }
        else if (this.privateCurrentStage === GrowthStages.FLOWER) {
            this.privateCurrentStage = GrowthStages.FRUIT;
        }
        this.privateCurrentWaterings = 0;
    }

    combineTraits() {
        
    }

    harvest(): FruitModel {
        const newFruit: FruitModel = new FruitModel(4, 'black', 'solid', 4);
        return newFruit;
    }
}