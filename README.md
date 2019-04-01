# Aplicacion creada con Webpack, React, Node, Express, Passport, Api Twitter,React Bootstrap.

### Para instalar los modulos npm install. 

### Para correr los servidores usar el comando npm run start
* * *   * * *   * * *   * * *   *  * 
###### Los puertos de los servidores son: 
* BackEnd = 8080
* FrontEnd = 8081

Desde el front hago peticiones al back y desde el back redirijo al front.
Tener en claro los puertos de cada uno.
* * *   * * *   * * *   * * *   *  * 
Login. Al hacer click en el boton del centro te redirije a la pagina de twitter
para logearte
![Imgur](https://i.imgur.com/Xy2qPsh.png)

Estando ya logeado te redirije al Home. 
![Imgur](https://i.imgur.com/WH5Wwi4.png)
Al lado izquierdo estan el SideProfile que imprimira los datos del usuario logeado. 
En el centro apareceran los ultimos 100 tweets del home del usuario.
Arriba en la barra podra refrescar los tweets clickeando en "Actualizar Tweets"
Podrá hacer Logout clickeando en el boton con el mismo nombre

# Endpoints

Los endpoints creados y que se pueden usar en la aplicacion son los siguiente:

1. POST  /get_tweets -> Para obtener los tweets que cumplando con los parametos enviados
2. POST  /create-tweet -> Para hacer un tweet desde la cuenta del usuario logeado
3. GET   /tweets -> Obtener los Tweets recientes del home del usuario logeado
4. GET   /suggestions -> Obtener sugerencias de usuario.