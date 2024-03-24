import React from 'react'
import '../styles/searchBox.css'


const SearchBox = ({searchChange}) => {
    return (
        <div className="search">
            <input
                type='search'
                id='searchBox'
                placeholder='Searh robots'
                onChange={searchChange}
            />
        </div>
    )
}


export default SearchBox