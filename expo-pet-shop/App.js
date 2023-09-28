import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/rotas';
import reactotron from "./ReactotronConfig";

// reactotron config
if (__DEV__) reactotron.connect();

export default function App() {
  return (
    <>
      <TelaPadrao>
        <Rotas />
      </TelaPadrao>
    </>
  );
}