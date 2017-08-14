var h = React.createElement;

class TownsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('Selected town changed to: ' + event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Selected town is: ' + this.state.value);
    event.preventDefault();
    getEnrollmentByGradeReport(this.state.value).then(report => {
      this.setState({
        value:this.state.value,
        report: report, 
        submitted:true
      });
    });
  }

  render() {
    if (this.state.submitted) {     
      console.log(this.state.report);
      return (
        h('div',null,
          h('h1', null, `Enrollment report by grade for ${this.state.value}`),
          h('span', null, `${this.state.report.data}`)
        )
      );
    } else {
      var options = [];
      for(var town in TOWNS) {
        options.push(h('option', {value: `${town}`, key: `${town}` }, `${town}` ));
      }

      return (
        h('form', { onSubmit: this.handleSubmit },
          h('div', { className: 'form-group' }, 
            h('label', null, 'Please select a town'),
            h('select', { className: 'form-control', value: `${this.state.value}`, onChange: this.handleChange }, options),
          ),
          h('button', { className: 'btn btn-primary', type:'submit'}, 'Submit')
        )
      );
    }
  }
}

var townsForm = new TownsForm();