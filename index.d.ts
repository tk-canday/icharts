declare module '@canday/icharts/components/axis/axis' {
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
  export const Axis: (props: IProps) => null;
  export {};

}
declare module '@canday/icharts/components/chart/chart' {
  import './chart.css';
  interface IProps {
      className?: string;
      data: any[];
      width?: string;
      height?: string;
      padding?: number[];
      children: JSX.Element[];
  }
  export const Chart: (props: IProps) => JSX.Element;
  export {};

}
declare module '@canday/icharts/components/line/line' {
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
  export const Line: (props: IProps) => null;
  export {};

}
declare module '@canday/icharts/components/scale/scale' {
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
  export const Scale: (props: IProps) => null;
  export {};

}
declare module '@canday/icharts/index' {
  import { Axis } from '@canday/icharts/components/axis/axis';
  import { Chart } from '@canday/icharts/components/chart/chart';
  import { Line } from '@canday/icharts/components/line/line';
  import { Scale } from '@canday/icharts/components/scale/scale';
  export { Axis, Line, Scale, Chart, };

}
declare module '@canday/icharts' {
  import main = require('@canday/icharts/index');
  export = main;
}