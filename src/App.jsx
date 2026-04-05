import React from "react";

const App = ()=>{
  return(
    <div className="w-screen">
{/* nav */}
    <div className=' flex justify-between m-8'>
       <span className="bg-black text-white flex rounded-full p-2 m-2 text-center">Target Audience</span>
       <button className="bg-gray-100 text-black rounded-md flex h-6 text-center m-2 mr-16">$ digital banking</button>
    </div>
{/* Main */}
    <div className="flex m-8">
      <div className="flex flex-col self-start w-1/2 sm:w-1/3 mt-4">
        <h2 className="text-black text-6xl font-bold ">Prospective</h2>
        <h2 className="text-black text-6xl font-bold ">customer</h2>
        <h2 className="text-black text-6xl font-bold ">Segmentation</h2>
        <p className=" mt-4 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur 
          voluptatibus suscipit odio aspernatur expedita explicabo a rerum esse officiis eum, totam, facilis
           provident repellat tenetur reprehenderit nam quae! Vel!</p>
      </div>

      <div className="flex self-end w-1/2 ml-6 gap-4">
        <img src="./Screenshot (30).png" alt="" className="h-90 w-75 border-transparent rounded-lg object-cover relative"/>
        <img src="./Screenshot (69).png" alt="" className="h-90 w-75 border-transparent rounded-lg object-cover relative"/>
        <img src="./Screenshot (93).png" alt="" className="h-90 w-75 border-transparent rounded-lg object-cover relative"/>
      </div>
    </div>

    </div>
  )
}

export default App


      {/* <div className="absolute inset-0 flex items-center justify-center text-white p-4">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rerum ut quae porro, neque sed 
          dolore beatae consequatur ex laudantium ipsam quos fugit quisquam libero expedita laborum cupiditate debitis est!</p>
      </div> */}