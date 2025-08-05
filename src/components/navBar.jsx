import { FaUser, FaHandHoldingUsd, FaBell, FaCog } from 'react-icons/fa';
import Component from '../app/(dashboard)/joinnewselfs/page';
import { Button } from './ui/button';


const Navbar = () => {
    return (
        <>
            <div className="flex w-full text-white h-[120px] relative overflow-hidden"> 
                <div className="flex w-full"> 
                    <div className="flex bg-gradient-to-br from-green-500 via-green-600 to-green-800 shadow-2xl w-full justify-between items-center rounded-b-[30px] px-6 py-5 border-green-300/30 relative">
                        
                      
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/5 rounded-full blur-sm"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 rounded-full blur-sm"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/3 rounded-full blur-md"></div>
                        
                       
                        <div className="flex items-center gap-4 text-right relative z-10">
                            <div className="relative">
                                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <FaUser className="text-2xl text-white drop-shadow-md" />
                                </div>
                             
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
                            </div>
                            
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold text-white drop-shadow-lg mb-1">محمود عباس</h1>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                                    <p className="text-green-100 text-sm font-medium">مرحباً بك في السُلف</p>
                                </div>
                            </div>
                        </div>
                    
          
                
                  
                        <Button className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-2 py-9 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl group relative z-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            
                            <h2 className="text-lg font-semibold text-white group-hover:text-green-100 transition-colors duration-300 drop-shadow-md relative z-10">
                               <Component/>
                            </h2>  
                            
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                <FaHandHoldingUsd className="text-lg text-white drop-shadow-sm" />
                            </div>
                        </Button>
                    </div>
                </div>
                
                

            </div>
        </>
    )
}

export default Navbar;