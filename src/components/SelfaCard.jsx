"use client"

import { cardselfa } from "@/lib/data"

import { companyFundsData } from "@/lib/data";
import { FaUsers, FaCalendarAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';
import Link from "next/link";


const Selfacard = () => {
    const cards = companyFundsData.map(item => {
        return (   
            <div key={item.id} className="flex justify-center w-full p-4 pt-0">
                <Link href={`/user/${item.id}`}  className="flex w-full md:w-1/2 lg:w-1/3">
                    <div className="flex flex-col w-full mt-4 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100" dir="rtl">

                    
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <FaMoneyBillWave className="text-green-600 text-lg" />
                                {item.fundName}
                            </div>
                            <div className="px-4 py-2 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-md">
                                {item.status}
                            </div>
                        </div>

                     
                        <div className="grid grid-cols-1 gap-4">
                          
                            <div className="flex justify-between items-center bg-green-50 rounded-2xl p-4 border border-green-100">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaMoneyBillWave className="text-green-600" />
                                    <span className="font-semibold">المبلغ الشهري:</span>
                                    <span className="font-bold text-green-700">{item.monthlyAmount}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaUsers className="text-blue-600" />
                                    <span className="font-semibold">عدد المشتركين:</span>
                                    <span className="font-bold text-blue-700">{item.membersCount}</span>
                                </div>
                            </div>

                          
                            <div className="flex justify-between items-center bg-blue-50 rounded-2xl p-4 border border-blue-100">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaCalendarAlt className="text-purple-600" />
                                    <span className="font-semibold">تاريخ البدء:</span>
                                    <span className="font-bold text-purple-700">{item.startDate}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaClock className="text-orange-600" />
                                    <span className="font-semibold">الشهر الحالي:</span>
                                    <span className="font-bold text-orange-700">{item.currentMonth}</span>
                                </div>
                            </div>
                        </div>

                      
                        <div className="mt-4 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full"></div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>
            {cards}
        </>
    )
}

export default Selfacard;