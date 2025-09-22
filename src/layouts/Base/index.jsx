// import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Flex, Box } from '@chakra-ui/react'
import { ContainerBase, Content, BoxAside, MainWrapper } from './styles'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

const HEADER_HEIGHT = '64px'

const BaseLayout = () => {
	//fazer a side bar scrollar junto com a main

	return (
		<Flex direction="column" minH="100vh" bg="#F0F6F8">
			<Header />
			<Flex as="main" flex="1" overflow="hidden" pt={{ base: '64px', lg: '0' }}>
				<Box
					as="aside"
					display={{ base: 'none', lg: 'block' }}
					w="300px"
					position="sticky"
					top={HEADER_HEIGHT}
					h={`calc(100vh - ${HEADER_HEIGHT})`}
					py={4}
					pl={10} //temporarys
					scrollbar="hidden"
					overflowY="auto"
				>
					<Sidebar />
				</Box>
				<Box as="main" flex="1" p={4} overflowY="auto">
					<Outlet />
				</Box>
			</Flex>
		</Flex>
	)
}

export default BaseLayout
