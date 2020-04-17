import React, { Component } from "react";
import Item from "./Item";
import PropTypes from "prop-types";

export default class DisplayItems extends Component {
  render() {
      // Cannot have if-else in JSX
      if (!this.props.items) {
          return (
            <div>
            <p>No Items to display</p>
            </div>
          )
      } else {
        return (
        <div>
            <p>Display items</p>
            <table>
            <thead>
                <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Weight (kg)</th>
                </tr>
            </thead>
            <tbody>
                {this.props.items.map((item) => (
                    <Item
                    key={item.id}
                    item={item}
                    selections={this.props.selections}
                    updateSelections={this.props.updateSelections}
                    />
                ))}
            </tbody>
            </table>
        </div>
        );
    }
  }
}

DisplayItems.propTypes = {
    items: PropTypes.array.isRequired,
    selections: PropTypes.array.isRequired
}
