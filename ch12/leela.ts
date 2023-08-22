// 12.1.3　実装の検索
// *************************************************
import { AI } from "./ai";

export class Leela implements AI {
  stage = 0;
  advance(): void {
    this.stage += 1;
  }
}
