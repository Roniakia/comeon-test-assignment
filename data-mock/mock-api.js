const Data = require('./mock-data.json')

const players = [
  {
    "username": "rebecka",
    "name": "Rebecka Awesome",
    "avatar": "images/avatar/rebecka.jpg",
    "event": "Last seen gambling on Starburst.",
    "password": "secret",
  },
  {
    "username": "eric",
    "name": "Eric Beard",
    "avatar": "images/avatar/eric.jpg",
    "event": "I saw you won 500 SEK last time!",
    "password": "dad",
  },
  {
    "username": "stoffe",
    "name": "Stoffe Rocker",
    "avatar": "images/avatar/stoffe.jpg",
    "event": "Your are a rock star",
    "password": "rock",
  }
];

module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    switch (req.path) {
      case '/login': {
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
        break;
      }
      case '/logout': {
        const username = req.body.username;
        const player = players.find(player => player.username === username)
        if (player) {
          res.status(200).json({
            status: 'success'
          });
        } else {
          res.status(401);
        }
        break;
      }
      default:
        break;
    }
  } else if (req.method === 'GET') {
    switch (req.path) {
      case '/search': {
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
        break;
      }
      case '/game': {
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
        break;
      }
      case '/category': {
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
        break;
      }
      default:
        break;
    }
  }
  next()
}
