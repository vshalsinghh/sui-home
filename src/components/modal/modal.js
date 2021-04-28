import React from 'react'
import './modal.css'
import img1 from '../../assets/item1.png'
import img2 from '../../assets/item2.png'
import img3 from '../../assets/item3.png'
import img4 from '../../assets/item4.png'
import img5 from '../../assets/item5.png'
import img6 from '../../assets/item6.png'
import img7 from '../../assets/item7.png'
import img8 from '../../assets/item8.png'

const Modal = ({toggleShow ,currentItem}) => {
    const arr= [img1, img2, img3, img4, img5, img6,img7, img8];
    
    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.className === 'modal'){
            toggleShow(false)
        }
    }
    return (
        <div className='modal' onClick={(e) => handleClick(e)}>
            <div className='modal-content'   onClick={(e) => handleClick(e)}>
                <img src={arr[currentItem]} alt='imagesd'/>
            </div>
        </div>
    )
}
export default Modal