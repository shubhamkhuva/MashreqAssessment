# Mashreq Bank Assessment

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
   Once user logged in, we will retrieve data from the database via the server, store it in Redux, and display it on the Dashboard interface.

- ##### Is the native module integrated and functioning properly as expected?

- ##### Is the theme based on country applied on successful login.

##### Code Quality:
   - ##### Is the React Native codebase clean, well-organized, and following best practices?
     Yes, the project structure and code are organized thanks to the prettifier, and the file names are properly specified.
   - ##### Are there proper comments and error handling mechanisms?
   - ##### Are all the test cases passing and covers the requirements?
   - ##### Is the code written in a modular manner for reusability?
     Yes, code written in an easy-to-understand format and separated into components encourages reusability. 
