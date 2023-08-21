// 11.2.3　グローバルな拡張
// *************************************************
import { Data } from "./data";

declare global {
    const globallyDeclared: Data;
}

declare const locallyDeclared: Data;

