import styles from "./customersBoard.module.scss";
import { ICustomers } from "../../types";
import Search from "../search";
import { FC, useContext } from "react";
import Title from "./title";
import Customers from "./customers";
import { MyContext } from "../../App";

interface ICustomersProps {
    onChange: () => void;
    loading: string;
    filterCustomers: any
}

const CustomersBoard: FC<ICustomersProps> = ({ onChange, loading, filterCustomers }) => {

    const {openMenu}:any = useContext(MyContext)
    return (
        <>
            <div className={ openMenu?styles.customers_board_active : styles.customers_board} >
                <div className={styles.customers_top}>
                    <Title />
                    <Search onChange={onChange} />
                </div>

                {loading === 'error' ? (<h2>Error</h2>) :
                    (<div className={styles.customers_wrapp}>
                        {loading === 'loading' ? <h2>loading2</h2> : filterCustomers.map((customers: ICustomers, i: number) => <Customers customers={customers} i={i} />)}

                    </div>)}

            </div>
        </>
    )
}

export default CustomersBoard