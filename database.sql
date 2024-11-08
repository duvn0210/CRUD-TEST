/**Crear la base de datos**/
CREATE DATABASE IF NOT EXISTS gestion_datos;

/** Usar la base de datos**/
USE gestion_datos;

/** Crear la tabla**/
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/**Insertar datos de prueba**/
INSERT INTO items (nombre, descripcion) VALUES ('Item 1', 'Descripción del Item 1');
INSERT INTO items (nombre, descripcion) VALUES ('Item 2', 'Descripción del Item 2');
INSERT INTO items (nombre, descripcion) VALUES ('Item 3', 'Descripción del Item 3');
