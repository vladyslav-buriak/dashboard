import styles from "./search.module.scss";
import { useSearch } from "../../hooks/useSearch";
import { FC } from "react";

interface ISearchProps {
    onChange: () => void
}

const Search: FC<ISearchProps> = ({ onChange }) => {


    return (
        <>
            <form>
                <img src="/assets/search.svg" alt="search" />
                <input placeholder="search" className={styles.search} onChange={onChange} type="text" />
            </form>
        </>
    )
}

export default Search