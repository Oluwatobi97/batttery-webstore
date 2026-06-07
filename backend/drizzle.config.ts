import type { Config } from 'drizzle-kit'

const config: Config = {
    schema: './src/db/schema.ts',
    out: './src/db/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString:
            process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/battery_store',
    },
}

export default config
