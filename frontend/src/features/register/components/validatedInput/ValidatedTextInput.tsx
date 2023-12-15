import React from "react";
import { useEffect, useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determineLabelColor, determineValidatedTextlabel } from "../../utils/DetermineStylesUtil";

interface validatedTextInputProps {
    valid:boolean;
    name:string;
    label:string;
    changeValue(e:React.ChangeEvent<HTMLInputElement>):void;
}

export const ValidatedTextInput: React.FC<validatedTextInputProps> = ({valid, name, label, changeValue}) => {

    const [value, setValue] = useState<string>('');
    const[borderActive, setBorderActive] = useState<boolean>(false);
    const [labelActive, setLabelActive] = useState<boolean>(false);
    const [color, setColor] = useState<string>('gray')

    const focus = ():void => {
        setBorderActive(!borderActive);
        if(!value){
            setLabelActive(!labelActive);
        }
    }

    useEffect(() => {
        if(value && !labelActive){
            setLabelActive(true);
        }
        
        setColor(determineValidatedTextlabel(borderActive, valid));
        
    }, [valid, value, borderActive, labelActive, color])

    const update = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setValue (e.target.value);
        console.log("send teh info back to the dispatcher");
        changeValue(e)
    }

    return (
        <div className="validated-text-input">
            <StyledInputBox active={borderActive} valid={valid}>
                <StyledInputLabel color={color} active={labelActive}
                    valid={valid}>{label}
                </StyledInputLabel>
            </StyledInputBox>
            <input className="valided-input-value"
                name={name}  
                onFocus={focus} 
                onBlur={focus}
                onChange={update}
                />
        </div>
    )

}