import { collection, onSnapshot, query, where } from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import GlobalContext from "../context/Context";
import { auth, db } from "../firebase";
import NotifFloatingIcon from "../components/NotifFloatingIcon";
import ListItem from "../components/ListItem";
import useContacts from "../hooks/useHooks";
import NotifListItem from "../components/NotifListItem"


export default function Notifications() {
    const { currentUser } = auth;
    const [notifRooms, setNotifRooms] = useState([]);
    const contacts = useContacts();
    const {
        theme: { colors },
        } = useContext(GlobalContext);
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
        setNotifRooms(parsedNotifs.filter((doc) => doc.lastNotif))

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
      <View style={{ flex: 1, padding: 5, paddingRight: 10, backgroundColor: colors.background }}>
        <Text style={{color: colors.notif}}>YOUR NOTIFICATIONS</Text>
        {notifRooms.map((notifRoom) => (
          <NotifListItem
            type="notif"
            description={notifRoom.lastNotif.text}
            key={notifRoom.id}
            room={notifRoom}
            time={notifRoom.lastNotif.createdAt}
            user={getUserB(notifRoom.userB, contacts)}
          />
        ))}
        <NotifFloatingIcon />
      </View>
    );
  }