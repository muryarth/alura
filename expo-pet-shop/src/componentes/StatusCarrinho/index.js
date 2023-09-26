import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import estilos from './estilos';
import Botao from '../Botao';
import { returnLocaleFormattedCurrency } from '../../services';

export default function StatusCarrinho({ total }) {
    return (
        <View style={estilos.conteudo}>
            <View style={estilos.total}>
                <Text style={estilos.descricao}>Total do carrinho:</Text>
                <Text style={estilos.valor}>
                    {returnLocaleFormattedCurrency(total)}
                </Text>
            </View>
            <View style={estilos.botao}>
                <Botao
                    acao={() => console.log("Botão acionado")}
                    titulo={"Fechar Pedido"}
                    invertido
                />
            </View>
        </View>
    );
};