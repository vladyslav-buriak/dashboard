import { useContext } from "react";
import styles from "./user.module.scss";
import { MyContext } from "../../App";

const User = () =>{
    const {openMenu}:any = useContext(MyContext)
    return(
        <>
        <div className={openMenu?styles.wrapp_user_active:styles.wrapp_user}>
                <h3 className={styles.user_name}>Hello Evano 👋🏼,</h3>
            </div>
        </>
    )
}

export default User;