import React from 'react'
import Particles from 'react-particles-js';
import particlesConfig from '../assets/particlesConfig.json';
const About = () => {
    return (
        <div className="flex min-h-screen ">
            <div className="w-full">
                <div className="grid grid-cols-2 h-full">
                    <div >
                    <Particles className="h-full" />
                    </div>
                    <div className=" bg-portfolio">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
