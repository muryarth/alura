import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';

import estilos from './estilos';

const returnLocaleFormattedCurrency = (value) => {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

// "quantidade: quantidadeInicial" nesse trecho, o parâmetro está sendo renomeado
export default function Item({ atualizarValorTotal, id, nome, preco, descricao, quantidade: quantidadeInicial }) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
        atualizarValorTotal(
            {
                id: id,
                nome: nome,
                preco: preco,
                descricao: descricao,
                quantidade: novaQuantidade
            }
        );
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    return (
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>{returnLocaleFormattedCurrency(preco)}</Text>
            </View>
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade: </Text>
                        <CampoInteiro
                            preco={preco}
                            estilos={estilos.quantidade}
                            value={quantidade}
                            acao={atualizaQuantidadeTotal}
                        />
                    </View>
                    <View>
                        <View style={estilos.valor}>
                            <Text style={estilos.descricao}>Total:</Text>
                            <Text style={estilos.preco}>{returnLocaleFormattedCurrency(total)}</Text>
                        </View>
                    </View>
                </View>
                <Botao titulo="Remover do Carrinho" acao={() => { console.log("Acionado!") }} />
            </View>
            <View style={estilos.divisor} />
        </>
    );
}