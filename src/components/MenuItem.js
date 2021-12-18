import React, { useEffect, useState } from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { addorder } from '../Controller/api';
import axios from 'axios';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }


  async function addToCart(data){
    try{

      const response= await axios({
        method:'POST',
        url:'http://127.0.0.1:3003/order',
        data:{
          qty:data.qty,
          name:data.dishTitle,
          price:data.dishDescription
        }
      });
      setModalIsOpen(false);
    }catch(error){
      console.log(error);

    }
   // console.log(response.data);
  }

  return (
    <div className="card">
      <h2>{props.dishTitle}</h2>
      <p>{props.dishDescription}</p>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Add to cart
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={()=>{
          addToCart({qty:1,...props});
        }} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
