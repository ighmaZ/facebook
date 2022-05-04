import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import CreateArea from "./CreateArea";
import Gif from "./Gif";
import MyModal from "./Modal";
import Modal from "./Modal";


function App() {
  const [content, setContent] = useState([]);

  function addContent(newContent) {
    setContent(prevContent => {
      return [...prevContent, newContent];
    });
  }
  function deleteContent(id) {
    setContent(prevContent => {
      return prevContent.filter((contentItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addContent} />
      {content.map((contentItem, index) => {
        return (
          <Content
            key={index}
            id={index}
            content={contentItem.content}
            gif={contentItem.gif}

            onDelete={deleteContent}
          />
        );
      })}
      <Modal/>
      {/* <Gif src="https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif"/> */}
     
    </div>
  );
}

export default App;
