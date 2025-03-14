import React from 'react'
import Section from './Section'
import Heading from './Heading'
import Generating from './Generating'
import ItemBox from './ItemBox'
import hadouken from '../assets/hadouken.png'
import sfcoachVideo from '../assets/sfcoach_v1.mp4'
import kim from '../assets/kimberly.png'
import matchReplay from '../assets/matchReplay.jpg'
import { check, service1, service2, service3, ryu_feature } from '../assets'
import { ServicesList, ServicesIconsList } from '../constants'
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from "./design/Services"
import TagLine from './Tagline'

const Services = () => {

    const messages = [
        "<b class='animate-pulse text-yellow-300'>Slow</b> down your fireball inputs",
        "Make <b class='animate-pulse text-yellow-300'>Slow and Longer</b> motions to decrease miss inputs.",
        "Mind <b class='animate-pulse text-yellow-300'>spacing</b>"
    ];

    return (
        <Section id="how-to-use">
            <div className="container">
                <Heading
                    title="PRO Coaching made for players."
                    text="SFCOACH unlocks the potential of
                every single player, in every single character."
                />

                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem]
                        mb-5 sm:p-8 border-n-1/10 border rounded-3xl  overflow-hidden
                        lg:p-5 xl:h-[46rem]">
                        <div className='absolute p-6 z-2 top-[23rem] md:top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-20 anchor-center w-[22rem] h-full
                    pointer-events-none md:p-0 md:z-0 md:w-full xl:w-full'>
                            <video
                                className='md:w-full md:h-full rounded-3xl
                                    md:scale-[.80] md:opacity-60 object-cover md:object-right md:flex'
                                src={sfcoachVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />

                        </div>
                        <ItemBox
                            heading="Smartest Coach"
                            description="SFCoach unlocks the potential within you"
                            className="h-full w-full sm:h-fit sm:max-w-[20rem]"
                        >
                            <ul className='body-2'>
                                {ServicesList.map((item, index) => (
                                    <li
                                        key={index}
                                        className='flex items-start py-4 border-t
                                    border-n-6'
                                    >
                                        <img
                                            src={check}
                                            width={24}
                                            height={24}
                                            alt="check"
                                        />
                                        <p className='ml-4'>
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </ItemBox>
                        <Generating
                            className='hidden absolute left-4 right-4 bottom-4 border-n-1/10
                        border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-[35%]
                        md:w-[40rem] lg:flex'
                            messages={messages}
                        />
                    </div>

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-n-1/10
                        rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={ryu_feature}
                                    className='absolute left-0 h-full w-full object-left object-cover'
                                    width={630}
                                    height={750}
                                    alt="Ryu"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col
                            justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90">
                                <h4 className='h4 mb-4'>Ask Anything</h4>
                                <p className='body-2 mb-[3rem] text-n-3'>
                                    Chat with SfCoach to ask specifics.
                                </p>
                            </div>
                            <div className="absolute top-8 right-[5.5rem] max-w-[17.5rem]
                                py-6 px-8  bg-n-8/60 backdrop-blur-sm border
                                border-white/10 rounded-t-xl rounded-bl-xl
                                font-code text-base lg:top-16 lg:right-[18.75rem]
                                md:w-full lg:max-w-[17.5rem]"
                            >
                                <div className="flex flex-col gap-y-10">
                                    <div className='flex self-start'>
                                        Coach Ryu what is the frames on block 
                                        of Kimberly Standing Heavy Punk?
                                    </div>
                                    <div className='flex flex-col self-end'>
                                        <TagLine className="self-end">Ryu</TagLine>
                                        generating...
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-n-7 rounded-3xl overflow-hidden
                            lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">
                                    Match Replay Analysis
                                </h4>
                                <p className="body-2 mb-[2rem] text-n-3">
                                    Review your previous online and offline matches
                                    with detailed analysis and feedback.
                                </p>
                                <ul className="flex items-center justify-between">
                                    {ServicesIconsList.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`rounded-2xl flex items-center justify-center
                                            ${index === 2 ?
                                                    'w-[3rem] h-[3rem] p-0.5' +
                                                    ' bg-conic-gradient' +
                                                    ' md:w-[4.5rem] md:h-[4.5rem]'
                                                    :
                                                    'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'
                                                }`}
                                        >
                                            <div className={index === 2 ?
                                                'flex items-center justify-center' +
                                                ' w-full h-full bg-n-7 rounded-[1rem]' : ''}>
                                                <img
                                                    src={item}
                                                    alt=""
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative h-[20rem] bg-n-8 rounded-xl
                            overflow-hidden md:h-[25rem]">
                                <img
                                    src={matchReplay}
                                    alt="Art"
                                    width={520}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />

                                <VideoBar />
                            </div>
                        </div>
                    </div>
                    <Gradient />
                </div>
            </div>
        </Section>
    )
}

export default Services