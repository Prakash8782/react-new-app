import styles12 from './haircare.module.css';
import { useContext } from 'react';
import AppContext from '../../../context';

export default function Haircare(props) {
    const prop = useContext(AppContext);
    
    const clickhandle = ()=>{
        prop.addCartItem(props.data)
    }
return (
        <div>
            <div className={styles12.foodgrain}>
                <div className={styles12.img}>
                    <img src={props.image}></img>
                </div>
                <div className={styles12.foodcontent}>
                <h2>{props.item}</h2>
                <p>{"Rs."}{props.price}</p>
                <p><span>{props.offer}{"% Offer"}</span></p>
                <p><button onClick={clickhandle}>Add to Cart</button></p>
                </div>
            </div>
        </div>
    );

}