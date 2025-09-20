import React from 'react';
import './Profile.css';
import { ReactTyped } from 'react-typed';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.facebook.com/Eduuh254'>
                            <i className="fi fi-brands-facebook"></i>
                        </a>
                        <a href='https://www.instagram.com'>
                            <i className="fi fi-brands-instagram"></i>
                        </a>
                        <a href='https://www.whatsapp.com'>
                            <i className="fi fi-brands-whatsapp"></i>
                        </a>
                        <a href='https://www.twitter.com'>
                            <i className="fi fi-brands-twitter"></i>
                        </a>
                        <a href='https://www.linkedin.com'>
                            <i className="fi fi-brands-linkedin"></i>
                        </a>
                        <a href='https://github.com/eduu-11287'>
                            <i className="fi fi-brands-github"></i>
                        </a>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primariy-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Edwin </span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primariy-text'>
                            {" "}
                            <h1>
                                {" "}
                                <ReactTyped
                                    loop={Infinity}
                                    strings={[
                                        "Enthusiastic Dev 😎",
                                        "Full Stack Developer 💻",
                                        "MERN Stack Dev 🌐",
                                        "Cross Platform Dev 🌍",
                                        "JavaScrip/React Native Dev 📱",
                                    ]}
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delayBetween={2000}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end 
                                operations.
                            </span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}