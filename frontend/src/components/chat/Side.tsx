//
import '../../pages/chat/Chat.scss'
import { RootState } from '../../state';

//
import React, { useState, useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple, grey, red } from '@mui/material/colors';
import { ListItem, List } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import BlockIcon from '@mui/icons-material/Block';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';

const Side = (props: { openConvName: string, setOpenConvName: Function, allConv: Array<{ receiver: string, last_message_text: string }> }) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {

    }, [props.allConv])

    return (
        <div className="side">

            <div className="newConvContainer" >
                {/* <div className='sideTitle'>New conversation</div> */}
                <input className='newConvInput' type='text' id="outlined-basic" placeholder='New Message' value={inputValue} autoComplete={'off'} onChange={(event) => { setInputValue(event.currentTarget.value) }} autoFocus onKeyDown={(event) => {
                    if (event.key == 'Enter') {
                        props.setOpenConvName(inputValue);
                        setInputValue('');
                    }
                }} />
                <AddIcon className='newConvButton' />
            </div>

            <div className="startedConv">
                {props.allConv.map(convInfo => {
                    return (
                        <div className={props.openConvName == convInfo.receiver ? "activeStartedConvItem" : "startedConvItem"} onClick={() => {
                            props.setOpenConvName(convInfo.receiver);
                        }}>
                            <Avatar className='sideAvatar' sx={{ bgcolor: grey[500] }}>{convInfo.receiver[0]}</Avatar>
                            <div className='startedConvText'>
                                <div className='startedConvName'>
                                    {convInfo.receiver}
                                </div>
                                <div className='startedConvMessage'>
                                    {convInfo.last_message_text}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Side