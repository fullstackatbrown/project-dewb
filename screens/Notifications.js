import { collection, onSnapshot, query, where } from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import NotifGlobalContext from "../context/NotifContext";
import { auth, db } from "../firebase";
import ContactsFloatingIcon from "../components/ContactsFloatingIcon";
import ListItem from "../components/ListItem";
import useContacts from "../hooks/useHooks";

export default function Notifications() {
  const { currentUser } = auth;
//   const { notifRooms, setNotifRooms, setUnfilteredNotifRooms } = useContext(NotifGlobalContext);
    const [notifRooms, setNotifRooms] = useState([]);
  const contacts = useContacts();
  const notifsQuery = query(
    collection(db, "notifications"),
    where("participantsArray", "array-contains", currentUser.email)
  );
  useEffect(() => {
    const unsubscribe = onSnapshot(notifsQuery, (querySnapshot) => {
      const parsedNotifs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        userB: doc
          .data()
          .participants.find((p) => p.email !== currentUser.email),
      }));
    //   setUnfilteredNotifRooms(parsedNotifs);
    //   console.log(parsedNotifs)
      setNotifRooms(parsedNotifs.filter((doc) => doc.lastNotif))
    //   console.log(parsedNotifs.filter((doc) => doc.lastNotif));
    console.log("this is notifRooms")
      console.log(notifRooms)
    });
    return () => unsubscribe();
  }, []);

  function getUserB(user, contacts) {
    const userContact = contacts.find((c) => c.email === user.email);
    if (userContact && userContact.contactName) {
      return { ...user, contactName: userContact.contactName };
    }
    return user;
  }

  return (
    <View style={{ flex: 1, padding: 5, paddingRight: 10 }}>
      {notifRooms.map((notifRoom) => (
        <ListItem
          type="notif"
          description={notifRoom.lastNotif.text}
          key={notifRoom.id}
          room={notifRoom}
          time={notifRoom.lastNotif.createdAt}
          user={getUserB(notifRoom.userB, contacts)}
        />
      ))}
      {/* <ContactsFloatingIcon /> */}
    </View>
  );
}
