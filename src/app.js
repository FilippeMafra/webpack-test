function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  element.innerHTML = 'Hello Webpack + Babel'
  element.classList.add('hello')

  return element
}

document.body.appendChild(component())
