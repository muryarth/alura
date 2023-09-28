import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
// import { AsyncStorage } from 'react-native';

// const { scriptURL } = NativeModules.SourceCode;
// const hostName = scriptURL.split("://")[1].split(":")[0];
// console.log(`scriptURL: ${scriptURL}\nhostName: ${hostName}`);

const hostName = `192.168.100.3`;

Reactotron
    .configure({ host: hostName })
    .useReactNative();

export default Reactotron;