const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Layout = require('./Layout')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
    </Route>
  </Router>
)

//  Google analytics
var ReactGA = require('react-ga')
ReactGA.initialize('UA-85748374-1')

ReactDOM.render(<App/>, document.getElementById('app'))
