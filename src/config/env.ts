import { config } from "dotenv"
import { z } from "zod"
import { logger } from "../logger/logger"

config({ path: ".env" })

const env = z.object({
    PORT: z.number().default(3000),

})

const result = env.safeParse(process.env)

if(!result.success) {
    logger.error(result.error)
    process.exit(1)
}
