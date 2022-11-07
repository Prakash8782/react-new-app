import styles2 from './foodgrainlist.module.css';
import FoodGrain from './foodgrain';
import { useState,useEffect } from 'react';



export default function FoodgrainList() {

    const [foodgrain,setFoodgrain] = useState([])

    useEffect(()=>{
        fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/cooldrinks').then((response)=>{
            if (response.ok) {
                return response.json()
            }
            return false;
        })
        .then((data)=>{
            setFoodgrain(data)
        })
    },[]);

    return (
        <div className={styles2.foodgrainContainer}>
            <div className={styles2.foodgrain}>
            {
                foodgrain.map((fruit)=>{
                    return <FoodGrain key={fruit.id} image={fruit.image} item={fruit.item} price={fruit.price} offer={fruit.offer} data={fruit}></FoodGrain>
                })
            }
            </div>
        </div>
    );
}