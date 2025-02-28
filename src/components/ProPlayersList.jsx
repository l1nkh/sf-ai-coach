import React from 'react'
import { proPlayers } from '../constants'
import { splash1, splash2, splash3, splash4, splash5 } from "../assets/index.js"


const ProPlayersList = ({ className }) => {
    return (
        <div className={className}>
            <h5 className="tagline mb-6 text-center text-n-1/50">
                AI Coach, Pro Insights – Your Path to Victory!
            </h5>
            <ul className='flex'>
                {proPlayers.map((playerImg, index) => (
                    <li
                        key={index}
                        className='flex items-center justify-center flex-1 h-[8.5rem]'
                    >
                        <img
                            className='absolute'
                            src={playerImg.picture}
                            alt={playerImg}
                            width={134}
                            height={28}
                        />
                        <img
                            src={splash2}
                            alt=""
                        />
                        <span className='absolute bottom-[-3rem] flex flex-col items-center justify-center'>
                            <span className='absolute top-[1.5rem]'>
                                {playerImg.name}
                            </span>
                            <img
                                src={splash1}
                                alt=""
                                className='w-[220px] h-auto'
                            />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProPlayersList