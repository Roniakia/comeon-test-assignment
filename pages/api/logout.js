import players from './_players'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const username = req.body.username;
    const player = players.find(player => player.username === username)
    if (player) {
      res.status(200).json({
        status: 'success'
      });
    } else {
      res.status(401);
    }
  }
}
