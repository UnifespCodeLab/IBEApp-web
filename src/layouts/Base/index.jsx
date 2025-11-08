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
			<Box as="header" h={HEADER_HEIGHT}>
				<Header />
			</Box>
			<Flex as="main" flex="1" pt={{ base: { HEADER_HEIGHT }, lg: '0' }}>
				<Box
					as="aside"
					position="sticky"
					display={{ base: 'none', lg: 'block' }}
					w="300px"
					h={`calc(100vh - ${HEADER_HEIGHT})`}
					py={4}
					pl={10} //temporarys
					scrollbar="hidden"
					overflowY="auto"
				>
					<Sidebar />
				</Box>
				<Box
					flex="1"
					display="flex"
					flexDirection="column"
					overflow="auto"
					p={4}
					px={{ base: 0, lg: 10 }}
				>
					<Outlet />
				</Box>
			</Flex>
		</Flex>
	)
}

export default BaseLayout
