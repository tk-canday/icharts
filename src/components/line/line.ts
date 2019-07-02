/**
 * @desc 折线图
 * @doc https://www.yuque.com/antv/f2/geometry
 */
import F2 from '@antv/f2';

interface IProps {
    chart?: F2.Chart;
    config?: any;
    position: string;
    color?: string | {field: string; value: any}; // 区别各组数据的 field or 线的颜色
    size?: string | {field: string; value: any};  // 线的粗细
    shape?: string | {field: string; value: any}; // 形状: 'line', 'smooth', 'dash'
}

type propsKey = keyof IProps;

export const Line = (props: IProps) => {
    const { chart, config = null } = props;
    if (!chart) {
        return null;
    }
    const geom = chart.line(config);
    const propsKeys = Object.keys(props);

    for (let index = 0; index < propsKeys.length; index++) {
        const key = propsKeys[index];
        if (key === 'chart' || key === 'config') {
            continue;
        }
        // https://www.yuque.com/antv/f2/attribute
        if (typeof geom[key] === 'function') {
            const value = props[key as propsKey];
            if (typeof value === 'object') {
                geom[key](value.field, value.value);
            } else {
                geom[key](value);
            }
        }
    }

    return null;
};
