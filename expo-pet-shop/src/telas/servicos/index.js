import React from 'react';
import { FlatList } from 'react-native';
import Item from "./item";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar, nós damos."
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma."
    }
]

export default function Servicos() {
    return (
        <>
            <FlatList
                data={servicos}
                //desestruturando
                renderItem={({ item }) => {
                    return <Item {...item} />;
                }}
                //garante que cada item tenha sua key
                keyExtractor={({ id }) => String(id)}
                removeClippedSubviews={false}
            />
        </>
    )
}