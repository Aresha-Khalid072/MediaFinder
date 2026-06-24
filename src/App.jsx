import React from "react";
// import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaApi";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";

const App = () => {
  return (
    <div className="min-h-screen w-full text-white bg-gray-950">

      {/* <button
        className="bg-green-600 px-2 py-3 m-5"
        onClick={async () => {
          const data = await fetchPhotos("cat");
          console.log(data.results);
        }}
      >
        Get Photos
      </button>

      <button
        className="bg-green-600 px-2 py-3 m-5"
        onClick={async () => {
          const data = await fetchVideos("cat");
          console.log(data.videos);
        }}
      >
        Get Videos
      </button>

      <button
        className="bg-green-600 px-2 py-3 m-5"
        onClick={async () => {
          const data = await fetchGIF("cat");
          console.log(data);
        }}
      >
        Get GIF
      </button> */}

      <Routes>
        <Route  path='/' element={<HomePage/>}/>
         <Route  path='/collection' element={<CollectionPage/>}/>
      </Routes>

   
    </div>
  );
};

export default App;
