import { chakra, Container, Flex } from '@chakra-ui/react';

export const WrapperFooter = chakra(Container, {
  base: {
    bg: { base: 'primary.600', lg: 'white' },
    color: { base: 'white', lg: 'primary.600' },
    maxW: 'container.xl',
    px: { base: '4'},
    py: { base: '3'},
    boxShadow: 'md',
    position: 'sticky',
    bottom: '0',
    width: '100%',  
    zIndex: '100',
    left: '0',
    minHeight: '50px'
  },
});

export const StackFooter = chakra(Flex, {
  base: {
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '3',
    gap: 4,
  }
})