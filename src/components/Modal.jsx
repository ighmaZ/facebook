import React, { useState } from "react";
import Gif from "./Gif";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

 

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        GIF
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Gif src="https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif"/>
         
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    
    </>
  );
}