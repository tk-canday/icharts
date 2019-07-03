/**
 * @Desc  TS 自定义类型声明文件
 */

// ----- 三方非模块化类库提供的全局变量 ------
declare module '@antv/f2' {
    class Chart {
        constructor(config: {
            el: String;
            pixelRatio: number;
            padding: number[] | undefined;
            width: String | undefined;
            height: String | undefined;
        });
        render(): void;
        line(config?: any): any;
        source(data: any[]): void;
        changeData(data: any[]): any;
        scale(field: string, value: {[name: string]: any}): any;
        [name: string]: any;
    }
    export const F2 : {
        Chart: Chart;
    }
}