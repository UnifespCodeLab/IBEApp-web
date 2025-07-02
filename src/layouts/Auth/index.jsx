import { Outlet } from 'react-router-dom';
import {Container, Logo} from './styles';
import { Box, Text } from '@chakra-ui/react'; 

const BaseLayout = () => {
  return (
    <Container>
      <Box
        p={['20px', '60px', '80px']}
        h="max-content"
        maxWidth="600px"
        w="90%"
        m={5}
        borderRadius="10px"
        shadow="md"
        bgColor="white"
      >
        <Logo>
          <h1>IBEApp</h1>
        </Logo>
      </Box>
      <Text color="black" textStyle="7xl" fontWeight="bold">This is a AUTH Layout</Text>
      <Outlet />
    </Container>
  );
};

export default BaseLayout;
