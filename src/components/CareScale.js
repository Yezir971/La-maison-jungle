function clickEnvi(careType, scaleValue){
    const type = careType === 'light' ? 'de lumière' : 'd\'eau' 
    const rangeEnvironnementplante = ["un peut", "modérément","beaucoup" ]
    const enviplante = rangeEnvironnementplante[scaleValue-1]
    alert(`Cette plante a besoin de ${enviplante} ${type}`)
}

function CareScale({scaleValue, careType}){
    const range = [1,2,3];
    const scaleType = careType ==='light' ? '☀️' : '💧' ;
    return (<div onClick={() => clickEnvi(careType, scaleValue) }>
        {range.map((rangeElement)=>
            scaleValue >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
        )}

        
        
        </div>)
}
export default CareScale