import React from 'react';
import { Link } from 'react-router-dom';
import original from '../assets/original.png';
import { AiOutlineClose, AiOutlineLeft } from 'react-icons/ai';

export default function Question3() {
	return (
		<div className='questionnaire'>
			<div className='nav'>
				<Link to='/'>
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
				<div className='indicator active-indicator'></div>
				<div className='indicator'></div>
				<div className='indicator'></div>
				<div className='indicator'></div>
				<div className='indicator'></div>
			</div>
			<h1>
				What best describes the sector <br /> of your company?
			</h1>
			<div className='options-container-one'>
				<ul>
					<li>
						<input type='radio' id='option-one' name='selector' />
						<label for='option-one'>OPTION ONE</label>

						<div class='check'></div>
					</li>

					<li>
						<input type='radio' id='option-two' name='selector' />
						<label for='option-two'>OPTION TWO</label>

						<div class='check'>
							<div class='inside'></div>
						</div>
					</li>

					<li>
						<input type='radio' id='option-three' name='selector' />
						<label for='option-three'>OPTION THREE</label>

						<div class='check'>
							<div class='inside'></div>
						</div>
					</li>
					<li>
						<input type='radio' id='option-four' name='selector' />
						<label for='option-four'>OPTION FOUR</label>

						<div class='check'>
							<div class='inside'></div>
						</div>
					</li>

					<li>
						<input type='radio' id='option-none' name='selector' />
						<label for='option-none'>NOT LISTED</label>

						<div class='check'>
							<div class='inside'></div>
						</div>
					</li>
				</ul>
			</div>
			<div className='next-question'>
				<Link to='/'>
					<span className='next-question-button'>DONE, NEXT QUESTION</span>
				</Link>
			</div>
		</div>
	);
}
