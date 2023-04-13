import { FC } from "react";
import { ICustomers } from "../../../types";
import styles from "./customers.module.scss";

interface ICustomersProp {
    customers:ICustomers,
    i:number
}
const Customers:FC<ICustomersProp> = ({customers, i}) =>{
    return (
        <>
        <ul key={customers.id} className={styles.menu}>
                            <li>{customers.name}</li>
                            <li>{customers.company.name}</li>
                            <li>{customers.phone}</li>
                            <li>{customers.email}</li>
                            <li>{customers.address.city}</li>
                            <li><button className={i % 2 === 0 ? styles.active : styles.inactive}>{i % 2 === 0 ? "active" : "inactive"}</button></li>

                        </ul>
        </>
    )
}

export default Customers