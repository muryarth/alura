import React from 'react';

import { TextInput } from 'react-native';

export default function CampoInteiro() {
    return <TextInput
        keyboardType='number-pad'
        selectTextOnFocus
    />
}