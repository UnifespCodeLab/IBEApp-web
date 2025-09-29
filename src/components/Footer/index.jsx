import React from 'react'

import { Stack, Link, Icon, VStack, HStack, Flex } from '@chakra-ui/react'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { PiCubeDuotone } from 'react-icons/pi'

import { WrapperFooter, StackFooter } from './styles'

const Footer = () => {
	return (
		<>
			<WrapperFooter as="footer">
				<StackFooter>
					<VStack>
						<p>
							&copy; {new Date().getFullYear()} IBEAppp. Todos os direitos
							reservados.
						</p>
						<HStack spacing="4">
							{socialLinks.map(({ href, icon, name }, index) => (
								<Link
									key={index}
									href={href}
									color="currentColor"
									_hover={{ color: 'gray.300' }}
									isExternal
									aria-label={name}
								>
									<Icon as={icon.type} size="md" />
								</Link>
							))}
						</HStack>
					</VStack>
				</StackFooter>
			</WrapperFooter>
		</>
	)
}

const socialLinks = [
	{
		href: 'https://github.com/UnifespCodeLab/IBEApp-web',
		icon: <SiGithub />,
		name: 'Github IBEApp',
	},
	{
		href: 'https://www.linkedin.com/company/codelab-unifesp',
		icon: <SiLinkedin />,
		name: 'Linkedin CodeLab',
	},
	{
		href: 'https://www.codelab-unifesp.org/',
		icon: <PiCubeDuotone />,
		name: 'Site CodeLab',
	},
]

export default Footer
