/**
 * About component
 */

import React, { Component } from 'react';

const skillsetList = ['web developer', 'web designer', 'generalist', 'dev ops', 'email developer', 'information architect', 'usability developer'];

class About extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let skillset = skillsetList[this.state.textIdx % skillsetList.length];

    return (
      <section class="background-color-black">
        <div class="container container--medium">
          <h2 class="about-text color-white margin-0 font-weight-normal">
            My name is <strong id="nicholas">Nicholas&nbsp;Diesslin</strong>,<br/>
            I’m a <strong>{skillset}</strong> from <strong>Minnesota</strong>. I like to build, make, and think about things!
          </h2>
        </div>
      </section>
    )
  }
}

export default About;