import React from 'react'
import { Line } from '@ant-design/plots';
import '../Hum.css'
function Humiditychart() {
    const data = [
        { type: '12.30', value: 180 },
   
        { time: '12.31', value: 200 },
        { time: '12.50', value: 230 },
        { time: '13.00', value: 240 },
        { time: '13.07', value: 255},
        { time: '13.15', value:260 },
        { time: '13.55', value: 270 },
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
      <h4>humidity Profile</h4>
    </div>
  )
}

export default Humiditychart
