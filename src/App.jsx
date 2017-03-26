import React, { Component } from 'react';
import './App.css';
const meme = require('../public/all-the-things-blank-clean-template-cropped.png')
import { Button, Row, Col, Icon } from 'react-materialize';
const Dropzone = require('react-dropzone');


const DropzoneDemo = React.createClass({
    getInitialState: function () {
        return {
          files: []
        };
    },

    onDrop: function (acceptedFiles) {
      this.setState({
        files: acceptedFiles
      });
    },

    onOpenClick: function () {
      this.dropzone.open();
    },

    render: function () {
      return (
        <div className="dropzone">
          {
            this.state.files.length > 0 
            ? //IF TRUE
            <div >
              <div>
                {this.state.files.map((file) => 
                  <img className="img" src={file.preview} style={this.props.styles} /> 
                )}
              </div>
            </div> 
            : //IF FALSE
            <div >
              <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
              <button type="button" onClick={this.onOpenClick}>
                Open Dropzone
              </button>
            </div>
          }
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
      translate: 0,
    };

    this.adjustRotation = this.adjustRotation.bind(this);
    this.adjustOpactity = this.adjustOpactity.bind(this);
    this.adjustScale = this.adjustScale.bind(this);
    this.adjustTranslate = this.adjustTranslate.bind(this);
    this.defaultValues = this.defaultValues.bind(this);
  }

  defaultValues(){
    this.setState({
      rotation: 0,
      opacity: 100,
      scale: 100,
      translate: 0
    })
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
          <img src={meme} className="meme"/>
          <h2 className="title">Play with all the pictures</h2>
        </div>
        <Row className="App-main-container card-panel grey lighten-2">
          <Col s={9} className='grid-example'>
          <div className="card-panel white picture-wrapper valign-wrapper center-align">
            <DropzoneDemo className="valign center-align" 
              styles={
                {
                  opacity: this.state.opacity/100,
                  transform: `rotate(${this.state.rotation}deg) translateX(${this.state.translate}px)`,
                  height: `${this.state.scale}%`,
                  width: `${this.state.scale}%`
                }
              } />
          </div>
          </Col>
          <Col s={3} className='avail-buttons'>
          <p>Rotate</p>
          <p className="range-field"><input className="valign" type="range" min="-180" max="180" value={this.state.rotation} step="1" onChange={this.adjustRotation}/></p>
          <p>Translate</p>
          <p className="range-field"><input className="valign" type="range" min="-100" max="100" value={this.state.translate} step="1" onChange={this.adjustTranslate}/></p>
          <p>Opacity</p>
          <p className="range-field"><input className="valign" type="range" min="0" max="100" value={this.state.opacity} step="1" onChange={this.adjustOpactity}/></p>
          <p>Scale</p>
          <p className="range-field"><input className="valign" type="range" min="0" max="100" value={this.state.scale} step="1" onChange={this.adjustScale}/></p>
          <p><Button onClick={this.defaultValues}>Reset</Button></p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
