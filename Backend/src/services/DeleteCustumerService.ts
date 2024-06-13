import prisma from "../prisma"


interface DeleteCustomerProps {
    id: string
}

class DeleteCustumerService {
    async execute({ id }: DeleteCustomerProps) {

        if (!id) {
            throw new Error('Solicitação invalída.')
        }

        const findCustomer = await prisma.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error("Cliente nao existe!")
        }

        await prisma.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Deletado com sucesso" }
    }
}

export { DeleteCustumerService }