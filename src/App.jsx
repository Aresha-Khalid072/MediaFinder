import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {


 
  return (
    <div className='h-screen w-full text-white bg-gray-950'>
      <button  className= 'bg-green-600 px-2 py-3 m-5'  onClick={async()=>{
     const data= await fetchPhotos('cat')
     console.log(data.results)
      }}>Get Photos</button>


       <button   className= 'bg-green-600 px-2 py-3 m-5'  
      onClick={async()=>{
     const data= await fetchVideos('cat')
     console.log(data.videos)
      }}>Get Videos</button>
    </div>
  )
}

export default App
