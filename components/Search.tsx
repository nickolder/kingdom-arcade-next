import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import search_style from "../styles/Search.module.sass"

import { useState } from "react"

const Search = () => {
    const [searchData, setSearchData] = useState('')

    function handleChange (e: any) {
        setSearchData(e.target.value)
    }

    return (
        <div className={search_style.search}>
            <div className={search_style.search_icon}>
                <Image src="/../img/search-icon.svg" layout="fill"/>
            </div>

            <input 
                type="text" 
                value={searchData}
                placeholder="Pesquisar" 
                onChange={handleChange}
            />

            <FontAwesomeIcon
                data-isempty={!searchData} 
                icon={faXmark} 
                className={search_style.search_xmark}
                onClick={() => setSearchData('')}
            />
        </div>
    )
}

export default Search