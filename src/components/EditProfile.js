import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const EditProfile = (props) => {
  // let emptyProfile = {username: props.profile.username, firstname: props.pro.firstname, lastname: props.pro.lastname, photo:props.pro.photo}
  const[profile, setProfile] = useState(props.profile)

  const handleChange =(event) => {
    setProfile({...profile, [event.target.name]: event.target.value})
    console.log(profile);
  }


  let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }

      function closeModal() {
        setIsOpen(false);
        setProfile(props.profile)
      }


  const editProfile = async (e) => {
    try{
      const body = {username: profile.username,
        firstname: profile.firstname, lastname:
        profile.lastname, photo: profile.photo}

      const response = await fetch(`http://localhost:8000/profile/${profile.profile_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
        setProfile(body)
        console.log(response);
    }catch(err){
      console.error(err.message);
    }
  }


// console.log(profile);

 return (

   <>
   <button onClick={openModal}>edit{profile.profile_id}</button>
   <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >


   <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
           <button onClick={closeModal}>close</button>
           <div>I am a modal</div>
           <form>
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
             <button onClick={(e) => editProfile(profile.profile_id) }>edit{profile.profile_id}</button>
           </form>
         </Modal>
   </>
 )

}

export default EditProfile
