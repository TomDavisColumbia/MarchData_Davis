
     var	'textStyle = {
     fontName: 'Times-Roman',
     fontSize: 18,
     bold: true,
     italic: true,
     color:#872b47',
     auraColor: #d779ae
     opacity: 0.8
  };                    
     
     
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
      	
		var arraysData = [];

		for(var i=0;i<JSONFREDDATA.observations.length; i++){


	var toppingsArray = [];
	toppingsArray.push(JSONFREDDATA.observations[i].date);
	toppingsArray.push(Number(JSONFREDDATA.observations[i].value));
	arraysData.push(toppingsArray);
	}


        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows(arraysData);

        // Set chart options
        var options = {'title':'How Many Topping Are On My Pizza?',
                       'width':450,
                       'height':600,
                       'hAxis' :{},
                       'vAxis' :{}, //end of hAxis
                    };
        
        options.hAxis.tectStyle = myTextStyle;
        options. vAxis. textStyle = myTextStyle;
        console.log(options.height);              	
                       	
                       	
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        
      } // end of drawChart
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        }