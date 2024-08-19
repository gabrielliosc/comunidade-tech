<a name="readme-top">Pt-br</a>

<br />
<div align="center">
<h3 align="center">Site de uma comunidade de tecnologia para mulheres </h3>
  <p align="center">
    Projeto front-end desenvolvido para o trabalho de MVP da terceira sprint no curso de pós-graduação em engenharia de software da PUC-Rio
  </p>
  <p>
    <i>Projeto em desenvolvimento</i>
  </p>
  <p><a href="https://github.com/gabrielliosc/comunidade-tech/issues">Report Bug</a></p>
</div>

<details>
  <summary>Súmario</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Construído Utilizando</a></li>
      </ul>
    </li>
    <li><a href="#instalacao">Instalação</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#creditos">Créditos</a></li>
  </ol>
</details>

## Sobre O Projeto

<p>Bem vindo(a)! Esse é um pojeto de front-end desenvolvido para um MVP de uma aplicação fullstack, a parte de back-end do projeto pode ser encontrada https://github.com/gabrielliosc/comunidade-tech-api/.
O MVP tinha como proposta criar uma arquitetura de 3 componentes interligados
<p>Um esquema da arquitetura final do MVP pode ser consultada abaixo</p>

![arquitetura drawio](https://github.com/user-attachments/assets/732b9d99-6208-4047-9b87-3e454fba3dce)

O objetivo desse componente (A) é desenvolver um site de para interação entre mulheres com interese ou da área de tecnologia, para troca de experiências, conhecimento e promover a diversidade nesta área.</p>
<p>Nesse MVP é possível:</p>
<ul>
  <li>Acessar a landing page com informações sobre a comunidade e suas criadoras</li>
  <li>Se cadastrar como membro da comunidade: conectando ao componente B</li>
  <li>Realizar login como membro da comunidade: conectando ao componente B</li>
  <li>Uma vez logada, cadastrar ou editar informações de seu perfil e links de redes sociais: conectando ao componente B</li>
  <li>Consultar os membros da comunidade e ver mais sobre seu repositórios: Nesse caso entra também a conexão com o componente C (API pública) para consulta aos repositórios de cada membro através dos seus usuários para saber mais:</li>
  https://docs.github.com/en/rest?apiVersion=2022-11-28
</ul> 
<p>Prints de tela da aplicação</p>

Página Inicial

![image](https://github.com/user-attachments/assets/4283fcc5-55c2-49dd-bf19-03f161a36f68)
![image](https://github.com/user-attachments/assets/3ce24842-986b-4c47-a237-6f0fa5c5e335)
![image](https://github.com/user-attachments/assets/a680296b-2f0d-44b5-a902-76bc4c020154)

Membros

![image](https://github.com/user-attachments/assets/69e39263-8f80-4387-baa3-e1c8f7a60070)

Repositórios

![image](https://github.com/user-attachments/assets/6677f672-cc7f-44b4-924b-715fe61253a3)

Login

![image](https://github.com/user-attachments/assets/2821b4df-9e84-4876-a7aa-2e2cbefe04af)

Tela de cadastro

![image](https://github.com/user-attachments/assets/1c03e155-5569-425a-bff6-f430484295c6)

Perfil

![image](https://github.com/user-attachments/assets/8a6bd83d-ba24-4304-97ed-0cccee37be69)

Informação de segurança

![image](https://github.com/user-attachments/assets/81ce9e93-64f3-48da-ae90-4f28fd24f649)

Informação de grupos

![image](https://github.com/user-attachments/assets/646df95c-c7d3-49a3-87eb-1b9bd34d8839)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

React, TypeScript, Axios, Styled-components, Docker

[![Javascript][Javascript]][Javascript-url] [![CSS3][CSS3]][CSS3-url] [![HTML5][HTML5]][HTML5-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/gabrielliosc/comunidade-tech.git
   ```
2. Instale o docker em sua máquina
3. Com o docker crie a imagem do front a partir do Dockerfile
   ```sh
   docker build . -t "front"
   ```
4. Inicie a aplicação com o docker apontando para a porta correta
   ```sh
   docker run -p 5173:5173 front
   ```
5. Acesse a aplicação na porta 5173
   ```sh
   http://172.17.0.3:5173/ 
   ```

## Roadmap

- [x] Menu Header
- [x] Página Inicial
- [x] Logo
- [x] Formulário de cadastro de membro
- [x] Formulário de edição dos dados dos membros
- [x] Formulário de login
- [x] Página listando todos os membros existentes

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p>Alguns pontos para melhoria do projeto podem ser listados como TO DOs no futuro</p>

- [ ] Adicionar opção de upload de avatar
- [ ] Criar Página de Eventos
- [ ] Criar Página de Cursos e Mentorias
- [ ] Criar Página de edição das administradoras
- [ ] Criar Grupos
- [ ] Criar Página de Vagas

## Contato

Gabrielli de Oliveira e Silva da Cruz- [Linkedin](https://www.linkedin.com/in/gabrielli-oliveira-cruz/) - gabrielli.osc@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Créditos

* [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

