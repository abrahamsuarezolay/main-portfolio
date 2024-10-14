import React from "react";
import ProjectItem from "./ProjectItem"
import portfolio1 from "../assets/portfolio1.png"
import portfolio2 from "../assets/portfolio2.jpg"

const Projects = () => {
    return(
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-12">
        <h1 className="sm:text-5xl text-4xl font-bold text-[#0466C8] text-center mb-[10%]">Projects</h1>
        <p className="text-center text-gray-300 text-[21px]">
        I am very pasionate about technology and learning new things. When I wonder which is the best way to apply new knowledge, the answer is clear to me... creating new and exciting projects! In this section you can find some of my last work. Enjoy!
        </p>
        <div className="grid sm:grid-cols-1 gap-12 mt-[10%]">
        <ProjectItem 
                img={portfolio2} 
                title="To Do List" 
                alt="todolistpic" 
                description="React app that allows the user to add or delete custom notes." 
                github="https://github.com/abrahamsuarezolay/react-notes-app"
                livesite="https://abrahamsuarezolay.github.io/react-notes-app"/>
        </div>
    </div>
    
)
}

export default Projects