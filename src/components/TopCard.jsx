import data from "../../data.json";

const TopCard = () => {
    return (
        <div className="bg-[#EC755D] h-32  sm:w-[540px] rounded-2xl flex flex-row mx-15 md:mx-0  justify-between align-center p-8 sm:p-[35px] gap-32 sm:gap-0">
            <div className="flex flex-col">
                <p className="text-white text-sm">My balance</p>
                <h2 className="text-3xl mt-2 text-white ">$921.48</h2>
            </div>
            <div className="flex flex-row pt-2 sm:pt-0">
                <div className="w-[48px] h-[48px] bg-transparent border-white border -mr-[25px] rounded-full z-40"/>
                <div className="w-[48px] h-[48px] bg-[#392316] rounded-full z-0"/>
            </div>
        </div>
    )
}

export default TopCard;