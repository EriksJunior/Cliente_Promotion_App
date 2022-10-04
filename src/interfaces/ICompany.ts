export interface ICompany {
  id: string
  companyName: string
  address: string
  district: string
  number: number
  city: string
  cep: string
  uf: string
  cpfCnpj: string
  email: string
  telephone: string
  password: string
  secret: string
  confirmed?: boolean
  createdAt?: Date
  updatedAt: Date
}