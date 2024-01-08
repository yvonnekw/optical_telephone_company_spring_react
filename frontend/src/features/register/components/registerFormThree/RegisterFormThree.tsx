import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/Store';
import { stringifyDate } from '../../utils/DateUtils';
import { ValidatedDisplay } from '../../../../components/validatedInput/ValidatedDisplay';

export const RegisterFormThree:React.FC = () => {

    const state = useSelector((state:RootState) => state.register);

    return (
        <div className='reg-step-three-container'>
            <div className='reg-step-three-content'>
                <ValidatedDisplay label={"Name"} value={`${state.firstName} ${state.lastName}`}/>
                <ValidatedDisplay label={"Email"} value={state.email}/>
                <ValidatedDisplay label={"Birth date"} value={stringifyDate(state.dob)}/>
            </div>

        </div>
    )
}