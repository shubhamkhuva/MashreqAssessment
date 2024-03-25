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
import {Button} from 'react-native-paper';
import MTextField from '../core/components/MTextInput';
import {theme} from '../core/theme';
import {useForm} from 'react-hook-form';
import {DEFAULT_COUNTRY, DEFAULT_FORM_VALUE} from '../utils/default';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import {ERROR, SUCCESS, SUPPORTED_LANGUAGES} from '../utils/constant';
import {t} from 'i18next';
import i18n from '../localization/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUsernameRules} from '../utils/helper';
import {useDispatch} from 'react-redux';
import {setLoggedInUser} from '../context/actions/actions';
import {validations} from '../utils/validations';
import {toast} from '@backpackapp-io/react-native-toast';
import {Endpoints} from '../network/Endpoints';
import {useAxios} from '../network/useAxios';
import {ROUTER_PATH} from '../navigation/routers';
import MLogo from '../core/components/Logo';
import {encryptString} from '../utils/security';
import LanguageSwitcher from '../core/components/LanguageSwitcher';

const Login = ({navigation}: any) => {
  const [countryCode, setCountryCode] = useState<CountryCode>(
    DEFAULT_COUNTRY.cca2,
  );
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const {control, handleSubmit, watch} = useForm({
    mode: 'onSubmit',
    defaultValues: DEFAULT_FORM_VALUE.LOGIN,
  });
  const [selectedLanguage, setSelectedLanguage] = useState<any>(null);
  const dispatch = useDispatch();

  const getDefaultLanguage = async () => {
    const STORE_LANGUAGE_KEY = 'settings.lang';
    return await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
  };

  useEffect(() => {
    getDefaultLanguage().then((langCode: any) => {
      setSelectedLanguage({
        code: langCode,
        value: SUPPORTED_LANGUAGES[langCode],
      });
    });
  }, []);

  const {
    execute: executeAuth,
    response: executeAuthResponse,
    loading: executeAuthLoading,
  } = useAxios({
    url: Endpoints.POST_USER_LOGIN,
    method: 'POST',
  });

  useEffect(() => {
    if (!executeAuthLoading && executeAuthResponse) {
      const {data, status, errorCode}: any = executeAuthResponse;
      if (status === SUCCESS) {
        toast.success(t('message.SUCCESS_LOGGEDIN'));
        dispatch(setLoggedInUser(data));
        navigation.navigate(ROUTER_PATH.DASHBOARD);
      }
      if (status === ERROR) {
        toast.error(t(`message.${errorCode ? errorCode : 'GENERIC_ERROR'}`));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [executeAuthLoading, executeAuthResponse]);

  const handleLogin = async (data: any) => {
    let request = {
      username: data.username,
      password: data.password,
    };
    console.log(encryptString(JSON.stringify(request)));
    let config = {
      Authorization: `Bearer ${encryptString(JSON.stringify(request))}`,
    };

    executeAuth({}, config);
  };

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const changeLanguage = (item: any) => {
    setSelectedLanguage(item);
    i18n.changeLanguage(item.code);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FC760C', '#F69A1C']}
        style={styles.gradientContainer}>
        <LanguageSwitcher
          selectedLanguage={selectedLanguage}
          onChange={changeLanguage}
        />
        <MLogo style={styles.image} />
        <Text style={styles.welcomeText}>{t('screens.login.title')}</Text>
      </LinearGradient>
      <ScrollView style={styles.formContainer}>
        <View>
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
                onSelect,
              }}
            />
          </View>
          <MTextField
            name={'username'}
            label={t('screens.login.username')}
            control={control}
            style={styles.input}
            required
            rules={
              watch('username').includes('@')
                ? validations.emailAddress
                : getUsernameRules(country?.cca2)
            }
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
            loading={executeAuthLoading}
            onPress={handleSubmit(handleLogin)}
            style={styles.button}>
            {t('screens.login.loginButton')}
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <View style={styles.createNewView}>
              <Text style={styles.createNewText}>
                {t('screens.login.registerButton')}
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
    flex: 1,
    alignItems: 'center',
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
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
  languageSwitcherContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingRight: 10,
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
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

export default Login;
