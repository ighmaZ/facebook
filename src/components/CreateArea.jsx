import React, { useState } from "react";
import pix from "../assets/fb.webp";
import { Popover } from "@headlessui/react";
import Gif from "../components/Gif";

function CreateArea(props) {
  const [note, setContent] = useState({
    content: "",
    gif: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContent((prevContent) => {
      return {
        ...prevContent,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setContent({
      content: "",
      gif:""
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
        <Popover>
          <Popover.Button className="b-1">Gif</Popover.Button>
          <Popover.Panel className="popover">
            <Gif src="https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif" />
          </Popover.Panel>
        </Popover>
        <button className="b-2" onClick={submitNote}>
          Post
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
