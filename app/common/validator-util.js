import { trim } from 'lodash';

export function hasValue(value) {
    return trim(value) !== '';
}

export function isNumber(value) {
    return hasValue(value) && !isNaN(parseFloat(value)) && isFinite(value);
}
