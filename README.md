# React Custom Number


## Install

`$ npm install react-custom-number`
or
`$ yarn add react-custom-number`


## Examples

```js
import React, { useState } from 'react';
import CustomNumber from 'react-custom-number';
 
export default function App(){
    const [ value, setValue ] = useState('0');

    function onChange(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <CustomNumber 
                prefix="R$ " 
                thousandsSeparator="." 
                decimalSeparator="," 
                onChange={onChange}
            />
        </div>
    );
}

```

```js
import React, { useState } from 'react';
import CustomNumber from 'react-custom-number';
 
export default function App(){
    const [ value, setValue ] = useState('0');

    function onChange(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <CustomNumber 
                suffix=" %"
                thousandsSeparator="." 
                decimalSeparator="," 
                onChange={onChange}
            />
        </div>
    );
}

```

## Properties

In addition to having all the properties of an HTML input, CustomNumber has the following properties:

Name                | Type      | Default Value
--------------------|-----------|---------------
prefix              | String    | ""           
suffix              | String    | ""
places              | Number    | 2
decimalSeparator    | String    | "."
thousandsSeparator  | String    | ","
thousandsGroup      | Number    | 3
