# IBEApp-web

Ação do projeto de extensão CodeLab-Unifesp - IBEAC

O projeto CodeLab-Unifesp desenvolve uma plataforma de comunicação e interação social para que a organização social IBEAC - Instituto Brasileiro de Estudos e Apoio Comunitário Queiróz Filho dissemine informações de saúde a gestantes e puérperas das comunidades da região de Parelheiros em São Paulo. A ideia, formatada a partir de várias reuniões com representantes da ONG, é desenvolver um aplicativo de fórum de discussão que criará uma ponte entre especialistas em primeira infância do CEPI (Centro de Estudos em Primeira Infância) e as mães e puérperas. Entre os tópicos do aplicativo estão os cuidados com as mães, o parto e os bebês, além de trocas solidárias e indicações de cultura e lazer. O projeto tem potencial de atingir um grande número de pessoas da comunidade, visto que a ONG trabalha com toda a região de Parelheiros e tem atuação e reconhecimento nacionais. O software a ser desenvolvido será de licença livre e poderá ser usado também por outras comunidades.

## Requesitos

- Docker
- Git

# Como Rodar o Projeto
Necessário que já tenha previamente instalado Git e Docker na sua máquina. Nenhuma configuração especifica é necessária para esses programas, apenas a padrão

  ## Comandos
  ```
  #Dentro da pasta que deseja o repositório
  git clone https://github.com/UnifespCodeLab/codelab-loader.git
  
  cd codelab-loader
  
  git clone https://github.com/UnifespCodeLab/IBEApp-web.git
  
  ./boot.sh
  ```

  Agora tu deve modificar o arquivo 'docker-compose.yml' manualmente (Enquanto a versão final não está finalizada).

  - Docker-compose.yml
  
  ```
  
  IBEApp-web:
    tty: true
    stdin_open: true
    container_name: ibeapp-web-container
    build:
      context: ./IBEApp-web  # Aponta para a pasta onde está o Dockerfile
      dockerfile: Dockerfile
    env_file:
      - ./IBEApp-web/.env
    image: node:22
    working_dir: /app
    ports:
      - 3001:3000
    volumes:
      - ./IBEApp-web:/app
      - /app/node_modules
    environment:
      CHOKIDAR_USEPOLLING: "true"
  ```

  Seu arquivo "docker-compose.yml" deverá estar dessa forma:
  <img width="1474" height="714" alt="image" src="https://github.com/user-attachments/assets/a7deb5c5-125a-47c2-b23d-382561e37af1" />


  ### Passos para buildar container IBEApp-web
  Ainda na pasta do codelab-loader, execute:
  
  ```
  docker compose up --build IBEApp-web
  ```

  Perfeito! Agora deve estar pronto para usar.

  Se você tiver o Docker-desktop, tu apenas necessita subir ou descer o container do IBEApp pela interface do Docker-desktop. Ao contrário, necessitara subir do docker pelo terminal, porém não será necessário rebuildar novamente o projeto, apenas subir.
  Usando esse comando:
  ```
  docker compose up IBEApp-web
  ```
#
