import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[15vw] h-50 relative bg-white rounded overflow-hidden">
<a href={item.url} target='_blank' className="h-full">  
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
              playsInline     
  preload="auto"
            src={item.video}
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>
      <div id="bottom" className="text-white absolute bottom-0  w-full px-3 py-5 flex justify-between items-center">
     <h2 className="text-l font-semibold capitalize h-12 overflow-hidden">   {item.title}</h2>
     <button className=" active:scale-95 bg-gray-800 text-white rounded  px-3 py-2 font-medium cursor-pointer">Save</button>
      </div>
    </div>
  );
};

export default ResultCard;
