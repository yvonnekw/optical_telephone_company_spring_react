
import { useState, useEffect } from 'react';
import React from 'react';
import { StyledInputBox } from './StyledInput';
import { determineValidatedSelectStyle } from '../../utils/DetermineStylesUtil'

interface ValidateDateSelectorProps{
    style:string;
    valid:boolean;
    name:string
    dropDown():JSX.Element[],
    dispatcher(name:string, value:string|number|boolean):void;

}

export const ValidatedDateSelector:React.FC<ValidateDateSelectorProps> = ({style, valid, name, dropDown, dispatcher}) => {
    
    const [active, setActive] = useState<boolean>(false);
    const [value, setValue] = useState<number>(0);
    const [color, setColour] = useState<string>('gray');

    const changeValue =(e:React.ChangeEvent<HTMLSelectElement>) => {
        setValue(+e.target.value);
        console.log('Dispatch this change to a a reducer')
        console.log('value: ', e.target.value )
        dispatcher(name.toLowerCase(), + e.target.value);
       
    }
    
    const toggleActive = (e:React.FocusEvent<HTMLSelectElement>) => {
        setActive(!active);
    }

    useEffect(()=> {
        setColour(determineValidatedSelectStyle(active, valid))
    }, [active, valid, value])
    return (
        <div className={style}>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputBox color={color} active={true} valid={valid}>
                    {name}
                </StyledInputBox>
                <select onChange={changeValue} onFocus={toggleActive} onBlur={toggleActive}>
                    {dropDown()}
                </select>
            </StyledInputBox>

            
        </div>
    
    );
}