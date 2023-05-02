import React, {useState} from "react";
import {IoMenuOutline, IoHomeOutline, IoHammerOutline, IoLayersOutline, IoMailOutline, IoPersonOutline} from "react-icons/io5";

const Sidenav = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }

    return(
        <div>
            <IoMenuOutline size={30} onClick={handleNav} className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 cursor-pointer fixed top-4 right-4 z-[99] md:hidden m-2 p-1 hover:scale-110 ease-in duration-200"/>
            {
                nav? (
                    <div className="fixed w-full h-screen flex flex-col justify-center items-center z-20">
                        <a onClick={handleNav} href="#home" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <IoHomeOutline size={20}/>
                            <span className="pl-4">Home</span>
                        </a>
                        <a onClick={handleNav} href="#about" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <IoPersonOutline size={20}/>
                            <span className="pl-4">About</span>
                        </a>
                        <a onClick={handleNav} href="#projects" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <IoLayersOutline size={20}/>
                            <span className="pl-4">Projects</span>
                        </a>
                        <a onClick={handleNav} href="#resume" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <IoHammerOutline size={20}/>
                            <span className="pl-4">Resume</span>
                        </a>
                        <a onClick={handleNav} href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <IoMailOutline size={20}/>
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
                )
                : (
                    <div></div>
                )
            }
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#home" className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <IoHomeOutline size={20}/>
                        </a>
                    <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <IoPersonOutline size={20}/>
                        </a>
                    <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <IoLayersOutline size={20}/>
                        </a>
                    <a href="#resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <IoHammerOutline size={20}/>
                        </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <IoMailOutline size={20}/>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav