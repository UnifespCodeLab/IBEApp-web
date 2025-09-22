import { chakra, Separator as ChakraSeparator, Stack } from '@chakra-ui/react';

export const StackAside = chakra(Stack, {
  base: {
    width:'100%',
    bg:'none'
  },
});

export const SidebarSeparator = chakra(ChakraSeparator, {
  base: {
    width: '100%',
    borderColor: 'transparent',
    height: '6',
  },
});