import React from 'react'

const SearchBar = ({value,loading,handleSubmit,onChange})=>{
    return(
       <form onSubmit={handleSubmit}>
        <input 
        value={value}
        disabled={loading}
        onChange={onChange}
        placeholder='Search Recepies here...'
        className='form-control'/>

        <input 
        type='submit'
        disabled={loading || !value}
        className='btn'
        value= 'Search'/>
       </form>
    )
}

export default SearchBar;