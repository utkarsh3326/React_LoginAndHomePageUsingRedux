import Identity from "lodash/identity";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { showList } from "../../actions/index";

import "../../App.css";

class HomePageHeader extends React.Component {
  showList = (index, showList) => {
    return () => showList(index);
  };

  // to return categories
  showHeaderPart(categories, listNo, showList) {
    return categories.map((item, index) => {
      const style =
        listNo === index
          ? { backgroundColor: "red" }
          : { backgroundColor: "yellow" };
      return (
        <div
          key={item.name}
          style={style}
          onClick={this.showList(index, showList)}
        >
          {item.name}
        </div>
      );
    });
  }

  render() {
    const { categories, listNo, showList } = this.props;
    return (
      <div className="home-page-header">
        {this.showHeaderPart(categories, listNo, showList)}
      </div>
    );
  }
}

HomePageHeader.defaultProps = {
  categories: Array(0),
  listNo: null,
  showList: Identity,
};

HomePageHeader.propTypes = {
  categories: PropTypes.array,
  listNo: PropTypes.number,
  showList: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    listNo: state.listNo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showList: (index, clearSelectionState) => {
      dispatch(showList(index, clearSelectionState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageHeader);
