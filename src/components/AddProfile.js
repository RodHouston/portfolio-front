import React, {useState} from 'react'

const AddProfile = () => {


  let emptyProfile = {username: '', firstname:'', lastname:'', photo:''}
  const[profile, setProfile] = useState(emptyProfile)

  const handleChange =(event) => {
    setProfile({...profile, [event.target.name]: event.target.value})
    console.log(profile);
  }
  const onSubmit = async (e)  => {
    e.preventDefault()
    try{
      const body = {username: profile.username,
        firstname: profile.firstname, lastname:
        profile.lastname, photo: profile.photo}

      const response = await fetch('http://localhost:8000/profile',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      console.log(response);
    } catch (err) {
      console.error(err.message);
    };
  }

  return(
    <>
      <h1> Add Profile </h1>

      <form onSubmit= {onSubmit}>
      Username:
        <input
        type='text'
        name= 'username'
        defaultValue= {profile.username} onChange={handleChange}/>
        First Name:
        <input
        type='text'
        name='firstname'
        defaultValue= {profile.firstname} onChange={handleChange}/>
        Last Name:
        <input
        type='text'
        name='lastname'
        defaultValue= {profile.lastname} onChange={handleChange}/>
        Photo:
        <input
        type='text'
        name='photo'
        defaultValue= {profile.photo} onChange={handleChange}/>
        <button> Add </button>
      </form>
    </>
  )
};

export default AddProfile
