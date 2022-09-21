import React from "react";
import { createUseStyles } from "react-jss";
import { UserType } from "../../types";

interface UserItemProps {
  user: UserType;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const classes = useStyles();
  return (
    <img className={classes.user__img} src={user.avatar} alt={user.name} />
  );
};

export default UserItem;

const useStyles = createUseStyles({
  user__img: {
    borderRadius: "50%",
  },
});
