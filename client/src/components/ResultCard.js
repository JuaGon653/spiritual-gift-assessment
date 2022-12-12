import React from 'react';

const ResultCard = ({ results }) => {
    

    return (
        <div className='pt-5'>
			<div className="card">
				<h5 className="card-header">Results</h5>
				<div className="card-body">
					<ul className='list-group'>
                        {
                            results.map((result, index) => {
                                return <li className='list-group-item card-list-item' key={index + 1 }>
                                    <span>{index + 1}. {result.substring(0, result.length - 2)}</span>
                                    <span>{result.substring(result.length - 2)}</span>
                                </li>
                            })
                        }
					</ul>
                    {
                        results[0] === "Submit A Test For Results  " ? '' : (
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