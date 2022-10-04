import { api } from './api'
import { ICompany } from '../interfaces/ICompany'

async function serviceGetCompanyPerPagess(): Promise<Array<ICompany>> {
  const { data } = await api.get('/company/company/per/page/1')
  return data
}

export { serviceGetCompanyPerPagess }