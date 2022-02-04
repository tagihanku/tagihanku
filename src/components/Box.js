import React from 'react'
import propTypes from 'prop-types'

function Box({ icon, title, desc }) {
    return (
        <div className="box">
            <i className={`la la-${icon} la-2x text-blue-400`}></i>
            <h6 className="mt-6 font-medium text-lg">{title}</h6>
            <div className="mt-2">{desc}</div>
        </div>
    )
}

Box.propTypes = {
    icon: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
}

export default Box
