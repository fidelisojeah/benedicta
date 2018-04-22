// HomePage
import React from 'react';
import PropTypes from 'prop-types';

import TabTags from '../common/TabTags';

import SkillProp from './SkillProp';

const twoTabs = [{
  linkDescription: 'Work Experience',
  tabName: 'work',
}, {
  linkDescription: 'Education',
  tabName: 'education',
}];

/**
 * @return {JSX} - JSX element
 */
export default function SkillsEduc(props) {
  return (
    <div className="full-container skills">
      <div className="container">
        <ul className="nav nav-tabs nav-justified" role="tablist">
          {twoTabs.map(eachTab =>
            (
              <TabTags
                key={eachTab.tabName}
                changeTab={props.changeTab}
                currentTab={props.currentTab}
                {...eachTab}
              />
            ))}
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className={props.currentTab === 'education' ?
              'tab-pane fade show active' : 'tab-pane fade'}
            id="education"
          >
            <div className="container">
              {props.education &&
                props.education.map(eachEducation => (<SkillProp
                  key={eachEducation.id}
                  otherName={eachEducation.otherName}
                  otherList={eachEducation.otherList}
                  jobDescription={eachEducation.jobDescription}
                  jobEnd={eachEducation.jobEnd}
                  jobName={eachEducation.jobName}
                  Company={eachEducation.Company}
                  jobStart={eachEducation.jobStart}
                />
                ))}
            </div>
          </div>
          <div
            className={props.currentTab === 'work' ?
              'tab-pane fade show active' : 'tab-pane fade'}
            id="work"
          >
            <div className="container">
              {props.workExperience &&
                props.workExperience.map(eachWork => (<SkillProp
                  key={eachWork.id}
                  otherName={eachWork.otherName}
                  otherList={eachWork.otherList}
                  jobDescription={eachWork.jobDescription}
                  jobEnd={eachWork.jobEnd}
                  jobName={eachWork.jobName}
                  Company={eachWork.Company}
                  jobStart={eachWork.jobStart}
                />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
SkillsEduc.propTypes = {
  changeTab: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
  education: PropTypes.arrayOf(PropTypes.object),
  workExperience: PropTypes.arrayOf(PropTypes.object)
};
SkillsEduc.defaultProps = {
  education: [],
  workExperience: []
};
