import Fastify from 'fastify';
import cors from '@fastify/cors';
import { authRoutes } from './routes/auth';
import { gameRoutes } from './routes/game';
import { guessRoutes } from './routes/guess';
import { poolRoutes } from './routes/pool';
import { userRoutes } from './routes/user';

import jwt from '@fastify/jwt';

import * as dotenv from 'dotenv';
dotenv.config();


async function bootstrap() {
    const fastify = Fastify({logger: true});

    await fastify.register(cors, {
        origin: true
    });

    fastify.register(jwt, {
        secret: process.env.JWT_SECRET as string
    });

    fastify.register(authRoutes);
    fastify.register(gameRoutes);
    fastify.register(guessRoutes);
    fastify.register(poolRoutes);
    fastify.register(userRoutes);

    // host serve para acessar o backend pelo android no React Native.
    await fastify.listen({ port: 3333, host: '0.0.0.0' });
}

bootstrap();
