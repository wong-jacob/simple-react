import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Item extends Component {
  render() {
    console.log("Item.js")
    console.log(this.props);
    var {item, selections} = this.props;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.unit}</td>
        <td>
          <input
            type="text"
            name="weight"
            placeholder="purchase weight"
            value={selections
              .filter((select) => select.id === item.id)
              .map((select) => select.weight)}
            onChange={(e) => this.props.updateSelections(item.id, e.target.value)}
          />
        </td>
      </tr>
    );
  }
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    selections: PropTypes.array.isRequired
}
