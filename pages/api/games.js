import Data from './mock-data.json'

export default function handler(req, res, next) {
  if (req.method === 'GET') {
    res.status(200).json(Data.games);
  }

  next()
}
