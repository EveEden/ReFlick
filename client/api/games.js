import request from 'superagent'

export function getGameData (id) {
  return request
    .get(`/api/v1/games/${id}`)
    .then(res => {
      const game = res.body
      return game
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

export function submitGame (game) {
  const { frame1Img } = game
  const formData = new FormData()
  formData.append('frame1Img', frame1Img)
  return request
    .post('/api/v1/games')
    .send(formData)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}