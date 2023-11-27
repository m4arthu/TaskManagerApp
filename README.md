# TaskManager
No dia a dia sempre tem  alguma  tarefa  importante que deixamos de fazer por não lembrar se  temos muita coisa  a  fazer 
os gerenciadores de  tarefa vem  com  essa primissa, uma agenda onde você pode administrar  suas tarefas e asssim nunca se  perder durante
o dia.

# Sobre
O projeto taskmanager é dividido em duas partes a api(backend) que processa as CRUDS e  envia os resultados a este taskmanagerapp(frontend).
Onde o usuário pode: criar,editar,deletar e receber suas atividades.

# deploy:
 - https://task-manager-app-lime.vercel.app
 
# tecnologias
 - Typescript // linguagem de progamação
 - Angular // Framework para criar a single page aplication
 - Node.js // engine para rodar a aplicação
 - Npm // gerenciador de pacotes
 - Angular-cli // para cirar, compilar e gerenciar o  app

# Views
   - Home page:

  ![image](https://github.com/m4arthu/TaskManagerApp/assets/102080715/e859dc2a-30a0-4385-8f57-868dd96c50ab)
  
  - Edit task page:
    
  ![image](https://github.com/m4arthu/TaskManagerApp/assets/102080715/fa5cb2c2-1ed7-44c0-82f6-226b2137e8b6)

 - Create task Page:

  ![image](https://github.com/m4arthu/TaskManagerApp/assets/102080715/e2a59028-3185-4831-ba1b-da8932126b88)

# Como rodar:
- intale o node.js,npm e  angular-cli na sua maquina:
- Clone o  repositorio:
  ```````powershell
  git clone <ssh deste repositorio>
  ```````
  ps: não se esqueça de subistituir o espaço delimitado  por pela ssh <> para pegar a ssh va em code -> ssh e copie a ssh
- acesse a raiz da pasta TaskManager e rode no terminal:
  ``````powershell
   npm i 
  ``````
- depois de instaladas as dependencias rode na raiz do  projeto:
   ``````powershell
    ng serve 
  ``````
- após a build, caso  detudo  certo você ja pode acessar  as rodas do projeto, ebaaaaa !!!!
  ps: lembre que o app por padrão  esta apontado para a api deployada caso  queira rodas com a api  localmente prossiga para os proximos passos!!

- rodando  com  a api local:
  1 - acesse: https://github.com/m4arthu/TaskManager e siga os passos para rodar a api
  2 - a partir da root do projeto va para o arquivo localizado em /src/services/tasks.service.ts
  3 - edite a propriedade baseUrl colocalndo o  valor com  a url para sua api  local, por padrão é http://localhost:8000/tasks

# Rotas

- home http://localhost:4200
- Create task  http://localhost:4200/create   
  
