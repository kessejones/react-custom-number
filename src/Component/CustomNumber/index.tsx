import React, { useRef, useState, useEffect } from 'react';
import { add_format, remove_format } from '../../Lib/Format';
import { CustomNumberProps } from '../../Lib/Types';

export default function CustomNumber(props: CustomNumberProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [ internalValue, setInternalValue ] = useState('');

    const { 
        value='',
        prefix='', 
        suffix='', 
        places=2, 
        decimalSeparator='.', 
        thousandsSeparator=',', 
        thousandsGroup=3,
        onChange,
        onTextChange,
        onFocus,
        ...rest 
    } = props;

    useEffect(() => {
        applyFormat();
    }, [props, internalValue]);

    function setCaretPosition(position: number) {
        inputRef.current.setSelectionRange(position, position);
    }

    function onFocusInternal(e) {
        setCaretPosition(internalValue.length - suffix.length);

        onFocus && onFocus(e);
    }
    
    function onChangeInternal(e) {
        const value_without_format = remove_format({ value: e.target.value || '0', places }).toString();

        onChange && onChange(e);
        onTextChange && onTextChange(value_without_format);
    }

    function applyFormat() {
        const internal_value = add_format({
            value,
            prefix, 
            suffix, 
            places, 
            decimalSeparator, 
            thousandsSeparator,
            thousandsGroup
        });

        setInternalValue(internal_value);
        setCaretPosition(internalValue.length - suffix.length)
    }

    return (
        <input  
            ref={inputRef}
            {...rest} 
            type="text" 
            onChange={onChangeInternal} 
            value={internalValue}
            onFocus={onFocusInternal}
        />
    );
}
