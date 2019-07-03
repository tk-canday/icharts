# icharts

## 说明

`icharts` 是基于 [F2](https://antv.alipay.com/zh-cn/f2/3.x/index.html) 的 React 图表库。 具有轻量、灵活、高复用、可拔插的特点

## 安装

```bash
$ npm install @canday/icharts --save
```

## 使用

```jsx
import React from 'react';
import { Axis, Line, Chart, Scale } from 'icharts';

export const LineChart = (): JSX.Element => {
  const data = [
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

  const dateAxisStyle = {
      rotate: -Math.PI / 3,
      textAlign: 'end',
      translate: '(20, 20)'
  };

  return (
    <div className="line-chart">
        <Chart data={data} padding={[60, 0, 80, 50]}>
            <Line position="date*rate" color={{field: 'type', value: colorValue}} />
            <Scale field="rate" tickCount={5} formatter={formatterRate} />
            <Scale field="date" tickCount={4} type="timeCat" />
            <Axis field="date" label={dateAxisStyle} />
        </Chart>
    </div>
  );
};
```

![chart](http://m.qpic.cn/psb?/V11MoL6F3QoSam/WKotETzmKP1XlP62smKX8Aa9uhLlsUL77wN7Y4CCIzc!/b/dFMBAAAAAAAA&bo=tARuAgAAAAADB*4!&rf=viewer_4)
