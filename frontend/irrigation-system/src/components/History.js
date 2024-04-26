import React from 'react';
import Dashbord from './Dashbord';

const History = () => {
  // Dummy data for irrigation history
  const irrigationHistory = [
    { date: '2024-03-01', duration: '30 minutes', result: 'Success' },
    { date: '2024-02-25', duration: '20 minutes', result: 'Success' },
    { date: '2024-02-20', duration: '25 minutes', result: 'Success' },
    { date: '2024-02-15', duration: '30 minutes', result: 'Failed' },
  ];

  return (
    
    <div className='hist'>
       <Dashbord/>
      <h2>Irrigation History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Duration</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {irrigationHistory.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.duration}</td>
              <td>{entry.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
