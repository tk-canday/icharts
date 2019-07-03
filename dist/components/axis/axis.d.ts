/**
 * @desc 坐标轴
 * @doc https://www.yuque.com/antv/f2/api-axis
 */
import F2 from '@antv/f2';
interface IProps {
    chart?: F2.Chart;
    field: string;
    line?: object;
    label?: object;
    grid?: object | null;
    labelOffset?: object;
    position?: 'left' | 'right' | 'top' | 'bottom';
}
export declare const Axis: (props: IProps) => null;
export {};
