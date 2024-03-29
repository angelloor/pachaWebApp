import React from 'react'
import '../assets/styles/components/Home.scss'

const InputSearch = ({ query, setQuery }) => {
    return (
        <div className="rowImputSearch">
            <div className="containerInputSearch">
                <input className="inputSearch" type="text" placeholder="Buscar"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
        </div>
    )
}

export default InputSearch