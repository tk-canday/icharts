import React, {useState, useEffect, useRef} from 'react';

import F2 from '@antv/f2';

import './chart.css';

interface IProps {
    className?: string;
    data: any[];
    width?: string;
    height?: string;
    padding?: number[];
    children: JSX.Element[];
}

export const Chart = (props: IProps) => {
    const { data, className, padding, width, height } = props;

    const canvasRef = useRef(null);
    const [isInited, setIsInited] = useState(false);
    const [matureChart, setMatureChart] = useState<F2.Chart | null>(null);

    useEffect(() => {
        initChart();
    }, []);

    useEffect(() => {
        // 更新数据
        if (matureChart !== null) {
            matureChart.changeData(data);
        }
    }, [data]);

    const initChart = () => {
        const canvasDom = canvasRef.current;
        if (canvasDom !== null) {
            const chart = new F2.Chart({
                el: canvasDom,
                pixelRatio: devicePixelRatio, // 指定分辨率
                padding,
                width,
                height,
              });

              // Step 1: 载入数据源
            chart.source(data);

            // Step: 2: chart 初始化完毕，去执行图形语法
            setMatureChart(chart);
            setIsInited(true);

            // Step 4: 渲染图表
            setTimeout(() => {
                chart.render();
            }, 0);
        }
    };

    // Step 3：子组件中执行图形语法
    const getChildren = () => {
        if (matureChart === null) {
            return;
        }

        return React.Children.map(props.children, (child) => {
            return React.cloneElement(child, {
                chart: matureChart,
            })
        });
    };

    const render = () => {
        return (
            <div className={`i-chart ${className || ''}`}>
                <canvas ref={canvasRef} />
                {isInited && getChildren()}
            </div>
        );
    };
    return render();
};
