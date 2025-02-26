import { curve } from "../assets"
import Section from "./Section"
import Button from "./Button"

const Hero = () => {
    return (
        <Section
            id="hero"
            className="pt-[12rem] -mt-[5.25]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
        >
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center
                    mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="h1 mb-6">
                    Unleash Your Inner Champion with AI-Powered Coaching. <br />
                        <span className="inline-block relative">
                            Fast
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                            />
                        </span>
                    </h1>
                    <p>
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
                                    <div className="h-[1.4rem] bg-n-10
                                    rounded-[0.9rem]">
                                        
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </Section>
    )
}

export default Hero