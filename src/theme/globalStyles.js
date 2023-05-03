// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';
import { grey } from '@mui/material/colors';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          "::-webkit-scrollbar":{
            width:'10px',
            borderRadius:'20px'
          },
          "::-webkit-scrollbar-thumb":{
            backgroundColor:'#2cccc4',
            borderRadius:'15px',
            width:'10px'
          },
          "::-webkit-scrollbar-track": {
            border: '4px solid transparent',
             /* THIS IS IMPORTANT */
            borderRadius:'20px'
        }
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
      }}
    />
  );

  return inputGlobalStyles;
}
