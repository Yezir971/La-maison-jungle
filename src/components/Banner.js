import logo from '../assets/logo.png'
import '../styles/Banner.css'
import Recommendation from './Recommendation'

function Banner(){
    return (<div className="lmj-banner">
        <img src={logo} alt="logo de la maison jungle" className='lmj-logo'/>
        <div>
            <h1 className='lmj-title'>La maison jungle</h1>
            <Recommendation />
        </div>
    </div>)
}

// cette ligne est une syntaxe ES6 qui permmet d'utiliser les accolades au moment de l'import 
export default Banner
