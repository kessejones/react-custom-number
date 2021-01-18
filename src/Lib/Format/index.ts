import { IAddFormat, IRemoveFormat, IFormatInteger } from '../Types';

export function add_format(params: IAddFormat) {
    const { 
        value, 
        places, 
        thousandsSeparator, 
        suffix, 
        prefix, 
        decimalSeparator,
        thousandsGroup
    } = params;

    let str_val = Number(value).toFixed(places).toString();
    let sign = '';
    if (str_val.indexOf('-') === 0) {
        sign = '-'
        str_val = str_val.substr(1);
    }
    if (str_val.indexOf('.') === 0) {
        return `${prefix}${sign}${format_integer({ value: str_val, thousandsSeparator, thousandsGroup })}${decimalSeparator}${suffix}`;
    }
    const decimal = str_val.substr(str_val.indexOf('.')+1);
    const whole = str_val.substr(0, str_val.indexOf('.'));
    const integer = format_integer({ value: whole, thousandsSeparator, thousandsGroup });

    return `${prefix}${sign}${integer}${decimalSeparator}${decimal}${suffix}`;
}

export function remove_format(params: IRemoveFormat) {
    const { value, places } = params;
    const str_val = String(value).replace(/(\D)/g, '');

    const whole = str_val.substr(0, str_val.length - places);
    const decimal = str_val.substr(str_val.length - places);

    return Number(`${whole}.${decimal}`);
}

export function format_integer(params: IFormatInteger) {
    const { value, thousandsSeparator, thousandsGroup } = params;
    const str_value = value.toString();
    if (str_value.length > thousandsGroup) {
        const offset = str_value.length - thousandsGroup
        return format_integer({ value: str_value.substr(0, offset), thousandsSeparator, thousandsGroup } ) + thousandsSeparator + str_value.substr(-thousandsGroup);
    }
    return value;
}
