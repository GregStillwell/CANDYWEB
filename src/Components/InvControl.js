import React from "react";
import Inventory from "./Inventory";
import InvList from "./InvList";
import NewInvForm from "./NewInvForm";
import InvForm from "./InvForm";
import CandyDetail from "./CandyDetails";
import EditCandyForm from './EditTeaForm';

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

  handleSelectingCandy = (id) => {
    const selectedCandy = this.state.mainInvList.filter(candy => candy.id === id)[0]
    this.setState({selectedCandy: selectedCandy })
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleEditingCandyInList = (candyToEdit) => {
    const editedMainCandyList = this.state.mainCandyList
      .filter(candy => candy.id !== this.state.selectedCandy.id)
      .concat(candyToEdit);
    this.setState({
      mainCandyList: editedMainCandyList,
      editing: false,
      selectedCandy: null
    });
  }
  // render(){
  //   let currentlyVisibleState = null;
  //   let buttonText = null;
  //   if (this.state.formVisibleOnPage) {
  //     currentlyVisibleState = <NewInvForm onNewInvCreation={this.handleAddingNewInvToList} />
  //     buttonText="Candy";
  //   } else {
  //     currentlyVisibleState = <InvList invList={this.state.mainInvList} />
  //     buttonText="More candy";
  //   }
  //   return (
  //     <React.Fragment>
  //       <div className="content">
  //         <p></p>
  //         {currentlyVisibleState}
  //         <button onClick={this.handleClick}>{buttonText}</button>
  //       </div>
  //     </React.Fragment>
  //   );
  // }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
  
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInvForm onNewInvCreation={this.handleAddingNewInvToList} />
      buttonText = "Go back to candy list"
    } else if (this.state.selectedCandy != null) {
      currentlyVisibleState = <CandyDetail selectedCandy={this.state.selectedCandy} />
      buttonText = "Go back to candy list"
    } else if (this.state.editing) {
      currentlyVisibleState = <EditCandyForm tea={this.state.selectedCandy} onCandyTea={this.handleEditingCandyInList} />
        buttonText = "Return to candy list";
    } else {
      currentlyVisibleState = <InvList onCandySelection={this.handleSelectingCandy} invList={this.state.mainInvList} />
      buttonText = "Add new candy"
    }  
     

    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  
  }

}

export default InvControl;