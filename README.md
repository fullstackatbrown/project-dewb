# Ghana Health Service Home Visits Tracker

## Codebase

The frontend is a React Native app written in Javascript, and uses Expo Go for deployment. The backend uses Firebase for Authentication and Database storage.

## Set up
1. Make sure you have Expo Go and npm/yarn installed on your device(s)
2. Install all dependencies
    ```
    yarn install
    npx expo install react-native@0.71.7
    ```
   Please note that the version number following react-native@ may differ. Your terminal should give you yellow-colored instructions after step 3.
3. Run frontend
    ```
    npx expo start
    ```
4. Scan QR code that appears in terminal on phone to access application on Expo Go.

5. You should now see a login page on your mobile app. Enter an existing or new account to login or sign up.

6. Log into the Firebase console using account corresponding to dewb.devs@gmail.com. Your login password and credentials will be provided to you if you are a DEWB developer.

7. In the Firebase console, go to **Firestore Database** and **Firestore Authentication**. You should see your account show up in the backend service immediately after you add an account.

8. Going back to your mobile app, you should now see a profile entry. Enter an appropriate username.

9. You should now be able to access the landing page, chat features, and notifications.

## App Images

![IMG_3240](https://user-images.githubusercontent.com/64095665/236744176-d8179ca7-3e38-4063-9501-190c4cd5d873.PNG)
![IMG_3246](https://user-images.githubusercontent.com/64095665/236744218-aad6565c-2d62-422e-9875-b7f63a6d9ff3.PNG)
![IMG_3247](https://user-images.githubusercontent.com/64095665/236744295-ebaf6288-e8d0-4196-baac-f95c741a3dd9.PNG)
![IMG_3248](https://user-images.githubusercontent.com/64095665/236744360-b831d7e4-8b98-4725-a213-9036bc995e39.PNG)
![IMG_3249](https://user-images.githubusercontent.com/64095665/236744489-84c2557b-db23-498a-a491-eed1f3f87cc5.PNG)

