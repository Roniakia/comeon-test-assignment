import Data from './mock-data.json'

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(Data.categories);
  }
}
