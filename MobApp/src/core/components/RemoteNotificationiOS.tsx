import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {useSelector} from 'react-redux';
import {Endpoints} from '../../network/Endpoints';
import {useAxios} from '../../network/useAxios';

const RemoteNotificationiOS = () => {
  const currentUser = useSelector((state: any) => state.currentUser);

  const {
    execute: updateToken,
    response: updateTokenResponse,
    loading: updateTokenLoading,
  } = useAxios({
    url: Endpoints.POST_USER_NOTIFY,
    method: 'PUT',
  });

  PushNotificationIOS.requestPermissions().then(permissions => {
    console.log('Permissions:', permissions);
    if (permissions.alert || permissions.badge || permissions.sound) {
    } else {
      PushNotificationIOS.requestPermissions();
    }
  });

  PushNotificationIOS.getInitialNotification().then(notification => {
    if (notification) {
      console.log('Initial notification:', notification);
      // Handle initial notification
    }
  });

  PushNotificationIOS.addEventListener('notification', notification => {
    console.log('Notification received:', notification);
    // Handle notification
  });

  PushNotificationIOS.addEventListener('localNotification', notification => {
    console.log('Local notification received:', notification);
    // Handle local notification
  });

  PushNotificationIOS.addEventListener('register', deviceToken => {
    console.log('Device token:', deviceToken);
    updateToken({
      username: currentUser?.USERNAME,
      token: deviceToken,
    });
    // Send device token to your server
  });

  PushNotificationIOS.addEventListener('registrationError', error => {
    console.error('Registration error:', error);
    // Handle registration error
  });
  return null;
};

export default RemoteNotificationiOS;
