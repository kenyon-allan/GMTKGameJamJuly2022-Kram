import {describe, test, expect, beforeEach} from '@jest/globals';
import { GrowthStages } from "../src/types/GrowthStages";
import FlowerModel from '../src/models/FlowerModel';
import FruitModel from '../src/models/FruitModel';
import PlantModel from '../src/models/PlantModel';
import SeedModel from '../src/models/SeedModel';

describe('water()', () => {

    test('Should increase the number of waters but not grow the plant when ran', () => {
        const dummyFlower: FlowerModel = new FlowerModel(6);
        const dummySeed: SeedModel = new SeedModel(2, 6, [265, 0, 0], 'solid');
        const dummyFruit: FruitModel = new FruitModel(6, [265, 0, 0], 'solid', dummySeed);
        const prettyPlant: PlantModel = new PlantModel(2, dummyFruit, dummyFlower);

        prettyPlant.water();
        const waters: number = prettyPlant.currentWaterings;
        const stage: GrowthStages = prettyPlant.currentStage;

        expect(1).toEqual(waters);
        expect(GrowthStages.SEED).toEqual(stage);
    });
});