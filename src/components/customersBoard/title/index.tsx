import styles from "./title.module.scss";

const Title = () => {
    return (
        <>
            <div>
                <h3 className={styles.customers_title}>All Customers</h3>
                <p className={styles.customers_subtitle}>active members</p>
            </div>
        </>
    )
}

export default Title