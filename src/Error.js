import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            OOPS Wrong page buddy
            <Link to='/' className="btn btn-primary">Home</Link>
        </div>
    )
}

export default Error
