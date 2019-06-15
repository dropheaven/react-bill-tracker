import React from "react";

export default class ExpenseForm extends React.Component {
  state = {
    name: "",
    amount: "",
    dueDate: ""
  };

  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    this.setState(() => ({ amount }));
  };

  onDueDateChange = e => {
    const dueDate = e.target.value;
    this.setState(() => ({ dueDate }));
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      amount: this.state.amount,
      dueDate: this.state.dueDate
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="name of expense"
              value={this.state.name}
              onChange={this.onNameChange}
              autoFocus
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="amount owed"
              value={this.state.amount}
              onChange={this.onAmountChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="date"
              value={this.state.dueDate}
              onChange={this.onDueDateChange}
              required
            />
          </div>
          <button className="btn btn-primary">add expense</button>
        </form>
      </div>
    );
  }
}
