import {Provider} from 'react-redux';
import Setup from './core/setup';
import store from './context/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Setup />
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
