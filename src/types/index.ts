export interface UserType {
  id: number;
  name: string;
  avatar: string;
  position: string;
  object_id: number;
}

export interface ObjectType {
  id: number;
  type: "desk" | "pillar" | "table";
  left: number;
  top: number;
  angle: number;
  users: UserType[];
}
