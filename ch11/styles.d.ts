// 11.4.1 ワイルドカードモジュール宣言
// *************************************************
declare module "*.module.css" {
    const styles: {[i:string]: string};
    export default styles;
}