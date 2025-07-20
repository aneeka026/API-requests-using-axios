import { useState,useEffect } from "react"
import React from 'react'
import Card from "./components/Card";
// import './App.css'

const App = () => {
  const [post, setpost] = useState([{}]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setpost(data);
  }

  return (
    <div className="container mt-4">
    <h1 className="text-center mb-4">Post List</h1>
      <Card post={post}/>
      
    </div>
  )
}

export default App
