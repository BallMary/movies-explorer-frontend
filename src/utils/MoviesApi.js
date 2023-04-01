class MoviesApi {
  constructor({ baseURL }) {
    this.url = baseURL;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getAllMovies() {
    return fetch(`${this.url}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  baseURL: 'https://api.nomoreparties.co',
});

export default moviesApi;
