import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {

  const[text,setText]=useState ('');
  const dispatch=useDispatch()

  const submitHandler =(e)=>{
    e.preventDefault()
    // console.log(text);
    dispatch(setQuery(text))
    setText('')

  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex p-10 gap-5 bg-gray-900'>
        <input  required
        onChange={(e)=>{
            setText(e.target.value);

        }}
        value={text}
        className=' w-full border-2 outline-none px-4 py-2 text-xl rounded-full ' 
        type="text"  placeholder='Search Anything...'/>
        <button className='border-2 outline-none px-4 py-2 text-xl rounded-full  cursor-pointer  active:scale-95' >Search</button>
      </form>
    </div>
  )
}

export default SearchBar
