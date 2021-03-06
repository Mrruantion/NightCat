import md5 from 'md5'
import jwt from 'jsonwebtoken'
import config from '../config'

/*  生成默认头像  */
export const getGravatar = (email) => {
	return `https://cdn.v2ex.com/gravatar/${md5(email)}/?d=https://cdn.v2ex.com/gravatar/9606f9cc7e486b4cc5c118b9c0ad1d48`
}

/*  jwt加密  */
export const signToken = (payload) => {
	return jwt.sign(payload, config.session_secret)
}

/*  jwt验证  */
export const verifyToken = (token) => {
	return new Promise((res, rej) => {
		try {
			let decoded = jwt.verify(token, config.session_secret)
			res(decoded)
		}
		catch (err) {
			rej(err)
		}
	})
}

export default {
	getGravatar,
	signToken,
	verifyToken
}