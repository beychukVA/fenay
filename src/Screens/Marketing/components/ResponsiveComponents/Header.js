import LoginIcon from '@mui/icons-material/Login';
import { ButtonBase, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Logo from '../../../../assets/logo.png';
import { useStyles } from '../../styles';
function Header({ openDialog, socialItems }) {
    const foldMatches = useMediaQuery('(max-width:350px)');

    const classes = useStyles();
    return (
        <Stack direction="row" alignItems="center" justifyContent={"space-between"} sx={{ pt: 1.2, width: "90%", margin: "auto" }}>
            <Box>
                <Stack direction={"row"} alignItems="center" spacing={foldMatches ? 1.5 : 3}>
                    <img src={Logo} className={classes.logoSmall} />
                    {socialItems.map((item, index) => (
                        <Box key={index}>
                            <ButtonBase disableRipple onClick={() => item.onClick()}>
                                <Typography fontSize={foldMatches ? 7 : 9} textTransform="uppercase" letterSpacing={1.5} color="white" fontWeight="500">{item.label}</Typography>
                            </ButtonBase>
                        </Box>
                    ))}
                </Stack>
            </Box>
            <Stack direction="row" alignItems="center" spacing={3}>
                <IconButton onClick={() => openDialog("login")}>
                    <LoginIcon color="secondary" htmlColor="#fff" />
                </IconButton>
                {/* <img src={HamburgerIcon} /> */}
            </Stack>
        </Stack>
    );
}

export default Header;