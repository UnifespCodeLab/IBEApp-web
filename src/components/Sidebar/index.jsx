import React from 'react'
import { useLocation } from 'react-router-dom'

// Import necessary icons
import {
	MdHome,
	MdChecklist,
	MdAccountBox,
	MdLogout,
	MdSupervisorAccount,
	MdSettingsApplications,
	MdAccountCircle,
	MdInfo,
} from 'react-icons/md'

// Import UI components
import { Box, Avatar, Text, Flex, Container } from '@chakra-ui/react'
import { StackAside, SidebarSeparator } from './styles'
import SidebarItem from '../SidebarItem'

// --- Menu Sections ---
// All items are defined statically here.

const essentialsSection = [
	{ title: 'Início', icon: MdHome, to: '/home' },
	{ title: 'Perfil', icon: MdAccountCircle, to: '/perfil' },
	{ title: 'Guia de uso', icon: MdInfo, to: '/guia-de-uso' },
]

const adminSection = [
	{
		title: 'Controle de usuários',
		icon: MdSupervisorAccount,
		to: '/admin/controle-de-usuarios',
	},
	{
		title: 'Gerenciar Categorias',
		icon: MdSettingsApplications,
		to: '/categorias',
	},
	{
		title: 'Gerenciar Postagens',
		icon: MdSettingsApplications,
		to: '/postagens',
	},
]

const informationSection = [
	{
		title: 'Complemento de Dados',
		icon: MdAccountBox,
		to: '/complemento-de-dados',
	},
	{
		title: 'Formulário Socioeconômico',
		icon: MdChecklist,
		to: '/form',
	},
]

const logoutSection = [{ title: 'Sair', icon: MdLogout, to: '/logout' }]

// --- Combined Sections for Rendering ---

const sidebarSections = [
	essentialsSection,
	adminSection,
	informationSection,
	logoutSection,
]

// --- Side Bar Navigation Component ---

const Sidebar = () => {
	const location = useLocation()
	const name = 'default'
	const avatar = 'https://bit.ly/sage-adebayo'

	const sidebarList = sidebarSections.map((sectionItems, index) => (
		<Box
			width="100%"
			key={index}
			onClick={() => {
				window.scrollTo(0, 0)
			}}
		>
			<React.Fragment key={index}>
				{sectionItems.map((item) => (
					<SidebarItem
						key={item.title}
						title={item.title}
						icon={item.icon}
						to={item.to}
						selected={location.pathname === item.to}
					/>
				))}
				{index < sidebarSections.length - 1 && <SidebarSeparator />}
			</React.Fragment>
		</Box>
	))

	return (
		<StackAside>
			<Flex
				align="center"
				bg="primary.600"
				p={6}
				mb={2}
				borderRadius="10px"
				shadow="md"
			>
				<Box mr={4}>
					<Avatar.Root>
						<Avatar.Fallback name={name} />
						<Avatar.Image src={avatar} />
					</Avatar.Root>
				</Box>
				<Text fontWeight="600" size="sm" color="whiteAlpha.900">
					Olá, {name}!
				</Text>
			</Flex>
			<Container pt={4} pb={4} borderRadius="10px" shadow="md" bg="white">
				{sidebarList}
			</Container>
		</StackAside>
	)
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
