import React from "react";
import profile from "../assets/profile.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import js2 from "../assets/js2.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import bootstrap5 from "../assets/bootstrap5.png"
import java from "../assets/java.png"
import spring from "../assets/spring.png"
import sql from "../assets/sql.png"
import node from "../assets/node.png"
import git from "../assets/git.png"
import jira from "../assets/jira.png"

const About = () => {

    return (
        <div id="about">
            <div className="max-w-[700px] ml-auto mr-auto mt-[15%] h-full w-full flex flex-col justify-center items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-[#0466C8]">About</h1>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="m-auto flex flex-col justify-center items-center mt-12">
                    <img src={profile} alt="profile" className="max-w-[250px]"></img>
                    <div className="m-auto">
                        <p className="max-w-[600px] text-gray-300 text-[21px] ml-9">
                            A highly motivated junior web developer, always keen on taking new challenges in the field.
                            Specialized in different front and backend technologies with spread management and team experience, always
                            looking for new things to learn and discover. When I am not working, I like to spend my time playing guitar
                            or hiking in the mountains.
                        </p>
                    </div>
                </div>
                <div className="m-auto sm:flex gap-12 mt-[130px]">
                    <div className="flex flex-col sm: self-center" id="first">
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={html} alt="htmllogo" className="w-[70px]"></img>
                            <h2 className="text-gray-100 font-semibold text-center mt-2">HTML</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={react} alt="reactlogo" className="w-[70px]"></img>
                            <h2 className="text-gray-100 font-semibold text-center mt-2">REACT</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={tailwind} alt="tailwindlogo" className="w-[70px]"></img>
                            <h2 className="text-gray-100 font-semibold text-center mt-2">TAILWIND</h2>
                        </div>
                    </div>
                    <div className="flex flex-col" id="second">
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={css} alt="csslogo" className="w-[70px]"></img>
                            <h2 className="text-gray-100 font-semibold text-center mt-2">CSS</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={spring} alt="springlogo" className="w-[70px]"></img>
                            <h2 className="text-gray-100 font-semibold text-center mt-2">SPRING</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={git} alt="gitlogo" className="w-[70px]"></img>
                            <h2 className="text-gray-100 font-semibold text-center mt-2">GIT</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={node} alt="nodelogo" className="w-[70px]"></img>
                            <h2 className="text-gray-100 font-semibold text-center mt-2">NODE</h2>
                        </div>
                    </div>
                    <div className="flex flex-col self-center" id="third">
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={js} alt="jslogo" className="w-[70px] rounded-lg"></img>
                            <h2 className="text-gray-100 font-semibold text-center mt-2">JS</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={sql} alt="sqllogo" className="w-[70px] rounded-lg"></img>
                            <h2 className="text-gray-100 font-semibold text-center mt-2">SQL</h2>
                        </div>
                        <div className="flex flex-col justify-center items-center mb-8">
                            <img src={bootstrap5} alt="bootstraplogo" className="w-[70px]"></img>
                            <h2 className="text-gray-100 font-semibold text-center text-[14px] mt-3">BOOTSTRAP</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

}

export default About