import { UNITS } from "../constant";

function getOppositeUnit(unit) {
    return unit == UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius
}

function converteTemperatureTo(unit, value) {
    if (unit == UNITS.celcius) {
        return (value - 32) / 1.8 //conversion en fahrenheit
    } else {
        return value * 1.8 + 32 //conversion en celcius
    }
}

function isCold(value, unit) {
    if (unit == UNITS.celcius) {
        return value <= 0
    } else {
        return value <= 32
    }
}

export { getOppositeUnit, converteTemperatureTo, isCold };