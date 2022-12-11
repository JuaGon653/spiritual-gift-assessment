import React, { useState, useEffect } from 'react';
import data from '../data.js';
import ResultCard from '../components/ResultCard.js';

const Quiz = () => {
	const answers = new Array(64);
	const [errorMessage, setErrorMessage] = useState('');
	const [results, setResults] = useState(['Submit A Test For Results', 'Submit A Test For Results', 'Submit A Test For Results']);

	useEffect(() => {
		window.scroll({ top: 0, left: 0 });
	}, []);

	function onInputChange(e) {
		answers[e.target.name - 1] = parseInt(e.target.parentNode.textContent);
	};
	function onSubmit(event) {
		if (answers.includes(undefined)) {
			setErrorMessage('Please select an answer for all questions.');
			return;
		}
		setErrorMessage('');
		function sortHighToLow(array) {
			array.sort((a, b) => parseInt(a.substring(2)) < parseInt(b.substring(2)) ? 1 : parseInt(a.substring(2)) > parseInt(b.substring(2)) ? -1 : 0);
			return array;
		}
		const unsortedList = new Array(16)
		const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

		for (let i = 0; i < unsortedList.length; i++) { 
			unsortedList[i] = `${alphabet[i]} ${answers[i] + answers[i+16] + answers[i+32] + answers[i+48]}` 
		}
		const sortedList = sortHighToLow(unsortedList);
		for(let i = 0; i < sortedList.length; i++) {
			switch (sortedList[i].charAt(0)) {
				case 'a':
					sortedList[i] = 'Wisdom ' + sortedList[i].substring(2);
					break;
				case 'b':
					sortedList[i] = 'Teaching ' + sortedList[i].substring(2);
					break;
				case 'c':
					sortedList[i] = 'Shepherding ' + sortedList[i].substring(2);
					break;
				case 'd':
					sortedList[i] = 'Prophecy ' + sortedList[i].substring(2);
					break;
				case 'e':
					sortedList[i] = 'Mercy ' + sortedList[i].substring(2);
					break;
				case 'f':
					sortedList[i] = 'Leadership ' + sortedList[i].substring(2);
					break;
				case 'g':
					sortedList[i] = 'Knowledge ' + sortedList[i].substring(2);
					break;
				case 'h':
					sortedList[i] = 'Intercession ' + sortedList[i].substring(2);
					break;
				case 'i':
					sortedList[i] = 'Hospitality ' + sortedList[i].substring(2);
					break;
				case 'j':
					sortedList[i] = 'Helps ' + sortedList[i].substring(2);
					break;
				case 'k':
					sortedList[i] = 'Giving ' + sortedList[i].substring(2);
					break;
				case 'l':
					sortedList[i] = 'Faith ' + sortedList[i].substring(2);
					break;
				case 'm':
					sortedList[i] = 'Evangelism ' + sortedList[i].substring(2);
					break;
				case 'n':
					sortedList[i] = 'Encouragement ' + sortedList[i].substring(2);
					break;
				case 'o':
					sortedList[i] = 'Discernment ' + sortedList[i].substring(2);
					break;
				case 'p':
					sortedList[i] = 'Administration ' + sortedList[i].substring(2);
					break;
			}
		};
		console.log(sortedList);
		setResults(sortedList);
		for(let i = 1; i <= answers.length; i++) {
			for(let x = 0; x < document.getElementsByName(i).length; x++) {
				document.getElementsByName(i)[x].checked = false;
			}
		}
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
		<ResultCard results={results} />
      </div>
   )
};

export default Quiz;