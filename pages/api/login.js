import players from './_players'

export default function handler(req, res) {
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
        error: 'player does not exist or wrong password'
      });
    }
  }
}
