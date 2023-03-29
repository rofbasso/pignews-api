interface CreateUserDTO {
  name: string
  phone: string
  club: string
}

interface UpdateUserDTO {
  id: number
  name?: string
  phone?: string
  club?: string
}

export { CreateUserDTO, UpdateUserDTO }
