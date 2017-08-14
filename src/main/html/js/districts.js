var h = React.createElement;

class TownsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Selected town is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      h('form', {
        onSubmit: {this.handleSubmit}
      },
        h('h3', null, 'Please select a town'),
        h('select' {
          value: {this.state.value},
          onChange: {this.handleChange}
        },
          for(var town in TOWNS) {
            h('option', {value=town}, {town})
          }
        ),
        h('input', {type:'submit', value:'Submit'})
      )
    );
  }
}

var townsForm = new TownsForm();