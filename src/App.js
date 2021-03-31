import React, { useEffect, useState } from 'react'
import Comment from './components/Comment/Comment'

const  App = () => {
  const [ api, setApi ] = useState([]) 

  const redditApi = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/be0609d3-6a1b-4597-8af1-101221ac99c9')
      const data = await response.json();
      setApi(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    redditApi()
  }, [])

  return (
    <>
      <Comment data={api}/>
    </>
  );
}

export default App;
