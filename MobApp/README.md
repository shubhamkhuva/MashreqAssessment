# Mob App - Next JS

## Tech Stack

- React Native
- Platform: Android, iOS
- i18next
- @backpackapp-io/react-native-toast
- Redux
- react-native-push-notification
- Jest
- 
### Screenshots - iOS

<div style="display:flex;">
  <img src="screenshot/iOS - Login - English.png" alt="iOS Login" width="150" />  
  <img src="screenshot/iOS - Login - Hindi.png" alt="iOS Login" width="150" />  
  <img src="screenshot/iOS - Login - French.png" alt="iOS Login" width="150" />  
  <img src="screenshot/iOS - Register - English.png" alt="iOS Register" width="150" />  
  <img src="screenshot/iOS - Dashboard - English.png" alt="iOS Dashboard" width="150" />
</div>

### Screenshots - Android

<div style="display:flex;">
    <img src="screenshot/Android - Login - English.png" alt="Android Login" width="200"/>
    <img src="screenshot/Android - Dashboard - Notification.png" alt="Android Dashboard Notification" width="200" />
</div>

## Run Locally

**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

Clone the project

```bash
  git clone https://github.com/shubhamkhuva/MashreqAssessment.git
```

Go to the project directory

```bash
  cd MobApp
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  cd ios
  pod install
  cd ..
```

### Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
