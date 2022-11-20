import Data from './mock-data.json'

export default function handler(req, res, next) {
  if (req.method === 'GET') {
    const { query } = req.query
    const games = Data.games.reduce(((acc, cur) =>
        (cur.code + cur.name).includes(query) ?
          [...acc, cur] : acc),
      []
    )
    res.status(200).json({
      status: 'success',
      games
    });
  }

  next()
}
