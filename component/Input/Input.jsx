import { Text, TextInput, View } from 'react-native'
import { s } from './Input.style'

export function Input({ defaultValue, onChangeValue, unit }) {
    return (
        <View style={s.container}>
            <TextInput onChangeText={onChangeValue} defaultValue={defaultValue} keyboardType='numeric' maxLength={4} placeholder='Température à convertir' style={s.input} />
            <Text style={s.unit}>
                {unit}
            </Text>
        </View>
    )
}