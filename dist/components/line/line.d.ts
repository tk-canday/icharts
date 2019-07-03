/**
 * @desc 折线图
 * @doc https://www.yuque.com/antv/f2/geometry
 */
import F2 from '@antv/f2';
interface IProps {
    chart?: F2.Chart;
    config?: any;
    position: string;
    color?: string | {
        field: string;
        value: any;
    };
    size?: string | {
        field: string;
        value: any;
    };
    shape?: string | {
        field: string;
        value: any;
    };
}
export declare const Line: (props: IProps) => null;
export {};
