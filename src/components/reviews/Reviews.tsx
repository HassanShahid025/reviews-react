import people from '../../data';
import './reviews.css';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import { useState } from 'react';

export const Reviews = () => {
    const [index, setIndex] =useState(0); 
    const {name, job, image, text} = people[index];

    const prevPerson = () =>{
        setIndex((index )=> index!==0 ? index-1 : people.length-1)
    }

    const nextPerson = () =>{
        setIndex((index) => index!==people.length-1 ? index+1 : 0)
    }

    const randomPerson = ()=>{
        let randomIndex = Math.floor(Math.random() * people.length)
        setIndex(() => randomIndex)
    }

    return(
        <div className='review-container'>
            <div className='image-container'>
                <div className="bluecircle"></div>
                <img src={image} alt="" />
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <div className="name-job">
                <h4>{name}</h4>
                <h5>{job.toLocaleUpperCase()}</h5>
            </div>
            <p>{text}</p>
            <div className="btn-container">
                <button onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button onClick={nextPerson}>
                    <FaChevronRight/>
                </button>  
            </div>
            <button onClick={randomPerson}>Suprise Me</button>
        </div>
    )
}