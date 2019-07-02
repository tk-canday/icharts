export var Line = function (props) {
    var chart = props.chart, _a = props.config, config = _a === void 0 ? null : _a;
    if (!chart) {
        return null;
    }
    var geom = chart.line(config);
    var propsKeys = Object.keys(props);
    for (var index = 0; index < propsKeys.length; index++) {
        var key = propsKeys[index];
        if (key === 'chart' || key === 'config') {
            continue;
        }
        // https://www.yuque.com/antv/f2/attribute
        if (typeof geom[key] === 'function') {
            var value = props[key];
            if (typeof value === 'object') {
                geom[key](value.field, value.value);
            }
            else {
                geom[key](value);
            }
        }
    }
    return null;
};
