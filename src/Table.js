import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tableStyle.css';

class Table extends Component {
    getHead = () => {
        let headtitle = Object.keys(this.props.columns).map((item, i) => {
            return (
                <th key={i}>{this.props.columns[item]}</th>
            )
        })
        return <tr>{headtitle}</tr>;
    }

    getRows = () => {
        let rowContent = this.props.rows.map((item, i) => {
            return (
                <tr key={i}>
                    <td data-column={'Name'}>{item.name}</td>
                    <td data-column={'Email'}>{item.email}</td>
                    <td data-column={'City'}>{item.address.city}</td>
                    <td data-column={'Company'}>{item.company.name}</td>
                </tr>
            )
        })

        return rowContent;
    }

    render() {
        return (
            <table className="responsive-table">
                <thead>
                    {this.getHead()}
                </thead>
                <tbody>
                    {this.getRows()}
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        address: PropTypes.shape({ city: PropTypes.string }),
        company: PropTypes.shape({ name: PropTypes.string })
    })),
    columns: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        city: PropTypes.string,
        company: PropTypes.string,
    })
};

export default Table;

