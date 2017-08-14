var h = React.createElement;

class EducationReports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/profiles.doe.mass.edu/state_report/${this.props.report}.aspx?export_excel=yes`, {
      headers: {
        Accept: 'application/vnd.ms-excel',
        'X-Requested-With': 'no-cors'
      }
    }).then(response => {
        var responseHtml = document.createElement( 'html' );
        responseHtml.innerHTML = response.data;
        var rows = responseHtml.getElementsByTagName('tr');
        var headers = [];
        var data = [];
        for (var i=0; i < rows.length; i++) {
            var row = rows[i];
            if(row.className == 'ccc') {
                for(var j=0; j < row.children.length; j++) {
                    var child = row.children[j];
                    headers[j] = child.outerText;
                }
            } else {
                var rowData = [];
                for(var j=0; j < row.children.length; j++) {
                    var child = row.children[j];
                    rowData[j] = child.outerText;
                }
                data.push(rowData);
            }
        }
        this.setState({
            headers: headers,
            data: data
        });
     }).catch(error => {
      console.log('Got error.');
      console.log(error);
    });
  }
  
  render() {
    return (
      h('div',null,
        h('h1', null, `${this.props.report}`),
        h('ul', null, `${this.state.data}`)
      )
    );
  }
};

var educationReports = new EducationReports();