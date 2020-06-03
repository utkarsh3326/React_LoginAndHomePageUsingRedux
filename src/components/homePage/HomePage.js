import Identity from "lodash/identity";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import HomePageHeader from "./HomePageHeader";
import ListItem from "./ListItem";

import { showList, showDesc } from "../../actions/index";
import { Data } from "../../utility/Data";

import "../../App.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.jumpToLoginPage = this.jumpToLoginPage.bind(this);
  }

  // to return list on select any categories
  showListItem(listItemNo, listNo) {
    return listNo != null ? (
      <ListItem
        listItems={Data.categories[listNo].items}
        listItemNo={listItemNo}
        showDesc={this.props.showDesc}
      />
    ) : null;
  }

  jumpToLoginPage() {
    this.props.history.push("/");
  }

  render() {
    const { clearSelectionState, listItemNo, listNo, showList } = this.props;
    return (
      <div>
        <button className="logout" onClick={this.jumpToLoginPage}>
          Log Out
        </button>
        <button
          className="clear-selection"
          style={
            clearSelectionState
              ? { backgroundColor: "lightseagreen" }
              : { backgroundColor: "red" }
          }
          disabled={clearSelectionState}
          onClick={() => showList(null, clearSelectionState)}
        >
          clear selection
        </button>
        <HomePageHeader categories={Data.categories} />
        {this.showListItem(listItemNo, listNo)}
      </div>
    );
  }
}

HomePage.defaultProps = {
  jumpToHomePage: Identity,
};

HomePage.propTypes = {
  jumpToHomePage: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    clearSelectionState: state.clearSelectionState,
    listItemNo: state.listItemNo,
    listNo: state.listNo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showList: (index, clearSelectionState) => {
      dispatch(showList(index, clearSelectionState));
    },
    showDesc: (index) => {
      dispatch(showDesc(index));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomePage));
