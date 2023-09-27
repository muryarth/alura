import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/servicos';
import Carrinho from './telas/carrinho';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Serviços') {
                            return (
                                <Ionicons
                                    name="md-list"
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Carrinho') {
                            return (
                                <Ionicons
                                    name="cart-outline"
                                    size={size}
                                    color={color} />
                            );
                        }
                    },
                    tabBarInactiveTintColor: 'gray',
                    tabBarActiveTintColor: 'tomato',
                })}
            >
                <Tab.Screen name="Carrinho" component={Carrinho} />
                <Tab.Screen name="Serviços" component={Servicos} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}