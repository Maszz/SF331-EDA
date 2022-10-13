import { registerAs } from '@nestjs/config';
interface Config {
  rabbitmq: string;
}

const envConfigObject = registerAs<Config>('config', () => ({
  rabbitmq: process.env.RABBITMQ_URL,
}));

export { envConfigObject };
