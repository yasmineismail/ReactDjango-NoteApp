import React, {useState, useEffect} from 'react'
import { useParams,useNavigate } from "react-router-dom";
import {ReactComponent as ChefronLeft} from '../assets/chevron-left.svg'

const NotePage = ({ match }) => {
    const { id } = useParams()
    let navigate = useNavigate();

    let [note, setNote] = useState([])
 
    useEffect(() => {
        getNote()
    }, [id])

   let getNote = async () =>{
        if(id === 'new') return {/* if id = new then we're just going to return and it's gonna stop this code from executing so we're gonna stop that request from being made */ }
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    } 

    let createNote = async () =>
    {
      fetch(`http://127.0.0.1:8000/api/notes/create/`,
          {
            method: "POST",
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(note)
          }
      )
    }


    let updateNote = async () => {
      fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`,{
        method  : "PUT",
        headers: {
          'Content-Type': 'application/json'      
        },
        body:JSON.stringify(note)
      })
    }
    let handleSubmit = () =>{
      console.log('NOTE', note)
      if(id !=='new' && note.body ===''){
        deleteNote()
      }else if(id !== 'new'){
        updateNote()
      }else if(id === 'new' && note !== null){
        createNote()
      }
    
      navigate('/');
      window.location.reload();

    }

    let deleteNote = async () =>{
      fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`,{
        method: 'DELETE',
        'headers':{
            'Content-Type' : 'application/json'
        }
      })
      navigate('/');
      window.location.reload();

    }
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ChefronLeft onClick={handleSubmit}/>
        </h3>
        {id !== 'new' ? (
        <button onClick={deleteNote}>Delete</button>
        ):(
          <button onClick={handleSubmit} >Done</button>
        )
        
      }
      </div>
      <textarea onChange={(e) => {setNote({ ...note, 'body':e.target.value})}} value={note?.body} ></textarea>
    </div>

   
  )
}

export default NotePage