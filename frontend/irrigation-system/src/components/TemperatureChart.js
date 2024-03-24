

import React from 'react';
import { Column } from '@ant-design/plots';
import '../Hum.css'

const TemperatureChart = () => {
  // Données de température factices pour l'exemple

 
  const data = [
    { type: '12.30', value: 16 },
    { type: '12.32', value: 17 },
   
    { type: '12.45', value: 24 },
    { type: '12.50', value: 25 },
    { type: '13.00', value: 25 },
    { type: '13.07', value: 26},
    { type: '13.15', value:27 },
    { type: '13.55', value: 27 },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    style: {
      fill: ({ value }) => {
        if (value === 16 || value === 17) {
          return '#228B22';
        }
        return '#FF0000';
      },
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.value);
        if (val < 25) {
          return (val * 100).toFixed(1) + '%';
        }
        return '';
      },
      offset: 10,
    },
    legend: false,
  };

  return (
    <div className='charttem'>
     
      <Column {...config} />
    </div>
  );
};

export default TemperatureChart;
