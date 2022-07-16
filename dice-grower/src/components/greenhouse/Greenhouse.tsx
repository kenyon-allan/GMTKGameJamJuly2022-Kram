import PlantModel from '../../models/PlantModel';
import Plant from '../plant/Plant';

function Greenhouse(props: {}) {
    const plants: PlantModel[] = [];
    return (
        <tbody>
            This is the greenhouse
            {
                plants.map((plant: PlantModel) => {
                    return <Plant plant={plant}></Plant>
                })
            }
        </tbody>
    );
 
  }
 
  export default Greenhouse;
 