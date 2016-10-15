const React = require('react')
const ReactDOM = require('react-dom')

const App = () => (
  <div className='app-container'>
    <div className='home-info'>
      <iframe
        src='http://player.twitch.tv/?channel={ gamemasterszen }'
        height='349'
        autoPlay='true'
        width='620'
        frameBorder='0'
        scrolling='no'
        allowFullScreen='true'
      />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
