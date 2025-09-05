import './style.css'
import Image from './img.jpg'
import Data from './data.xml'
import Notes from './data.csv'

function component() {
  const element = document.createElement('div')

  element.innerHTML = 'Hello Webpack'
  element.classList.add('hello')

  // Add the image to our existing div.
  const myIcon = new Image()
  myIcon.src = Image
  element.appendChild(myIcon)

  console.log(Data)
  console.log(Notes)

  return element
}

document.body.appendChild(component())
