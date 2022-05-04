import React, { useState } from "react";
import pix from '../assets/fb.webp'
function CreateArea(props) {
  const [note, setContent] = useState({
    
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContent(prevContent => {
      return {
        ...prevContent,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setContent({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>

        <img src={pix} className="img" alt="" />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Whats on your mind?"
          rows="3"
        />
        <button className="b-1" >GIF</button>
        <button className="b-2"onClick={submitNote}>Post</button>
       
      </form>
    </div>
  );
}

export default CreateArea;
