"use client"
import Navpar from "@/components/navBar"


import Selfacard from "@/components/SelfaCard"
import StetusCard from "@/components/stetusCard"

import Component from "@/components/addNewSelfaComponent";
import { useEffect } from "react";

export default  function HomePage(){
    
 useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((reg) => {
          console.log("Service Worker registered.", reg);
        })
        .catch((err) => {
          console.error("Service Worker registration failed:", err);
        });
    }
  }, []);

    return(<>
    
    <div className="flex flex-col w-full overflow-x-hidden">
     <Navpar />

        <div className="flex flex-col justify-center w-full mt-5">
       
            <div className="flex flex-col justify-center w-full  items-center text-black">
                <StetusCard  />
                <Component />
                <h1 className="text-right mr-7  md:w-1/2 lg:w-1/3 flex text-3xl font-bold mt-3  w-full">السلف المشترك بها</h1>
                <Selfacard />
            </div>



            
        </div>


    </div>
    
    
    
    </>)




}