import {createContext} from "react";
import Companies from './hooks/companyContext'

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

const CompanyContext = createContext({})

function CompanyProvider({children}: AuxProps){
  const {company, getCompanyPerPage} = Companies()

  return (
    <CompanyContext.Provider value={{company, getCompanyPerPage}}>
      {children}
    </CompanyContext.Provider>
  )
}

export {CompanyProvider, CompanyContext}