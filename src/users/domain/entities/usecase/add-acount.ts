import { IUserAcountModel } from '../interfaces/iAcountUser.entity'

export interface IAddAcountModel {
  firstname: string
  lastname: string
  email: string
  password: string
  rol: string
  created_date: Date
}

export interface AddAcount {
  add: (acount: IAddAcountModel) => Promise<IAddAcountModel>
}
