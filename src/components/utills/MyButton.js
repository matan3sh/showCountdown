import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

/*props allow to pass some style refrences and adjust them */
const MyButton = (props) => {
    return (
        <div>
            <Button href={props.link} variant="contained" size="small" style={{background:props.bck, color:props.color}}>
                <img src={TicketIcon} className="iconImage" alt="icon_button"/>
                {props.text}
            </Button>
        </div>
    );
};

export default MyButton;