import styles8 from './cart.module.css';

function Cart(props){

    return(
        <div>
            <div className={styles8.cartarea}>
            <div className={styles8.cartimg}>
                    <img src={props.image}></img>
                </div>
                <div className={styles8.cartcontent}>
                <h2>{props.item}</h2>
                <p>{"Rs."}{props.price}</p>
                <p><span>{props.offer}{"%Offer"}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cart;