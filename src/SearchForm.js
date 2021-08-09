import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const{query,setQuery,error}=useGlobalContext();
  return (<>
    <form className='search-form' onSubmit={(e)=>e.preventDefault()}>
      <h3>Search Movie</h3>
      <input type='text'
      className='form-input'
       value={query} 
       onChange={(e)=>setQuery(e.target.value)}/>
    </form>
    {error.show && <div className='error'>{error.msg}</div>}
    </>
  )
}

export default SearchForm
