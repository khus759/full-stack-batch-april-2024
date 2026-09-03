import requests

def custom_headers_request(url, method='GET', headers=None, data=None):
    if method == 'GET':
        response = requests.get(url, headers=headers)
    elif method == 'POST':
        response = requests.post(url, json=data, headers=headers)
    elif method == 'PUT':
        response = requests.put(url, json=data, headers=headers)
    elif method == 'DELETE':
        response = requests.delete(url, headers=headers)
    else:
        raise ValueError("Invalid HTTP method specified")
    
    if response.status_code in [200, 201, 204]:
        return response.json() if response.content else 'No Content'
    else:
        response.raise_for_status()  # Raise an HTTPError for bad responses

url = 'https://api.example.com/endpoint'
headers = {'Authorization': 'Bearer YOUR_TOKEN', 'Content-Type': 'application/json'}
response_data = custom_headers_request(url, method='GET', headers=headers)
print(response_data)
