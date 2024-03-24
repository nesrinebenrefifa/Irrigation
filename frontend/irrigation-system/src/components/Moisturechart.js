import React from 'react'
import { Line } from '@ant-design/plots';
import '../Hum.css'

function Moisturechart() {
    const data = [
        { type: '12.30', value: 90 },
   
    { time: '12.31', value: 100 },
    { time: '12.50', value: 200 },
    { time: '13.00', value: 300 },
    { time: '13.07', value: 600},
    { time: '13.15', value:750 },
    { time: '13.55', value: 800 },
      ];
      const config = {
        data,
        xField: 'time',
        yField: 'value',
        point: {
          shapeField: 'square',
          sizeField: 4,
        },
        interaction: {
          tooltip: {
            marker: false,
          },
        },
        style: {
          lineWidth: 2,
        },
      };
  return (
    <div className='chart'>
    <Line {...config} />
    <h4>Moisture value Profile</h4>
  </div>
)
  
}

export default Moisturechart
