import React from "react";
import { observer } from "mobx-react-lite";
import { createUseStyles } from "react-jss";
import ObjectItem from "../../components/ObjectItem";
import Loader from "../../components/Loader";
import store from "../../store/store";

const OfficeSchema = observer(() => {
  const { objects, isLoading } = store;
  const classes = useStyles();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={classes.office}>
      {objects.map((object) => (
        <ObjectItem key={object.id} object={object} />
      ))}
    </div>
  );
});

export default OfficeSchema;

const useStyles = createUseStyles({
  office: {
    border: "1px solid #c3c1c1",
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
});
