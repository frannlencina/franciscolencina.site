
export default function Tooltip({ text }) {

    return (
        <div className="flex flex-col justify-center items-center select-none">
            <div className=" relative z-30 px-3 py-1 text-md bg-[#3E3E3E] text-[#8B8B8B] font-bold border-[#4F4F4F] border-2 rounded-lg hover:ring-2 hover:ring-[#797979] transition-all duration-200">
                {text}
            </div>
            <div className="relative z-20 text-[#747474] text-3xl font-bold -top-4">
                <i className="ri-arrow-down-s-line"></i>
            </div>
        </div>
    )
}