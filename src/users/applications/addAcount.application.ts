import { AddAcount, IAddAcountModel } from '../domain'
import { addAcountService } from '../infrastructure'

export class DbAddAcount implements AddAcount {
  async add (acount: IAddAcountModel): Promise<IAddAcountModel> {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    const userDb: any = await addAcountService.create(acount)

    return new Promise(resolve => resolve(
      userDb
    ))
  }
}
