import styles4 from './menulist.module.css';
// import FruitList from './fruits/fruitlist';
// import Fruits from '../fruits/fruits';
import { useNavigate } from 'react-router-dom';

export default function Menulist(props) {
    const navigate = useNavigate()
    const menuHandler = ()=>{
        navigate(`/${props.list}`)
    }
    return (
       <div>
            <div className={styles4.menulistContainer} onClick={menuHandler}>
                {/* <h1 className='headmenu'>Menu</h1> */}
                <div className={styles4.menulistWrapper}>
                    <div className={styles4.menuBox}>
                        <button className={styles4.menuButton}>
                            <div className={styles4.imgarea}>
                                <img className={styles4.images} src={props.image} width={220} height={250}/>
                            </div>
                            <div className={styles4.listname}>{props.list}</div>
                        </button> 
                    </div>
                </div>
            </div>
            </div>
    );
}