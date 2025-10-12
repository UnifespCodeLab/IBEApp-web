import React from 'react'

import { Box, Text } from '@chakra-ui/react';

import './styles';

const Feed = ({tabName} = {}) => {
  return (
    <>
      <Box bg="black">
        <Text>
          {tabName}
        </Text>
      </Box>
    </>
  )
}

export default Feed;