import {t} from 'i18next';
import {Image} from 'react-native';

const MLogo = (props: any) => {
  const {style} = props;
  return (
    <>
      {t('code') === 'en' && (
        <Image
          style={style}
          source={require(`../../assets/images/MashreqLogo-en.png`)}
          resizeMode="contain"
        />
      )}
      {t('code') === 'hi' && (
        <Image
          style={style}
          source={require(`../../assets/images/MashreqLogo-hi.png`)}
          resizeMode="contain"
        />
      )}
      {t('code') === 'fr' && (
        <Image
          style={style}
          source={require(`../../assets/images/MashreqLogo-fr.png`)}
          resizeMode="contain"
        />
      )}
    </>
  );
};
export default MLogo;
