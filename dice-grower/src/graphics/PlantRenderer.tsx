import PlantModel from "../models/PlantModel";
import { GrowthStages } from "../types/GrowthStages";

//renders plants
export class PlantRenderer {

    readonly RENDERED_WIDTH: number = 1; //todo: find a good width in screen units
    readonly SEED_IMG_LOC: string = "seed.png";
    readonly SPROUT_IMG_LOC: string = "sprout.png";
    readonly STEM_IMG_LOC: string = "stem.png";
    readonly STEM_BRANCH_IMAGE_LOC: string = "stem-with-branch.png"; //left facing by default
    readonly BUD_IMG_LOC: string = "bud.png";
    readonly BRANCH_CHANCE: number = 30; //percent chance
    readonly IMG_TILE_HEIGHT: number = 100; //pixels, todo: replace placeholder value
    readonly IMG_TILE_WIDTH: number = 100; //pixels, todo: replace placeholder value

    private x_pos: number;
    private y_pos: number;
    private num_stem_segments: number;
    private render_order: Array<String>;

    constructor(plantmodel: PlantModel, x_pos: number, y_pos: number) {

        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.render_order = [];

        switch (plantmodel.currentStage) {
            case GrowthStages.SEED:
                this.num_stem_segments = 0;
                break;
            case GrowthStages.SPROUT:
                this.num_stem_segments = 1;
                break;
            case GrowthStages.FLOWER:
                this.num_stem_segments = 2;
                break;
            case GrowthStages.FRUIT:
                this.num_stem_segments = 3;
                break;
        }
    }

    //build image from equal sized tile subimages
    // seed + sprout + number of stems + bud
    // each stem has a chance to branch (non-recursively), for varied visual
    constructImage() {

        //this.render_order.concat("seed");

        if (this.num_stem_segments === 1) {
            this.render_order.concat("sprout");
        }
        else {
            for (let index = 0; index < this.num_stem_segments; index++) {
                var randomNumber = Math.floor((Math.random() * 100) + 1); //rand int between [1,100]

                if (randomNumber > this.BRANCH_CHANCE) {
                    this.render_order.concat("stem-with-branch");
                }
                else {
                    this.render_order.concat("stem");
                }
            }
            this.render_order.concat("bud");
        }

    }

    render() {
        var height = 0;

        for (let index = 0; index < this.render_order.length; index++) {

            switch (this.render_order[index]) {
                case "seed":

                    //display seed pic
                    break;
                case "sprout":
                    //display sprout pic
                    break;
                case "stem":
                    //display stem pic
                    break;
                case "stem-with-branch":
                    //display stem-with-branch-pic
                    //randomly choose mirrored or not

                    //put bud on adjacent tile to line up with branch

                    break;
                case "bud":
                    //display bud pic

                    break;                    
            }

            //offset render location (height) by image tile size
            height += this.IMG_TILE_HEIGHT;
        }
    }

    showFruit() {

    }


}


