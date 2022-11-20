import players from './players-data.json'

export default function handler(req, res, next) {
  if (req.method === 'POST') {
    const username = req.body.username;
    const password = req.body.password;
    const player = players.find(player => player.username === username)

    if (player && player.password === password) {
      const playerCopy = Object.assign({}, player); //Creating a copy of player
      delete playerCopy.password;

      res.status(200).json({
        status: 'success',
        player: playerCopy
      });
    } else {
      res.status(401).json({
        status: 'fail',
        error: 'Player does not exist or wrong password'
      });
    }
  }

  if (req.method === 'DELETE') {
    const username = req.body.username;
    const player = players.find(player => player.username === username)

    if (player) {
      res.status(200).json({
        status: 'success'
      });
    } else {
      res.status(401).json({
        status: 'fail',
        error: 'Session does not exist or you don\'t have enough permissions for this action'
      });
    }
  }

  next()
}
