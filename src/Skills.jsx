// eslint-disable-next-line no-unused-vars
import React from "react";
import {
      FaJava,
      FaNodeJs,
      FaBrain,
      FaPython,
      FaJsSquare,
      FaHtml5,
      FaCss3,
} from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
      SiReact,
      SiExpress,
      SiFlask,
      SiBootstrap,
      SiTailwindcss,
      SiMongodb,
      SiMysql,
      SiGit,
      SiGithub,
      SiRedux,
} from "react-icons/si";

function Skills() {
      return (
            <section id="skills" className="mx-5">
                  <h2 className="about-head text-white font-bold text-4xl pl-5 mb-5">
                        <span className="border-b-4 border-sky-400 rounded-sm">Skills</span>
                  </h2>
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5">
                        <span className="border-b-2 border-sky-400">Certifications</span>
                  </h2>
                  <div className="container mb-3">
                        <div className="row">
                              <div className="col-md-6 mb-3"><a href="https://drive.google.com/file/d/16B1px5kbxbEr7IX5ESZS_KvzB6TIkQWw/view?usp=sharing" target="_blank" rel="noreferrer noopener">
                                    <div className="card d-flex font-medium align-items-center text-white p-3">
                                          <h2 className="text-lg mb-2">password generator</h2>
                                          <p className="text-gray-300 align-items-center">IIIT Hyderabad</p>
                                    </div></a>
                              </div>
                              
                              
                        </div>
                  </div>
                  {/* Languages */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5">
                        <span className="border-b-2 border-sky-400">Languages</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center">
                        
                        <div className="icons flex flex-col items-center text-center shadow-[0px_0px_8px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.7)] rounded-xl px-5 py-2 transition-transform transform hover:scale-105">
                              <FaPython size={40} color="#3776AB" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Python</h3>
                        </div>

                        <div className="icons flex flex-col items-center text-center shadow-[0px_0px_8px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.7)] rounded-xl px-5 py-2 transition-transform transform hover:scale-105">
                              <TbSql size={40} color="rgb(40, 225, 241)" />
                              <h3 className="text-lg md:text-xl text-white mt-2">SQL</h3>
                        </div>
                        

                  </div>

                  {/* Frameworks */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5 mt-10">
                        <span className="border-b-2 border-sky-400">Frameworks</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center">
                        
                        <div className="icons flex flex-col items-center text-center shadow-[0px_0px_8px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.7)] rounded-xl px-5 py-2 transition-transform transform hover:scale-105">
                              <SiFlask size={40} color="rgb(255,255,255)" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Flask</h3>
                        </div>
                        

                        
                  </div>

                  {/* Tools */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5 mt-10">
                        <span className="border-b-2 border-sky-400">Tools</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center">
                        
                        <div className="icons flex flex-col items-center text-center shadow-[0px_0px_8px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.7)] rounded-xl px-5 py-2 transition-transform transform hover:scale-105">
                              <SiMysql size={40} color="#4479A1" />
                              <h3 className="text-lg md:text-xl text-white mt-2">MySQL</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center shadow-[0px_0px_8px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.7)] rounded-xl px-5 py-2 transition-transform transform hover:scale-105">
                              <SiGit size={40} color="#F1502F" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Git</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center shadow-[0px_0px_8px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.7)] rounded-xl px-5 py-2 transition-transform transform hover:scale-105">
                              <SiGithub size={40} color="rgb(255,255,255)" />
                              <h3 className="text-lg md:text-xl text-white mt-2">GitHub</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center shadow-[0px_0px_8px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.7)] rounded-xl px-5 py-2 transition-transform transform hover:scale-105">
                              <VscVscode size={40} color="#0066F1" />
                              <h3 className="text-lg md:text-xl text-white mt-2">VS</h3>
                        </div>

                  </div>
                  {/* Technologies */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5 mt-10">
                        <span className="border-b-2 border-sky-400">Technologies</span>
                  </h2>
                  <div className="flex items-center ml-5">
                        <div className="icons flex flex-col items-center text-center shadow-[0px_0px_8px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.7)] rounded-xl px-5 py-2 transition-transform transform hover:scale-105">
                              <FaBrain size={40} color="#4B8BBE" />
                              <h3 className="text-lg md:text-xl text-white mt-2">
                                    Machine Learning
                              </h3>
                        </div>
                  </div>
            </section>
      );
}

export default Skills;
