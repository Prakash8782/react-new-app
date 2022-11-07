import styles13 from './haircarelist.module.css';
import Haircare from './haircare';
import { useState,useEffect } from 'react';



export default function HaircareList() {

    const [haircare,setHaircare] = useState([])

    useEffect(()=>{
        fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/cookies').then((response)=>{
            if (response.ok) {
                return response.json()
            }
            return false;
        })
        .then((data)=>{
            setHaircare(data)
        })
    },[]);

    return (
        <div className={styles13.foodgrainContainer}>
            <div className={styles13.foodgrain}>
            {
                haircare.map((fruit)=>{
                    return <Haircare key={fruit.id} image={fruit.image} item={fruit.item} price={fruit.price} offer={fruit.offer} data={fruit}></Haircare>
                })
            }
            </div>
        </div>
    );
}