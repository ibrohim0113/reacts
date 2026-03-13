import React, { useEffect } from 'react'

const Re = () => {
    useEffect(() => {
        console.log("mount");
        return () => {
            console.log("unmounted")
        }
    }, [])
    return (
        <div>
            <h1>Salom</h1>
        </div>
    )
}

export default Re
