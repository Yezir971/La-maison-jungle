import React, { useState } from "react"

function QuestionForm(){
    // on fait ici un hook appelé useState, useState('posez votre question') est une déclaration d'une variable d'état
    // la partie gauche est une destructuration en js du tableau renvoyer par useState
    // le premier élément le premier élément va contenir l'état actuel le 2eme la fonction qui va permettre de mettre a jour cette état 
    const [inputValue , setInputValue] = useState('posez votre question')
    const inputCheck = inputValue.includes('f')
    return(
        <React.Fragment>
            <textarea value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            <button onClick={()=> inputCheck && alert("🔥 Vous n'avez pas le droit d'utiliser la lettre f ici.")} >Alerte moi !</button>
        </React.Fragment>
    )

}
// function checkValue(value){
//     if(!value.includes('pute')){

//         setInputValue(value)
//     }
// }

export default QuestionForm