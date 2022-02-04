import React from 'react'
import propTypes from 'prop-types'

function BoxDesc({ title, children }) {
    return (
        <div className="bg-gray-900 bg-opacity-90 rounded-2xl p-8">
            {title ? <h3 className="text-blue-300 text-3xl mb-8">{title}</h3> : null}
            <div className="space-y-4">{children}</div>
        </div>
    )
}

BoxDesc.propTypes = {
    title: propTypes.string,
    children: propTypes.node.isRequired,
}

export default BoxDesc
