import Data from './mock-data.json'

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req.query
    const gamesSearch = Data.games.reduce(((acc, cur) => {
      if ((cur.code + cur.name).includes(query)) {
        return [...acc, cur]
      }
      return acc;
    }), [])
    res.status(200).json({
      status: 'success',
      result: gamesSearch
    });
  }
}
