from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)

CORS(app)

@app.route('/api/pokemons', methods=['GET'])
def get_pokemons():
    # Consumir la API de PokeAPI
    api_url = "https://pokeapi.co/api/v2/pokemon?limit=10"
    response = requests.get(api_url)
    data = response.json()

    # Filtrar Pokémon con estadísticas de ataque mayores a 50
    pokemon_data = []
    for pokemon in data['results']:
        pokemon_details_url = pokemon['url']
        pokemon_details_response = requests.get(pokemon_details_url)
        pokemon_details = pokemon_details_response.json()

        # Filtrar si el ataque es mayor a 50
        attack_stat = next((stat['base_stat'] for stat in pokemon_details['stats'] if stat['stat']['name'] == 'attack'), None)

        if attack_stat:
            pokemon_data.append({
                "nombre": pokemon_details['name'],
                "descripcion": f"Pokémon con ataque de {attack_stat}"
            })

    # Verificar si se requiere filtrar por ataque mayor a 50
    filter_param = request.args.get('filter')
    if filter_param == 'highattack':
        # Filtrar Pokémon con ataque mayor a 50
        pokemon_data = [pokemon for pokemon in pokemon_data if int(pokemon['descripcion'].split()[-1]) > 50]

    return jsonify(pokemon_data)

if __name__ == '__main__':
    app.run(debug=True)
