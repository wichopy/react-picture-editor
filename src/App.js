import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col, Icon } from 'react-materialize';
var Dropzone = require('react-dropzone');

var DropzoneDemo = React.createClass({
    onDrop: function (files) {
      console.log('Received files: ', files);
    },

    render: function () {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
    }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 0,
      opacity: 100,
      scale: 100,
      translate: 0
    };

    this.adjustRotation = this.adjustRotation.bind(this);
    this.adjustOpactity = this.adjustOpactity.bind(this);
    this.adjustScale = this.adjustScale.bind(this);
    this.adjustTranslate = this.adjustTranslate.bind(this);
  }

  adjustRotation (event){
    this.setState({rotation: event.target.value });
  }

  adjustOpactity (event) {
    this.setState({opacity: event.target.value });
  }

  adjustScale (event) {
    this.setState({scale: event.target.value });
  }

  adjustTranslate (event) {
    this.setState({translate: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Row className="App-main-container card-panel grey lighten-2">
          <Col s={9} className='grid-example'>
          <div className="card-panel white picture-wrapper valign-wrapper center-align">
          <div className="valign"></div>
          <DropzoneDemo className="valign" />
          </div>
          </Col>
          <Col s={3} className='avail-buttons'>
          <p>Rotate</p>
          <p><input className="valign" type="range" min="0" max="360" value={this.state.rotation} step="1" onChange={this.adjustRotation}/>{this.state.rotation}</p>
          <p>Translate</p>
          <p><input className="valign" type="range" min="0" max="100" value={this.state.translate} step="1" onChange={this.adjustTranslate}/>{this.state.translate}</p>
          <p>Opacity</p>
          <p><input className="valign" type="range" min="0" max="100" value={this.state.opacity} step="1" onChange={this.adjustOpactity}/>{this.state.opacity}</p>
          <p>Scale</p>
          <p><input className="valign" type="range" min="0" max="100" value={this.state.scale} step="1" onChange={this.adjustScale}/>{this.state.scale}</p>
          <p><Button>Reset</Button></p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
