import {useState} from 'react'
import React from 'react';

const AddChar = (props) => {


  const [toggle, setToggle] = useState(false);

  let emptyCharacter = {name: '', age: '', main_power: '', team: '', image: '../default.jpeg'}
  const [character, setCharacter] = useState(emptyCharacter)

  const show = () => {
    setToggle((prevState) => !prevState);
  }

  const handleChange = (event) => {
    setCharacter({...character, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(character)
  }

  return(
    <>

      <div className='formBox' style={{ height: toggle ? "375px" : "40px" }}>
      <button

              className="btn1"
              onClick={(event) => show()}>
              {toggle ? "Close Form" : "Add A Character" }
            </button>
        <form className='form1' onSubmit = {handleSubmit}>
          <div className='pairs'>
          <label htmlFor = 'name' > Image URL: </label>
          <input className='inputs1' type='text' name='image' value={character.image} onChange={handleChange}/>
          </div>
          <div className='pairs'>
          <label htmlFor = 'name' > Name: </label>
          <input className='inputs1' type='text' name='name' value={character.name} onChange={handleChange}/>
          </div>
          <div className='pairs'>
          <label htmlFor = 'age'> Age: </label>
          <input className='inputs1'  type='text' name='age' value={character.age} onChange={handleChange}/>
          </div>
          <div className='pairs'>
          <label htmlFor = 'age'> Super Power: </label>
          <input className='inputs1'  type='text' name='main_power' value={character.main_power} onChange={handleChange}/>
          </div>
          <div className='pairs'>
          <label htmlFor = 'age'> Team: </label>
          <input className='inputs1'  type='text' name='team' value={character.team} onChange={handleChange}/>
          </div>
          <input className='btn1'  type='submit' />
        </form>
      </div>
    </>
  )
}

export default AddChar
