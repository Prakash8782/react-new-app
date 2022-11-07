import styles11 from './masala.module.css';
import { useContext } from 'react';
import AppContext from '../../../context';

export default function Masala(props) {
    const prop = useContext(AppContext);
    
    const clickhandle = ()=>{
        prop.addCartItem(props.data)
    }
    return (
        <div>
            <div className={styles11.masalaItem}>
                <div className={styles11.imgmasala}>
                    <img src={props.image}></img>
                </div>
                <div className={styles11.masalacontent}>
                <h2>{props.item}</h2>
                <p>{"Rs."}{props.price}</p>
                <p><span>{props.offer}{"% Offer"}</span></p>
                <p><button onClick={clickhandle}>Add to Cart</button></p>
                </div>
            </div>
        </div>
    );

}

