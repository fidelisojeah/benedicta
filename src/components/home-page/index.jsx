// HomePage
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import TypeWriter from 'react-typewriter';

import imageURL from '../../assets/images/img1.jpeg';

import SkillsEduc from './SkillsEduc';
/**
 * @return {JSX} - JSX element
 */
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description,
      currentTab: 'work',
      education: this.props.education,
      workExperience: this.props.workExperience
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.description !== this.state.description) {
      this.setState({
        description: nextProps.description
      });
    }
    if (nextProps.workExperience !== this.state.workExperience && nextProps.workExperience) {
      this.setState({
        workExperience: nextProps.workExperience
      });
    }
    if (nextProps.education !== this.state.education && nextProps.education) {
      this.setState({
        education: nextProps.education
      });
    }
  }
  changeTab = (event) => {
    event.preventDefault();
    if (event.target.name !== this.state.currentTab) {
      this.setState({
        currentTab: event.target.name
      });
    }
  }
  render() {
    return (
      <div className="before-header" >
        <div className="full-container header">
          <div className="container">
            <div className="row">
              <div className="left-side col-sm-12 col-md-6">
                <h2 className="title">

                  Hey! my name is <span className="name">Benedicta Grandeur</span>
                  (MBA)

                </h2>
                <p className="home-paragraph">
                  {this.state.description}
                </p>
              </div>
              <div className="left-side col-sm-12 col-md-6">
                <div className="image-holder">
                  <img className="my-image" src={imageURL} alt="Benedicta Grandeur" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SkillsEduc
          changeTab={this.changeTab}
          currentTab={this.state.currentTab}
          education={this.state.education}
          workExperience={this.state.workExperience}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    description: state.aboutReducer.description,
    workExperience: state.information.workExperience,
    education: state.information.education
  };
}
HomePage.propTypes = {
  description: PropTypes.string,
  education: PropTypes.arrayOf(PropTypes.object),
  workExperience: PropTypes.arrayOf(PropTypes.object)
};
HomePage.defaultProps = {
  description: '',
  education: [],
  workExperience: []
};
export default connect(mapStateToProps, null)(HomePage);
