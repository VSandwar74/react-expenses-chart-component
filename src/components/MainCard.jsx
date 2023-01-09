// import { data } from "autoprefixer";
import data from "../../data.json";

// h-[${Math.ceil(amount/5)}rem] 

function  myFunc() {
    return `${(day != "wed") ? (`bg-[#EC755D] hover:bg-[#FE9B86]`) : (`bg-[#77B5BD] hover:bg-[#B5DEE5]`)} h-[${amount/5}rem] ` ;
  }

const GraphBar = ({ day, amount, index }) => {


    // let barHeight = `${!day ? `h-[${amount/5}rem]` : "h-[50px]"} + {(day != "wed") ? ('bg-[#EC755D] hover:bg-[#FE9B86]') : ('bg-[#77B5BD] hover:bg-[#B5DEE5]')} rounded-sm sm:rounded-md px-4 sm:px-6 cursor-pointer`

    // console.log(barHeight)

    return (
        <div key={index} className="group text-center items-center flex flex-col">
            <div className="hidden group-hover:block bg-[#372214] rounded-sm sm:rounded-md my-3 p-2">
                <p className="text-white">${amount}</p>
            </div>
            <div className={`rounded-sm sm:rounded-md px-4 sm:px-6 cursor-pointer w-[50px] ${(day != "wed") ? (`bg-[#EC755D] hover:bg-[#FE9B86]`) : (`bg-[#77B5BD] hover:bg-[#B5DEE5]`)}`} style={{height: `${amount/5}rem`, }}></div>
            <p className="text-slate-400 mt-1">{day}</p>
        </div>
    )
}


const MainCard = () => {

    return (
        <div className="bg-[#FEFDF7] sm:w-[540px] sm:h-[512px] flex flex-col p-6 md:p-10 rounded-2xl mt-4">
            <h1 className="text-2xl font-semibold">Spending – Last 7 days</h1>
            <div className="flex flex-row py-8 sm:py-8 w-full justify-between items-end overflow-hidden border-b-2 border-[#F6E9DD] gap-4 sm:gap-0 ">
                {data?.map((day, index) => (
                    <GraphBar key={index} day={day.day} amount={day.amount} index={index} />
                ))}
            </div>
            <div className="flex flex-row w-full justify-between items-center flex-1 pt-8 sm:pt-10">
                <div>
                    <p className="text-slate-400">Total this month</p>
                    <h1 className="text-[#3E3123] text-3xl md:text-5xl font-bold">$478.33</h1>
                </div>
                <div className="flex flex-col items-end">
                    <p className="font-bold">+2.4%</p>
                    <p className="text-slate-400">from last month</p>
                </div>
            </div>
        </div>
    )
}

export default MainCard;