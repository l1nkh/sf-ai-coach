import React from 'react'
import Section from './Section'
import { softwareIntegrationApps, softwareIntegrationText, softwareIntegrationContent } from '../constants'
import { check } from '../assets';
import Button from './Button';
import sfcoach from '../assets/sfcoach.svg';
import sf6_white from '../assets/sf6_white.png';
import {LeftCurve, RightCurve} from './design/SoftwareIntegration'

const SoftwareIntegration = () => {
  return (
    <Section crosses={true}>
        <div className="container lg:flex">
            <div className="max-w-[25rem]">
                <h2 className='h2 mb-4 md:mb-8'>
                    Stay Ahead with Community Integration
                </h2>

                <ul className='max-w-[22rem] mb-10 md:mb-14'>
                    {softwareIntegrationContent.map((item) => (
                        <li className='mb-3 py-3' key={item.id}>
                            <div className='flex itmes-center'>
                                <img
                                    src={check}
                                    width={24}
                                    height={24}
                                    alt="check"
                                />
                                <h6 className='body-2 ml-5'>{item.title}</h6>
                            </div>
                            {item.text && (
                                <p className='body-2 mt-3 text-n-4'>{item.text}</p>
                            )}
                        </li>
                    ))}
                </ul>

                <Button>Try it now</Button>
            </div>

            <div className="lg:ml-auto xl:w-[38rem] mt-4">
                <p className="body-2 mb-16 text-n-4 md:mb-10 lg:mb-10
                lg:w-[22rem] lg:mx-auto">
                    {softwareIntegrationText}
                </p>

                <div className="relative left-1/2 flex w-[22rem] aspect-square
                border border-n-6 rounded-full -translate-x-1/2 scale:75
                md:scale-100">
                    <div className="flex w-60 aspect-square m-auto border
                    border-n-6 rounded-full">
                        <div className="w-[6rem] aspect-square m-auto p-[.2rem]
                        bg-conic-gradient rounded-full">
                            <div className="flex items-center justify-center
                            w-full h-full bg-n-8 rounded-full">
                                <img
                                    src={sfcoach}
                                    alt="sfcoach logo"
                                    className='fill-current text-white'
                                />
                            </div>
                        </div>
                    </div>

                    <ul>
                        {softwareIntegrationApps.map((app, index) => (
                            <li
                                key={app.id}
                                className={`absolute top-0 left-1/2 h-1/2
                                    -ml-[1.6rem] origin-bottom
                                    rotate-${index * 45}`}
                            >
                                <div className={`relative -top-[1.6rem] flex
                                    w-[3.2rem] h-[3.2rem] bg-n-7 border
                                    border-n-1/15 rounded-xl
                                    -rotate-${index * 45}`}
                                >
                                    <img
                                        src={app.icon}
                                        width={app.width}
                                        height={app.height}
                                        alt={app.title}
                                        className='m-auto'
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <LeftCurve />
                    <RightCurve />
                </div>
            </div>
        </div>
    </Section>
  )
}

export default SoftwareIntegration