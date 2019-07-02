export var Scale = function (props) {
    var field = props.field, chart = props.chart;
    if (!chart) {
        return null;
    }
    var propsKeys = Object.keys(props);
    var value = {};
    for (var index = 0; index < propsKeys.length; index++) {
        var key = propsKeys[index];
        if (key === 'chart' || key === 'field') {
            continue;
        }
        value[key] = props[key];
    }
    chart.scale(field, value);
    return null;
};
