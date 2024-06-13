import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustumerService } from "../services/DeleteCustumerService"

class DeleteCustumerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        const customerService = new DeleteCustumerService()

        const customer = await customerService.execute({ id })
        reply.send(customer)
    }
}

export { DeleteCustumerController }