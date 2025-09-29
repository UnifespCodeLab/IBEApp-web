import { chakra, Heading, Text, Flex, Box, IconButton } from '@chakra-ui/react';

const mediaMobile = `@media (max-width: 768px)`;

export const WrapperHeader = chakra(Heading, {
  base: {
    bg: { base: 'primary.600', lg: 'white' },
    color: { base: 'primary.600', lg: 'white' },
    boxShadow: 'md',
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: 'docked',
    [mediaMobile]: {
      position: 'sticky',
      top: '0px',
      zIndex: '2',
      boxShadow: 'none',
    },
  },
});

export const NavFlex = chakra(Flex, {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    margin: '0 auto',
  },
});

export const MenuIconButton = chakra(IconButton, {
  base: {
    colorScheme: 'white',
    variant: 'link',
    _hover: {
      bg: 'rgba(255, 255, 255, 0.15)',
    },
  },
});