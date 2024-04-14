import CareScale from './CareScale'
import '../styles/PlantItems.css'

function PlantItem({ name, cover, id, light, water }){
    return(
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' alt={`${name}`} src={cover} />
            {name}
            <div>
                <CareScale careType="light" scaleValue={light} />
                <CareScale careType="water" scaleValue={water} />
            </div>
        </li>
    )
}
export default PlantItem


