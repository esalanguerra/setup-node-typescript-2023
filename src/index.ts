import { z } from 'zod'

const userschema = z.object({
  name: z.string().min(3, { message: 'Nome de usuário precisa no minimo 3 caracteres' }),
  age: z.number().min(18, { message: 'Usuário precisa ter no minimo 18 anos' }),
})

type User = z.infer<typeof userschema>

function saveUserToDatabase(user: User) {
  const { name, age } = userschema.parse(user)

  console.log(name, age)
}

saveUserToDatabase({ name: 'John', age: 25 })
