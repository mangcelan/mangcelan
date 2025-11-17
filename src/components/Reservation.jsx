import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

const Reservation = () => {

    return (
        <>
            <Link className="reserve-btn" to="/contact">
                <div className="reservation">
                    <p>聯絡我們</p>
                </div>
            </Link>

        </>
    )
}

export default Reservation
