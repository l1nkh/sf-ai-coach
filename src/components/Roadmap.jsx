import React from 'react'
import Section from './Section'
import Heading from './Heading'
import TagLine from './Tagline'
import ItemBox from './ItemBox'

import { grid, check2, loading1 } from '../assets'
import { roadmap } from '../constants'
import Generating from './Generating'

const Roadmap = () => {
    return (
        <Section className="overflow-hidden" id="roadmap">
            <div className="container md:pb-10">
                <Heading
                    tag="Ready to get started"
                    title="What we're working on"
                />

                <div className="relative grid gap-6
                md:grid-cols-2 grid-cols-1 md:gap-4 md:pb-[7rem]">
                    {roadmap.map((item) => {
                        const status = item.status === "done" ? "Done" : "In Progress";

                        return (
                            <div
                                key={item.id}
                                className={`md:flex even:md:translate-y-[7rem] p-[0.07rem]
                                rounded-[2.5rem]
                                ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`
                                }
                            >
                                <div className='relative p-8 bg-n-8 rounded-[2.4375rem]
                                overflow-hidden xl:p-15 w-full'>
                                    <div className='absolute top-0 left-0 max-w-full'>
                                        <img
                                            src={grid}
                                            className="w-full"
                                            width={550}
                                            height={550}
                                            alt="Grid"
                                        />
                                    </div>
                                    <div className="relative z-1">
                                        <div className="flex items-center justify-between
                                    max-w-[27rem] mb-8 md:mb-20">
                                            <TagLine>{item.date}</TagLine>

                                            <div className='flex items-center px-4
                                            py-1 bg-n-1 rounded text-n-8'>
                                                <img
                                                    src={item.status === "done" ?
                                                        check2 : loading1
                                                    }
                                                    className='mr-2.5'
                                                    width={16}
                                                    height={16}
                                                    alt={status}
                                                />
                                                <div className="tagline">
                                                    {status}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center mb-10 -my-10 -mx-15">
                                            <img
                                                src={item.imageUrl}
                                                className={
                                                    item.id === "0"
                                                        ? "border rounded-3xl max-w-lg mt-[3.3rem] mb-[5.3rem]"
                                                        : item.id === "2"
                                                            ? "hidden"
                                                            : "w-full"
                                                }
                                                width={630}
                                                height={420}
                                                alt={item.title}
                                            />
                                            {item.id === "0" &&
                                                <Generating
                                                    id="Generating"
                                                    className="absolute left-4 right-4
                                                    bottom-[19rem]
                                                    md:bottom-[19rem] lg:bottom-[19rem] xl:bottom-[14.5rem]
                                                    md:left-1/2 md:-translate-x-1/2
                                                    md:right-auto md:w-[20rem] border
                                                    !bg-n-8/100"
                                                    customPrompt="Generating..."
                                                />
                                            }
                                            {item.id === "2" &&
                                                <div className="relative max-h-[26rem]">
                                                    <ItemBox
                                                        className="absolute border shadow-2xl shadow-[#8E57D3]/10 
                                                        border-white scale-[.6] xl:-translate-x-10
                                                        -left-20 -bottom-20 xl:scale-75"
                                                        heading="Training Schedule"
                                                        description="45min per day"
                                                        messages={[
                                                            "10 Fireballs in a row",
                                                            "10 Dragon Punch in a row",
                                                            "10 Hurricane Kicks in a row",
                                                        ]}>
                                                    </ItemBox>
                                                    <ItemBox
                                                        className="absolute border border-white z-2 scale-[.6] bottom-[24.5rem]
                                                            -right-20 xl:translate-x-10 shadow-2xl shadow-[#8E57D3]/10
                                                            xl:scale-75"
                                                        heading="Training Load"
                                                        description="Last-7 days">
                                                        <div className="flex flex-row items-end justify-between font-grotesk">
                                                            <div className='flex flex-col items-center'>
                                                                <div className='bg-[#8E57D3] w-[2rem] h-[8rem]' />
                                                                <div>SUN</div>
                                                            </div>
                                                            <div className='flex flex-col items-center'>
                                                                <div className='bg-[#8E57D3] w-[2rem] h-[2rem]' />
                                                                <div>MON</div>
                                                            </div>
                                                            <div className='flex flex-col items-center'>
                                                                <div className='bg-[#8E57D3] w-[2rem] h-[4rem]' />
                                                                <div>TUE</div>
                                                            </div>
                                                            <div className='flex flex-col items-center'>
                                                                <div className='bg-[#8E57D3] w-[2rem] h-[7rem]' />
                                                                <div>WED</div>
                                                            </div>
                                                            <div className='flex flex-col items-center'>
                                                                <div className='bg-[#8E57D3] w-[2rem] h-[3rem]' />
                                                                <div>THU</div>
                                                            </div>
                                                            <div className='flex flex-col items-center'>
                                                                <div className='bg-[#8E57D3] w-[2rem] h-[10rem]' />
                                                                <div>FRI</div>
                                                            </div>
                                                            <div className='flex flex-col items-center'>
                                                                <div className='bg-[#8E57D3] w-[2rem] h-[12rem]' />
                                                                <div>SAT</div>
                                                            </div>
                                                        </div>

                                                    </ItemBox>
                                                </div>
                                            }
                                            {item.id === "3" &&
                                                <Generating
                                                    id="Generating"
                                                    className="absolute left-4 right-4
                                                    top-[15rem] sm:top-[5rem]
                                                    md:left-1/2 md:-translate-x-1/2
                                                    md:right-auto md:w-[20rem] border"
                                                    customPrompt="Learning your ways..."
                                                />
                                            }
                                        </div>


                                        <h4 className='h4 mb-4'>{item.title}</h4>
                                        <p className='body-2 text-n-4'>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}

export default Roadmap