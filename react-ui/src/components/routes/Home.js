import React from 'react';
import PropTypes from 'prop-types';
// import { PageHeader } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import { cloudName } from '../../../../data/data';

import EditButton from '../buttons/EditButton.js';
import Paragraph from './Paragraph';

const Home = (props) => {

  return (
    <div>
      <header>
        <CloudinaryContext cloudName={cloudName} className="carousel-content">
            <Image publicId={props.data.image} className="carImg">
                <Transformation height="1000" width="2000" crop="fill"/>
            </Image>
        </CloudinaryContext>
      </header>
      <h1 className="headerText">{("b&b").toUpperCase()}
        <hr />
        Welcome Home
      </h1>

      <div className="home">
        <div className="content">
          <Paragraph
            cursive={props.data.title}
            bold={props.data.b}
            paragraph={props.data.p1}
          />
          <div className="text-center">
            <EditButton
              user={props.user}
              dataObj={props.data}
              updateState={props.updateState}
              title="Edit Home"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

Home.propsTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
}

// <PageHeader className="home-header"><span className="header-text">Home<hr /></span></PageHeader>
