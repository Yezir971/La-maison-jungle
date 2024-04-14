function Recommendation(){
    const currentMouth = new Date().getMonth()
    const isSpring = currentMouth>=2 && currentMouth <=5
    if(!isSpring){
        return <p>Ce n'est pas le moment de rempoter</p>
    }
    return <p>C'est le printemps, rempotez !</p>
}

export default Recommendation 