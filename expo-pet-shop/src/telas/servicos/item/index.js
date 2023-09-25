import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';

import estilos from './estilos';

const returnLocaleFormattedCurrency = (value) => {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export default function Item({ nome, preco, descricao }) {
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    const inverteExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }

    return (
        <>
            <TouchableOpacity
                style={estilos.informacao}
                onPress={() => inverteExpandir()}
            >
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>{returnLocaleFormattedCurrency(preco)}</Text>
            </TouchableOpacity>
            {expandir &&
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
                    <Botao titulo="Adicionar ao Carrinho" acao={() => { console.log("Acionado!") }} />
                </View>
            }
            <View style={estilos.divisor} />
        </>
    );
}