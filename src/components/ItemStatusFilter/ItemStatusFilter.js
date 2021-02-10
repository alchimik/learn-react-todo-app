import React from 'react';

export default class ItemStatusFilter extends React.Component {
  render () {
    const { done } = this.props;

    const buttons = [
      { value: null, name: 'All' },
      { value: false, name: 'Active' },
      { value: true, name: 'Done' },
    ];

    return (
      <div className="btn-group">
        {
          buttons.map((el, idx) => {
            const classes = 'btn  ' + (done === el.value ? 'btn-info' : 'btn-outline-secondary');
            return (<button key={idx} type="button"
                            className={classes}
                            onClick={() => this.onClick(el.value)}
            >{el.name}</button>);
          })
        }
      </div>
    );
  }

  onClick (id) {
    this.props.onSearchDoneStatusChange(id);
  }
}
