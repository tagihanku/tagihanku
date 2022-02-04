import React from 'react'
import propTypes from 'prop-types'

function BoxPrice({ name, price, color, details }) {
    return (
        <div className="pb-4 bg-gray-900 rounded-2xl overflow-visible transition-transform duration-300 sm:hover:scale-105">
            <div className={`relative text-center text-gray-200 ${color} p-4 rounded-t-2xl`}>
                <h5 className="absolute top-0 left-1/2 -mt-4 transform -translate-x-1/2 px-8 py-1 bg-gray-900 rounded-full">
                    {name}
                </h5>
                <div className="flex items-start justify-center pt-4">
                    <span className="text mr-1">{price === '0' ? '' : 'Rp'}</span>
                    <span className="text-4xl italic font-bold">{price === '0' ? 'Call Only' : price}</span>
                    <span className="text-xl italic font-bold mt-auto">{price === '0' ? '' : ',00'}</span>
                </div>
                <div className="text-lg">/bulan</div>
            </div>
            <ul className="min-h-[400px] p-8 space-y-4">
                {details.map((detail) => (
                    <li key={detail.text}>
                        <i
                            className={`la la-${detail.icon} ${
                                detail.icon === 'check' ? 'text-green-500' : 'text-red-500'
                            } mr-2`}
                        ></i>
                        <span>{detail.text}</span>
                    </li>
                ))}
            </ul>
            <a
                href=""
                className="action-button w-28 mx-auto py-[.375rem] justify-center"
                target="_blank"
                rel="noreferrer"
            >
                Daftar
            </a>
        </div>
    )
}

BoxPrice.propTypes = {
    name: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
    details: propTypes.array.isRequired,
}

export default BoxPrice
