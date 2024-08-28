import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  // Server-side authentication logic here
  const isAuthenticated = false // ... your AuthKit authentication check

  if (!isAuthenticated && event.node.req.url !== '/login') {
    return sendRedirect(event, '/login')
  }
})