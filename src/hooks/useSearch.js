import { useState } from "react";

export  const useSearch = () =>{

    const [searchValue,setSearchValue] = useState("");

    const onChange = (e) =>{
        setSearchValue(e.currentTarget.value)
       
    }

    return {
        searchValue,
        onChange
    }
}