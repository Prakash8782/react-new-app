import styles3 from './fruits.module.css';
import { useContext } from 'react';
import AppContext from '../../../context';

export default function Fruits(props) {
    const prop = useContext(AppContext);
    
    const clickhandle = ()=>{
        prop.addCartItem(props.data)
    }
    return (
        <div>
            <div className={styles3.fruitItem}>
                <div className={styles3.imgfruit}>
                    <img src={props.image}></img>
                </div>
                <div className={styles3.fruitcontent}>
                <h2>{props.item}</h2>
                <p>{"Rs."}{props.price}</p>
                <p><span>{props.offer}{"% Offer"}</span></p>
                <p><button onClick={clickhandle}>Add to Cart</button></p>
                </div>
            </div>
        </div>
    );

}

