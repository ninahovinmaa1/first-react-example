import React from 'react'

function UserDataInfo(props) {
    const { userData } = props

    return (
        <p onClick={() => alert(userData)}>{userData}</p>
    )
}

export default UserDataInfo;