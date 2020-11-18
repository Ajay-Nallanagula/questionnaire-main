import React from 'react';
import { Link } from 'react-router-dom';
import original from '../assets/original.png';
import { AiOutlineClose, AiOutlineLeft } from 'react-icons/ai';

export default function Question2() {
	return (
		<div className='question2'>
			<div className='nav'>
				<Link to='/questionnaire'>
					<AiOutlineLeft className='icons ' />
					<span>PREVIOUS</span>
				</Link>
				<a href='https://www.vaengad.se/'>
					<img src={original} alt='vaengad' />
				</a>
				<a href='https://www.vaengad.se/'>
					<span>EXIT</span> <AiOutlineClose className='icons' />
				</a>
			</div>
			<div className='indicators-container'>
				<div className='indicator '></div>
				<div className='indicator active-indicator'></div>
				<div className='indicator'></div>
				<div className='indicator'></div>
				<div className='indicator'></div>
			</div>
			<h1>
				In 50 words or less, <br /> Please give us some insight into what you
				do.
			</h1>
			<div className='question2-input'>
				<textarea
					name='text-area'
					id=''
					cols='25'
					rows='10'
					placeholder='Please limit your answers to 50 words max'></textarea>
			</div>
			<div className='next-question'>
				<Link to='/question3'>
					<span className='next-question-button'>DONE, NEXT QUESTION</span>
				</Link>
			</div>
		</div>
	);
}
