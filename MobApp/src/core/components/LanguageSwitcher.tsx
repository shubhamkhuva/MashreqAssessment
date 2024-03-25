import {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Menu, Button} from 'react-native-paper';

const LanguageSwitcher = (props: any) => {
  const {selectedLanguage, onChange} = props;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <View style={styles.languageSwitcherContainer}>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <Button onPress={() => setVisible(true)} textColor={'#FFF'}>
              {selectedLanguage && selectedLanguage.value}
            </Button>
          }>
          <Menu.Item
            onPress={() => {
              onChange({code: 'en', value: 'English'});
              setVisible(false);
            }}
            title="English"
          />
          <Menu.Item
            onPress={() => {
              onChange({code: 'hi', value: 'Hindi'});
              setVisible(false);
            }}
            title="Hindi"
          />
          <Menu.Item
            onPress={() => {
              onChange({code: 'fr', value: 'French'});
              setVisible(false);
            }}
            title="French"
          />
        </Menu>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  languageSwitcherContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingRight: 10,
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
  },
});
export default LanguageSwitcher;
