# Scannea - Sistema de Diagnóstico Automotivo Automatizado

## Descrição:

O **Scannea** é uma plataforma que utiliza um sistema de chatbot para permitir que os clientes identifiquem problemas automotivos de forma automatizada. Através do uso de IA, a plataforma fornece diagnósticos precisos, gera um orçamento automático e sugere soluções rápidas e eficientes para os problemas encontrados no veículo, tudo isso sem intervenção humana.

O sistema também oferece uma experiência phygital, onde o cliente começa o processo de forma digital, mas, para reparos físicos, deve levar o veículo à oficina parceira.

## Funcionalidades:

- **Diagnóstico Automático**: Identificação rápida e precisa de problemas no veículo usando IA.
- **Orçamento Automático**: Cálculo de custo estimado com base no diagnóstico gerado.
- **Sugestões e Dicas**: Recomendação de melhorias e soluções personalizadas.
- **Chatbot Inteligente**: Interação com o usuário para obter informações e fornecer diagnósticos detalhados.
- **Período de Teste Gratuito**: O Scannea oferece um período de teste gratuito, após o qual é cobrada uma assinatura mensal de R$ 30,00.

## Desafio de Negócio:

O desafio foi projetar uma solução que automatizasse o diagnóstico automotivo, tornando-o ágil, assertivo e sem a necessidade de intervenção humana. Isso gera mais confiança no cliente, que muitas vezes desconfia de diagnósticos manuais realizados em oficinas tradicionais.

## Estrutura do Projeto:

O projeto é composto por 8 componentes principais de páginas, cada um com seu próprio arquivo CSS para estilização:

- **Cadastro**: Página para registro de novos usuários.
- **Chatbot**: Interface para interação com o chatbot de diagnóstico.
- **Contato**: Formulário de contato para suporte ou dúvidas.
- **Footer**: Rodapé da aplicação.
- **Header**: Cabeçalho com navegação principal.
- **Home**: Página inicial com descrição dos serviços e chamada para ação.
- **Login**: Tela de autenticação de usuários.
- **NotFound**: Página exibida para URLs não encontradas (Erro 404).

Cada componente é totalmente estilizado com arquivos CSS próprios, proporcionando uma experiência visual consistente e moderna.

## Requisitos do Sistema:

- Node.js versão 14 ou superior
- NPM versão 6 ou superior

## Como rodar o projeto:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/scannea.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd scannea
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Instale o React Router Dom:

   ```bash
   npm install react-router-dom
   ```

5. Execute o projeto em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

O sistema estará disponível em [http://localhost:5173](http://localhost:5173) ou [http://localhost:3000](http://localhost:3000).

## Tecnologias Utilizadas:

- **React com TypeScript**: Framework e linguagem base do projeto.
- **CSS**: Estilização personalizada para cada componente.
- **React Router Dom**: Gerenciamento de rotas para navegação entre as páginas.
- **SWC + Vite**: Ferramentas para o build e execução do projeto.
- **Chatbot com IA**: Sistema automatizado de atendimento e diagnóstico.

## Desafios Enfrentados:

- **Auto Diagnóstico**: Desenvolver uma solução que automatizasse o diagnóstico de problemas automotivos sem intervenção humana.
- **Auto Orçamento**: Fornecer um orçamento automatizado para o cliente com base no diagnóstico gerado pela plataforma.
- **Banco de Dados**: Uso de IA para acessar um banco de dados de falhas automotivas e gerar diagnósticos assertivos.

## Integrantes:

- **Thiago Moreno Matheus** - RM554507
- **Giovanna Laturague Bueno** - RM556248
- **Raphael Cardoso Peres** - RM558578
