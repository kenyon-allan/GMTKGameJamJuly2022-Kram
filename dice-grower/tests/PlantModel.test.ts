import {describe, test, expect, beforeAll} from '@jest/globals';
import { GrowthStages } from "../src/types/GrowthStages";
import FlowerModel from '../src/models/FlowerModel';
import FruitModel from '../src/models/FruitModel';
import PlantModel from '../src/models/PlantModel';
import SeedModel from '../src/models/SeedModel';

describe('Water and Change Seed', () => {

    let dummyFlower: FlowerModel;
    let dummySeed: SeedModel;
    let dummyFruit: FruitModel;
    let prettyPlant: PlantModel;

    beforeAll(() => {
        dummyFlower = new FlowerModel(6);
        dummySeed = new SeedModel(2, 6, [265, 0, 0], 'solid');
        dummyFruit = new FruitModel(6, [265, 0, 0], 'solid', dummySeed);
        prettyPlant = new PlantModel(2, dummyFruit, dummyFlower);
    });

    test('Should increase the number of waters but not grow the plant when ran', () => {
        

        prettyPlant.water();
        const waters: number = prettyPlant.currentWaterings;
        const stage: GrowthStages = prettyPlant.currentStage;

        expect(1).toEqual(waters);
        expect(GrowthStages.SEED).toEqual(stage);
    });

    test('Change the color of the seed', () => {
        prettyPlant.getFruit.fruitSeed.changeColor([0,265,0]);

        const result: number[] = prettyPlant.getFruit.fruitSeed.seedColor;
        expect([0,265,0]).toEqual(result);
    });
});