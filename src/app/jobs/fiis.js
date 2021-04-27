import cron from 'node-cron'
import fetch from 'node-fetch'

const cronFii = () => cron.schedule('0 1 * * *', async () => { 
  const res = await fetch(`http://localhost:${process.env.PORT}/api/v1/fiis`)
}, { scheduled: true, timezone: "America/Sao_Paulo"})

export default cronFii