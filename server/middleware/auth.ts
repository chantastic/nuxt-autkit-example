import { defineEventHandler, parseCookies, sendRedirect } from 'h3'
import { WorkOS } from '@workos-inc/node'
import { useRuntimeConfig } from '#imports'

const workos = new WorkOS(process.env.WORKOS_API_KEY)

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const cookies = parseCookies(event)
  const sessionToken = cookies['workos_session_token']

  // List of paths that don't require authentication
  const publicPaths = ['/', '/sign-in']

  if (!sessionToken && !publicPaths.includes(event.node.req.url)) {
    return sendRedirect(event, '/sign-in')
  }

  if (sessionToken && !publicPaths.includes(event.node.req.url)) {
    try {
      await workos.userManagement.getUser(sessionToken)
      // If we get here, the session is valid
    } catch (error) {
      // Invalid or expired session
      return sendRedirect(event, '/sign-in')
    }
  }
})