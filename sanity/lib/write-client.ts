import "server-only"

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
    token
})

if(!writeClient.config().token) {
    throw new Error("write token not found.")
}
