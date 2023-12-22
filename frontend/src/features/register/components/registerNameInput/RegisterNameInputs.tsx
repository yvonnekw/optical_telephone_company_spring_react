import React from 'react';
import { useState, useEffect } from 'react';
import { ValidatedTextInput } from '../validatedInput/ValidatedTextInput';
import { useDispatch} from 'react-redux'
import { AppDispatch } from '../../../../redux/Store';
import { updateRegister } from '../../../../redux/slices/RegisterSlices';
import { validateName } from '../../../../services/Validators';
import './RegisterNameInput.css'

interface RegisterNameInputProps {
    firstName: string;
    lastName: string;
}
export const RegisterNameInputs:React.FC<RegisterNameInputProps> = ({firstName, lastName}) => {

    const [firstValid, setFirstValid] = useState<boolean>(true);
    const [lastValid, setLastValid] = useState<boolean>(true);
    const dispatch:AppDispatch = useDispatch();

    const updateName = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if(e.target.name === 'firstName'){

            dispatch(updateRegister({name:e.target.name, value:e.target.value}));

            let valid = validateName(e.target.value);
            setFirstValid(valid);

            dispatch(updateRegister({name:'firstNameValid', value:valid}));
        }

        if(e.target.name === 'lastName'){
            dispatch(updateRegister({name:e.target.name, value:e.target.value}));

            let valid = validateName(e.target.value);
            setLastValid(valid);

            dispatch(updateRegister({name:'lastNameValid', value:valid}));
        }
    }

    return (

        <div className="register-name-input">
            <div className="register-name-content">
                <ValidatedTextInput valid={firstValid} name={"firstName"} label={"First name"} changeValue={updateName} data={firstName}/>
                {firstValid ? <></> : <span className="register-name-error"> what's your first name?</span>}
            </div>
            <div className="register-name-content">
                <ValidatedTextInput valid={lastValid} name={"lastName"} label={"Last name"} changeValue={updateName} data={lastName}/>
                {lastValid ? <></> : <span className="register-name-error"> what's your last name?</span>}
            </div>
        </div>
    )
}