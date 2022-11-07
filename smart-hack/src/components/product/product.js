import styles5 from './product.module.css';
import Menulist from './menulist';
import img1 from '../images/fruits1.jpg';
import img2 from '../images/cooldrinks.png';
import img3 from '../images/staples.jpg';
import img4 from '../images/snacks.png';
 

export default function Product() {
    const menu = [
        {
            image : img1,
            list: 'Fruits'
        },
        {
            image : img2,
            list: 'CoolDrinks'
        },
        {
            image : img3,
            list: 'Staples'
        },
        {
            image : img4,
            list: 'Snacks'
        }
    ]
    return (
        <div>
            {/* <Menulist list={menu[0].list}></Menulist> */}
            <div className={styles5.menuContainer}>
                <h1 className={styles5.headmenu}>Menu</h1>
                <div className={styles5.menuWrapper}>
                    {
                        menu.map((menus) => {
                            return <Menulist key={menus.list} list={menus.list} image={menus.image}></Menulist>
                        })
                    }
                </div>
            </div>
        </div>
    );
}