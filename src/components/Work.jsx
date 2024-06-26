import React from "react"
import WorkItem from "./WorkItem"


const data = [
    {
        year: 2023,
        title: "Software Developer - Intermark It",
        duration: "Current position",
        details: "Working as a sofware developer for the Research and Development department at Intermark It. Designed and developed responsive, user-friendly front-end interfaces for both web and mobile platforms using React and React Native. Managed data storage efficiently with Spring JPA, ensuring robust database management and seamless data handling. Ensuring team collaboration using GIT for version control."
    },
    {
        year: 2022,
        title: "LQA Project Coordinator - Pole To Win",
        duration: "1 year",
        details: "Managing teams and resources for the localisation department, providing guidance and assistance and ensuring a positive work environment. Keeping communication with clients on a daily basis, informing of progress, queries and issues through Daily Status Reports and scheduling testing and tasks in order to be one step ahead and approach issues in a timely and professional manner."
    },
]
const Work = () => {
    return(
        <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="sm:text-5xl text-4xl font-bold text-[#0466C8] text-center mb-[10%]">Work</h1>
            {data.map((item, idx)=>(
                <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}/>
            ))}
        </div>
    )
}

export default Work