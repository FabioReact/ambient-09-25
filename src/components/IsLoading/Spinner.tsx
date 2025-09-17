import loaderCss from './spinner.module.css'

const Spinner = () => {
  return <div className={loaderCss.loader} role='status' aria-busy='true'></div>
}

export default Spinner
