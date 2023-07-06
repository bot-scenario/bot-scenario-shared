import joi from 'joi'
import { APPLICATION } from '../constants/applications.js'

export const platformSchema = joi.object().keys({
  token: joi.string().required(),
  email: joi
    .string()
    .required()
    .pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  _id: joi.string(),
  name: joi.string().required(),
  application: joi
    .string()
    .valid(...Object.values(APPLICATION))
    .required(),
})
