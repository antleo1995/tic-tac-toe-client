let playerIs = 'X'
let numOfMoves = 1

$('.numOfMovesDiv').text('0')
$('.playerDiv').text(playerIs)

const putMarker = function () {
  console.log('Clicked a game cell')
  console.log(playerIs)
  console.log(this.text)

  if (this.innerHTML === '&nbsp;') {
    $(this).text(playerIs)
    $(this).show()
    $('.playerDiv').text(playerIs)
    $('.numOfMovesDiv').text(numOfMoves)
    numOfMoves += 1
    if (playerIs === 'X') {
      playerIs = 'O'
      $('.playerDiv').text(playerIs)
    } else playerIs = 'X'
    $('.playerDiv').text(playerIs)
  } else console.log('Cant click a square twice')
  return false
}

const addGameHandlers = () => {
  $('.game-cell').click(putMarker)
}

module.exports = {
  putMarker,
  addGameHandlers
}
