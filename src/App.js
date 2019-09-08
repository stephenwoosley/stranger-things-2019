import React from 'react';
import { Breadcrumb, BreadcrumbItem, Header, HeaderName } from "carbon-components-react";
import { Content } from 'carbon-components-react/lib/components/UIShell';
import logo from "./images/stanger-things_raw.png";
import en_US from "./data/en_US";
import la_PG from "./data/la_PG";
import './App.scss';


class App extends React.Component {

  // toggle switch will change language
  // it will flip a boolean languageChoice that is in state
  // componentDidMount -> based on languageChoice, set contentData state to either PG or EN
  state = {
    languageChoice: "en_US",
    contentData: []
  }

  componentDidMount() {
    this.state.languageChoice === "en_US" 
      ? this.setState({contentData: { ...en_US}})
      : this.setState({contentData: { ...la_PG}});
  }

  render() {
    return (
      <div>
      <Header aria-label="Stranger-Things-Logo">
        <HeaderName href="#" prefix="">
          <img src={logo} alt="stranger-things-logo" className="logo"/>
        </HeaderName>
      </Header>
      <Content>
        <div className="bx--grid">
          <div className="bx--row landing-page__banner">
            <div className="bx--col-lg-12">
              {/* <Breadcrumb noTrailingSlash>
                <BreadcrumbItem>
                  <a href="/">Getting started</a>
                </BreadcrumbItem>
              </Breadcrumb> */}
              <h1 className="landing-page__heading .bx--type-semibold">
                {this.state.contentData.heading}
              </h1>
            </div>
          </div>
        </div>
      </Content>
    </div>
    );
  }
}

export default App;
