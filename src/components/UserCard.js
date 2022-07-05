import React from "react";

function UserCard(props) {
    return (
        <button className=" bg-sky-500 text-white w-72 flex items-center p-2 rounded-md hover:scale-105 transition-all drop-shadow-sm hover:drop-shadow-lg mb-6">
            <img
                src={props.avatar}
                alt={`Avenger: ${props.name}`}
                className="w-16 he-16 rounded-full  hover:scale-105 transition-transform"
            />
            <div className="flex flex-col items-start ml-4">
                <h2 className="text-sm font-bold">{props.name}</h2>
                <p className="text-xs  mt-2">{props.nickname}</p>
            </div>
        </button>
    );
}

export default UserCard;
