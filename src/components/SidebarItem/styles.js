import { chakra, Button } from '@chakra-ui/react';

const mediaMobile = '@media screen and (max-width: 61rem)';
const mediaDesktop = '@media screen and (min-width: 62rem)';

export const MenuItem = chakra(Button, {
  base: {
    width: '100%',
    
    px: '1rem',
    py: '1.5rem',
    display: 'flex',
    justifyContent: 'flex-start',
    color: '#eeee',

    [mediaDesktop]: {
      color: '#333',
      bg: 'white'
    },

    _focus: {
      bg: 'primary.400',
      color: 'black',
    },

    '&.selected': {
      fontWeight: 'bold',
      borderTop: '1px solid',
      borderBottom: '1px solid',
      bg: 'primary.800',
      color: 'white',
      borderColor: 'primary.900',

      [mediaDesktop]: {
        bg: 'light.50',
        color: 'primary.600',
        borderColor: 'light.100',
      },
    },

    [mediaMobile]: {
      '&.compact': {
        px: '4',
        py: '2',
        width: 'auto',
        ml: '6',
        borderRadius: '5px',
      },

      '& .icon': {
        display: 'none !important',
      },
    },
  },
});