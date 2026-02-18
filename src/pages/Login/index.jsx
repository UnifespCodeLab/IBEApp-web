import React from 'react'
import { useState } from 'react'
import { 
  Box,
  Button,
  Input,
  Heading,
  Stack,
  Link,
  Field
} from "@chakra-ui/react"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados: " + username + " - " + password);
  }

  return(
    <Box 
      bg="light.50" 
      minH="100vh" 
      w="100vw" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
      <Box 
        as="form" 
        onSubmit={handleSubmit}
        bg="white" 
        p={['20px', '60px', '80px']} 
        w="90%"
        maxW="600px" 
        borderRadius="10px" 
        shadow="md"
      >
        <Stack gap="8">
          <Box textAlign="center">
            <Heading 
              color="primary.600" 
              fontSize="40px"
              fontFamily="Montserrat"
              fontWeight="bold"
            >
              IBEApp
            </Heading>
          </Box>

          <Stack gap="4">
            <Field.Root>
              <Field.Label color="primary.600" fontWeight="600" fontSize="18px">
                Nome de Usuário / E-mail
              </Field.Label>
              <Input
                placeholder="Seu nome de usuário ou e-mail"
                h="48px"
                px="16px"
                fontSize="18px"
                variant="outline"
                focusBorderColor="primary.600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label color="primary.600" fontWeight="600" fontSize="18px">
                Senha
              </Field.Label>
              <Input 
                type="password"
                placeholder="Sua senha"
                h="48px"
                px="16px"
                fontSize="18px"
                focusBorderColor="primary.600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box textAlign="right" width="full">
                <Link
                  href="/RecoverPassword"
                  color="primary.600"
                  fontWeight="bold"
                  fontSize="18px"
                  textAlign="right"
                  mt="2"
                  _hover={{ textDecoration: 'underline' }}
                  >
                  Esqueceu a senha?
                </Link>
              </Box>
            </Field.Root>
          </Stack>

          <Button
            type="submit"
            bg="primary.600" 
            _hover={{ bg: "primary.700" }}
            color="white"
            size="lg"
            h="55px"
            fontSize="lg"
            width="full"
          >
            Entrar
          </Button>
        </Stack>
      </Box>
    </Box>
  )
} 

export default Login;