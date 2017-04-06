let playerIs = 'X'
let numOfMoves = 1
let playerPos = []
let array = ['X', 'X', 'X', '', '', '', '', '', '']
const winScenarios = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
const returnPos = function (someArray, playerIs) {
  const indices = []
  let element = playerIs
  let idx = someArray.indexOf(element)
  while (idx != -1) {
    indices.push(idx)
    idx = array.indexOf(element, idx + 1)
  }
  return indices
}
console.log(returnPos(array, playerIs))
playerPos = returnPos(array, playerIs)
console.log(playerPos)

for (let i = 0; i < winScenarios.length; i++) {
    if (winScenarios.some(playerPos)){
      console.log("You won!")
    }
 }

const winsX = [
['X', 'X', 'X', '', '', '', '', '', ''],
['', '', '', 'X', 'X', 'X', '', '', ''],
['', '', '', '', '', '', 'X', 'X', 'X'],
['X', '', '', 'X', '', '', 'X', '', ''],
['', 'X', '', '', 'X', '', '', 'X', ''],
['X', 'X', 'X', '', '', '', '', '', ''],
['X', 'X', 'X', '', '', '', '', '', ''],
['X', 'X', 'X', '', '', '', '', '', '']
]


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
