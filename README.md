# Prueba técnica patrón aplicación ParaBank con Cypess

## La siguiente prueba tecnica se realizo con el fin de demostrar conocimiento en el uso de la herramienta de Cypress 

# Prerrequisito
Instalación de dependencias
- npm install --save-dev cypress-cucumber-preprocessor
- npm install @badeball/cypress-cucumber-preprocessor
- npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild 
-  npm install --save-dev @cypress/webpack-preprocessor

# Configurar cypress.config.js file

- incluir el specPattern para ubicar los archivos de .feature
- incluir base url para parametrizar la url de prueba
- incluir chromeWebSecurity y permitir realizar pruebas en sitios sin certificados

# Estructura del proyecto

Cypress
|
|_____e2e
|        |
|        |_____feature(files)
|_____support
|        |
|        |_____page_objects( contiene clases con los mapeos de objetos)
|        |_____step_definitios( contiene la definición y llamas clase page)
|        |_____cypress.config.js (contiene las configuraciones para cucumber y generales de ejecucion)
|        |_____package.json ( contiene las configuraciones, depenencias, versiones entre otros)


# Ejecutar pruebas con reporte
realizamos varias configuraciones previas 
- npm i --save-dev cypress-mochawesome-reporter
- agregar la configuración del reporte en cypress.config.js

Ejecutamos con los siguientes comandos

- npx cypress run --reporter mochawesome \
  --reporter-options reportDir="cypress/results",overwrite=false,html=false,json=true
- npx mochawesome-merge "cypress/results/*.json" > mochawesome.json
- npx marge mochawesome.json

Validar los resultados en la ruta cypress, mochawesome-reports, mochawesome.html

# Ejecución de casos
En cypress podemos encontrar la manera de ejecutar casos de usando la interface grafica proveia por cypress o usando la consola

Consola
- por tag: npx cypress run --env tags="@registroExitoso" --headed
- todos los casos : npx cypress run 
- abrir la consola cypress : npx cypress open
