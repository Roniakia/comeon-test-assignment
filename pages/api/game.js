import Data from './mock-data.json'

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req.query
    const game = Data.games.find(game => game.code === query)
    if (game) {
      res.status(200).json({
        status: 'success',
        game
      });
    } else {
      res.status(404).json({
        status: 'fail',
        error: 'Game not found!'
      });
    }
  }
}
