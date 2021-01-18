import { InputHTMLAttributes } from 'react';

export interface IAddFormat {
    value: string|number;
    prefix?: string;
    suffix?: string;
    places?: number;
    decimalSeparator?: string;
    thousandsSeparator?: string;
    thousandsGroup?: number;
}

export interface IRemoveFormat {
    value: string|number;
    places: number;
}

export interface IFormatInteger {
    value: string|number;
    thousandsSeparator: string;
    thousandsGroup: number;
}

export interface CustomNumberProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    prefix?: string;
    suffix?: string;
    places?: number;
    decimalSeparator?: string;
    thousandsSeparator?: string;
    thousandsGroup?: number;
    onTextChange?: Function;
}
