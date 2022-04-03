import {useState} from 'react'

const EditChar = (props) => {
  let emptyCharacter = {...props.character}
  const [character, setCharacter] = useState(emptyCharacter)

const [toggle, setToggle] = useState(false);

  const show = () => {
    setToggle((prevState) => !prevState);
  }

  const handleChange = (event) => {
    setCharacter({...character, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(character)
  }

  return (
    <>

      <div className='formBox2' style={{ height: toggle ? "375px" : "40px" }}>
        <button className="btn2" onClick={(event) => show()}>
          {toggle ? "Close Form" : "Edit" }
        </button>


        <form className='form2'  onSubmit={handleSubmit}>

          <div className='pair1'>
            <label htmlFor='name'>Image: </label>
            <input className='inputs1' type='text' name='image' value={character.image} onChange={handleChange}/>
          </div>
          <br/>
          <div className='pairs2'>
            <div className='pair1'>
              <label htmlFor='name'>Name: </label>
              <input className='inputs1' type='text' name='name' value={character.name} onChange={handleChange}/>
            </div>
          <br/>
          <div className='pair1'>
            <label htmlFor='age'>Age: </label>
            <input className='inputs1' type='number' name='age' value={character.age} onChange={handleChange}/>
          </div>
          <br/>
          </div>
          <div className='pairs2'>
            <div className='pair1'>
              <label htmlFor = 'age'> Super Power: </label>
              <input className='inputs1' type='text' name='main_power' value={character.main_power} onChange={handleChange}/>
            </div>
            <br/>
            <div className='pair1'>
              <label htmlFor = 'age'> Team: </label>
              <input className='inputs1' type='text' name='team' value={character.team} onChange={handleChange}/>
            </div>
          </div>
          <input className='btn2' type='submit'/>
        </form>
      </div>
    </>
  )
}

export default EditChar
