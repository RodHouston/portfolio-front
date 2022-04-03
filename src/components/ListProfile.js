import React, {useState, useEffect} from 'react'
import EditProfile from './EditProfile'

const ListProfile = () => {
const [profile, setProfile] = useState([])


  const deleteProfile = async (id) => {
    try{
      const deleteProfile = await fetch(`http://localhost:8000/profile/${id}`, {
        method: 'DELETE'
      })
      setProfile(profile.filter(profile => profile.profile_id !== id))
        console.log(deleteProfile);
    }catch(err){
      console.error(err.message);
    }
  }


  const getProfiles= async () => {
    try{
      // const response = await fetch('https://serene-forest-42655.herokuapp.com/api/homes')
      const response = await fetch('http://localhost:8000/profile')
      const pro = await response.json()
      setProfile(pro)
    }catch(err){
      console.error(err.message);
    }
  }


  useEffect(() => {
    getProfiles()
  }, [])
  // console.log(profile);
  return(
    <>
      <h1> List of Profiles</h1>
      <button onClick={ getProfiles} >Get Profiles</button>
      {profile.map((pro) => {
        return(

        <div key={'pro'+ pro.profile_id}>
        <h2>{pro.username} {pro.profile_id}</h2>
        <button onClick={(e) => deleteProfile(pro.profile_id) }>Delete</button>
        <EditProfile profile={pro}/>
        </div>
      )
      })}
    </>
  )

}
export default ListProfile
