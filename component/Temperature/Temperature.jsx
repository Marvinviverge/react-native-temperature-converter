import { Text } from 'react-native'
import { s } from './Temperature.style'

export function Temperature({ value, unit }) {
    return (
        <Text style={s.text}>{value} {unit}</Text>
    )
}