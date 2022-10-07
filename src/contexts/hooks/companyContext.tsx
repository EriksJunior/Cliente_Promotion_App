import {useState} from 'react'
import { ICompany } from '../../interfaces/ICompany'
import { serviceGetCompanyPerPages } from '../../services/company'

export default function Companies(){
  const [company, setCompany] = useState<Array<ICompany>>()

  async function getCompanyPerPage(): Promise<void>{
    try {
      const companies = await serviceGetCompanyPerPages()
      console.log(companies)
      setCompany(companies)
    } catch (error) {
      console.log(error)
    }
  }

  return {getCompanyPerPage, company}
}

