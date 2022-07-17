import FruitModel from "./FruitModel";

export default class CustomerModel {
    readonly desiredFruit: FruitModel;
    constructor(desiredFruit: FruitModel) {
        this.desiredFruit = desiredFruit;
    //use some sort of RNG depending on how we store/order fruits
    }

    // function customOrder() {
    //     // pick between d4 (0), d6(1), d8(2), d10(3), d12(4), d20(5)
    //     return new FruitModel()
    //     desiredFruit.dieSize = Math.floor(Math.random() * (6))
    // }
}