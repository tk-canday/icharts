import React, {useState} from 'react';
import { Axis, Line, Chart, Scale } from '../../dist';

export const LineChart = (): JSX.Element => {
  const initData = [
    {
      date: 1529856000000,
      type: '本基金',
      rate: 0.02,
    },
    {
      date: 1529942400000,
      type: '本基金',
      rate: 0.082,
    },
    {
      date: 1530028800000,
      type: '本基金',
      rate: 0.14,
    },
    {
      date: 1530115200000,
      type: '本基金',
      rate: -0.3,
    },
    {
      date: 1530201600000,
      type: '本基金',
      rate: -0.139,
    },
    {
      date: 1529856000000,
      type: '同类均值',
      rate: 0,
    },
    {
      date: 1529942400000,
      type: '同类均值',
      rate: -0.175,
    },
    {
      date: 1530028800000,
      type: '同类均值',
      rate: -0.164,
    },
    {
      date: 1530115200000,
      type: '同类均值',
      rate: -0.055,
    },
    {
      date: 1530201600000,
      type: '同类均值',
      rate: -0.13,
    },
  ];
  const [data] = useState(initData);

  const colorValue = (field: string) => {
    if (field === '同类均值') {
      return '#0366d6';
    } else {
      return '#FFBD2B'
    }
  };

  const formatterRate = (rate: string) => {
    return rate + '%';
  };

  const render = () => {
      return (
          <div className="line-chart">
              <Chart data={data} padding={[60, 0, 80, 50]}>
                  <Line position="date*rate" color={{field: 'type', value: colorValue}} size="2"/>
                  <Scale field="rate" tickCount={5} formatter={formatterRate} />
                  <Scale field="date" tickCount={4} type="timeCat" />
                  <Axis field="date" label={{rotate: -Math.PI / 3, textAlign: 'end', translate: '(20, 20)'}} />
              </Chart>
          </div>
      );
  };
  return render();
};
