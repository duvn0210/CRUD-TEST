# CrudApp

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.11. El proyecto utiliza un backend en **PHP** para interactuar con una base de datos local, y otro backend en **Python** para consumir la API de Pokémon y enviarla al frontend en Angular.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **XAMPP** (para correr el servidor Apache y la base de datos MySQL).
- **Node.js** y **npm** (para poder correr la aplicación de Angular).
- **Angular CLI** (para crear y manejar proyectos Angular).
- **Python** (para correr el backend que consume la API de Pokémon).

## Pasos para ejecutar el proyecto

### 1. Configuración del Backend (PHP con XAMPP - Base de datos local)

1. **Instalar XAMPP**:
   - Descarga e instala XAMPP desde su [página oficial](https://www.apachefriends.org/es/index.html).
   - Asegúrate de que Apache y MySQL estén instalados y configurados correctamente.

2. **Subir el proyecto de PHP**:
   - Coloca los archivos del backend de PHP dentro de la carpeta `htdocs` de tu instalación de XAMPP. Por ejemplo:
     ```
     C:\xampp\htdocs\crud-app\
     ```

3. **Iniciar XAMPP**:
   - Abre el panel de control de XAMPP.
   - Inicia los servicios de **Apache** y **MySQL**.

4. **Configurar la base de datos**:
   - Accede a `http://localhost/phpmyadmin` y crea la base de datos necesaria para el backend de PHP. Puedes importar un archivo `.sql` que contenga la estructura de la base de datos si es necesario.

5. **Configurar el archivo de conexión**:
   - Asegúrate de que el archivo PHP encargado de la conexión a la base de datos (`db_connection.php`) esté configurado correctamente para conectarse a la base de datos de MySQL.

### 2. Configuración del Backend (Python - API de Pokémon)

1. **Instalar Python**:
   - Asegúrate de que **Python** esté instalado en tu máquina. Puedes descargarlo desde [python.org](https://www.python.org/downloads/).

2. **Instalar dependencias de Python**:
   - Instala las dependencias necesarias utilizando `pip`. El backend de Python utiliza librerías como `Flask` o `requests`, asegúrate de tenerlas instaladas:
     ```bash
     pip install flask requests
     ```

3. **Subir el proyecto de Python**:
   - Coloca los archivos del backend de Python en un directorio de tu elección. Por ejemplo:
     ```
     C:\python-backend\pokemon-api\
     ```

4. **Iniciar el servidor de Flask**:
   - Entra en el directorio de tu proyecto de Python y ejecuta el siguiente comando para iniciar el servidor:
     ```bash
     python app.py
     ```
   - Esto iniciará el servidor Flask en `http://localhost:5000`, y la API de Pokémon estará disponible en `http://localhost:5000/api/pokemons`.

### 3. Configuración del Frontend (Angular)

1. **Instalar dependencias**:
   - Entra en el directorio del frontend Angular y corre el siguiente comando para instalar las dependencias:
     ```bash
     npm install
     ```

2. **Configurar la URL del Backend en Angular**:
   - Asegúrate de que la URL en el archivo `poke.service.ts` esté apuntando correctamente al backend de Python que consume la API de Pokémon. La URL debe ser:
     ```typescript
     private apiUrl = 'http://localhost:5000/api/pokemons';
     ```
   - Si tu backend de PHP necesita hacer alguna integración, asegúrate de que las URLs del PHP estén configuradas correctamente en sus respectivos servicios.

3. **Iniciar el servidor de desarrollo**:
   - Corre el servidor de desarrollo de Angular con:
     ```bash
     ng serve
     ```
   - Esto iniciará la aplicación en `http://localhost:4200`. Abre esta URL en tu navegador para ver la aplicación en funcionamiento.
