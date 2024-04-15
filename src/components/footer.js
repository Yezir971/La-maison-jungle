import { useState } from 'react'
import '../styles/Footer.css'




function Footer() {
    const [inputValue, setInputValue] = useState('')
    const checkinput = inputValue.includes('@')
    
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} onBlur={()=> !checkinput && alert('il ya un @ dans une adresse email il me semble')} placeholder='Votre email' />
		</footer>
	)
}

export default Footer   