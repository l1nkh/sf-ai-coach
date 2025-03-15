import React from 'react'
import Section from './Section'
import sfcoach_colored from '../assets/sfcoach_colored.png'
import Heading from './Heading'
import PricingList from './PricingList'
import {LeftLine, RightLine} from './design/Pricing';

const Pricing = () => {
  return (
    <Section id="pricing" className=' overflow-hidden'>
        <div className="container relative z-2">
            <div className="hidden reative justify-center mb-[6rem] lg:flex">
                <img
                    src={sfcoach_colored}
                    className='relative z-1'
                    width={500}
                    height={255}
                    alt="sfcoach logo"
                />
            </div>

            <Heading
                tag="Get started with SfCoach"
                title="Pro Coaching, Always Within Reach"
                className="max-w-full text-center"
            />

            <div className="relative">
                <PricingList />
                <LeftLine />
                <RightLine />
            </div>
            <div className='flex justify-center mt-10'>
                <a
                    href='/pricing'
                    className='text-xs font-code font-bold tracking-wider
                    uppercase border-b'>See Full Details
                </a>
            </div>
        </div>
    </Section>
  )
}

export default Pricing