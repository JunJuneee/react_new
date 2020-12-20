import React, { useState, useCallback } from 'react';
import {IoMdAddCircle} from 'react-icons/io';
import './TodoInsert.scss'



const TodoInsert = ({onInsert})=>{
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  },[]);

const onSubmit = useCallback(
  e=> {
    onInsert(value);
    setValue('')
    e.preventDefault();
  },
  [onInsert,value],
)
  
  
  
  return(
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input 
        placeholder='write down things to do' 
        value = {value}
        onChange = {onChange}
        />
      <button type='submit'>
        <IoMdAddCircle />
      </button>
    </form>
  )
}

export default TodoInsert;