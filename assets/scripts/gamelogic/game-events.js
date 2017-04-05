let playerIs = 'X'

const putMarker = function () {
  console.log('Clicked a game cell')
  console.log(playerIs)
  console.log(this.text)

  if (this.innerHTML === '&nbsp;') {
    $(this).text(playerIs)
    $(this).show()
    if (playerIs === 'X') {
      playerIs = 'O'
    } else playerIs = 'X'
    return false
  }
}
//
// $('.game-cell').unbind('click').click(putMarker)
// addToCart($(this).attr('id'));
const addGameHandlers = () => {
  $('.game-cell').click(putMarker)
}

module.exports = {
  putMarker,
  addGameHandlers
}
