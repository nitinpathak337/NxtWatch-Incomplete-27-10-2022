import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillTwitterCircle} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'

import NxtWatchContext from '../../context/NxtWatchContext'

import {OptionsContainer, Nav, LinkName} from './styledComponent'
import './index.css'

class MediumMenuOptions extends Component {
  state = {activeTab: 'home'}

  onToggleTab = event => {
    console.log(event)
    this.setState({activeTab: event.target.id})
  }

  render() {
    const {activeTab} = this.state
    console.log(activeTab)

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <OptionsContainer theme={isDarkTheme}>
              <Nav>
                <Link
                  to="/"
                  className="medium-link"
                  id="home"
                  onClick={this.onToggleTab}
                >
                  <AiFillHome fill="#ff0b37" size="23" />
                  <LinkName theme={isDarkTheme}>Home</LinkName>
                </Link>

                <Link
                  to="/trending"
                  className="medium-link"
                  id="trending"
                  onClick={this.onToggleTab}
                >
                  <HiFire fill="#ff0b37" size="23" />
                  <LinkName theme={isDarkTheme}>Trending</LinkName>
                </Link>

                <Link
                  to="/gaming"
                  className="medium-link"
                  value="gaming"
                  onClick={this.onToggleTab}
                >
                  <SiYoutubegaming fill="#ff0b37" size="23" />
                  <LinkName theme={isDarkTheme}>Gaming</LinkName>
                </Link>

                <Link
                  to="/saved-videos"
                  className="medium-link"
                  value="saved"
                  onClick={this.onToggleTab}
                >
                  <MdPlaylistAdd fill="#ff0b37" size="23" />
                  <LinkName theme={isDarkTheme}>Saved videos</LinkName>
                </Link>
              </Nav>
              <Nav>
                <h1>CONTACT US</h1>
                <div>
                  <FaFacebook fill="#00306e" size="34" />
                  <AiFillTwitterCircle fill="#3b82f6" size="38" />
                  <FaLinkedin fill="#4f46e5" size="34" />
                </div>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </Nav>
            </OptionsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default MediumMenuOptions
