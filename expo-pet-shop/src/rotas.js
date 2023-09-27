import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/servicos';
import Carrinho from './telas/carrinho';

import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: cores.roxo,
                    tabBarInactiveTintColor: cores.claro,
                    tabBarActiveBackgroundColor: cores.roxo,
                    tabBarInactiveBackgroundColor: cores.laranja,
                    tabBarLabelStyle: {
                        width: "100%",
                        flex: 1,
                        fontWeight: 'bold',
                        fontSize: 16,
                        lineHeight: 21,
                        marginTop: 3,
                        paddingTop: 21,
                        backgroundColor: cores.laranja,
                    },
                    // tabBarIcon: ({ focused, color, size }) => {
                    //     if (route.name == "Serviços") {
                    //         return <Ionicons name="list-outline" size={24} color="black" />;
                    //     } else if (route.name == "Carrinho") {
                    //         return <Ionicons name="cart" size={24} color="black" />;
                    //     }
                    // },
                    tabBarStyle: { height: 70 },
                    tabBarHideOnKeyboard: true,
                    tabBarIconStyle: { display: "none" }
                })}
            >
                <Tab.Screen name="Serviços" component={Servicos} />
                <Tab.Screen name="Carrinho" component={Carrinho} />
            </Tab.Navigator>
        </NavigationContainer >
    )
}