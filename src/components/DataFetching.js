import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching () {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromBtnClick, setIdFromBtnClick] = useState(1)

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then(response => {
        console.log(response)
        setPost(response.data)
      })
      .catch(err => console.log(err))
  }, [ idFromBtnClick ])

  const handleClicks = () => {
      setIdFromBtnClick(id)
  }


  return (
    <>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      <div>{ post.title } </div>
      <button onClick={ handleClicks } >Fetch Post</button>
      <ul>
        {/* {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </ul>
    </>
  )
}

export default DataFetching
