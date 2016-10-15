const React = require('react')
const Header = require('./Header')

const Layout = (props) => (
  <div className='app-container'>
    <Header />
    {props.children}
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
}

module.exports = Layout
