import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
	Tabs,
	Box,
	Avatar,
	Flex,
	Button,
	useDisclosure,
} from '@chakra-ui/react'

import Feed from '../../components/Feed/index'

const Home = () => {
	const navigate = useNavigate()

	const [tab, setTab] = useState(0)
	const [tabs, setTabs] = useState(['Feed', 'Recomendados'])

	// const {isOpen, onOpen, onClose} = useDisclosure();
	const { onOpen } = useDisclosure()

	const name = 'default'
	const avatar = 'https://bit.ly/sage-adebayo'

	useEffect(() => {
		// so pra parar de reclamar
		setTabs(['Feed', 'Recomendados'])
		setTab(['Feed', 'Recomendados'])
	}, [tab, tabs])

	return (
		<>
			<Box display="grid" gridTemplateRows="auto auto">
				<Box
					align="center"
					bg="white"
					p={6}
					mb={2}
					borderRadius="10px"
					shadow="md"
				>
					<Flex flexDirection="row">
						<Box mr={4}>
							<Avatar.Root>
								<Avatar.Fallback name={name} />
								<Avatar.Image src={avatar} />
							</Avatar.Root>
						</Box>
						<Button
							color="#606060"
							fontFamily="Nunito Sans"
							fontWeight="550"
							borderRadius="50px"
							flex="1"
							h="auto"
							display="inline-block"
							textAlign="left"
							bg="light.100"
							// p={3}
							pl={6}
							onClick={onOpen}
						>
							No que você está pensando?{' '}
						</Button>
					</Flex>
				</Box>

				<Tabs.Root
					className="tabs"
					variant="unstyled"
					index={null}
					gridRow={{ base: 1, lg: 2 }}
					my={{ base: 0, lg: 4 }}
					onChange={(value) => {
						setTab(value)
						navigate.push(`?categoria=${tabs[value]}`)
					}}
				>
					<Tabs.List
						color={{ base: 'light.300', lg: '#333' }}
						bg={{ base: 'primary.600', lg: 'transparent' }}
						px={{ base: 2, lg: 0 }}
						pr={{ base: 5, lg: 0 }}
						maxWidth="100vw"
						overflowX="auto"
						style={{
							scrollbarWidth: 'thin',
						}}
					>
						{tabs.map((tabName, index) => (
							<React.Fragment key={index}>
								<Tabs.Trigger
									value={tabName}
									flex={{ base: 1, lg: 1 }}
									align="start"
									borderBottom={{
										base: '5px solid var(--chakra-colors-primary-600)',
										lg: 'none',
									}}
									borderRadius={{ base: 0, lg: 10 }}
									shadow={{ base: 'none', lg: 'sm' }}
									mr={{ base: 0, lg: 4 }}
									bg={{ base: 'none', lg: 'light.200' }}
									color={{ base: 'none', lg: 'primary.700' }}
									fontWeight={{ base: 400, lg: 600 }}
									_selected={{
										color: 'white',
										bg: 'primary.600',
										fontWeight: 600,
										borderBottomColor: 'rgba(255, 255, 255, 0.9)',
									}}
								>
									{tabName}
								</Tabs.Trigger>
								<Tabs.Indicator rounded="l2" />
							</React.Fragment>
						))}
					</Tabs.List>

					{tabs.map((tabName, index) => (
						<Tabs.Content key={index} value={tabName}>
							<Feed tab={tabName}></Feed>
						</Tabs.Content>
					))}
				</Tabs.Root>
			</Box>
		</>
	)
}

export default Home
