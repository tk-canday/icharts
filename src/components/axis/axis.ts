/**
 * @desc 坐标轴
 * @doc https://www.yuque.com/antv/f2/api-axis
 */
import F2 from '@antv/f2';

interface IProps {
    chart?: F2.Chart;
    field: string;  // field name
    line?: object;  // 坐标轴线样式
    label?: object; // label 坐标文本样式
    grid?: object | null; // 网格线，为 null 时不显示
    labelOffset?: object; // label 距离坐标轴的大小
    position?: 'left' | 'right' | 'top' | 'bottom'; // 坐标轴位置
}
type IScale = Pick<IProps, 'line'>;
type valueKey = keyof IScale;

export const Axis = (props: IProps) => {
    const { field, chart } = props;
    if (!chart) {
        return null;
    }
    const propsKeys = Object.keys(props);
    const value: IScale = {};
    for (let index = 0; index < propsKeys.length; index++) {
        const key = propsKeys[index];
        if (key === 'chart' || key === 'field') {
            continue;
        }
        value[key as valueKey] = props[key as valueKey];
    }

    chart.axis(field, value);
    return null;
};
