import { ChakraProvider } from '@chakra-ui/react';
import { systemTheme } from '../../utils/theme/mainTheme';

const Provider = ({ children }) => {
  return (
    <ChakraProvider value={systemTheme}>
      {children}
    </ChakraProvider>
  );
}

export default Provider
