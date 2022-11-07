import { FastifyInstance } from "fastify";
import { z } from "zod";
import prisma from '../lib/prisma'

export async function userRoutes(fastify: FastifyInstance) {
    fastify.get('/users/count', async (request, reply) => {
        const count = await prisma.user.count();

        reply.status(200).send({ count });
    });
}
