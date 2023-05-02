import React from "react";

const ProjectItem = ({img, title, alt, description, github, livesite}) =>{
    return(
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-[#0466C8]">
        <img src={img} alt={alt} className="rounded lg group-hover:opacity-10 ease-in duration-200" ></img>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in duration-200">
            <h3 className="text-gray-300 font-bold text-xl2 tracking-wider text-center">
                {title}
            </h3>
            <p className="text-gray-300 text-sm tracking-tight text-center pt-1">
                {description}
            </p>
            <div className="flex flex-row space-x-4 justify-center items-center mt-1">
                <a href={github}>
                    <p className="p-[3px] mt-1 text-center text-gray-100 text-sm border-solid border-2 rounded-lg border-sky-200 cursor-pointer hover:scale-105 ease-in duration-300 sm:p-1  sm:text-md">Learn More</p>
                </a>
                <a href={livesite}>
                    <p className="p-[3px] mt-1 text-center text-gray-100 text-sm border-solid border-2 rounded-lg border-sky-200 cursor-pointer hover:scale-105 ease-in duration-300 sm:p-1  sm:text-md">Open Website</p>
                </a>
            </div>
        </div>
    </div>
    )
}

export default ProjectItem