import React from 'react'
import { proPlayers } from '../constants'

const ProPlayersList = ({className}) => {
  return (
    <div className={className}>
        <h5 className="tagline mb-6 text-center text-n-1/50">
            AI Coach, Pro Insights – Your Path to Victory!
        </h5>
        <ul className='flex'>
            {proPlayers.map((logo, index) => (
                <li
                    key={index}
                    className='flex items-center justify-center flex-1 h-[8.5rem]'
                >
                    <img
                        src={logo}
                        alt={logo}
                        width={134}
                        height={28}
                    ></img>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProPlayersList