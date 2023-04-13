import { Outlet } from "react-router-dom";

import { FC } from "react";
import DashBoard from "../components/dashboard";
import styles from "./laoyt.module.scss";
const Layout: FC = () => {
    return (
        <div className={styles.wrapper}>
            <DashBoard />
        
                 <div className={styles.container}>
                 <Outlet />
                 </div>
                </div>
       
    );
};

export default Layout;