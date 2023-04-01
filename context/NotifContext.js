import React from "react";
import { theme } from "../utils";

const NotifGlobalContext = React.createContext({
  theme,
  notifRooms: [],
  setNotifRooms: () => {},
  unfilteredNotifRooms: [],
  setUnfilteredNotifRooms: () => {}
});

export default NotifGlobalContext;