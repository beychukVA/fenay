import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const FooterAbout = ({ matches }) => {
    const aboutList = [
        "Harmonising Society with the Technology of Tomorrow.",
        "Finay is THE Virtual Home the music community deserves, supporting artists and directly connecting them to their fans. Whether you're a musician or a music lover, Finay allows you to engage with those that matter to you the most, cutting out the need for a middleman. With fair pay and royalties for musicians and exclusive content and ownership for fans, there's something for everyone on Finay. Join the Movement.",
        "- User-Friendly and Reliable: Easy-to-understand and use, Finay makes the NFT world simple.",
        "- All Inclusive Marketplace: Buy and sell songs and events from a wide variety of genres. There's beauty in all music.",
        "- Backstage Pass: Leverage the power of Access NFTs with exclusive content, events, and tutorials.",
        "- Connect: Buy and sell gear, post or find jobs, find someone to jam with, it's all here at Finay.",
        "- Social Media: All of this along with chat features, customizable profiles and calendars, Finay is the one stop shop for all things music related. Finé."
    ]
    return (
        <Box mt={2}>
            {aboutList.map((item, index) => (
                <Typography
                    key={index}
                    sx={{
                        fontSize: 14,
                        fontFamily: "Glacial Indifference!important",
                        color: 'lightgray',
                    }}>
                    {item}
                </Typography>
            ))}
        </Box>
    );
}

export default FooterAbout;