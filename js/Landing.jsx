const React = require('react')

const Landing = () => (
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
)

module.exports = Landing
