import {Controller} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {Text, TextInput, useTheme} from 'react-native-paper';
import {validations} from '../../utils/validations';
import {t} from 'i18next';

type MTextFieldType = {
  name: string;
  control: any;
  label: string;
  required?: boolean;
  password?: boolean;
  style?: any;
  rules?: any;
};
const MTextField = (props: MTextFieldType) => {
  const {control, name, label, required, password, style, rules} = props;
  const theme = useTheme();

  return (
    <Controller
      control={control}
      render={({
        field: {onChange, onBlur, value},
        formState: {errors},
      }: any) => (
        <>
          <TextInput
            label={label}
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={password}
            style={{borderRadius: 10, ...style}}
            error={errors[name] ? true : false}
          />
          {errors[name] && (
            <Text style={{color: theme.colors.error}}>
              {errors[name]?.message}
            </Text>
          )}
        </>
      )}
      name={name}
      rules={{
        required: required ? t('validation.requiredMessage') : false,
        ...(rules ? rules : validations[name]),
      }}
    />
  );
};

export default MTextField;
