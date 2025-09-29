import { chakra, Button } from '@chakra-ui/react';

export const AppNameLogo = chakra(Button, {
  base: {
    fontWeight: 'bold',
    fontSize: { base: 'lg', md: 'xl' },
    bg: 'transparent', 
    color: 'primary.600', 
    _hover: { 
      bg: 'transparent'
    },
  },
});