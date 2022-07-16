
//renders plants
export class PlantRenderer {

    readonly RENDERED_WIDTH:number = 1; //todo: find a good width in screen units
    private x_pos:number;
    private y_pos:number;

    constructor(plantmodel: PlantModel, x_pos: number, y_pos: number) {

        this.x_pos = x_pos;
        this.y_pos = y_pos;

        switch (plantmodel.currentState) {
            case "SEED":

                break;
            case "SMALL_PLANT":
                
                break;
            case "MEDIUM_PLANT":
            
                break;
            case "LARGE_PLANT":
        
                break;
        }
    }

    render() {
        return (
            <img src = "plant.jpeg" style={ {position: 'absolute', left: this.x, right: this.y} } />
        );

    showFruit() {

    }

}


