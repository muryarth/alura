import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import funcaoEstilosPadrao from './estilos';

//Props trás um objeto, se não for desestruturado
// PODERIA SER export default function Botao({pequeno = false, invertido = false, acao, titulo}) {
export default function Botao(props) {
    const estilosPadrao = funcaoEstilosPadrao(
        props.pequeno = props.pequeno || false,
        props.invertido = props.invertido || false
    )

    return <TouchableOpacity
        onPress={props.acao}
        style={[estilosPadrao.botao, props.estilos]}
    >
        <Text style={estilosPadrao.valor}>{props.titulo}</Text>
    </TouchableOpacity>
}