import requests

# Obtener datos de la API pública
api_url = "https://jsonplaceholder.typicode.com/todos"
response = requests.get(api_url)
data = response.json()

# Procesar datos (ejemplo: filtrar los datos)
filtered_data = [item for item in data if item['completed']]

# Enviar datos al backend en PHP
for item in filtered_data:
    php_url = "http://localhost/api_php/create.php"
    payload = {
        "nombre": item["title"],
        "descripcion": "Ejemplo de descripción"
    }
    response = requests.post(php_url, json=payload)
    print(response.json())
