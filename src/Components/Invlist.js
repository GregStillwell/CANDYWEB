import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";

function InvList(props) {
  return (
    <>
      <React.Fragment>
        <hr />
        {props.invList.map((inventory, index) =>
          <Inventory candy={inventory.candy}
            price={inventory.price}
            description={inventory.description}
            id={inventory.id}
            key={index}
            whenCandyClicked={props.onCandySelection}
          />
        )}
      </React.Fragment>
    </>
  );
}

InvList.propTypes = {
  invList: PropTypes.array,
  onCandySelection: PropTypes.func
};

export default InvList;