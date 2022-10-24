import React from 'react';
import './dashboard.css';
import Navbar from './navbar';

function Dashboard () {
return(
<>
<Navbar />

  <div className='table-div'>
    <table>
      <thead>
        <tr>
          <th>Calculator's Results</th>
        </tr>
      </thead>
      <tbody>
        <tr>

        </tr>
      </tbody>
    </table>
  </div>
</>
)
}

export default Dashboard