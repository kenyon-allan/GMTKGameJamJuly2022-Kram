import FlowerModel from '../../models/FlowerModel';

function Flower(props: {flower: FlowerModel}) {
    return (
      <div> This represents a Flower with {props.flower.faces} number of faces </div>
    );
 
  }
  
  export default Flower;
 