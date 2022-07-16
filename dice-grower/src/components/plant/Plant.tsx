import PlantModel from '../../models/PlantModel';


function Plant(props: {plant: PlantModel}) {

    return (
      <h1> This represents a plant in the {props.plant.currentStage} stage</h1>
    );
 
  }
 
  Plant.defaultProps = {
    name: 'World'
  };
 
  export default Plant;
 