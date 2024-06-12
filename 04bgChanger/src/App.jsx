import { useState } from "react"

function App() {
  const [color, setColor] = useState("#F5BCBA")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white" style ={{backgroundColor: "red"}}>red</button>
            <button
             onClick={() => setColor("green")}
             className="outline-none px-4 py-1 rounded-full text-white" style ={{backgroundColor: "green"}}>green</button>
            <button
            onClick={() => setColor("blue")}
             className="outline-none px-4 py-1 rounded-full text-white" style ={{backgroundColor: "blue"}}>blue</button>
            <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white" style ={{backgroundColor: "orange"}}>orange</button>
            <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white" style ={{backgroundColor: "grey"}}>grey</button>
            <button
            onClick={() => setColor("#F5BCBA")}
            className="outline-none px-4 py-1 rounded-full text-white" style ={{backgroundColor: "#F5BCBA"}}>peach</button>
            <button
            onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white" style ={{backgroundColor: "brown"}}>brown</button>
            <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white" style ={{backgroundColor: "olive"}}>olive</button>
            </div>
        </div>
      </div>
      </>
  )
}

export default App
