import React, { useContext } from 'react';
import './dashboard.css';
import {ResultsContext} from '../contexts/results';

function Dashboard () {
  // const resultsContext = useContext(ResultsContext);
  const context = useContext( ResultsContext );

return(
<>

  <div className='table-div'>
    <table>
      <thead>
        <tr>
          <th>Calculator's Results</th>
        </tr>
      </thead>
      <tbody>
        {context.results.map( ( result, idx ) => (
          <tr key={idx}>
            <td>{result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</>
)
}

export default Dashboard