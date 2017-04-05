let playerIs = 'X'
$('.playerDiv').text(playerIs)
const putMarker = function () {
  console.log('Clicked a game cell')
  console.log(playerIs)
  console.log(this.text)

  if (this.innerHTML === '&nbsp;') {
    $(this).text(playerIs)
    $(this).show()
    $('.playerDiv').text(playerIs)
    if (playerIs === 'X') {
      playerIs = 'O'
      $('.playerDiv').text(playerIs)
    } else playerIs = 'X'
    $('.playerDiv').text(playerIs)
  } else console.log('Cant click a square twice')
  return false
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
