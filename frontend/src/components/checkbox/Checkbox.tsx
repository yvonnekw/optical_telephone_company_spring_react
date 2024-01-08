import React from 'react';
import { useState } from 'react';
import { StyledCheckbox, StyledCheckboxBackground } from './StyleCheckbox';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export const Checkbox:React.FC = () => {
    const [clicked, setClicked] = useState<boolean>(false);

    const toggleCheckedbox = () => {
        setClicked(!clicked); 
    }

    return (
        <StyledCheckboxBackground active={clicked} onClick={toggleCheckedbox}>
            <StyledCheckbox active={clicked}>
                {clicked ? 
                    <CheckRoundedIcon sx ={{
                        fontSize: 18,
                        color: "white"
                    }}/>
                    : <></>

                }
            </StyledCheckbox>

        </StyledCheckboxBackground>
    )
}
