import "./cart-item.scss"

const CartItem=({cartItem})=>{
    const {name,imageUrl,price,quantity}=cartItem;
    return(
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="item-detaile">
                <h2 className="name">{name}</h2>
                <span className="price">{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;