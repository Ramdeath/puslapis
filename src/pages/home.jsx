import { Link } from 'react-router-dom';
import '../styles/home.css'

import Particles from "react-tsparticles";
import { settings } from '../settings/particles';
import { loadFull } from "tsparticles";

import pixels from '../layered-steps-haikei.svg';

import React, { useEffect } from 'react';

import AOS from 'aos'; // animate on scroll
import 'aos/dist/aos.css';

var count = 0; 
export function getDelay (amount = 50, resetCounter = false) {
  if (resetCounter) {count = 0}
  count += amount; 
  return count;
}

export default function Home() {
    const particlesInit = async (main) => {await loadFull(main);}; // load particles
    
    useEffect(() => { // on load
        AOS.init(); // animate on scroll
    }, []);

    return (
        <section id="Home">
            <section id='Banner'>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={settings}
                />
                <img src={pixels} alt="pixels" id="Pixels" />
                <div id="BannerContent">
                    <div>
                        <h1><b>Liuokaitis.lt</b></h1>
                        <h2>Informatika</h2>
                    </div>
                </div>
            </section>
            <section id="About">
                <section>
                    <div className="aboutContainer short">
                        <div data-aos="fade-down">
                            <Link to="/pamokos/grafika">
                                <h2 className='title one'>AutoCad</h2>
                            </Link>
                        </div>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        </p>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        </p>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        </p>
                    </div>
                    <div className="aboutContainer short">
                        <div data-aos="fade-down">
                            <Link to="/pamokos/desimtokai">
                                <h2 className='title two'>Dešimtokai</h2>
                            </Link>
                        </div>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        </p>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        </p>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        </p>
                    </div>
                    <div className="aboutContainer short">
                        <div data-aos="fade-down">
                            <Link to="/pamokos/vienuoliktokai">
                                <h2 className='title three'>Vienuoliktokai</h2>
                            </Link>
                        </div>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        </p>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        </p>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        </p>
                    </div>
                    <div className="aboutContainer short">
                        <div data-aos="fade-down">
                            <Link to="/pamokos/dvyliktokai">
                                <h2 className='title four'>Dvyliktokai</h2>
                            </Link>
                        </div>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        </p>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        </p>
                        <p data-aos="zoom-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        </p>
                    </div>
                </section>
            </section>
        </section>
    );
}



