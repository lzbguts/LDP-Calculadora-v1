const calculatorButtons = [
  {
    name: '1',
    type: 'number'
  },
  {
    name: '2',
    type: 'number'
  },
  {
    name: '3',
    type: 'number'
  },
  {
    name: '+',
    type: 'operator'
  },
  {
    name: '4',
    type: 'number'
  },
  {
    name: '5',
    type: 'number'
  },
  {
    name: '6',
    type: 'number'
  },
  {
    name: '-',
    type: 'operator'
  },
  {
    name: '7',
    type: 'number'
  },
  {
    name: '8',
    type: 'number'
  },
  {
    name: '9',
    type: 'number'
  },
  {
    name: '*',
    type: 'operator'
  },
  {
    name: ' ',
    type: 'empty'
  },
  {
    name: '0',
    type: 'number'
  },
  {
    name: '=',
    type: 'equal'
  },
  {
    name: '/',
    type: 'operator'
  }
]

const calculatorElement = document.querySelector('.calculatorButtons')
let str = ''

calculatorButtons.forEach(button => {
  const buttonElement = document.createElement('button')
  buttonElement.textContent = button.name
  buttonElement.className = button.type
  buttonElement.addEventListener('click', () => {
    str += button.name
    document.getElementById('result').value = str
  })
  calculatorElement.appendChild(buttonElement)
})
