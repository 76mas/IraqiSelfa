import { companyFundsData } from "@/lib/data";

export default function StatusCard() {

   let sum = 0;

        companyFundsData.forEach(item => {
        const amountStr = item.monthlyAmount.replace("د.ع", "").replaceAll(",", "").trim();
        const amount = Number(amountStr);
        sum += amount;
        });





    return (
        <div className="flex w-full md:w-1/2 lg:w-1/3 gap-3 h-[120px] px-4">
          
            <div className="flex text-white rounded-2xl w-full flex-col justify-center items-center bg-gradient-to-br from-green-600 to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/5 rounded-full"></div>
                
             
                <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-1">
                        <svg className="w-5 h-5 ml-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                        </svg>
                        <h1 className="text-2xl font-bold">{sum}</h1>
                    </div>
                    <h2 className="text-sm font-medium opacity-90">إجمالي المبلغ (د.ع)</h2>
                </div>
            </div>

            <div className="flex w-full text-white rounded-2xl flex-col justify-center items-center bg-gradient-to-br from-green-600 to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
         
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/5 rounded-full"></div>
                
    
                <div className="absolute top-3 left-3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                
        
                <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-1">
                        <svg className="w-5 h-5 ml-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1 className="text-2xl font-bold">{companyFundsData.length}</h1>
                    </div>
                    <h2 className="text-sm font-medium opacity-90">السُلف النشطة</h2>
                </div>
            </div>
        </div>
    );
}