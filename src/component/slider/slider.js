import Carousel, { consts } from 'react-elastic-carousel'
import party from '../../assets/party.png'

import './slider.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Button, Box } from '@mui/material'
function Slide() {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <KeyboardArrowLeftIcon sx={{ color: '#FF1C51', fontSize: '36px' }} /> : <KeyboardArrowRightIcon sx={{ color: '#FF1C51', fontSize: '36px' }} />
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    )
  }
  return (<>
    <Carousel itemsToShow={2} renderArrow={myArrow}
      renderPagination={({ pages, activePage, onClick }) => {
        return (
          <Box direction="row">
            {pages.map(page => {
              const isActivePage = activePage === page
              return (
                // <KeyboardArrowLeftIcon sx={{ color: '#FF1C51', fontSize: '36px' }} /> 
                <KeyboardArrowLeftIcon
                  key={page}
                  onClick={() => onClick(page)}
                  active={isActivePage}
                  sx={{ display: 'none' }}
                />
              )
            })}
          </Box>
        )
      }}

    >
      <div className='imagesli'>
        <div className='item'>
          <img src={party} />
        </div>
        <p>Event : Concert Location : UK
          $15</p>
      </div>


      <div className='imagesli'>
        <div className='item'>
          <img src={party} />
        </div>
        <p>Event : Concert Location : UK
          $15</p>
      </div>
      <div className='imagesli'>
        <div className='item'>
          <img className='itemimage' src={party} />
        </div>
        <p>Event : Concert Location : UK
          $15</p>
      </div>


      <div className='imagesli'>
        <div className='item'>
          <img className='itemimage' src={party} />
        </div>
        <p>Event : Concert Location : UK
          $15</p>
      </div>
      <div className='imagesli'>
        <div className='item'>
          <img className='itemimage' src={party} />
        </div>
        <p>Event : Concert Location : UK
          $15</p>
      </div>


      <div className='imagesli'>
        <div className='item'>
          <img className='itemimage' src={party} />
        </div>
        <p>Event : Concert Location : UK
          $15</p>
      </div>
      <div className='imagesli'>
        <div className='item'>
          <img className='itemimage' src={party} />
        </div>
        <p>Event : Concert Location : UK
          $15</p>
      </div>


      <div className='imagesli'>
        <div className='item'>
          <img className='itemimage' src={party} />
        </div>
        <p>Event : Concert Location : UK
          $15</p>
      </div>
    </Carousel>
  </>);
}

export default Slide;