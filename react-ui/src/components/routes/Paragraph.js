import React from 'react';
import PropTypes from 'prop-types';

// import { Row, Col } from 'react-bootstrap';
// import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
// import { cloudName } from '../../../../data/data';
//
// import EditButton from '../buttons/EditButton.js';


const Paragraph = (props) => {

  const paragraph = props.paragraph.split('\n').map((b, i) => {
    return(<h4 className="" key={`paragraph${i}`}>{b}</h4>);
  });

  return (
    <div className="paragraph">
      <hr />
      <h3 className="pretty text-center">{props.cursive}</h3>
      <h4><b className="">{props.bold}</b></h4>
      {paragraph}
      <hr />
    </div>
  );
}

export default Paragraph;

Paragraph.propTypes = {
  cursive: PropTypes.string.isRequired,
  bold: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
}
