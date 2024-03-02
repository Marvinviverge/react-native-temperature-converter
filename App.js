import { ImageBackground, Keyboard, TouchableOpacity, View } from 'react-native';
import { s } from './App.style'
import hotbg from './assets/hot.png'
import coldbg from './assets/cold.png'
import { Input } from './component/Input/Input';
import { useEffect, useState } from 'react';
import { Temperature } from './component/Temperature/Temperature';
import { DEFAULT_UNIT, DEFAULT_TEMPERATURE } from './constant'
import { getOppositeUnit, converteTemperatureTo, isCold } from './services/temparature.service';
import { ButtonConvert } from './component/ButtonConvert/ButtonConvert';

export default function App() {

	const [valueInput, setValueInput] = useState(DEFAULT_TEMPERATURE)
	const [unit, setUnit] = useState(DEFAULT_UNIT)
	const [currentBg, setCurrentBg] = useState()

	const oppositeUnit = getOppositeUnit(unit)
	const floatValue = Number.parseFloat(valueInput)

	useEffect(() => {
		if (!isNaN(floatValue)) {
			const isColdBg = isCold(valueInput, unit)
			setCurrentBg(isColdBg ? coldbg : hotbg)
		}
	}, [valueInput])

	// fonction pour ne garder qu'un seul chiffre après la virgule et empêcher la saisi de string dans l'input.
	function getConvertedValue() {
		return isNaN(floatValue) ? "" : converteTemperatureTo(oppositeUnit, floatValue).toFixed(1)
	}

	return (
		<ImageBackground source={currentBg} style={s.container}>
			<View style={s.workspace}>
				<Temperature value={getConvertedValue()} unit={oppositeUnit} />
				<Input onChangeValue={setValueInput} defaultValue={DEFAULT_TEMPERATURE} unit={unit} />
				<ButtonConvert onPress={() => setUnit(oppositeUnit)} unit={unit} />
			</View>
		</ImageBackground >
	)

}