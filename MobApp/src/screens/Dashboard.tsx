import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {t} from 'i18next';

const Dashboard = ({navigation}: any) => {
  const currentUser = useSelector((state: any) => state.currentUser);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FC760C', '#F69A1C']}
        style={styles.gradientContainer}>
        <View style={styles.logoutContainer}>
          <Button
            onPress={() => {
              navigation.navigate('Login');
            }}
            textColor={'#FFF'}>
            {t('screens.dashboard.logoutButton')}
          </Button>
        </View>
        <Text style={styles.welcomeText}>
          {t('screens.dashboard.welcomeText')} {currentUser.FULL_NAME}
        </Text>
      </LinearGradient>
      <View>
        <Text style={styles.label}>{t('screens.dashboard.yourUsername')}</Text>
        <View>
          <Text style={styles.username}>{currentUser?.USERNAME}</Text>
        </View>
        <Text style={styles.label}>
          {t('screens.dashboard.yourEmailAddress')}
        </Text>
        <View>
          <Text style={styles.username}>{currentUser?.EMAIL}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  gradientContainer: {
    alignItems: 'center',
    height: 150,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingRight: 10,
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  username: {
    fontSize: 24,
    textAlign: 'center',
  },
});
export default Dashboard;
