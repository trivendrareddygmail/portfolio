import Cards from "./Cards";

function Projects() {
      return (
            <>
                  <section id="projects">
                        <div className="projects">
                              <div className="container mb-3">
                                    <div className="row m-1">
                                          <h2 className="about-head text-white font-bold text-3xl pl-5 mb-5">
                                                <span className="border-b-4 border-sky-400 rounded-sm">Minor Projects</span>
                                          </h2>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://github.com/trivendrareddygmail/password-generator" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Random password generator" imgSrc="Screenshot (8).png"
                                                            description="Random password generator he script utilizes Python's built-in random and string modules to create passwords comprising uppercase and lowercase letters, digits, and special characters."/>
                                                </a>
                                          </div>

                                          
                                    </div>
                                    <div className="row m-1">
                                          <h2 className="about-head text-white font-bold text-3xl pl-5 mb-5">
                                                <span className="border-b-4 border-sky-400 rounded-sm">Machine Learning Projects</span>
                                          </h2>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://github.com/KrishnaSriTarun/ChatBot" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="ChatBot Application" imgSrc="Scout.webp"
                                                            description='"Scout" is a Python virtual assistant for voice commands, offering web searches, time, music control, and system management.' />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section></>
      );
}

export default Projects;
