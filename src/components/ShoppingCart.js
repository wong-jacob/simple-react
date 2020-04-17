import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
    render() {
        let {items, selections} = this.props;
        let totalWeight = 0;
        let totalPrice = 0;

        if (typeof selections !== 'undefined') {
            totalWeight = this.props.selections
                .map(selection => selection.weight)
                .reduce((total, val) => {return total + val});

            totalPrice = this.props.selections
                .map(selection => getItemById(items, selection.id).price * selection.weight)
                .reduce((total, val) => {return total + val});
        }

        return (
            <div>
                <p>
                    <label>Total Weight: </label>{totalWeight}
                </p>
                <p>
                    <label>Total Price: </label>{totalPrice}
                </p>
            </div>
        )
    }
}

ShoppingCart.propTypes = {
    items: PropTypes.array.isRequired,
    selections: PropTypes.array.isRequired
}


function getItemById(items, id) {
    return items.find(item => item.id === id);
}