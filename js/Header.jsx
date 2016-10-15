const React = require('react')
const ReactRouter = require('react-router')
var Icon = require('babel!svg-react!../public/img/logo.svg')
const { Link } = ReactRouter

class Header extends React.Component {
  render () {
    return (
      <header className='header'>
        <div className='brand'>
          <Link className='brand-link' to='/' >
            <Icon className='normal' /> Teste 2
          </Link>
        </div>
      </header>
    )
  }
}

module.exports = Header
