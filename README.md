# Ghana Health Service Home Visits Tracker

## Overview
Ghana Health Service Home Visits Tracker is a mobile application engineered for DEWB (Doctors and Engineers Without Border). GHS Home Visits Tracker aims to facilitate maternal and child healthcare access in rural Ghana, expanding access to communication, notificatiions, prescriptions, and appointments. The app is ultimately a combination of a specialized electronic health record and telehealth service for health providers, community health workers, and patients.

## App Features

| Sign In/Up Auth | Community Notices | Physician Messaging |  1-1 Chat Features  | Notifications |
| --- | --- | --- | --- | --- |
| <img src="https://user-images.githubusercontent.com/64095665/236744176-d8179ca7-3e38-4063-9501-190c4cd5d873.PNG" width="160" height="300"> | <img src="https://user-images.githubusercontent.com/64095665/236744218-aad6565c-2d62-422e-9875-b7f63a6d9ff3.PNG" width="160" height="300"> | <img src="https://user-images.githubusercontent.com/64095665/236744295-ebaf6288-e8d0-4196-baac-f95c741a3dd9.PNG" width="160" height="300"> | <img src="https://user-images.githubusercontent.com/64095665/236744360-b831d7e4-8b98-4725-a213-9036bc995e39.PNG" width="160" height="300"> | <img src="https://user-images.githubusercontent.com/64095665/236744489-84c2557b-db23-498a-a491-eed1f3f87cc5.PNG" width="160" height="300"> |

## Codebase

The frontend is a React Native app coded mostly in Javascript, using Expo Go for mobile app deployment. The backend uses Firebase Auth and Firestore Database for secure patient & physician data storage. Wireframe UI mockups are designed using Figma. See Design Mockups: https://www.figma.com/file/xtHG2GzdyWOTMuTpztyPhT/DEWB?type=design&node-id=0-1

## Set up
1. Make sure you have **Expo Go** and **npm/yarn** installed on your mobile device and laptop/desktop running your IDE respectively. 

2. Install all dependencies
    ```
    yarn install
    npx expo install react-native@0.71.7
    ```
   Please note that the version number following react-native@ may differ. 
   
3. Run frontend
    ```
    npx expo start
    ```
    Your terminal should give you yellow-colored instructions if you're missing installations.
    
4. Scan **QR code** that appears in terminal using your mobile device to access application on **Expo Go**.

5. You should now see a **login page** on your mobile app. Enter an existing or new account to login or sign up.

6. [For Developers] Log into the Firebase console using account corresponding to dewb.devs@gmail.com. Your **login password** and **credentials** will be provided to you if you are a DEWB developer.

7. [For Developers] In the Firebase console, go to **Firestore Database** and **Firestore Authentication** to access backend. You should see your account show up in the backend service immediately after you add an account.

8. Going back to your mobile app, you should now see a profile entry. Enter an appropriate username.

9. You should now be able to access the **landing page**, **chat features**, and **notifications**.

