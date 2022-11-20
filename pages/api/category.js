import Data from './mock-data.json'

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req.query
    const category = Data.categories.find(cat => cat.slug === query)

    if (category) {
      const games = Data.games.reduce(((acc, cur) => {
        if (cur.categoryIds.includes(category.id)) {
          return [...acc, cur]
        }
        return acc;
      }), [])
      res.status(200).json({
        status: 'success',
        games
      });
    } else {
      res.status(404).json({
        status: 'fail',
        error: 'Category not found!'
      });
    }
  }
}
