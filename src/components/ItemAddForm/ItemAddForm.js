import React from 'react';

import './ItemAddForm.scss';
import * as PropTypes from 'prop-types';

class ItemAddForm extends React.Component {

  state = {
    label: '',
    error_message: ''
  };

  constructor () {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onLabelChange = this.onLabelChange.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();

    let label = this.state.label;
    label = label.trim();

    if (!label) {
      this.setState({
        error_message: 'Не указан заголовок задачи'
      });

      return;
    }

    this.props.onAddItem(this.state.label);

    this.setState({
      label: '',
      error_message: false
    });
  }

  onLabelChange (event) {
    this.setState({
      label: event.target.value,
      error_message: false
    });
  }

  render () {
    const error = this.state.error_message
      ? <div className="item-add-form__error">{this.state.error_message}</div>
      : false;

    return (
      <div className="item-add-form">
        {error}
        <form className="item-add-form__form  d-flex" onSubmit={this.onSubmit}>
          <input className="item-add-form__label-input  form-control"
            value={this.state.label}
            type="text"
            placeholder="type new task ..."
            onChange={this.onLabelChange}
          />
          <button type="submit" className="btn btn-outline-secondary">Create</button>
        </form>
      </div>
    );
  }
}

ItemAddForm.propTypes = { onAddItem: PropTypes.func };

export default ItemAddForm;
