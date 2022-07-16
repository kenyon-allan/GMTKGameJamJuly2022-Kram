import FruitModel from "./FruitModel";

export default class CustomerModel {
    readonly desiredFruit: FruitModel;
    constructor(desiredFruit: FruitModel) {
        this.desiredFruit = desiredFruit;
    }
}