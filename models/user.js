import mongoose from 'mongoose'

let Schema = mongoose.Schema

let userSchema = new Schema({
	/*  昵称  */
    name: {
        type: String,
    },
    /*  账号  */
	account: {
		type: String,
	},
	/*  密码  */
	password: {
		type: String
	},
	/*  邮箱  */
	email: {
		type: String,
	},
	/*  签名描述  */
	profile: {
		type: String,
		default: ''
	},
	/*  头像  */
    avatar: {
        type: String
    },
    /*  注册时间  */
	created_at: {
		type: Date,
		default: Date.now
	},
    /*  更新时间  */
	update_at: {
		type: Date,
		default: Date.now
	},
	/*  个人网站地址  */
	website: {
		type: String,
		default: ''
	},
	/*  github  */
	github: {
		type: String,
		default: ''
	},
	/*  位置  */
	location: {
		type: String,
		default: ''
	},
	/*  是否已激活  */
	active: {
		type: Boolean,
		default: false
	},
	/*  令牌  */
  	accessToken: {
  		type: String
  	},
  	/*  是否管理员  */
	admin: {
		type: Boolean,
		default: false
	},
	gameData: {
		all_count: {
			type: Number,
			default: 0
		},
		win_count: {
			type: Number,
			default: 0
		},
		winRate: {
			type: Number,
			default: 0
		}
	}
})

userSchema.index({ account: 1 }, { unique: true, sparse: true })
userSchema.index({ email: 1 }, { unique: true, sparse: true })
userSchema.index({ accessToken: 1 })

userSchema.pre('save', (next) => {
	var now = new Date()
	userSchema.update_at = now
	next()
})

let user = mongoose.model('user', userSchema)

export default user