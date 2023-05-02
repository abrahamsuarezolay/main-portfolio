import React from "react";
import { TypeAnimation } from "react-type-animation";
import { IoArrowDownOutline } from "react-icons/io5"

const Main = () => {

    return (
        <div id="home">
            <div className="w-full h-screen object-cover object-left">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
                    <h1 className="text-center sm:text-5xl text-4xl font-bold text-gray-100">Hello! I'm <span className="text-[#0077B6]">Abraham</span></h1>
                    <h2 className="flex sm:text-3xl text-2xl text-gray-100">I am
                        <TypeAnimation
                            sequence={[
                                'a full stack developer', // Types 'One'
                                2000, // Waits 1s
                                'an avid reader', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'a guitar player', // Types 'Three' without deleting 'Two'
                                2000,
                                'a music geek', // Types 'Three' without deleting 'Two'
                                2000,
                                'a hike enthusiast', // Types 'Three' without deleting 'Two'
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: "5px", display: 'inline-block' }}
                        />
                    </h2>
                    <div className="flex flex-col mt-5">
                        <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <IoArrowDownOutline size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Main