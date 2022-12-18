import { Fragment } from 'react'

const ErrorExample = () => {
  let title = 'rastgele başlık'
  const handleClick = () => {
    title = 'Selam '
    console.log(title)
  }
  return (
    <Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Başlığı Değiştir
      </button>
    </Fragment>
  )
}

export default ErrorExample
