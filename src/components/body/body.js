import React, {useState, useEffect } from 'react'
import './body.css'

import Modal from '../modal/modal'

const Body = () => {
    const [showModal, toggleShow] = useState(false)
    const [currentItem, setCurrentItem] = useState(0)

    const handleClick = async (e, value) => {
        e.preventDefault();
        await setCurrentItem(value)
        toggleShow(true);
    }


    return (
        <div className='body'>
            {showModal && <Modal toggleShow={toggleShow} currentItem={currentItem}/>}
            <h1>Materials</h1>
            <div className='materials-grid'>
                <div className='material-item'>
                    <div className='img img1'  onClick={(e) => handleClick(e, 0)}></div>
                    <div className='mat-text'>
                        <p className='darker'>Block Print</p>
                        <p className='lighter'>Rajasthan, India</p>
                    </div>
                </div>
                <div className='material-item'>
                    <div className='img img2' onClick={(e) => handleClick(e, 1)}></div>
                    <div className='mat-text'>
                        <p className='darker'>Linen</p>
                        <p className='lighter'>Rajasthan, India</p>
                    </div>
                </div>
                <div className='material-item'>
                    <div className='img img3' onClick={(e) => handleClick(e, 2)}></div>
                    <div className='mat-text'>
                        <p className='darker'>Linen</p>
                        <p className='lighter'>Rajasthan, India</p>
                    </div>
                </div>
                <div className='material-item'>
                    <div className='img img4' onClick={(e) => handleClick(e, 3)}></div>
                    <div className='mat-text'>
                        <p className='darker'>Linen</p>
                        <p className='lighter'>Rajasthan, India</p>
                    </div>
                </div>
                <div className='material-item'>
                    <div className='img img5' onClick={(e) => handleClick(e, 4)}></div>
                    <div className='mat-text'>
                        <p className='darker'>Block Print</p>
                        <p className='lighter'>Rajasthan, India</p>
                    </div>
                </div>
                <div className='material-item'>
                    <div className='img img6' onClick={(e) => handleClick(e, 5)}></div>
                    <div className='mat-text'>
                        <p className='darker'>Linen</p>
                        <p className='lighter'>Rajasthan, India</p>
                    </div>
                </div>
                <div className='material-item'>
                    <div className='img img7' onClick={(e) => handleClick(e, 6)}></div>
                    <div className='mat-text'>
                        <p className='darker'>Linen</p>
                        <p className='lighter'>Rajasthan, India</p>
                    </div>
                </div>
                <div className='material-item'>
                    <div className='img img8' onClick={(e) => handleClick(e, 7)}></div>
                    <div className='mat-text'>
                        <p className='darker'>Linen</p>
                        <p className='lighter'>Rajasthan, India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Body