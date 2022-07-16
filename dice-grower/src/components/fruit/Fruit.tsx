import FruitModel from '../../models/FruitModel';

function Fruit(props: {fruit: FruitModel}) {
    return (
      <h1> This represents a Fruit with the color {props.fruit.color} </h1>
    );
 
  }
  
  export default Fruit;
 