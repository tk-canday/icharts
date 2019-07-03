/**
 * @desc 度量
 * @doc https://www.yuque.com/antv/f2/api-scale
 */
import F2 from '@antv/f2';
interface IProps {
    chart?: F2.Chart;
    field: string;
    type?: 'identity' | 'linear' | 'cat' | 'timeCat';
    range?: number[];
    tickCount?: number;
    formatter?: (arg: any) => string;
    min?: number;
    max?: number;
}
export declare const Scale: (props: IProps) => null;
export {};
