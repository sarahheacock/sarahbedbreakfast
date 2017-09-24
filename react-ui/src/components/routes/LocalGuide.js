import React from 'react';
import PropTypes from 'prop-types';

import Guide from './Guide';
import EditButton from '../buttons/EditButton.js';
import Paragraph from './Paragraph';

import { Route, Redirect, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


const link = (cat) => {
  return "/guide/" + cat.toLowerCase().trim().replace(/\W/g,"").replace(/\s/g, "-");
}

const LocalGuide = (props) => {
  //get categories
  const categories = props.data.guide.reduce((a, b) => {
    if(!a.includes(b.category)) return a.concat([b.category]);
    else return a;
  }, []);

  const routes = categories.map((cat, i) => (
    <Route key={`guideRoute${i}`} path={link(cat)} render={ () =>
      <Guide
        data={props.data.guide.filter((g) => { return g.category === cat; })}
        user={props.user}
        updateState={props.updateState}
      /> }
    />
  ));

  const tabs = categories.map((cat, i) => (
    <div key={`guideTab${i}`}>
    <NavLink to={link(cat)}>
      <button className={(window.location.pathname.includes(link(cat))) ? "linkButton blueButtonActive": "linkButton blueButton"}>{cat}</button>
    </NavLink>
    </div>
  ));

  return (
    <div>
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
          title="Edit Content"
        />
      </div>

      <Row className="clear-fix">
        <Col sm={4} className="columns">
          <div className="text-center tabs">{tabs}</div>
        </Col>
        <Col sm={8} className="columns">
          <Switch>
            {routes}
            <Route render={ () =>
              <Redirect to={link(categories[0])} /> }
            />
          </Switch>
        </Col>
      </Row>
      <div className="text-center">
        <EditButton
          user={props.user}
          dataObj={props.data.guide[0]}
          updateState={props.updateState}
          title="Add Guide"
        />
      </div>

    </div>
  );
}

export default LocalGuide;

LocalGuide.propsTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
}
