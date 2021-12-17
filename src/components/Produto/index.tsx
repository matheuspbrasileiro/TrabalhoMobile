import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Produto } from '../../entities';



type Props = { produto: Produto }

export default function ProdutoItem({ produto }: Props) {
    return (
        <View style={styles.container}>
            <Text >ID: {produto.id}</Text>
            <View >
                <Text >Produto: {produto.name}</Text>
                <Text >Valor: {produto.price}</Text>
                <Text >Quantidade: {produto.amount}</Text>
                 <View style={styles.container}>
                  <Text >ID: {produto.factory.id}</Text>
                  <Text >Fabricate: {produto.factory.name}</Text>
                 </View>

            </View>
        </View>
    );
}