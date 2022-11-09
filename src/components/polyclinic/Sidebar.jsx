import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md';

const Sidebar = ({ open, setOpen }) => {
    return (
        <div className="relative h-screen bg-indigo-600" style={{ width: open ? "220px" : "75px" }}>
            <div>
                <MdArrowBackIosNew className="absolute top-8 left-40 z-10" onClick={() => setOpen(!open)} />
                <div>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar