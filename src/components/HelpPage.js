import React from "react";

class HelpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="help-main">
        <div className="heading">
          <h1>Help & Support</h1>
          <p>Let's take a step ahead and help you better.</p>
        </div>
      </div>
    );
  }
}

export default HelpPage;
