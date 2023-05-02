import React from "react";

const WorkItem = ({year, title, duration, details}) =>{
    return(
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm text-gray-300">
                    <span className="inline-block px-2 py-1 font-bold text-[#0466C8] bg-gray-100 rounded-md">{year}</span>
                    <span className="text-lg font-semibold text-gray-300">{title}</span>
                    <span className="my-1 font-normal leading-none text-gray-400">{duration}</span>
                    <p className="my-2 text-base font-normal text-gray-300">{details}</p>
                </p>
            </li>
        </ol>
    )
}

export default WorkItem