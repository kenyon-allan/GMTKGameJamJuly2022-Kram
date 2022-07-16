import FruitModel from "./FruitModel";
import FlowerModel from "./FlowerModel";
import { GrowthStages } from "../types/GrowthStages";
export default class PlantModel {
    private privateCurrentStage: GrowthStages;
    private privateCurrentWaterings: number = 0;
    private fruit: FruitModel;
    private flower: FlowerModel;
    private wateringsPerGrowthStage: number;
    
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

    get getFruit(): FruitModel {
        return this.fruit;
    }

    public water() {
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

    public fertilize() {
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

    public combineTraits(plants: PlantModel[]) {
            let leLifespan: number[] = [this.wateringsPerGrowthStage];
            let leColors: number[][] = [this.fruit.fruitColor];
            let leSizes: number[] = [this.fruit.fruitSize];
            let lePatterns: string[] = [this.fruit.fruitPattern];

            plants.forEach(function(plant) {
                leLifespan.push(plant.wateringsPerGrowthStage);
                leColors.push(plant.fruit.fruitColor);
                leSizes.push(plant.fruit.fruitSize);
                lePatterns.push(plant.fruit.fruitPattern);
            });

            //Combine colors: 50% chance of blend, other 50% is split evenly between being just one color
            if (Math.random() >= 0.5) {
                //blend
            }
            else {
                var choice = leColors[Math.floor(Math.random() * leColors.length)];
            }
    }
}