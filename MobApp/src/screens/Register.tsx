import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Menu} from 'react-native-paper';
import MTextField from '../core/components/MTextInput';
import {theme} from '../core/theme';
import {useForm} from 'react-hook-form';
import {DEFAULT_COUNTRY, DEFAULT_FORM_VALUE} from '../utils/default';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import {t} from 'i18next';
import {getUsernameRules} from '../utils/helper';
import {toast} from '@backpackapp-io/react-native-toast';
import {Endpoints} from '../network/Endpoints';
import {useAxios} from '../network/useAxios';
import {SUCCESS, ERROR} from '../utils/constant';
import {ROUTER_PATH} from '../navigation/routers';
import MLogo from '../core/components/Logo';

const Register = ({navigation}: any) => {
  const [countryCode, setCountryCode] = useState<CountryCode>(
    DEFAULT_COUNTRY.cca2,
  );
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const {control, handleSubmit} = useForm({
    defaultValues: DEFAULT_FORM_VALUE.REGISTER,
  });

  const {
    execute: executeRegister,
    response: executeRegisterResponse,
    loading: executeRegisterLoading,
  } = useAxios({
    url: Endpoints.POST_USER_REGISTER,
    method: 'POST',
  });

  useEffect(() => {
    if (!executeRegisterLoading && executeRegisterResponse) {
      const {data, status, errorCode} = executeRegisterResponse;
      if (status === SUCCESS) {
        toast.success(t('message.SUCCESS_REGISTERED'));
        navigation.push(ROUTER_PATH.LOGIN);
      }
      if (status === ERROR) {
        toast.error(t(`message.${errorCode ? errorCode : 'GENERIC_ERROR'}`));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [executeRegisterLoading, executeRegisterResponse]);

  const handleRegister = (data: any) => {
    executeRegister({
      fullName: data.fullName,
      username: data.username,
      emailAddress: data.emailAddress,
      password: data.password,
    });
  };

  const onSelectCountry = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FC760C', '#F69A1C']}
        style={styles.gradientContainer}>
        <MLogo style={styles.image} />
        <Text style={styles.welcomeText}>{t('screens.register.title')}</Text>
      </LinearGradient>
      <ScrollView>
        <View style={styles.formContainer}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: theme.roundness,
              padding: 5,
              borderColor: theme.colors.outline,
            }}>
            <CountryPicker
              {...{
                countryCode,
                withCountryNameButton: true,
                withFilter: true,
                onSelectCountry,
              }}
            />
          </View>
          <MTextField
            name={'fullName'}
            label={t('screens.register.fullName')}
            control={control}
            style={styles.input}
            required
          />
          <MTextField
            name={'username'}
            label={t('screens.register.username')}
            control={control}
            style={styles.input}
            required
            rules={getUsernameRules(country?.cca2)}
          />
          <MTextField
            name={'emailAddress'}
            label={t('screens.register.emailAddress')}
            control={control}
            style={styles.input}
            required
          />
          <MTextField
            name={'password'}
            label={t('screens.login.password')}
            control={control}
            style={styles.input}
            required
            password
          />
          <Button
            mode="contained"
            loading={executeRegisterLoading}
            onPress={handleSubmit(handleRegister)}
            style={styles.button}>
            {t('screens.register.submitButton')}
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.createNewView}>
              <Text style={styles.createNewText}>
                {t('screens.register.alreadyAccount')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  gradientContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: 200,
    height: 100,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  input: {
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
  createNewView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  createNewText: {
    fontWeight: 'bold',
  },
});

export default Register;
