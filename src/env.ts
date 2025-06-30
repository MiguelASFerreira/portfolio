import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url(),
  GITHUB_USERNAME: z.string(),
  GITHUB_TOKEN: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (parsed.error) {
  console.error('❌ Erro nas variáveis de ambiente:', parsed.error.format());
  throw new Error('Variáveis de ambiente inválidas.');
}

export const env = parsed.data;

