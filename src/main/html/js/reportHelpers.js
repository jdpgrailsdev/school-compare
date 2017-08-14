function getEnrollmentByGradeReport(town) {
	return this.getStudentPopulation(town);
}

function getStudentPopulation(town) {
    return axios.get('https://cors-anywhere.herokuapp.com/profiles.doe.mass.edu/state_report/enrollmentbygrade.aspx', {
      headers: {
        Accept: 'application/vnd.ms-excel',
        'X-Requested-With': 'no-cors'
      },
      params: {
        'export_excel': 'yes'
      }
    }).then(response => {
        return this.parsePopulationReport(response.data);
    }).catch(error => {
        console.log('Got error.');
        console.log(error);
        return {};
    });
}

function parsePopulationReport(reportData) {
    var responseHtml = document.createElement('html');
    responseHtml.innerHTML = reportData;
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
    return {
        headers: headers,
        data: data
    };
}
