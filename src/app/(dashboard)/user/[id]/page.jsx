
"use client"
import NavbarGroup from "@/components/GroupNav"
import { useParams } from "next/navigation";
import { companyFundsData } from "@/lib/data";
import { FaCheckCircle, FaClock, FaUser, FaCalendarAlt } from 'react-icons/fa';



const Table = ({ className, children }) => {
    return (
        <div className={className}>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <table className="w-full">
                    {children}
                </table>
            </div>
        </div>
    );
};

const ImprovedTable = () => {

  const {id}=useParams();

  const groupselfa=companyFundsData.filter(i=>{
   return Number(i.id)===Number(id)
  })

 

    return (
            <div className="w-full px-3 mt-6">
            <Table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                  <th className="py-2 px-2 text-right font-bold border-r border-green-500 min-w-[70px]">
                    <div className="flex items-center justify-center gap-1">
                      <FaCalendarAlt className="text-green-200 text-xs" />
                      الشهر
                    </div>
                  </th>
                  <th className="py-2 px-2 text-right font-bold border-r border-green-500 min-w-[90px]">
                    <div className="flex items-center justify-center gap-1">
                      <FaUser className="text-green-200 text-xs" />
                      العضو
                    </div>
                  </th>
                  <th className="py-2 px-2 text-right font-bold border-r border-green-500 min-w-[60px]">
                    <div className="flex items-center justify-center gap-1">
                      <FaCheckCircle className="text-green-200 text-xs" />
                      دفع؟
                    </div>
                  </th>
                  <th className="py-2 px-2 text-right font-bold min-w-[80px]">
                    <div className="flex items-center justify-center gap-1">
                      <FaClock className="text-green-200 text-xs" />
                      استلم؟
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
           

                {groupselfa[0].members.map(item=>{


  return(<>

  <tr key={`table-${item.id}`} className="bg-white hover:bg-green-50 transition-colors duration-200 border-b border-gray-100">
                  <td className="py-2 px-2 text-center text-gray-800 font-semibold border-r border-gray-100">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px] font-bold">
                     {item.month}
                    </span>
                  </td>
                  <td className="py-2 px-2 text-center text-gray-800 font-semibold border-r border-gray-100">
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <FaUser className="text-white text-[10px]" />
                      </div>
                      <span className="text-[11px]">{item.member}</span>
                    </div>
                  </td>
                  <td className="py-2 px-2 text-center border-r border-gray-100">
                    <input
                      type="checkbox"
                     
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                    />
                  </td>
                  <td className="py-2 px-2 text-center">


                    {item.received==="تم الاستلام"&&( <span  className="bg-green-100  text-green-800 px-2 py-1 rounded-full text-[10px] flex items-center justify-center gap-1 w-fit mx-auto">
                     <FaCheckCircle className="text-green-600" />
                      {item.received}
                    </span>)}

                       {item.received==="في الانتظار"&&( <span  className="bg-yellow-100 text-yellow-800  px-2 py-1 rounded-full text-[10px] flex items-center justify-center gap-1 w-fit mx-auto">
                     <FaClock className="text-yellow-600 text-xs" />
                      {item.received}
                    </span>)}

                         {item.received==="لم يستلم"&&( <span  className="bg-red-100 text-red-800  px-2 py-1 rounded-full text-[10px] flex items-center justify-center gap-1 w-fit mx-auto">
                     <FaClock className="text-red-600 text-xs" />
                      {item.received}
                    </span>)}

                    
                   
                  </td>
                </tr>


            </>)})}



            </tbody>
        </Table>
        </div>
    );
};



export default function SelfaGroup(){

    return(<>
    
    <div className="flex w-full flex-col justify-center">

      <NavbarGroup />


      <ImprovedTable />
    
    </div>
    </>)
}