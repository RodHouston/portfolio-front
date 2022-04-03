import React from 'react';
import '../Marvel.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import AddChar from '../components/AddChar'
import EditChar from '../components/EditChar'
import Header from '../components/Header'


import Modal from 'react-modal';


function App() {

  let [character, setCharacter] = useState([])

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const [toggle, setToggle] = useState(false);


  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
      content: {
        top: '5%',
        left: '12%',
        right: 'auto',
        bottom: 'auto',
        width: '75%',
        WebkitOverflowScrolling: 'scroll',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },

    }


const getCharacters = () => {

  axios.get('https://serene-forest-42655.herokuapp.com/api/characters')
    .then(
      (response) => setCharacter(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
  }

 const handleCreate = (addCharacter) => {
      axios.post('https://serene-forest-42655.herokuapp.com/api/characters', addCharacter)
      .then((response) => {
        console.log(response);
        // getCharacter()
        setCharacter([...character, response.data])
      })
    }

    const handleDelete = (event, deletedCharacter) => {
      axios.delete('https://serene-forest-42655.herokuapp.com/api/characters/' + event.target.value)
      .then((response) => {

        setCharacter(
        character.filter( x => x.id !== deletedCharacter.id)
      )})
    }

    const handleUpdate = (editCharacter) => {
    axios.put('https://serene-forest-42655.herokuapp.com/api/characters/' + editCharacter.id, editCharacter)
    .then((response) => {
      getCharacters()
      // setCharacter(
      //   character.map((character) => {
      //     return character.id !== editCharacter.id ? character : response.data
      //   })

      // )
    })
  }
  function MouseOver(event) {
          setToggle((prevState) => !prevState);
        }
        function MouseOut(event){
          setToggle((prevState) => !prevState);
        }

  useEffect(() => {
    getCharacters()
  }, [])


  return (
<>
    <div className="main">
      <Header/>
      <div className='container'>
        <div className="containerEffect">
          <AddChar handleCreate={handleCreate}/>
        <div className='charContainer'>
          {character.map((character) => {
            return (
              <div key={character.id} >
                <div className='charBox' onClick={()=> {setModalData(character); setModalIsOpen(true);}} >
                  <div className="hover-point" id="point1"></div>
                  <div className="hover-point" id="point2"></div>
                  <div className="hover-point" id="point3"></div>
                  <div className="hover-point" id="point4"></div>
                  <div className="hover-point" id="point5"></div>
                  <div className="hover-point" id="point6"></div>
                  <div className="hover-point" id="point7"></div>
                  <div className="hover-point" id="point8"></div>
                  <div className="box-contents">
                  <h4 className='charName' >{character.name}</h4>
                  <div className='charImgBox ' >
                    <img className='charImg' src={character.image}  alt="Girl in a jacket"/>
                  </div>
                </div>
              </div>

                <Modal isOpen={modalIsOpen} preventScroll={
              true} ariaHideApp={false} closeTimeoutMS={1000} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                  <button id='closeModal' onClick={() => setModalIsOpen(false)}>X</button>
                  <div className='zoomBox' style={{ backgroundColor: toggle ? "red" : "" }} >
                    <div className='zoomImgBox'>
                      <img className='zoomImg' src={modalData.image}  alt="Girl in a jacket"/>
                    </div>
                    <div className= 'zoomContent'>
                      <h2>{modalData.name}</h2>
                      <h5>Age: {modalData.age}</h5>
                      <h5>Super Power: {modalData.main_power}</h5>
                      <h5>Team: {modalData.team}</h5>
                      <EditChar handleUpdate={handleUpdate} character={modalData}/>
                    </div>
                  </div>
                  <button id='deleteBtn' onMouseOver={MouseOver} onMouseOut={MouseOut} onClick ={(event) => {handleDelete(event, character)}} value={modalData.id}>Delete X</button>
                </Modal>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
