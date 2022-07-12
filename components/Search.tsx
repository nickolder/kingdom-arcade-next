import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import search_style from "../styles/Search.module.sass"

import { useState } from "react"

type SearchType = {
    color: string,
}

const Search = ({color}: SearchType) => {
    const [searchData, setSearchData] = useState('')

    function handleChange (e: any) {
        setSearchData(e.target.value)
    }

    return (
        <div className={search_style.search} style={{ borderBottomColor: color }}>
            <div className={search_style.search_icon}>
                <FontAwesomeIcon icon={ faMagnifyingGlass } style={{color: color}}/>
            </div>

            <input 
                type="text" 
                value={searchData}
                placeholder="Pesquisar" 
                onChange={handleChange}
                style={{color: color}}
            />

            <FontAwesomeIcon
                data-isempty={!searchData} 
                icon={faXmark} 
                className={search_style.search_xmark}
                style={{color: color}}
                onClick={() => setSearchData('')}
            />
        </div>
    )
}

export default Search