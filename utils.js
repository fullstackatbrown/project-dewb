import * as ImagePicker from "expo-image-picker";
import "react-native-get-random-values";
import { nanoid }from 'nanoid'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { storage } from "./firebase"
export async function pickImage() {
  let result = ImagePicker.launchCameraAsync();
  return result;
}
export async function askForPermission() {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  return status;
}

export async function uploadImage(uri, path, fName) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    const fileName = fName || nanoid();
    const imageRef = ref(storage, `${path}/${fileName}.jpeg`);
  
    const snapshot = await uploadBytes(imageRef, blob, {
      contentType: "image/jpeg",
    });
  
    blob.close();
  
    const url = await getDownloadURL(snapshot.ref);
  
    return { url, fileName };
  }
  


const palette = {
  paleBeige: "#F5EEE2",
  brightYellow: "#FFCF24",
  purple: "#CA98E1",
  lightGreen: "#B3BC4D",
  skyblue: "#34b7f1",
  blue: "#4169e1",
  smokeWhite: "#ece5dd",
  white: "white",
  gray: "#3C3C3C",
  lightGray: "#757575",
  iconGray: "#717171",
  darkPurple: "#871F78",
  darkGreen: "#006400"
};

export const theme = {
  colors: {
    topheader: palette.paleBeige,
    background: palette.paleBeige,
    foreground: palette.brightYellow,
    primary: palette.paleBeige,
    tertiary: palette.blue,
    secondary: palette.purple,
    white: palette.white,
    text: palette.gray,
    secondaryText: palette.lightGray,
    iconGray: palette.iconGray,
    notif: palette.lightGreen,
    darkpurple: palette.darkPurple,
    darkgreen: palette.darkGreen
  },
};
