import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="flex flex-col py-2 px-6 rounded-md border border-black bg-sky-300 h-screen m-auto colomns-1">
        <p className="flex flex-col py-5 px-4 text-xs opacity-75 my-2">
          {props.source}
        </p>
        <img src={props.Image} className="px-4 aspect-[4/2] rounded-2xl" />
        <h1 className="text-lg px-4 py-5">{props.title}</h1>
        <p className="text-xs opacity-75 my-2 px-4">{props.author}</p>
        <p className="text-sm pl-4 px-4 mt-2 w-[fit-content] h-screen text-ellipsis overflow-hidden ...">
          {props.description}
        </p>
        <div className="flex flex-row mt-4 px-4 py-1">
          <a
            href={props.url}
            target="_blank"
            className="bg-violet-800 text-white py-2 px-4 rounded mr-5"
          >
            News Pages
          </a>
          <button onClick={props.onClick}>{props.buttonName}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
