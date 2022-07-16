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
            let leLifespans: number[] = [this.wateringsPerGrowthStage];
            let leColors: number[][] = [this.fruit.fruitColor];
            let leSizes: number[] = [this.fruit.fruitSize];
            let lePatterns: string[] = [this.fruit.fruitPattern];

            plants.forEach(function(plant) {
                leLifespans.push(plant.wateringsPerGrowthStage);
                leColors.push(plant.fruit.fruitColor);
                leSizes.push(plant.fruit.fruitSize);
                lePatterns.push(plant.fruit.fruitPattern);
            });

            //Combine traits: 50% chance of blend, other 50% is split evenly of taking directly from one of the parents
            //Waterings
            if (Math.random() >= 0.5) {
                let newLifespan: number = 0;
                leLifespans.forEach(function(lifespan) {
                    newLifespan += lifespan;
                });
                newLifespan /= leLifespans.length;

                this.fruit.fruitSeed.changeWaterings(newLifespan);
            }
            else {
                var choice = leLifespans[Math.floor(Math.random() * leLifespans.length)];
                this.fruit.fruitSeed.changeWaterings(choice);
            }

            //Color
            if (Math.random() >= 0.5) {
                let newColor: number[] = [0,0,0];
                leColors.forEach(function(color) {
                    newColor[0] += color[0];
                    newColor[1] += color[1];
                    newColor[2] += color[2];
                });
                newColor[0] /= leColors.length;
                newColor[1] /= leColors.length;
                newColor[2] /= leColors.length;

                this.fruit.fruitSeed.changeColor(newColor);
            }
            else {
                var choice2 = leColors[Math.floor(Math.random() * leColors.length)];
                this.fruit.fruitSeed.changeColor(choice2);
            }

            //Size
            var choice3 = leSizes[Math.floor(Math.random() * leSizes.length)];
            this.fruit.fruitSeed.changeSize(choice3);

            //TODO: combine patterns
    }
}