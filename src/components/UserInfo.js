import React from 'react'
import propTypes from 'prop-types'

function UserInfo({ role, username, password }) {
    return (
        <div>
            <h5 className="text-lg font-bold mb-1">{role}</h5>
            <div>
                Username: <strong>{username}</strong>
            </div>
            <div>
                Password: <strong>{password}</strong>
            </div>
        </div>
    )
}

UserInfo.propTypes = {
    role: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
}

export default UserInfo
