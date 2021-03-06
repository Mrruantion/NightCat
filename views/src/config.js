let obj

if (process.env.NODE_ENV === 'development') {
	obj = {
		/*  react-devtools 配置  */
		devtools: false,
		devtoolsPosition: 'left',
		
		/*  http 配置 */
		withCredentials: true,
		host: 'http://localhost:80',

		/*  socket.io  */
		socket_host: 'http://localhost:80'
	}
}
else {
	obj = {
		host: '',
		withCredentials: false,
		socket_host: 'http://nightcat.win'
	}
}

export default obj