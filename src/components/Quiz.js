import React, { useState } from 'react';
import data from '../data.js';

const Quiz = () => {
	const answers = new Array(64);
	const [errorMessage, setErrorMessage] = useState('');
	const [results, setResults] = useState(['Submit A Test For Results', 'Submit A Test For Results', 'Submit A Test For Results']);

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
			array.sort((a, b) => parseInt(a.substring(2)) < parseInt(b.substring(2)) ? 1 : parseInt(a.substring(2)) > parseInt(b.substring(2)) ? -1 : 0);
			return array;
		}
		const highestToLowest = new Array(16)
		const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

		for (let i = 0; i < highestToLowest.length; i++) {
			let aIndex = Math.trunc(i / 4); 
			highestToLowest[i] = `${alphabet[aIndex]} ${answers[i] + answers[i+16] + answers[i+32] + answers[i+48]}` 
		}
		const threeResults = findLargest3(highestToLowest).slice(0,3);
		for(let i = 0; i < threeResults.length; i++) {
			switch (threeResults[i].charAt(0)) {
				case 'a':
					threeResults[i] = 'Wisdom';
					break;
				case 'b':
					threeResults[i] = 'Teaching';
					break;
				case 'c':
					threeResults[i] = 'Shepherding';
					break;
				case 'd':
					threeResults[i] = 'Prophecy';
					break;
				case 'e':
					threeResults[i] = 'Mercy';
					break;
				case 'f':
					threeResults[i] = 'Leadership';
					break;
				case 'g':
					threeResults[i] = 'Knowledge';
					break;
				case 'h':
					threeResults[i] = 'intercession';
					break;
				case 'i':
					threeResults[i] = 'Hospitality';
					break;
				case 'j':
					threeResults[i] = 'Helps';
					break;
				case 'k':
					threeResults[i] = 'Giving';
					break;
				case 'l':
					threeResults[i] = 'Faith';
					break;
				case 'm':
					threeResults[i] = 'Evangelism';
					break;
				case 'n':
					threeResults[i] = 'Discernment';
					break;
				case 'o':
					threeResults[i] = 'Administration';
					break;
				case 'p':
					threeResults[i] = 'Wisdom';
					break;
			}
		}
		setResults(threeResults);
	};

   return (
      <div className='custom-container p-4'>
		<p className='pt-3'>
			Read each statement below, and then respond by selecting the number that corresponds with the statement that best fits how you would describe yourself according to the scale below.
			<br />
			3 — consistently/frequently true
			<br />
			2 — occasionally true
			<br />
			1 — infrequently true
			<br />
			0 — rarely true
		</p>
		<ul className='p-4'>
			{data.map((question) => {
				return <li className='list-group-item pb-2' key={question.questionNum}>
					<div>
						<h5>{question.questionNum}. {question.question}</h5>
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
		<button className='btn' onClick={onSubmit}>Submit</button>
		<div className='pt-5'>
			<div className="card">
				<h5 className="card-header">Results</h5>
				<div className="card-body">
					<ul className='list-group'>
						<li className='list-group-item'>{results[0]}</li>
						<li className='list-group-item'>{results[1]}</li>
						<li className='list-group-item'>{results[2]}</li>
					</ul>
				</div>
			</div>
		</div>
		
      </div>
   )
};

export default Quiz;