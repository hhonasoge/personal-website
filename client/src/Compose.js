import React, {useEffect, useState} from "react";
import { EditorState, convertToRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function MyEditor(props) {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [data, setData] = useState({isauthed: false});
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    fetch("/api/auth").then((res) => res.json())
    .then((data) => setData(data))
    .catch(console.error);
  }, []);

  function onEditorChange(editorState) {
    setEditorState(editorState)
  }

  function onTitleChange(e) {
    setTitle(e.target.value)
  }

  function onDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = {
      title: title,
      description: description,
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    }
    const reqOps = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }
    fetch("/api/compose", reqOps).then(res => res.json()).then(res => {
      if (res.message==="ok"){
        alert("Successfully published post!")
      } else {
        alert("Failed to publish post: " + res.message)
      }
      return res
    }).then(res => {
      if (res.message==="ok"){
        setEditorState(EditorState.createEmpty());
        window.location = '/api/blog'
      }
    })
  }

  return((data.isauthed) ?
    <div className="border border-solid border-black m-4">
      <h2 className="text-center mb-10">Compose your blog post!</h2>
      <div className="flex">
        <input className="text-black m-auto rounded-full p-2 w-1/2 mb-5" placeholder="Title" name="title" onChange={onTitleChange}></input>
      </div>
      <div className="flex">
        <input className="text-black m-auto rounded-full p-2 w-1/2" placeholder="Description" name="description" onChange={onDescriptionChange}></input>
      </div>
      <div className="border border-solid border-black bg-white text-black cursor-text m-10 p-5 min-h-full">
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={onEditorChange}
              placeholder="Write anything!"
              toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: { alt: { present: true, mandatory: true } },
            }}
            />
        </div>
        <div className="flex">
          <button className="text-black m-auto rounded-full p-2 bg-blue-200 hover:bg-blue-300 mb-2" type="submit" name="button" onClick={handleSubmit}>Publish</button>
        </div>
      </div>
     : <p className="text-center">Please <a href="/login" style={{textDecoration: "underline"}}>log in</a> to compose a blog post</p>)
}


export default MyEditor;
