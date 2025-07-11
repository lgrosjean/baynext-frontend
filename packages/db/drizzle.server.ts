import { neonConfig, Pool } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-serverless'
import { WebSocket } from 'ws'

const connectionString = process.env.NODE_ENV === 'production' ? process.env.POSTGRES_URL : process.env.LOCAL_POSTGRES_URL

if (process.env.NODE_ENV === 'production') {
   neonConfig.webSocketConstructor = WebSocket
   neonConfig.poolQueryViaFetch = true
} else {
   neonConfig.wsProxy = (host) => `${host}:5433/v1`
   neonConfig.useSecureWebSocket = false
   neonConfig.pipelineTLS = false
   neonConfig.pipelineConnect = false
}

const pool = new Pool({ connectionString })

console.log("Accessing Drizzle client...")

export const db = drizzle(pool)