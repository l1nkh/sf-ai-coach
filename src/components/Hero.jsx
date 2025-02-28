import { curve, heroBackground_sf, hero_sf, splash1, splash2, splash3, splash4, splash5 } from "../assets/index.js"
import Section from "./Section"
import ProPlayersList from "./ProPlayersList.jsx"
import Button from "./Button"
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"
import { heroIcons } from "../constants/index.js"
import { ScrollParallax } from "react-just-parallax"
import { useRef } from "react"
import Generating from "./Generating.jsx"
import boltIcon from "../assets/bolt.svg"
import CommandList from "./CommandList.jsx"

const Hero = () => {

    const parallaxRef = useRef(null);

    return (
        <Section
            id="hero"
            className="pt-[12rem] -mt-[5.25]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
        >
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center
                    mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="h1 mb-6">
                        Unleash Your Inner Champion with AI-Powered Coaching. <br />
                        <span className="inline-block relative">
                            <span className="relative z-1">Fast</span>
                            <img
                                src={splash3}
                                className="absolute top-1 left-0 w-full z-0 xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Real-Time Strategy Advice – Get instant prompts during fights to improve your gameplay.
                    </p>
                    <Button href="/pricing" white>
                        Get Started
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl
                    xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl
                            bg-conic-gradient from-[#FFFF] to-[#FFA5A5]">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-[linear-gradient(90deg,_rgba(211,_50,_207,_0.9),_rgba(106,_19,_153,_0.9)_10%,_rgba(55,_5,_135,_0.9)_40%,_rgba(55,_5,_135,_0.9)_60%,_rgba(106,_19,_153,_0.9)_90%,_rgba(211,_50,_207,_0.9))]
                                    rounded-t-[0.9rem]">
                            </div>
                            <div className="aspect-[33/40] rounded-b-[0.9rem]
                            overflow-hidden md:aspect-[688/490]
                            lg:aspect-[1024/490]">
                                <img
                                    src={hero_sf}
                                    className="w-full
                                    scale-[2] translate-y-[35%]
                                    md:scale-[1.1] md:-translate-y-[15%]"
                                    width={1024}
                                    height={490}
                                    alt="Gameplay"
                                />
                                <Generating
                                    id={"Generating"}
                                    className="absolute left-4 right-4 -bottom-5
                                    md:left-1/2 md:-translate-x-1/2 md:bottom-3
                                    md:right-auto md:w-[40rem] xl:flex"

                                    Prompt={
                                        "Use your drive meter to perform the" +
                                        " <b className='animate-pulse " +
                                        "text-yellow-300'>ULTRA</b> at the end of the combo."
                                    }
                                />


                                <ScrollParallax isAbsolutelyPositioned>
                                    {/*<ul className="hidden absolute -left-[5.5rem]
                                    bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop:blur
                                    border border-n-1/10 rounded-2xl xl:flex">
                                        {heroIcons.map((icon, index) => (
                                            <li key={index} className="p-5">
                                                <img
                                                    src={icon}
                                                    width={24}
                                                    height={24}
                                                    alt="Icon"
                                                />
                                            </li>
                                        ))}
                                    </ul>*/}
                                    <div className="
                                        hidden absolute -left-[5.5rem]
                                        bottom-[7.5rem] px-3 py-3 shadow-2xl shadow-violet-600 bg-[linear-gradient(90deg,_rgba(211,_50,_207,_0.9),_rgba(106,_19,_153,_0.9)_10%,_rgba(55,_5,_135,_0.9)_40%,_rgba(55,_5,_135,_0.9)_60%,_rgba(106,_19,_153,_0.9)_90%,_rgba(211,_50,_207,_0.9))]
                                        backdrop:blur border border-[#f9f5fb] rounded-2xl xl:flex items-center">


                                        {/*TEMP

                                        OTHER STYLE
                                        hidden absolute -left-[5.5rem]
                                        bottom-[7.5rem] px-3 py-3 bg-n-9/80 backdrop:blur
                                        border border-n-1/10 rounded-2xl xl:flex items-center
                                        
                                        SF6 STYLE
                                        hidden absolute -left-[5.5rem]
                                        bottom-[7.5rem] px-3 py-3 bg-[linear-gradient(90deg,_rgba(211,_50,_207,_0.9),_rgba(106,_19,_153,_0.9)_10%,_rgba(55,_5,_135,_0.9)_40%,_rgba(55,_5,_135,_0.9)_60%,_rgba(106,_19,_153,_0.9)_90%,_rgba(211,_50,_207,_0.9))]
                                        backdrop:blur border border-[#f9f5fb] rounded-2xl xl:flex items-center"
                                        
                                        */}

                                        <img
                                            src={boltIcon}
                                            className="w-auto h-8"
                                            alt="flash"
                                        />
                                        <span className="mr-3">
                                            Lightning Fast <br></br>
                                            AI Generation
                                        </span>
                                    </div>
                                    <CommandList />
                                </ScrollParallax>
                            </div>
                        </div>
                        {/*<Gradient />*/}
                    </div>
                    <div className="absolute scale-95 -top-[20%] left-1/2 w-[234%] -translate-x-1/2
                    md:-top-[46%] md:w-[138%] lg:-top-[60%]">
                        <img
                            src={heroBackground_sf}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>

                    <BackgroundCircles />
                </div>
                <ProPlayersList className="hidden relative z-10 mt-20 lg:block"/>
            </div>
            <BottomLine />
            <div className="h-screen">
                asd
            </div>
        </Section>
    )
}

export default Hero