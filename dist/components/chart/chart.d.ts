import './chart.css';
interface IProps {
    className?: string;
    data: any[];
    width?: string;
    height?: string;
    padding?: number[];
    children: JSX.Element[];
}
export declare const Chart: (props: IProps) => JSX.Element;
export {};
