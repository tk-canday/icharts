import React, { useState, useEffect, useRef } from 'react';
import F2 from '@antv/f2';
import './chart.css';
export var Chart = function (props) {
    var data = props.data, className = props.className, padding = props.padding, width = props.width, height = props.height;
    var canvasRef = useRef(null);
    var _a = useState(false), isInited = _a[0], setIsInited = _a[1];
    var _b = useState(null), matureChart = _b[0], setMatureChart = _b[1];
    useEffect(function () {
        initChart();
    }, []);
    useEffect(function () {
        // 更新数据
        if (matureChart !== null) {
            matureChart.changeData(data);
        }
    }, [data]);
    var initChart = function () {
        var canvasDom = canvasRef.current;
        if (canvasDom !== null) {
            var chart_1 = new F2.Chart({
                el: canvasDom,
                pixelRatio: devicePixelRatio,
                padding: padding,
                width: width,
                height: height,
            });
            // Step 1: 载入数据源
            chart_1.source(data);
            // Step: 2: chart 初始化完毕，去执行图形语法
            setMatureChart(chart_1);
            setIsInited(true);
            // Step 4: 渲染图表
            setTimeout(function () {
                chart_1.render();
            }, 0);
        }
    };
    // Step 3：子组件中执行图形语法
    var getChildren = function () {
        if (matureChart === null) {
            return;
        }
        return React.Children.map(props.children, function (child) {
            return React.cloneElement(child, {
                chart: matureChart,
            });
        });
    };
    var render = function () {
        return (React.createElement("div", { className: "i-chart " + (className || '') },
            React.createElement("canvas", { ref: canvasRef }),
            isInited && getChildren()));
    };
    return render();
};
