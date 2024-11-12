import Random from "./component/Random"
import Tags from "./component/Tags"

export default function App(){
  return (
    <div className="w-full h-screen flex flex-col background items-center">

      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-5  px-10 py-2 text-3xl font-bold ">Random Gifs</h1>
      <div className="flex flex-col w-full items-center">
        <Random/>
        <Tags/>
      </div>
    </div>
  )
}

