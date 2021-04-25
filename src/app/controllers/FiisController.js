import puppeteer from 'puppeteer'

class FiisController {
  async index(request, response) {
    try {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto('https://fiis.com.br/resumo')

      let content = await page.evaluate(() => {
        let rows = [
          ...document.querySelectorAll(
            '#filter--result-table-resumo [role="row"]'
          ),
        ]

        return rows.slice(1).map((row) => {
          return {
            ticker: row.cells[0].innerText,
            last_earnings: row.cells[1].innerText,
            dividend_yield: row.cells[2].innerText,
            payday: row.cells[3].innerText,
            date_with: row.cells[4].innerText,
            avg_year_earning: row.cells[5].innerText,
            dividend_yield_year: row.cells[6].innerText,
            patrimony_per_quota: row.cells[7].innerText,
            price: row.cells[8].innerText,
          }
        })
      })

      await browser.close()

      return response.status(200).json(content)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}

export default new FiisController()
