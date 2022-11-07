import styles12 from './masalalist.module.css';
import Masala from './masala';
import { useState,useEffect } from 'react';

export default function MasalaList() {

    const [masala,setMasala] = useState([])

    useEffect(()=>{
        fetch('https://6313a3dcfc9dc45cb4e43afd.mockapi.io/masala').then((response)=>{
            if (response.ok) {
                return response.json()
            }
            return false;
        })
        .then((data)=>{
            setMasala(data)
        })
    },[]);

    return (
        <div className={styles12.masalalistContainer}>
            <div className={styles12.masalalist}>
            {
                masala.map((fruit)=>{
                    return <Masala key={fruit.id} image={fruit.image} item={fruit.item} price={fruit.price} offer={fruit.offer} data={fruit}></Masala>
                })
            }
            </div>
        </div>
    );
}