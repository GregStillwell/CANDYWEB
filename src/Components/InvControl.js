import React from "react";
import Inventory from "./Inventory";
import InvList from "./InvList";
import NewInvForm from "./NewInvForm";
import InvForm from "./InvForm";
import CandyDetail from "./CandyDetails";
import EditCandyForm from './EditCandyForm';

class InvControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInvList: [],
      selectedCandy: null,
      editing: false
    };
  }

  handleAddingNewInvToList = (newInv) => {
    const newMainInvList = this.state.mainInvList.concat(newInv);
    this.setState({
      mainInvList: newMainInvList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleSelectingCandy = (id) => {
    const selectedCandy = this.state.mainInvList.filter(candy => candy.id === id)[0]
    this.setState({ selectedCandy: selectedCandy })
  }

  handleSaleClick = (id) => {
    const candySold = this.state.mainInvList.filter(candy => candy.id === id)[0];
    if (candySold.quantity > 0) {
      candySold.quantity -= 1;

      const newMainCandyList = this.state.mainInvList
        .filter(candy => candy.id !== candySold.id)
        .concat(candySold);

      this.setState({
        mainInvList: newMainCandyList,
        selectedCandy: candySold
      });
    }
  }

  handleClick = () => {
    if (this.state.selectedCandy != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCandy: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditingCandyInList = (candyToEdit) => {
    const editedMainInvList = this.state.mainInvList
      .filter(candy => candy.id !== this.state.selectedCandy.id)
      .concat(candyToEdit);
    this.setState({
      mainInvList: editedMainInvList,
      editing: false,
      selectedCandy: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInvForm onNewInvCreation={this.handleAddingNewInvToList} />
      buttonText = "Go back to candy list"
    } else if (this.state.editing) {
      currentlyVisibleState = <EditCandyForm candy={this.state.selectedCandy} onEditCandy={this.handleEditingCandyInList} />
      buttonText = "Return to candy list";
    } else if (this.state.selectedCandy != null) {
      currentlyVisibleState = <CandyDetail selectedCandy={this.state.selectedCandy}
      onClickingEdit={this.handleEditClick}
      onClickingSale={this.handleSaleClick} />
      buttonText = "Go back to candy list";
    } else {
      currentlyVisibleState = <InvList onCandySelection={this.handleSelectingCandy} invList={this.state.mainInvList} />
      buttonText = "Add new candy"
    }


    return (
      <><React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
      </>
    );

  }
}

export default InvControl;