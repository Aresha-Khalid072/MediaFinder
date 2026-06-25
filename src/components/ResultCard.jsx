import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
    toast.success("Added to Collection", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="w-[15vw] h-50 relative bg-white rounded overflow-hidden">
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="h-full">
        {item.type === "photo" && (
          <img
            className="h-full w-full object-cover object-center"
            src={item.thumbnail}
            alt=""
          />
        )}
        {item.type === "video" && (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={item.src}
          ></video>
        )}
        {item.type === "gif" && (
          <img
            className="h-full w-full object-cover object-center"
            src={item.thumbnail}
            alt=""
          />
        )}
      </a>
      <div
        id="bottom"
        className="text-white absolute bottom-0 w-full px-3 py-5 flex justify-between items-center"
      >
        <h2 className="text-l font-semibold capitalize h-12 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => addToCollection(item)}
          className="active:scale-95 bg-gray-800 text-white rounded px-3 py-2 font-medium cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ResultCard;