import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Item from "./item";
import TelaPadrao from "../../componentes/TelaPadrao";
import StatusCarrinho from '../../componentes/StatusCarrinho';

let servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar, nós damos.",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma.",
        quantidade: 1
    }
];

const calcularTotal = (servicos) => {
    const total = servicos.reduce(
        (soma, { preco, quantidade }) => soma + (preco * quantidade), 0
    );

    return total;
};

export default function Carrinho() {
    const [valorTotal, setValorTotal] = useState(calcularTotal(servicos));

    const atualizarValorTotal = (item) => {
        servicos = servicos.map(servico => {
            if (servico.id == item.id) {
                return item;
            }
            return servico;
        });
        setValorTotal(calcularTotal(servicos));
    }

    return (
        <>
            <StatusCarrinho total={valorTotal} />
            <FlatList
                data={servicos}
                //desestruturando
                renderItem={({ item }) => {
                    return <Item atualizarValorTotal={atualizarValorTotal} {...item} />;
                }}
                //garante que cada item tenha sua key
                keyExtractor={({ id }) => String(id)}
                removeClippedSubviews={false}
            />
        </>
    )
}