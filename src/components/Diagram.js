import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIndustry } from '@fortawesome/free-solid-svg-icons'
import StyledDiagram from './styledComponents/StyledDiagram';
import map from '../assets/map.jpg';

class Diagram extends React.Component{

  constructor(){
    super();
    this.state = {
      showMap: false
    }

    this.handleShowDiagram = this.handleShowDiagram.bind(this);
    this.handleShowMap = this.handleShowMap.bind(this);
  }

  handleShowDiagram(){
    this.setState({
      showMap:false
    });
  }

  handleShowMap(){
    this.setState({
      showMap:true
    })
  }

  renderContent(){
    if(this.state.showMap){
      return (
        <div>
          <img className="map" src={map} alt="map"/>
        </div>
      );
    }
    else{
      return (
        <div className="diagram-container">
          <div>
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div>
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div>
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div>
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div>
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div>
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div>
            <FontAwesomeIcon icon={faIndustry} />
          </div>
        </div>
      );
    }
  }

  render(){
    return (
      <StyledDiagram>
        <div className="button-container">
          <button onClick={this.handleShowDiagram}>Diagram</button>
          <button onClick={this.handleShowMap}>Map</button>
        </div>
        <p className="text-center"><strong>Text</strong></p>
        {this.renderContent()}
      </StyledDiagram>
  );
  }
}

export default Diagram;