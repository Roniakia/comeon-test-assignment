import Data from './mock-data.json'

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req.query
    const category = Data.categories.find(cat => cat.slug === query)
    if (category) {
      res.status(200).json({
        status: 'success',
        category
      });
    } else {
      res.status(404).json({
        status: 'fail',
        error: 'Category not found!'
      });
    }
  }
}
