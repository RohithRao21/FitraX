import React from 'react'

export default function Button(props) {
    const {text, func} = props;
  return (
    <button onClick={func} className="bg-blue-400 mx-auto px-8 py-4 rounded-md border-[1px]
        bg-slate-950 border-stone-500 border-solid blueShadow">
        <p>{text}</p>
    </button>
   )
}

