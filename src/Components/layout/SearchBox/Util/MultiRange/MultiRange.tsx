import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSearchBox } from '@/ContextApi/SearchBoxContext';


const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
    ...theme.applyStyles('dark', {
      color: '#bfbfbf',
      opacity: undefined,
    }),
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {
  value: number;
}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, value, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '12px',
          fontWeight: 'bold',
          color: 'orange',
          backgroundColor:"orange"
        }}
      >
        {value}
      </span>
    </SliderThumb>
  );
}

export default function MultiRange() {
const {rating,handleChangeRating}=useSearchBox();

  return (
    <Box className=" w-[98%] mt-2 sm:mt-[unset] md:w-[65%]">
     <Typography sx={{mb:0.5}}>
        Rating Range: {rating[0]} to {rating[1]}
      </Typography>
      
       <AirbnbSlider
       sx={{color:"orange"}}
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum value' : 'Maximum value')}
        value={rating}
        onChange={handleChangeRating}
        min={1}
        max={10}
        step={1}
        valueLabelDisplay="off" 
      />
  
    </Box>
  );
}