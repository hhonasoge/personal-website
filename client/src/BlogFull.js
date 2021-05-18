import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw} from 'draft-js';

function BlogFull(props) {
  let { slug } = useParams();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [createdAt, setCreatedAt] = useState()
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  useEffect(() => {
    fetch("/api/blog/"+slug).then((res) => res.json())
    .then(function(data){
      setTitle(data.post.title);
      setDescription(data.post.description);
      setCreatedAt(data.post.createdAt);
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(data.post.body))));
    }
  ).catch(console.error);
}, [slug]);


  return (
    <div>
    {(title !== "") ? <div>
      <h1 className="font-roboto-slab">{title}</h1>
      <p className="mb-2">{(createdAt) && new Date(createdAt).toLocaleDateString()}</p>
      <p className="pb-4 italic">{description}</p>
      <Editor editorState={editorState} readOnly toolbarHidden />
      </div> : <h3>"Loading post..."</h3>}
    </div>
  )
}


export default BlogFull
