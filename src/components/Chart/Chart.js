import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;






// import React from "react";

// import './Chart.css'
// import ChartBar from './ChartBar'

// const Chart = props => {
//     const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
//     const totalmaximum = Math.max(...dataPointValues);

//     return <div className='chart' >
//         {props.dataPoints.map((datapoint) => (
//             <ChartBar 
//             key={datapoint.label} value={datapoint.value}
//             maxValue={totalmaximum} 
//             label={datapoint.label} />
//         ))}
//     </div>
// };

// export default Chart;