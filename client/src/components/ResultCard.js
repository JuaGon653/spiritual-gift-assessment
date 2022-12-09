import React from 'react';

const ResultCard = ({ results }) => {
    

    return (
        <div className='pt-5'>
			<div className="card">
				<h5 className="card-header">Results</h5>
				<div className="card-body">
					<ul className='list-group'>
						<li className='list-group-item'>1. {results[0]}</li>
						<li className='list-group-item'>2. {results[1]}</li>
						<li className='list-group-item'>3. {results[2]}</li>
					</ul>
                    {
                        results[0] === "Submit A Test For Results" ? '' : (
                            <form id="result-form" action="/quiz" method='POST'>
                        <div>
                            <input type="text" name="firstname" id="firstname"
                            className="card-input" placeholder="First Name" required></input>
                        </div>
                        <div>
                            <input type="text" 
                            className="card-input" name="lastname" id="lastname" placeholder='Last Name' required></input>
                        </div>
                        <input type="hidden" value={results} name="results"/>
                        <button type="submit" className="btn">Send Results</button>
                    </form>
                        )
                    }       
				</div>
			</div>
		</div>
    )
};

export default ResultCard;