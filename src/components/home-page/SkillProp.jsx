import React from 'react';
import PropTypes from 'prop-types';

export default function SkillProp(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5>
          {props.jobName} - <strong>{props.Company}</strong>

        </h5>
        <h6 className="years">
          <i className="fa fa-calendar fa-fw mr-3" />
          {props.jobStart} - {props.jobEnd}
        </h6>

        <ul>
          {props.jobDescription.map(desc =>
            (
              <li
                key={desc.id}
              >
                {desc.info}
              </li>))}
        </ul>
        <ul>
          <strong>{props.otherName}</strong>
          {props.otherList.map(desc =>
            (
              <li
                key={desc.id}

              >
                {desc.info}
              </li>))}

        </ul>

      </div>
    </div>
  );
}
SkillProp.propTypes = {
  otherName: PropTypes.string,
  otherList: PropTypes.arrayOf(PropTypes.object),
  jobDescription: PropTypes.arrayOf(PropTypes.object),
  jobEnd: PropTypes.string,
  jobName: PropTypes.string.isRequired,
  Company: PropTypes.string.isRequired,
  jobStart: PropTypes.string.isRequired,
};
SkillProp.defaultProps = {
  otherName: undefined,
  otherList: [],
  jobDescription: [],
  jobEnd: 'Date'
};
