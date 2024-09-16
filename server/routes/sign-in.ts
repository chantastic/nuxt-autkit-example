import { defineEventHandler, sendRedirect } from 'h3'
import { WorkOS } from '@workos-inc/node'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const workos = new WorkOS(config.workosApiKey)

  const authorizationUrl = workos.userManagement.getAuthorizationUrl({
    // Use the appropriate provider here (e.g., 'authkit')
    provider: 'authkit',
    clientId: config.workosClientId,
    redirectUri: config.workosRedirectUri,
  })

  return sendRedirect(event, authorizationUrl)
})