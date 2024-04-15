import CareScale from './CareScale'
import '../styles/PlantItems.css'

function handleClick(name){
    alert(`vous avez ajouter 1 ${name} à votre panier, très bon choix !`)
    // console.log('ceci est mon evenement objet', name)
}


function PlantItem({ name, cover, light, water }){
    return(
        <li className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' onClick={() => handleClick(name)} alt={`${name}`} src={cover} />
            {name}
            <div>
                <CareScale careType="light" scaleValue={light} />
                <CareScale careType="water" scaleValue={water} />
            </div>
        </li>
    )
}

export default PlantItem


