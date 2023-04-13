
import { Link } from "react-router-dom";
import styles from "./dashboard.module.scss";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
const DashBoard = () => {
    const { openMenu, setOpenMenu }: any = useContext(MyContext)
    return (
        <div className={openMenu ? styles.dashboard_active : styles.dashboard}>
            <div className={styles.burger} onClick={() => {
                setOpenMenu(!openMenu)
            }}>
               <span></span>
            </div>
            <div className={styles.logo}>
                <Link to="/">
                    <div className={styles.logo_content}>
                        <img src="/assets/logo.svg" alt=" logo" />
                        <span>v.01</span>
                    </div>
                </Link>
            </div>

            <ul className={styles.menu}>
                <li className={styles.menu_item} ><Link to="/">
                    <img src="/assets/key.svg" alt="menu" />
                    <span>Dashboard</span>
                    <img className={styles.menu_arrow} src="/assets/arrow.svg" alt="arrow" />
                </Link></li>
                <li className={styles.menu_item}><Link to="/">
                    <img src="/assets/icon.svg" alt="menu" />
                    <span>Product</span>
                    <img className={styles.menu_arrow} src="/assets/arrow.svg" alt="arrow" />
                </Link></li>
                <li className={styles.menu_item}><Link to="/">
                    <img src="/assets/icon.svg" alt="menu" />
                    <span>Customers</span>
                    <img className={styles.menu_arrow} src="/assets/arrow.svg" alt="arrow" />
                </Link>
                </li>
                <li className={styles.menu_item}><Link to="/">
                    <img src="/assets/wallet.svg" alt="menu" />
                    <span>Income</span>
                    <img className={styles.menu_arrow} src="/assets/arrow.svg" alt="arrow" />
                </Link>
                </li>
                <li className={styles.menu_item}><Link to="/">
                    <img src="/assets/discount.svg" alt="menu" />
                    <span>Promote</span>
                    <img className={styles.menu_arrow} src="/assets/arrow.svg" alt="arrow" />
                </Link></li>
                <li className={styles.menu_item}><Link to="/">
                    <img src="/assets/message.svg" alt="menu" />
                    <span>Help</span>
                    <img className={styles.menu_arrow} src="/assets/arrow.svg" alt="arrow" />
                </Link></li>
            </ul>
            <div className={styles.dashboard_worker}>
                <img src="/assets/worker.svg" alt="worker" />
                <div className={styles.worker_content}>
                    <p>Evano</p>
                    <span>Project Manager</span>
                </div>
            </div>
        </div>
    )
}

export default DashBoard