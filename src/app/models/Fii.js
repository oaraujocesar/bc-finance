import { Schema, model } from 'mongoose'

const FiiSchema = new Schema({
  ticker: {
    type: String,
    unique: true,
    required: true
  },
  last_earnings: {
    type: String,
    required: true
  },
  dividend_yield: {
    type: String,
    required: true
  },
  payday: {
    type: String,
    required: true
  },
  date_with: {
    type: String,
    required: true
  },
  avg_year_earning: {
    type: String,
    required: true
  },
  dividend_yield_year: {
    type: String,
    required: true
  },
  patrimony_per_quota: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
})

export default model('Fii', FiiSchema)