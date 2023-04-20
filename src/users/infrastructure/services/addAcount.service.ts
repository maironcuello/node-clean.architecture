import { AcountRepository } from '../datasource'
import { IAddAcountModel } from '../../domain'

class AcounService {
  async get () {
    return AcountRepository.find({}, 'uid firstname lastname created_date')
  }

  async getOne (email: string) {
    return AcountRepository.findOne({ email })
  }

  async getById (id: string) {
    return AcountRepository.findById(id, 'uid firstname lastname created_date')
  }

  async create (user: IAddAcountModel) {
    return AcountRepository.create(user)
  }

  async update (id: string, user: IAddAcountModel) {
    return AcountRepository.findByIdAndUpdate(id, user,{ new: true, useFindAndModify: true })
  }

  async delete (id: string) {
    return AcountRepository.findOneAndDelete({ id })
  }
}

export default new AcounService()
