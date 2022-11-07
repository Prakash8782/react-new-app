import styles from './fruitlist.module.css';
import Fruits from './fruits';
import { useState,useEffect } from 'react';



export default function FruitList() {

    const [fruits,setFruits] = useState([])

    useEffect(()=>{
        fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/fruits').then((response)=>{
            if (response.ok) {
                return response.json()
            }
            return false;
        })
        .then((data)=>{
            setFruits(data)
        })
    },[]);

    return (
        <div className={styles.fruitlistContainer}>
            <div className={styles.fruitlist}>
            {
                fruits.map((fruit)=>{
                    return <Fruits key={fruit.id} image={fruit.image} item={fruit.item} price={fruit.price} offer={fruit.offer} data={fruit}></Fruits>
                })
            }
            </div>
        </div>
    );
}