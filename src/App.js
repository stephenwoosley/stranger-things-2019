import React from 'react';
import { 
  Accordion, 
  AccordionItem, 
  ContentSwitcher, 
  Switch, 
  ToggleSmall 
} from 'carbon-components-react';
import { 
  Content,
  Header,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
} from 'carbon-components-react/lib/components/UIShell';
import { Carousel } from 'react-responsive-carousel';
import { Player } from 'video-react';
import logo from './images/stanger-things_raw.png';
import en_US from './data/en_US';
import la_PG from './data/la_PG';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.scss';


class App extends React.Component {
  state = {
    languageChoice: 'en_US',
    contentData: en_US,
    image: en_US.gallery[0].src,
    currentSeason: 1,
    videoURL: en_US["video-embed"],
    currentSnippet: en_US.snippets[2],
    currentLocation: en_US.locations[4]
  }

  componentDidMount() {
    this.timedSwitcher(this.state.contentData.snippets, 10000);
    this.timedSwitcher(this.state.contentData.locations, 6350);
  }

  toggleLanguage = () => {
    if (this.state.languageChoice === 'en_US') {
      this.setState({languageChoice: 'la_PG'});
      this.setState({contentData: la_PG});
    }
    else if (this.state.languageChoice === 'la_PG') {
      this.setState({languageChoice: 'en_US'});
      this.setState({contentData: en_US});
    }
  }

  switchSeasons = (num) => {
    this.setState({currentSeason: num})
  }

  timedSwitcher = (items, time) => {
    let count = 0;
    let showSnippet = setInterval(() => {
      if(items === this.state.contentData.snippets) {
        this.setState({currentSnippet:items[count]});
      }
      else if (items === this.state.contentData.locations) {
        this.setState({currentLocation:items[count]});
      }
      count++;
      if (count === items.length) {
        count = 0;
      }
    }, time);
  }

  render() {

    const toggleProps = () => ({
      labelText: 'Page Language',
      labelA: 'PG',
      labelB: 'EN',
      disabled: false
    });

    return (
    <div className="container">
          <Header aria-label="IBM Platform Name">
            <HeaderMenuButton
              aria-label="Open menu"
              // onClick={onClickSideNavExpand}
              isActive={false}
            />
            <HeaderName prefix=''>
              <img src={logo} alt='stranger-things-logo' className='logo'/>
              <span className='titleSpan'>in RTP</span>
            </HeaderName>
            <HeaderNavigation aria-label='navigation options'>
              <HeaderMenuItem href="#didYouKnow">Did You Know?</HeaderMenuItem>
              <HeaderMenuItem href="#topEpisodes">Top Episodes</HeaderMenuItem>
              <HeaderMenuItem href="#media">Media</HeaderMenuItem>
            </HeaderNavigation>
            <ToggleSmall
              defaultToggled
              {...toggleProps()}
              className='toggle-lang'
              id='toggle-1'
              aria-label='language toggle'
              onChange={this.toggleLanguage}
            /> 
        </Header>
      <Content>
        <div className='bx--grid'>
          <div className='bx--row section-divider'>
            <div className='bx--col-lg-2'>
            </div>
            <div className='bx--col-lg-8'>
              <h1 className='landing-page__heading'>
                {this.state.contentData.heading}
              </h1>
            </div>
            <div className='bx--col-lg-2'>

            </div>
          </div>
          <div className="bx--row section-divider">
            <div className='bx--col-lg-2'></div>
            <div className='bx--col-lg-8'>
              <h3 className='page-description'>{this.state.contentData.description}</h3>
            </div>
            <div className='bx--col-lg-2'></div>
          </div>
          <div className='bx--row section-divider' id="didYouKnow">
            <div className='bx--col-lg-2'></div>
              <div className='bx--col-lg-8'>
                <h1 className='section-heading'>
                <span role="img" aria-label="thinking-icon">🤔</span> Did You Know? <span role="img" aria-label="thinking-icon">🤔</span>
                </h1>
              </div>
            <div className='bx--col-lg-2'></div>
            <div className='bx--col-lg-6'>
              <h3 className="section-subheading">Show Information & Quotes</h3>
              <h4 className="snippet-holder">{this.state.currentSnippet}</h4>
            </div>
            <div className='bx--col-lg-6'>
              <h3 className="section-subheading">Durham Locations Referenced</h3>
              <h3 className="snippet-holder">{this.state.currentLocation}</h3>
            </div>
          </div>
          <div className='bx--row section-divider' id="topEpisodes">
            <div className='bx--col-lg-2'></div>
              <div className='bx--col-lg-8'>
                <h1 className='section-heading'>
                <span role="img" aria-label="trophy-icon">🏆</span> Top Stranger Things Episodes <span role="img" aria-label="trophy-icon">🏆</span>
                </h1>
              </div>
            <div className='bx--col-lg-2'></div>
            <div className='bx--col-lg-12'>
              <ContentSwitcher>
                  <Switch name='one' text='Season 1' onClick={() => this.switchSeasons(1)} />
                  <Switch name='two' text='Season 2' onClick={() => this.switchSeasons(2)} />
              </ContentSwitcher>
              <Accordion>
                <Season 
                  content={this.state.contentData}
                  seasonNumber={this.state.currentSeason}
                />
              </Accordion>
            </div>
          </div>
          <div className='bx--row section-divider' id="media">
            <div className='bx--col-lg-2'></div>
              <div className='bx--col-lg-8'>
                <h1 className='section-heading'>
                <span role="img" aria-label="media-icon">📽</span> Stranger Things & Durham Media <span role="img" aria-label="media-icon">📽</span>
                </h1>
              </div>
            <div className='bx--col-lg-2'></div>
            <div className='bx--col-lg-6'>
              <Player>
                <source src={this.state.videoURL} />
              </Player>
            </div>
            <div className='bx--col-lg-6 image-slider'>
              <Carousel showIndicators={false}>
                  <div>
                      <img src={this.state.contentData.gallery[0].src} alt='slider' />
                      <p className='legend'>{this.state.contentData.gallery[0].text}</p>
                  </div>
                  <div>
                      <img src={this.state.contentData.gallery[1].src} alt='slider' />
                      <p className='legend'>{this.state.contentData.gallery[1].text}</p>
                  </div>
                  <div>
                      <img src={this.state.contentData.gallery[2].src} alt='slider' />
                      <p className='legend'>{this.state.contentData.gallery[2].text}</p>
                  </div>
                  <div>
                      <img src={this.state.contentData.gallery[3].src} alt='slider' />
                      <p className='legend'>{this.state.contentData.gallery[3].text}</p>
                  </div>
              </Carousel>
            </div>
          </div>
        </div>
      </Content>
    </div>
    );
  }
}

function Season(props) {
  let episodes = [props.content['episode-list']];
  episodes = props.content['episode-list'].filter((episode) => episode.season === props.seasonNumber);
  const returnedEpisodes = episodes.map((episode, index) => {
    return (
      <AccordionItem 
        key={index}
        className='season-episode-data'
        title={episode.name}
      >
        <h5>Rating: {episode.rating}</h5>
      </AccordionItem>
    );
  });
  return returnedEpisodes;
}

export default App;
