import { plantList } from '../datas/plantList.js';
import PlantItem from './PlantItem';
import "../styles/ShoppingList.css"

function ShoppingList(){
    let tableau = plantList.reduce((acc, plant) => 
        acc.includes(plant.category) ? acc : acc.concat(plant.category),[]
    );
    return(<div>
        <ul className='lmj-plant-list'>
            {
            tableau.map((element,index)=>(
                <li key={`${element}-${index}`} className='lmj-plant-item'>
                    { element }
                </li>

            ))}
        </ul>
        <ul className='lmj-plant-list' id='lmj-article'>
            {
            plantList.map(({name, cover, id, light, water})=>(
                <PlantItem key={id} cover={cover} name={name} light={light} water={water} />

            ))}
        </ul>
        
    </div>)
}
export default ShoppingList