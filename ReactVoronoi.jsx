import React, { PropTypes } from 'react';

class ReactVoronoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pointCount } = this.props;
    return (
      <p>{pointCount}</p>
    );
  }
}

ReactVoronoi.propTypes = {
  pointCount: PropTypes.number,
};

ReactVoronoi.defaultProps = {
  pointCount: 4,
};

export default ReactVoronoi;
