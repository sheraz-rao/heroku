import requests

api = 'http://api.openweathermap.org/data/2.5/weather?apikey=7dbcb563a005513124e32ec4eeeb8a3b&units=metric&q='
city = input("City name: " )
# units = 'metrics'
url = api + city

json_data = requests.get(url).json()

data = json_data['weather'][0]['description']
temp = json_data['main']['temp']
print(data, temp)