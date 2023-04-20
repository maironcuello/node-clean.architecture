import { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UserAcountShema = new Schema({
  uid: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String },
  dateCreated: { type: String }
})

UserAcountShema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default UserAcountShema
