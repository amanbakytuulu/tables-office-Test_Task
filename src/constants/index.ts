import axios from "axios";

export const axiosDefault = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

export const SETTING_STYLES = {
  width: {
    desk: 60,
    pillar: 30,
    table: 120,
  },
  height: {
    desk: 30,
    pillar: 30,
    table: 60,
  },
  bg: {
    desk: "",
    pillar: "#eee",
    table: "",
  },
  radius: {
    desk: "",
    pillar: "50%",
    table: "50px",
  },
};
