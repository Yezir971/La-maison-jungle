import '../styles/Cart.css'
function Cart(){
    let prix = {
        "monstera" : 8, 
        "lierre" : 10, 
        "bouquet" : 15
    };




    
    return (<div className="lmj-cart">
    <h2>Pannier</h2>
    <ul>
        <li>un monstera : { prix.monstera } €</li>
        <li>un lierre : { prix.lierre } €</li>
        <li>un bouquet : { prix.bouquet } €</li>
        </ul>
        <p className="green">Total du pannier : { prix.monstera + prix.lierre + prix.bouquet } €</p>
    </div>)
}

export default Cart