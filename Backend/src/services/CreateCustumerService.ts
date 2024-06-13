import prisma from "../prisma"

interface CreateCustomerProps {
    name: string
    email: string
}

class CreateCustumerService {
    async execute({ name, email }: CreateCustomerProps) {

        if (!name || !email) {
            throw new Error("Preencha todos os campos")
        }

        const customer = await prisma.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })
        return customer
    }
}

export { CreateCustumerService }