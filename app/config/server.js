module.exports = {
  port: process.env.PORT || 8080,
  portFront: process.env.PORT_FRONT || 8081,
  apiHost: process.env.API_HOST || 'http://localhost:8080',
  frontHost: process.env.FRONT_HOST || 'http://localhost:8081',
  language: process.env.LANGUAGE || 'es',
  environment: process.env.ENVIRONMENT || 'development',
  userEmail: process.env.USER_EMAIL || '',
  passEmail: process.env.PASS_EMAIL || '',
  receiverAccounts: process.env.RECEIVER_ACCOUNTS ? JSON.parse(process.env.RECEIVER_ACCOUNTS) : '',
  skipPreflight: process.env.SKIP_PREFLIGHT_CHECK || true
}
