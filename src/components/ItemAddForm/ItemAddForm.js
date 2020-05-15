import React from 'react';

import './ItemAddForm.scss';
import * as PropTypes from 'prop-types';

class ItemAddForm extends React.Component {
  constructor () {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit () {
    const label = 'test (сделать)'; // todo
    this.props.onAddItem(label);
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="type new task ..."/>
        <button className="btn btn-outline-secondary" onClick={this.onSubmit}>Create</button>
      </div>
    );
  }
}

ItemAddForm.propTypes = { onAddItem: PropTypes.func };

export default ItemAddForm;
