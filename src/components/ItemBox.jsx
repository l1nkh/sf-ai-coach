import React from 'react'
import { check } from '../assets'


const ItemBox = ({ heading, description, messages, className, children }) => {
    return (
        <div className={`relative z-1 max-w-[25rem] mr-auto bg-n-8/60
                    rounded-3xl backdrop-blur-sm p-9 border border-white/10
                    ${className || ""}`}>
            <h4 className='h4 mb-4'>{heading}</h4>
            <p className='body-2 mb-[3rem] text-n-3'>{description}</p>
            <ul className='body-2'>
                {messages?.length > 0 ? (
                    messages.map((item, index) => (
                        <li
                            key={index}
                            className='flex items-start py-4 border-t border-n-6'
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
                    ))
                ) : (children)}
            </ul>


        </div>
    )
}

export default ItemBox