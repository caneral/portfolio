import React from 'react'
import Typical from 'react-typical'
import { VFXProvider, VFXSpan } from 'react-vfx';

const Homepage = () => {
    
    return (
        <div className="flex bg-black min-h-screen p-12 ">
            <div className="bg-gray-600 w-full ">
                <div className="grid grid-cols-2 h-full">
                    <div className="bg-portfolio flex  justify-center ">
                        <div className="my-72 w-3/4 ">
                            <div className="flex items-center space-x-4">
                                <span className="h-0.5 my-1 w-20 bg-red-300" />
                                <p className="text-white text-xl font-medium">Hello, I'm</p>
                            </div>

                            <p className="text-white text-7xl font-bold">
                                <VFXProvider>

                                    <VFXSpan shader="rgbShift">CANER AL</VFXSpan>
                                </VFXProvider>

                            </p>
                            <p className="text-white text-5xl font-bold">
                                <Typical
                                    loop={Infinity}
                                    wrapper='b'
                                    steps={['Information Systems Engineer', 2000, 'Full Stack Developer', 2000, 'DevOps Engineer', 2000]}
                                />
                            </p>
                        </div>
                    </div>
                    <div class="bg-green-500 relative ">
                        <img className="absolute h-full w-full object-cover" src="https://retro-show-r3tr0.vercel.app/static/416b46a8bd26e2cb606b7fba8166f579/7ac0b/person.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
