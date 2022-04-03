import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {useEffect, useState} from 'react'
import EditChar from './EditChar'

const ModalPage = (props) => {
  // this goes on the App.js page
  // <ModalPage character = {modalData} handleUpdate={handleUpdate} character={modalData} open = {modalIsOpen}/>
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(props.character);
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

  function MouseOver(event) {
          setToggle((prevState) => !prevState);
        }
        function MouseOut(event){
          setToggle((prevState) => !prevState);
        }
return(
  <>
<Modal isOpen={props.open} preventScroll={
true} ariaHideApp={false} closeTimeoutMS={1000} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
  <button id='closeModal' onClick={() => setModalIsOpen(false)}>X</button>
  <div className='zoomBox' style={{ backgroundColor: toggle ? "red" : "" }} >
    <div className='zoomImgBox'>
      <img className='zoomImg' src={modalData.image}/>
    </div>
    <div className= 'zoomContent'>
      <h2>{modalData.name}</h2>
      <h5>Age: {modalData.age}</h5>
      <h5>Super Power: {modalData.main_power}</h5>
      <h5>Team: {modalData.team}</h5>
      <EditChar handleUpdate={props.handleUpdate} character={modalData}/>
    </div>
  </div>
</Modal>
</>
)

}

export default ModalPage
