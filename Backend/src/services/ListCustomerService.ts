import prisma from "../prisma"


class ListCustomerService {
    async execute() {
        const customers = await prisma.customer.findMany()

        return customers
    }
}
export { ListCustomerService }