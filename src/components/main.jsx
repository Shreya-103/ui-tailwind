import React from "react";

const Main = () =>{
    return(
        <div className="flex m-8">
      {/* LEFT SIDE MAIN */}
      <div className="flex flex-col self-start w-1/2 sm:w-1/3 mt-4">
        <h2 className="text-black text-6xl font-bold">Prospective</h2>
        <h2 className="text-black text-6xl font-bold">customer</h2>
        <h2 className="text-black text-6xl font-bold">Segmentation</h2>
        <p className=" mt-4 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur 
          voluptatibus suscipit odio aspernatur expedita explicabo a rerum esse officiis eum, totam, facilis
           provident repellat tenetur reprehenderit nam quae! Vel!</p>
      </div>
      {/* RIGHT SIDE MAIN */}
      <div className="flex self-end w-1/2 ml-12 gap-5">
      {/* <div className="flex-1 relative"> */}
            <img src="./Screenshot (30).png" alt="imgI" className="h-120 w-65 border-transparent rounded-4xl object-cover relative"/>
            {/* <div className="absolute inset-0 flex justify-around text-black p-4 items-end">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rerum ut quae porro, neque sed 
                dolore beatae consequatur ex laudantium ipsam quos fugit quisquam libero expedita laborum cupiditate debitis est!</p>
            </div>
        </div> */}

        {/* <div className="flex-2 relative"> */}
            <img src="./Screenshot (69).png" alt="imgII" className="h-120 w-65 border-transparent rounded-4xl object-cover relative"/>
            {/* <div className="absolute inset-0 flex justify-around text-black p-4 items-end">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rerum ut quae porro, neque sed 
                dolore beatae consequatur ex laudantium ipsam quos fugit quisquam libero expedita laborum cupiditate debitis est!</p>
            </div>
        </div> */}

        {/* <div className="flex-3 relative"> */}
                <img src="./Screenshot (93).png" alt="imgIII" className="h-120 w-65 border-transparent rounded-4xl object-cover relative"/> 
                {/* <div className="absolute inset-0 flex justify-around text-black p-4 items-end">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rerum ut quae porro, neque sed 
                    dolore beatae consequatur ex laudantium ipsam quos fugit quisquam libero expedita laborum cupiditate debitis est!</p>
                </div> */}
        {/* </div> */}

      </div>

    </div>

)
}

export default Main

{/* <div className="absolute inset-0 flex items-center justify-center text-white p-4">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rerum ut quae porro, neque sed 
    dolore beatae consequatur ex laudantium ipsam quos fugit quisquam libero expedita laborum cupiditate debitis est!</p>
    </div> */}

    {/* <img src="./Screenshot (30).png" alt="imgI" className="h-120 w-65 border-transparent rounded-4xl object-cover relative"/>
    <img src="./Screenshot (69).png" alt="imgII" className="h-120 w-65 border-transparent rounded-4xl object-cover relative"/>
    <img src="./Screenshot (93).png" alt="imgIII" className="h-120 w-65 border-transparent rounded-4xl object-cover relative"/> */}