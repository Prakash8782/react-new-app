import styles7 from './header.module.css';
import {BsCart4} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import AppContext from '../../context';

export default function Header() {
    const nav = useNavigate();
    const itemno = useContext(AppContext);
    const d = itemno.cartItem;

    const [cartNo, setNo] = useState(0);

    useEffect(()=>{
            setNo(d.length)
    },[d])

    return (
        <div>
            <header>
                <div className={styles7.headerContainer}>
                    <div className={styles7.headerWrapper}>
                        <div className={styles7.logoArea}>
                            <div className={styles7.logo} onClick={()=>
                                nav('/')}>JioMart</div>
                        </div>
                        <div className={styles7.searchArea}>
                            <div className={styles7.searchBar}>
                                <input type="text" className={styles7.search} id="search" placeholder="Search essentials,groceries and more..."></input>
                            </div>
                        </div>
                        <div className={styles7.navBar}>
                            <nav className={styles7.navLink}>
                                <a href="#" className={styles7.link} onClick={()=>{
                                    nav('/Login')
                                }}>Log In</a><span>/</span>
                                <a href="#" className={styles7.link}>Sign Up</a>
                            </nav>
                        </div>
                        <div className={styles7.cartArea}>
                            <div className={styles7.cart}><BsCart4 onClick={()=>{
                                nav('/cart')
                            }} size="30px"/><span>{cartNo}</span></div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}