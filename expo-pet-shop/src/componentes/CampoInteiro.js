import React from 'react';
import { TextInput, Button } from 'react-native';
import estilosPadrao from './estilos.js';

export default function CampoInteiro({ value, estilos, atualizarQuantidade }) {
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if (!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');

        acaoRetorno(removeZeroEsquerda);
    }

    const numeroEmTexto = String(value);

    return <>
        <TextInput
            style={[estilosPadrao.campo, estilos]}
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(novoValor) => {

                if (novoValor[novoValor.length - 1] !== "," && novoValor[novoValor.length - 1] !== ".")
                    atualizarQuantidade(novoValor);
            }}
            value={numeroEmTexto}
        />
    </>;
}