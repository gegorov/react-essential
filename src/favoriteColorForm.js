import React from 'react';

class FavoriteColorForm extends React.Component {
  
  state = { 
    value: '',
  }

  newColor = e => this.setState({
    value: e.target.value,
  })

  submit = e => {
    console.log(`New color: ${this.state.value}`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Favourite Color:
          <input 
            type="color"
            onChange={this.newColor}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default FavoriteColorForm;