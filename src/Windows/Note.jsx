import React,{useEffect} from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import { useState } from 'react'


const Note = () => {
    const [markdown, setmarkdown] = useState("")
    useEffect(()=>{
       fetch("/Notes.txt")
       .then(res=>res.text())
       .then(text=>setmarkdown(text))
    },[])
  return (
    <MacWindow>
        <div className="note-window">
            {markdown? (<Markdown>{markdown}</Markdown>): (<p>Loading...</p>)}
        </div>
    </MacWindow>
  )
}

export default Note
