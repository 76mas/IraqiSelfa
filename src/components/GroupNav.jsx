"use client"
import { useParams } from "next/navigation";
import { GrGroup } from "react-icons/gr";
import { companyFundsData } from "@/lib/data";


const NavbarGroup = () => {

    const {id}=useParams();
    
      const groupselfa=companyFundsData.filter(i=>{
       return Number(i.id)===Number(id)
      })
    
    return (
        <>
            <div className="flex w-full text-white h-[120px] relative overflow-hidden"> 
                <div className="flex w-full"> 
                    <div className="flex bg-gradient-to-br from-green-500 via-green-600 to-green-800 shadow-2xl w-full justify-center items-center rounded-b-[30px] px-6 py-5 border-green-300/30 relative">
                        
                      
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/5 rounded-full blur-sm"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full blur-sm"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/3 rounded-full blur-md"></div>
                        
                       
                        <div className="flex items-center gap-4 text-right relative z-10">
                            <div className="relative">
                                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <GrGroup className="text-2xl text-white drop-shadow-md" />
                                </div>
                             
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
                            </div>
                            
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold text-white drop-shadow-lg mb-1">{groupselfa[0].fundName}</h1>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                                    <p className="text-green-100 text-sm font-medium">  {groupselfa[0].currentMonth} من {groupselfa[0].members.length} أشهر</p>
                                </div>
                            </div>
                        </div>
                    
          
                
                  
                 
                    </div>


                </div>
                
                

            </div>
        </>
    )
}

export default NavbarGroup;