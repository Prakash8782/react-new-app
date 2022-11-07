import styles9 from './cartitem.module.css';
import { useContext } from "react";
import AppContext from "../../context";
import Cart from "./cart";

function CartItem(){
    const prop = useContext(AppContext);

    return(
        <div>
            <div className={styles9.cartcontainer}>
                <div className={styles9.cartwrapper}>
            {
                prop.cartItem.map(
                    (data)=>{
                        return(
                            <Cart key={data.item} image={data.image} item={data.item} price={data.price} offer={data.offer}></Cart>
                        )
                    }
                )
            }
            </div>
            </div>
        </div>
    )
}

export default CartItem;