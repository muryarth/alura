import React from 'react';
import { Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilosGlobal from '../../estilos';

export default function TelaPadrao({ children }) {
    return <SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar />
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "padding"}
            style={estilosGlobal.preencher}
        >
            {children}
        </KeyboardAvoidingView>
    </SafeAreaView>
}