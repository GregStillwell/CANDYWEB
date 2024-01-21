import React from "react";
import Inventory from "./Inventory";
import InvList from "./InvList";
import NewInvForm from "./NewInvForm";

class InvControl extends React.Component {


constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false,
    mainInvList: []
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

render(){
  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewInvForm onNewInvCreation={this.handleAddingNewInvToList} />
    buttonText="Candy";
  } else {
    currentlyVisibleState = <InvList invList={this.state.mainInvList} />
    buttonText="More candy";
  }
  return (
    <React.Fragment>
      <div className="content">
        <p></p>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    </React.Fragment>
  );
}
}

export default InvControl;