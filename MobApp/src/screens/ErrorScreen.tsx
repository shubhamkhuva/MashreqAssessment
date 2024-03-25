import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ErrorScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        404 - Page Not Found
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{color: 'blue', marginTop: 10}}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorScreen;
