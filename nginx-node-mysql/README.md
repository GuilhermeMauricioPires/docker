# Enviado em 21/01/2022 às 16:40 - Correção/Pendente

1 Pra solucionar isto você pode criar a tabela pela aplicação ou usar um script de inicialização do banco de dados. <br/>
R: Ajustado para criar tabela ao iniciar aplicação.

-----------------------------------------------------------------------------------------------------------------------


# Enviado em 20/01/2022 às 23:09 - Correção/Pendente

1 Adicionar o comando 'RUN npm install' no Dockerfile do Node, já que as dependências ainda não estão sendo instaladas. <br/>
2 Remover o volume no docker-compose ou adicionar um volume anônimo apontando para a pasta node_modules no container para preservar as dependências.

## Ontem fiz a correção do desafio nginx + node conforme solicitado, porém o feedback que recebi hoje está relatando que não fiz as devidas correções, porem no ultimo commit consta os ajustes:

1 O npm install está na mesma linha que o apt-get update/install no dockerfile do Node. <br/>
2 Foi removido o volume do service node do docker-compose.