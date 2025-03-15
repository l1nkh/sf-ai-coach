import React from 'react'
import { keyD, keyL, keyR, keyU, keyDR, keyPlus, iconPunch, drive2 } from '../assets'

const CommandList = () => {
    return (
        <div className='hidden absolute -right-[3.5rem]
                shadow-2xl shadow-violet-600 w-[16rem] h-auto
                bottom-[20rem] px-3 py-3
                bg-[linear-gradient(90deg,_rgba(211,_50,_207,_0.9),_rgba(106,_19,_153,_0.9)_10%,_rgba(55,_5,_135,_0.9)_40%,_rgba(55,_5,_135,_0.9)_60%,_rgba(106,_19,_153,_0.9)_90%,_rgba(211,_50,_207,_0.9))]
                backdrop:blur border border-[#f9f5fb] rounded-2xl xl:flex flex-row items-start justify-between'>
            <div>
                <span className='inline-block mb-3'>Hadoken</span>
                <span className="flex align-center flex-wrap pr-1 leading-1 w-fit h-auto">
                    <img src={keyD} className="w-7 h-7" alt="Button Down" />
                    <img src={keyDR} className="w-7 h-7" alt="Button Right Down" />
                    <img src={keyR} className="w-7 h-7" alt="Button Right" />
                    <img src={keyPlus} className="w-7 h-7" alt="Button Plus" />
                    <img src={iconPunch} className="w-7 h-7" alt="Icon Punch" />
                </span>
            </div>
            <span className='w-fit'>
                <img src={drive2} className="w-16 h-auto" alt="Drive Gauge 2" />
            </span>
        </div>
    )
}

export default CommandList