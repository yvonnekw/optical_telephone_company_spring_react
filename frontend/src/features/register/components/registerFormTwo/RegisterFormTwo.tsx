import React from "react";
import { useDispatch } from "react-redux";
import { incrementStep }from '../../../../redux/slices/RegisterSlices';
import { AppDispatch } from "../../../../redux/Store";
import { StyledNextButton } from "../registerNextButton/RegisterNextButton";
import './RegisterFormTwo.css';
import { Checkbox } from "../../../../components/checkbox/Checkbox";

export const RegisterFormTwo:React.FC = () => {
    const dispatch:AppDispatch = useDispatch();

    const nextStep = () => {
        dispatch(incrementStep());
    }

    return (
        
        <div className="reg-step-two-container">
            <div className="reg-step-two-content">
                <h1 className="reg-step-two-header">
                    customize your experience.
                </h1>
                <h3 className="reg-step-two-sub-head">
                    Track where you see fwitter content across the web.
                </h3>
                <div className="reg-step-two-toggle-group">
                    <p className="reg-step-two-privacy">
                        fwitter uses this data to personalise your experience.
                    </p>
                    <Checkbox/>
                </div>
                <p className="reg-step-two-policy">
                    By signing up, you agree to our <span className="reg-step-two-link">Terms</span>, <span className="reg-step-two-link">Privacy Policy</span>
                    and <span className="reg-step-two-link">Cookie use</span>. Fwitter may use your contact information, including your
                    email address and phone number for the purpose outline in our Privacy Policy. <span className="reg-step-two-link">Learn more</span>.
                </p>
            </div>
            <StyledNextButton active={true} color={"black"} onClick={nextStep}>Next</StyledNextButton>
        </div>
   // }
    )
}