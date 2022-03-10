import React from "react";
import { useEffect, useState } from "react";
import db from "../firebase/firebase";
import { collection, onSnapshot, onSnapShotsInSync } from "firebase/firestore";

function Mukera() {
  const [Names, setNames] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "Login"), (snapshot) =>
        setNames(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <mukera className="bg-[#E2E8F0] flex justify-evenly font-mono font-bold ">
      <div className="flex flex-col m-9 space-y-3">
        <div className="">
          <button className="bg-slate-700 p-2 flex items-center rounded-lg text-gray-100">
            Add Item
          </button>
        </div>
        <div className="">
          <input className="p-2 rounded-lg shadow-lg" type="text" />
        </div>
        <div className="">
          <button className="bg-yellow-600 p-1 rounded-lg shadow-lg text-white ">
            Submit
          </button>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col m-9 w-full ">
        <div className="bg-gray-400 p-1 text-gray-100 ">Result</div>
        {Names.map((name) => (
          <div key={name.id} className="">
            Name: {name.Name}
          </div>
        ))}
      </div>
    </mukera>
  );
}

export default Mukera;
