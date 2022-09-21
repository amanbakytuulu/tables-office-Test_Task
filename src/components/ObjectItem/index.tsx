import React from "react";
import { createUseStyles } from "react-jss";
import { observer } from "mobx-react-lite";
import UserItem from "../UserItem";
import { ObjectBlock } from "./types";
import { ObjectType } from "../../types";
import { SETTING_STYLES } from "../../constants";

interface ObjectItemProps {
  object: ObjectType;
}

const ObjectItem: React.FC<ObjectItemProps> = observer(
  ({ object: { users, ...options } }) => {
    const width = SETTING_STYLES.width[options.type];
    const height = SETTING_STYLES.height[options.type];
    const classes = useStyles({ width, height, ...options });
    return (
      <div className={classes.object__block}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
);

export default ObjectItem;

type RuleName = "object__block";

const useStyles = createUseStyles<RuleName, ObjectBlock>({
  object__block: ({ width, height, angle, left, top, type }) => ({
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid rgb(128 125 125)",
    boxShadow: "2px 2px 3px rgb(237 232 232)",
    width: `${width}px`,
    height: `${height}px`,
    background: SETTING_STYLES.bg[type],
    borderRadius: SETTING_STYLES.radius[type],
    transform: `rotate(${angle}deg)`,
    left: `${left - width / 2}px`,
    top: `${top - height / 2}px`,
  }),
});
