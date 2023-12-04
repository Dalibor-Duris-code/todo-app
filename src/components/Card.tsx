import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../App.css"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: "25px",
    bgcolor: '#fff',
    p: "25px",
  };

const Card = (props: 
    {
        title: string, 
        text1?:string, 
        text2?:string, 
        text3?:string
    }) => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <a className='card-style' onClick={handleOpen}>{props.title}</a>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                </Typography>
            </Box>
            </Modal>
        </>

    );
}

export default Card;