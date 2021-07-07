import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Navbar = () => {

    const history = useHistory()
    const [search, setSearch] = useState({
        name: ""
    })

    const handleChange = (e) => {
        setSearch({
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        console.log(search.name)
        history.push(`/results/${search.name}`)
    }

    return(
        <>
            <h1>navbar</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} name='name' value={search.name}/>
                <input type='submit'/>
            </form>
        </>
    )
}


export default Navbar;