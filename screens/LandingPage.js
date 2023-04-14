import { collection, onSnapshot, query, where } from "@firebase/firestore";
import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import GlobalContext from "../context/Context";
import { auth, db } from "../firebase";
import ContactsFloatingIcon from "../components/ContactsFloatingIcon";
import ListItem from "../components/ListItem";
import useContacts from "../hooks/useHooks";
import Context from "../context/Context"
import { ScrollView } from "react-native-gesture-handler";

export default function LandingPage() {
  const {
    theme: { colors },
  } = useContext(Context);
  const { currentUser } = auth;
  

  return (
    <View style={{flex:1, width: "100%", flexDirection: "column", alignItems: "center", backgroundColor: colors.background, overflow:"scroll"}}>
      
      <View style={{flex:1, alignItems: "center", justifyContent:"center"}}>
        <Text style={{fontFamily: "Verdana", fontSize: 35}}>Hello {currentUser.displayName},</Text>
        <Text style={{fontFamily: "Verdana", fontSize: 20}}>Here are today's updates</Text>
        
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-around", width: "80%"}}>
            <View style={{backgroundColor:"#CA98E1", height: "100%", width: "50%", borderRadius: 20}}></View>
            
            <View style={{flex:1, width: "100%", flexDirection: "column", alignItems:"center"}}>
              <View style={{backgroundColor: "#8F9F56", height: "45%", width: "90%", borderRadius: 20, marginBottom: 10}}></View>
              <View style={{backgroundColor: "#B3BC4D", height: "45%", width: "90%", borderRadius: 20}}></View>
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 1}}>
        <View style={{flex:1, height: "20%", width:"85%"}}>
          <Text style={{textAlign: "center", fontFamily: "Verdana", fontSize: 20}}>Community Notices</Text>
          <ScrollView horizontal={true} pagingEnabled={true} >
            <View style={{flex:1, width: 300, backgroundColor:"#C7C7C7", borderRadius:20, marginRight: 10}}></View>
            <View style={{flex:1, width: 300, backgroundColor:"#C7C7C7", borderRadius:20, marginRight: 10}}></View>
            <View style={{flex:1, width: 300, backgroundColor:"#C7C7C7", borderRadius:20, marginRight: 10}}></View>
          </ScrollView>
        </View>
      </View>
      
      <View style={{flex:1, height: "20%", width:"90%", alignItems:"center"}}>
        <Text style={{textAlign: "center", fontFamily: "Verdana", fontSize: 20}}>My Care</Text>
        <View style={{flex:1, backgroundColor:"#CA98E1", height:100, width: "95%", borderRadius:20}}></View>
      </View>
    </View>
  );
}

