import axios from 'axios';
import jwtDecode from 'jwt-decode';

// Todo: Iniciar objeto httpClient usando estructura axios
const httpClient = axios.create();

// Para obtener token
httpClient.getToken = function() {
    return localStorage.getItem('token');
}

// Establecer valor token
httpClient.setToken = function(token) {
	localStorage.setItem('token', token);
	return token;
}

// Para obtener el usuario actual
httpClient.getCurrentUser = function() {
    const token = this.getToken()
    if(token) return jwtDecode(token)
    return null
}

// Log in usuario
httpClient.logIn = function(credentials) {
	return this({ method: 'POST', url: '/api/users/login', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token;
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token);
				const user = jwtDecode(token);
				return {success: true, user};
			} else {
				const errorMessages = serverResponse.data.map( (error, index) => {
					let msg = error.msg;
					return {key: index, msg}
				})
				return {success: false, errorMessages};
			}
		})
}

// Registrar un usuario
httpClient.signUp = function(userInfo) {
	return this({ method: 'POST', url: '/api/users/register', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token;
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token);
				const user = jwtDecode(token);
				return {success: true, user};
			} else {
				const errorMessages = serverResponse.data.map( (error, index) => {
					let msg = error.msg;
					return {key: index, msg}
				})
				return {success: false, errorMessages};
			}
		})
}

// Cerrar sesion de un usuario
httpClient.logOut = function() {
	localStorage.removeItem('token');
	delete this.defaults.headers.common.token;
	return true;
}

// Para establecer el token actual en el header para todo api request
httpClient.defaults.headers.common.token = httpClient.getToken();

export default httpClient;