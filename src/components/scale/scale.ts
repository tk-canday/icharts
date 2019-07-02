/**
 * @desc 度量
 * @doc https://www.yuque.com/antv/f2/api-scale
 */
import F2 from '@antv/f2';

interface IProps {
    chart?: F2.Chart;
    field: string;  // field name
    type?: 'identity' | 'linear' | 'cat' | 'timeCat';  // 度量类型
    range?: number[];   // 数据范围 [0, 1]
    tickCount?: number; // 刻度个数
    formatter?: (arg: any) => string;  // format label

    min?: number;   // 最小值
    max?: number;   // 最大值
}
type IScale = Pick<IProps, 'type' | 'range' | 'tickCount' | 'formatter'>;
type valueKey = keyof IScale;

export const Scale = (props: IProps) => {
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

    chart.scale(field, value);
    return null;
};
