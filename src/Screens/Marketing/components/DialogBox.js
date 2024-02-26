import { IconButton, Stack, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import CloseIcon from '../../../assets/Marketing/close-white.png';


export default function MarketingDialog({ open, handleClose, children }) {
    const matches = useMediaQuery('(max-width:768px)');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: matches ? "100%" : window.innerWidth / 2.2,
        bgcolor: 'transparent',
        p: 4,
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                    <Stack direction="row" alignItems="center" justifyContent={"center"} sx={{ mt: 2 }} spacing={1}>
                        <IconButton onClick={handleClose} sx={{ border: "1px solid white", p: 1.5 }}>
                            <img src={CloseIcon} width="18px" />
                        </IconButton>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
