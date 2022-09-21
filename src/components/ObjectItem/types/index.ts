import { ObjectType } from "../../../types";

export interface ObjectBlock extends Omit<ObjectType, "users"> {
  width: number;
  height: number;
}
