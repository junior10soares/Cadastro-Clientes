import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustumerService } from "../services/CreateCustumerService";


class CreateCustumerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, email } = request.body as { name: string, email: string }

        const customerService = new CreateCustumerService()
        const customer = await customerService.execute({ name, email })

        reply.send(customer)
    }
}

export { CreateCustumerController }