import React, { useState } from 'react';
import data from '../data.js';

const Quiz = () => {
	const answers = new Array(64);
	const [errorMessage, setErrorMessage] = useState('');

	function onInputChange(e) {
		answers[e.target.name - 1] = parseInt(e.target.parentNode.textContent);
	};
	function onSubmit(event) {
		if (answers.includes(undefined)) {
			setErrorMessage('Please select an answer for all questions.');
			return;
		}
		setErrorMessage('');
		function findLargest3(array) {
			console.log(array);
			array.sort((a, b) => parseInt(a.substring(2)) < parseInt(b.substring(2)) ? 1 : parseInt(a.substring(2)) > parseInt(b.substring(2)) ? -1 : 0);
			console.log(array);
		}
		const highestToLowest = new Array(16)
		const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

		for (let i = 0; i < highestToLowest.length; i++) {
			let aIndex = Math.trunc(i / 4); 
			highestToLowest[i] = `${alphabet[aIndex]} ${answers[i] + answers[i+16] + answers[i+32] + answers[i+48]}` 
		}
		findLargest3(highestToLowest);
	}

   return (
      <>
		<ul className='p-4'>
			{data.map((question) => {
				return <li className='list-group-item pb-2' key={question.questionNum}>
					<div>
						<h5>{question.question}</h5>
						<div className='ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3'>
							<label className="options">0
								<input type="radio" name={`${question.questionNum}`}onChange={onInputChange}/>
							</label>
							<label className="options">1
								<input type="radio" name={`${question.questionNum}`} onChange={onInputChange}/>
							</label>
							<label className="options">2
								<input type="radio" name={`${question.questionNum}`} onChange={onInputChange}/>
							</label>
							<label className="options">3
								<input type="radio" name={`${question.questionNum}`} onChange={onInputChange}/>
							</label>
						</div>
					</div>
					<hr></hr>
				</li>
			})}
		</ul>
		<span id='errorMessage'>{errorMessage}</span>
		<button onClick={onSubmit}>Submit</button>
      </>
   )
};

export default Quiz;