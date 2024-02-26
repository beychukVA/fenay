import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import LandingHeader from '../../component/LandingHeader'

function AboutUs() {
  return (
    <>
      <LandingHeader />
      <Container>
        <Box
          sx={(theme) => ({
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: theme.spacing(10),
          })}
        >
          <Typography
            variant="h1"
            color="#fff"
            mt={5}
            mb={3}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                fontSize: '4rem',
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',
              }
            })}
          >
            WHY WE’RE HERE
          </Typography>
          <Typography color="#fff" px={3}>
            We are committed to creating a multifunctional NFT marketplace optimized for musicians and their audiences, offering artists a platform with all the tools necessary to create, promote, and network their content. By eliminating the fees and pollution associated with many existing platforms, we provide an unparalleled user experience specifically designed to streamline both creator and consumer interactions.
            <br />
            <br />
            Finay offers users the power to create access NFTs as well, a method of entry to gated content that maintains creator ownership over intellectual property. Access NFTs allow creators to sell real world items through the platform: tickets, merchandise, in-person or online lessons, music therapy sessions, and even studio time. In implementing this technology, Finay helps NFTs become an everyday tool to be used by the general public, instead of financially prohibitive commodities.
            <br />
            <br />
            As Finay evolves, we will expand upon streaming and live shows, as well as online lessons and music therapy sessions, paving the way for all of these experiences to eventually be had in the virtual world.
          </Typography>
        </Box>  
      </Container>
    </>
  )
}

export default AboutUs