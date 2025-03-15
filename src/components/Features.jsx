import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { features } from '../constants/index.js';
import Arrow from '../assets/svg/Arrow.jsx';
import { GradientLight } from './design/Features.jsx';

const Features = () => {
    return (
        <Section id='features'>
            <div className='container relative z-2'>
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Play Smarter, Not Harder with SFCOACH"
                />

                <div className="flex flex-wrap gap-10 mb-10">
                    {features.map((item) => (
                        <div
                            className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]
                            bg-conic-gradient from-[#FFFF] to-[#FFA5A5] rounded-2xl'
                            key={item.id}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem]
                                p-[2.4rem] pointer-events-none">
                                <h5 className='h5 mb-5'>
                                    {item.title}
                                </h5>
                                <p className='body-2 mb-6 text-n-3'>
                                    {item.text}
                                </p>
                                <div className="flex items-center mt-auto mr-auto">
                                    <p className='ml-auto font-code text-xs font-bold
                                    text-n-1 uppercase tracking-wider'>
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <GradientLight />}

                            <div className='absolute inset-0.5 bg-n-8 rounded-2xl'>
                                <div className="absolute inset-0 opacity-0
                                transition-opacity hover:opacity-30 ">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className='w-full h-full object-cover'
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Features