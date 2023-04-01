import { limit } from '@grammyjs/ratelimiter'

const ratelimiter = limit({
  timeFrame: 1000,
  limit: 1,
  onLimitExceeded: async () => {

  }
})

export { ratelimiter }
