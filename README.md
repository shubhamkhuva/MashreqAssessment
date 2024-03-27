# Mashreq Bank Assessment

## Tech Stack

[![nextjs](https://img.shields.io/badge/nextjs-14-417e38?style=for-the-badge&logo=npm&logoColor=white)](https://nextjs.org)

[![nextjs](https://img.shields.io/badge/react_native-0.73-417e38?style=for-the-badge&logo=react&logoColor=white)](https://nextjs.org)

[![nextjs](https://img.shields.io/badge/nextjs-API-417e38?style=for-the-badge&logo=npm&logoColor=white)](https://nextjs.org)

[![mysql](https://img.shields.io/badge/mysql-555555?style=for-the-badge&logo=mysql&logoColor=white)](https://freedb.tech/)

## Part 1: Mobile App (React Native)

##### Functionality:

- ##### Does the mobile app validate usernames according to country-specific rules?
  - For the default country UAE "Username must be alphanumeric and min 5 characters"
  - For the India "Username must be alpha and min 6 characters"
  - For the country India "Username must be alphanumeric and min 8 characters"
  - For rest of countries "Username must be alphanumeric and min 3 characters"
  - If value contains @ then act as Email Address with regular validation placed.
- ##### Does the app work base on different locale selection?
  The app functions based on multiple language selections across the entire app as well as the logo.
  Supported languages include:
  - English (Default)
  - Hindi
  - French
- ##### Does the app display stored user data as intended?

  Once user logged in, we will retrieve data from the database via the web-app, store it in Redux, and display it on the Dashboard interface.

- ##### Is the native module integrated and functioning properly as expected?

  Yes, Native Module which is Push Notification using Firebase intergrated.

- ##### Is the theme based on country applied on successful login.
  Depending on the chosen country, the language and logo will change.

##### Code Quality:

- ##### Is the React Native codebase clean, well-organized, and following best practices?
  Yes, the project structure and code are organized thanks to the prettifier, and the file names are properly specified.
- ##### Are there proper comments and error handling mechanisms?
- ##### Are all the test cases passing and covers the requirements?
  Yes both project covered with test cases with library mock.
- ##### Is the code written in a modular manner for reusability?
  Yes, code written in an easy-to-understand format and separated into components encourages reusability.

##### Security:

- ##### Is user data stored securely on the device?
  App store data after login in context as well as async-storage.
- ##### Are there measures in place to prevent unauthorized access to stored data?
  While login i used AES algorithm to encrypt string and pass to server so secure login.

## Part 2: Web App (Next JS)

##### Functionality:

- ##### Does the web app authenticate users based on the credentials stored via the mobile app?
  Yes, there is a button to create an account on the login page. When we click it, we are prompted to enter our full name, username, email address, and password. After successfully registering, we may log in to the web application and use the same other way to access the mobile application.
- ##### Does the web app apply the same country-specific username validation rules?
  Yes, validation same as Mobile App followed by:
  - For the default country UAE "Username must be alphanumeric and min 5 characters"
  - For the India "Username must be alpha and min 6 characters"
  - For the country India "Username must be alphanumeric and min 8 characters"
  - For rest of countries "Username must be alphanumeric and min 3 characters"
  - If value contains @ then act as Email Address with regular validation placed.
- ##### Is the theme applied based on the country and user type.
  Depending on the chosen country, the language and logo will change.
- ##### Is the locale selection working as per the requirement.
  Depending on language selection text of system will change will be visible selected language data.

##### Code Quality:

- ##### Is the React web codebase clean, well-organized, and following best practices?
  Yes, the project structure and code are organized thanks to the prettifier, and the file names are properly specified.
- ##### Are there proper comments and error handling mechanisms?
- ##### Are all the test cases passing and covers the requirements?
  Yes both project covered with test cases with library mock.
- ##### Is the code written in a modular manner for reusability?
  Yes, the majority of the code is separated module-by-module to comply with system requirements.

##### Security:

- ##### Does the web app communicate securely with the server or API?
  Yes, App connected Next JS internal backend to connect database with Axios Rest API method.
- ##### Are there measures in place to secure the authentication process?
  Indeed, for a secure login, I'm using the CryptoJS AES algorithm to encrypt my username and password, which I then decrypt in the backend to prevent them from being seen in plain sight on the network.

##### Responsiveness:

- ##### Is the web app responsive, adapting to different screen sizes?
  Yes, I have used MUI 5 to make web responsive with Grid pattern which make support to Desktop, Mobile, Tablet and Big Screen TV.

##### Additional Features:

- ##### Does the web app provide a dashboard after successful login?
  Once user logged in, we will retrieve data from the database via the web-app, store it in Redux, and display it on the Dashboard interface.
- ##### Is there a secure mechanism for users to change their password?
  Yes, the user will have the ability to change their password using both their old and new passwords once they have logged in to the system.
