import { Grid, Stack, Typography, useMediaQuery, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import AppleStoreIcon from '../../assets/app-store.png';
import FooterAbout from './component/FooterAbout';
import FooterList from './component/FooterList';

function Footer() {
    const matches = useMediaQuery('(max-width:768px)');
    const legalItems = [
        {
            label: "Privacy Policy",
            onClick: () => window.open("https://help.finay.com/pages/1/privacy-policy", "_blank")
        },
        {
            label: "Terms & Conditions of Use",
            onClick: () => window.open("https://help.finay.com/pages/2/terms-of-service", "_blank")
        }
    ];

    const socialItems = [
        {
            label: "Facebook",
            icon: <GrFacebookOption color='#FF1C51' />,
            onClick: () => window.open("https://facebook.com/finayinc", "_blank")
        },
        {
            label: "Instagram",
            icon: <GrInstagram color='#FF1C51' />,
            onClick: () => window.open("https://instagram.com/finayinc?igshid=YmMyMTA2M2Y=", "_blank")
        },
        {
            label: "Twitter",
            icon: <GrTwitter color='#FF1C51' />,
            onClick: () => window.open("https://twitter.com/finay", "_blank")
        },
    ];

    const usefulItems = [
        {
            label: "Contact Us",
            onClick: () => window.location.href = `mailto:contact@finay.com`
        },
        {
            label: "Help Center",
            onClick: () => window.open("https://help.finay.com/help-center", "_blank")
        }
    ]
    return (
            <Box
                bgcolor={"#1D1D1D"}
                paddingX={4}
                paddingTop={8}
                paddingBottom={5}
                sx={{
                    width: "100%",
                    float: "left",
                    '& > *': {
                        color: "#fff !important"
                    }
            }} >
                <Grid container justifyContent={matches ? "space-between" : 'center'}>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                        <FooterList items={legalItems} title="Legal" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                        <FooterList items={socialItems} title="Social" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                        <FooterList items={usefulItems} title="Useful Links" />
                    </Grid>
                    {/* <Grid item xs={6} sm={3} md={3}>
                        <Stack direction="column" alignItems="center" spacing={3}>
                        <Typography sx={{ textTransform: 'uppercase' }}>Get The App</Typography>
                        <Box sx={{ cursor: "pointer" }}>
                            <img onClick={() => window.open("https://apps.apple.com/us/app/finay/id1613395121", "_blank")} src={AppleStoreIcon} style={{ width: 150, borderRadius: 2 }} />
                        </Box>
                    </Stack>
                    </Grid> */}
            </Grid>
            <Container>
                <Box mt={2}>
                    <Stack direction="row" alignItems="center" spacing={3}>
                        <Typography
                            sx={{ textTransform: "uppercase" }}
                        >get the app</Typography>
                        <Box sx={{ cursor: "pointer" }}>
                            <img onClick={() => window.open("https://apps.apple.com/us/app/finay/id1613395121", "_blank")} src={AppleStoreIcon} style={{ width: 150, borderRadius: 2 }} />
                        </Box>
                    </Stack>
                </Box>
                <FooterAbout matches={matches} />
                <Box flexDirection="row" justifyContent={matches ? "center" : "flex-end"} mt={2.5} display="flex">
                    <Typography fontSize={matches ? 14 : 17}>
                        &copy; {new Date().getFullYear()} Finay Inc, All Rights Reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;