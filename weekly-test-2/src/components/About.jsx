import { useState } from "react";

const About = () => {
    const [para, setPara] = useState("Hello there! 👋 My name is Gautam and I'm from Karnal, Haryana. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.")

    const [showMoreBtn, setShowMoreBtn] = useState("↓ Show More ↓");

    function showMoreHandler() {
        setPara("Hello there! 👋 My name is Gautam and I'm from Karnal, Haryana. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.\n\nGrowing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.\n\nIn my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.\n\nIf you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.");

        setShowMoreBtn("↑  Hide Text  ↑");
    }
    function hideHandler() {
        setPara("Hello there! 👋 My name is Gautam and I'm from Karnal, Haryana. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.");
        setShowMoreBtn("↓ Show More ↓")
    }
    return <div className="about">
        <h1>About Me</h1>
        <div className="para">
            <p className="intro">{para}</p>
            <button onClick={() => { showMoreBtn === "↓ Show More ↓" ? showMoreHandler() : hideHandler() }}>{showMoreBtn}</button>
        </div>
        <div>
            <h2>Primary Focus</h2>
            <div className="focus-div">
                <div className="focus">
                 

                        <div className="service-icon-box">
                            <img src="https://oktayshakirov.com/assets/images/icon-dev.svg" alt="mobile app icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web Design &amp; Development</h4>

                            <p className="service-item-text">
                            Creating attractive, easy-to-use websites that work well for businesses and individuals online.
                            </p>
                        </div>

                   
                </div>
                <div className="focus">
                 

                        <div className="service-icon-box">
                            <img src="https://oktayshakirov.com/assets/images/icon-app.svg" alt="mobile app icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 class="h4 service-item-title">Mobile Apps &amp; Games</h4>

                            <p className="service-item-text">
                                Creating and developing engaging mobile apps and games for iOS and Android devices.
                            </p>
                        </div>

                   
                </div>
                <div className="focus">
                 

                        <div className="service-icon-box">
                            <img src="https://oktayshakirov.com/assets/images/icon-frameworks.svg" alt="mobile app icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 class="h4 service-item-title">Development Solutions</h4>

                            <p className="service-item-text">
                            Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.
                                                        </p>
                        </div>

                   
                </div>
                <div className="focus">
                 

                        <div className="service-icon-box">
                            <img src="https://oktayshakirov.com/assets/images/icon-marketing.svg" alt="mobile app icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 class="h4 service-item-title">Marketing  &amp; SEO</h4>

                            <p className="service-item-text">
                            Using SEO and marketing strategies to boost online visibility and promote products or services. 
                            </p>
                        </div>

                   
                </div>
            </div>
        </div>
        <div>
            <h2>Exploring Creativity</h2>
            <div className="focus-div">
                <div className="focus">
                 

                        <div className="service-icon-box">
                            <img src="https://oktayshakirov.com/assets/images/icon-video.svg" alt="mobile app icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Visual Storytelling</h4>

                            <p className="service-item-text">
                            Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.
                            </p>
                        </div>

                   
                </div>
                <div className="focus">
                 

                        <div className="service-icon-box">
                            <img src="https://oktayshakirov.com/assets/images/icon-multimedia.svg" alt="mobile app icon" width="40" />
                        </div>

                        <div className="service-content-box">
                            <h4 class="h4 service-item-title">Digital Content Creation</h4>

                            <p className="service-item-text">
                            Creatiing dynamic digital content, such as 3D models, graphics or animations.
                            </p>
                        </div>

                   
                </div> 
            </div>
        </div>
        <div>
            <h2>Languages</h2>
            <div className="lang">
                <div>
                    <h3>Coding Languages</h3>
                    <div>
                        <div className="lang-card">
                            <div>
                                <p>JavaScript 90%</p>
                                <div className="outer-bar">
                                    <div className="inner-bar" style={{width: '90%'}}>
                                    </div>
                                </div>
                            </div>
                        <div>
                            <p>TypeScript 75%</p>
                            <div className="outer-bar">
                                <div className="inner-bar" style={{width: '75%'}}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>CSS 100%</p>
                            <div className="outer-bar">
                                <div className="inner-bar" style={{width: '100%'}}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>PHP 50%</p>
                            <div className="outer-bar">
                                <div className="inner-bar" style={{width: '50%'}}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Python 25%</p>
                            <div className="outer-bar">
                                <div className="inner-bar" style={{width: '25%'}}>
                                </div>
                            </div>
                        </div>
                    </div>                        
                    </div>
                    
                </div>
                <div>
                    <h3>Human Languages</h3>
                    <div>
                        <div className="lang-card">
                            <div>
                                <p>English Fluent</p>
                                <div className="outer-bar">
                                    <div className="inner-bar" style={{width: '100%'}}>
                                    </div>
                                </div>
                            </div>
                        <div>
                            <p>German Fluent</p>
                            <div className="outer-bar">
                                <div className="inner-bar" style={{width: '100%'}}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Bulgarian Native</p>
                            <div className="outer-bar">
                                <div className="inner-bar" style={{width: '100%'}}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Turkish Bilingual</p>
                            <div className="outer-bar">
                                <div className="inner-bar" style={{width: '70%'}}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Russian Basic</p>
                            <div className="outer-bar">
                                <div className="inner-bar" style={{width: '30%'}}>
                                </div>
                            </div>
                        </div>
                    </div>                        
                    </div>
                    
                </div>
                
            </div>

        </div>
        <div>
            <h2>Exploring Creativity</h2>
            <div className="focus-div">
                <div className="explore">
                 

                        <div className="explore-img">
                            <img src="https://oktayshakirov.com/assets/images/finances.png" alt="mobile app icon" width="80" height='80' />
                            <h3 className="h4 service-item-title">Investments</h3>
                        </div>

                        <div >
                            <p >
                            Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment
                            </p>
                        </div>

                   
                </div>
                <div className="explore">
                 

                        <div className="explore-img">
                            <img src="https://oktayshakirov.com/assets/images/music.png" alt="mobile app icon" width="80" height='80' />
                            <h3 className="h4 service-item-title">Music</h3>
                        </div>

                        <div >
                            <p >
                            Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians
                            </p>
                        </div>

                   
                </div>
                <div className="explore">
                 

                        <div className="explore-img">
                            <img src="https://oktayshakirov.com/assets/images/books.png" alt="mobile app icon" width="80" height='80' />
                            <h3 className="h4 service-item-title">Reading</h3>
                        </div>

                        <div >
                            <p >
                            Books on Self-Improvement, Psychology and Understanding Life Better.
                            </p>
                        </div>

                   
                </div>
                <div className="explore">
                 

                        <div className="explore-img">
                            <img src="https://oktayshakirov.com/assets/images/camera.png" alt="mobile app icon" width="80" height='80' />
                            <h3 className="h4 service-item-title">Photography</h3>
                        </div>

                        <div >
                            <p >
                            Capturing precious moments and memories through the lens of a camera.
                            </p>
                        </div>

                   
                </div>
            </div>
        </div>
    </div>
}
export default About;