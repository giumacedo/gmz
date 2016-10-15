const React = require('react')
const CountdownTimer = require('./CountdownTimer')

const Landing = () => (
  <div>
    <div className='home-info'>
      <iframe
        src='http://player.twitch.tv/?channel={ lirik }'
        height='349'
        autoPlay='true'
        width='620'
        frameBorder='0'
        scrolling='no'
        allowFullScreen='true'
      />
    </div>
    <CountdownTimer initialTimeRemaining={535210023}/>
  </div>
)

module.exports = Landing
