Passo a passo para executar o ambiente:

_obs: vou sugerir o nome do banco de dados e algumas portas, apenas para que não seja necessário alterar nada para a aplicação funcionar._

_Porém você pode criar a configuração da maneira que preferir, basta apenas ajustar para que as camadas se encontrem._

1 º Criar um banco de dados com o nome **WorkDB** na porta **5432** o usuário **postgres** deve estar com a senha **solaris**.

2 º Clonar o repositório **WorkDBWeather-DataBase** , executar o arquivo **public.sql** no banco de dados.

3 º Clonar o repositório **WorkDBWeather-BackEnd** , executar um "mvn clean install -U -e" para resolver as dependências do projeto.

4 º Validar no **WorkDBWeather-BackEnd/src/main/resources/application.properties** se as configurações do seu banco batem com as da API.

5 º Clique com o botão direito sobre o arquivo **WorkDBWeather-BackEnd/src/main/java/WorkDB/API/Clima/ClimaApplication.java** e selecione o **Run as java aplication**.

6 º Verifique se a API ficou rodando sem nenhum erro, se sim podemos prosseguir.

7 º Clonar o repositório **WorkDBWeather-FrontEnd**.

8 º Você deve certificar o Spring está rodando na porta 8080.

9 º Você pode executar o front usando live server do Visual studio code, ou somente executar o index.html diretamente, funcionará de ambas as maneiras.

_O Front-end foi desenvolvido em JS puro justamente para facilitar o uso._

**Caso algum passo não funcione, peço gentilmente que entre em contato no meu e-mail abaixo.**

Atenciosamente, Lucas de Sena

zenf2.lucas@gmail.com

linkedin.com/in/lucasdesena/

github.com/lucasbnu