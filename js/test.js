async function init() {

    const data = await d3.csv('https://ammaralzureiqi.github.io/COVID%20Data/country_wise_latest.csv');
    
    var svg = d3.select("svg"),
                margin = 200,
                width = svg.attr("width") - margin,
                height = svg.attr("height") - margin;
                
    var xScale = d3.scaleLinear().domain([10,452529]).range([0, width]);
    var yScale = d3.scaleLinear().domain([0,45844]).range([height, 0]);
    var margin = "50";
    
    const tooltip = d3.select(".tooltip");
    
    
    function tabulate(data, columns) {
        var table = d3.select('body').append('table')
        var thead = table.append('thead')
        var	tbody = table.append('tbody');
    
        thead.append('tr')
          .selectAll('th')
          .data(columns).enter()
          .append('th')
            .text(function (column) { return column; });
    
        var rows = tbody.selectAll('tr')
          .data(data)
          .enter()
          .append('tr');
    
        var cells = rows.selectAll('td')
          .data(function (row) {
            return columns.map(function (column) {
              return {column: column, value: row[column]};
            });
          })
          .enter()
          .append('td')
            .text(function (d) { return d.value; });
    
      return table;
    }
    
    // Step 5
            // Title
            svg.append('text')
            .attr('x', 500)
            .attr('y', 50)
            .attr('text-anchor', 'middle')
            .style('font-family', 'Helvetica')
            .style('font-size', 20)
            .text('COVID: Confirmed vs Deaths');
            
            // X label
            svg.append('text')
            .attr('x', 550)
            .attr('y', height - 15 + 150)
            .attr('text-anchor', 'middle')
            .attr('transform', 'translate(-50,-50)')
            .style('font-family', 'Helvetica')
            .style('font-size', 12)
            .text('Confirmed');
            
            // Y label
            svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('transform', 'translate(50,350) rotate(-90)')
            .style('font-family', 'Helvetica')
            .style('font-size', 12)
            .text('Deaths');
    
            svg.append("g")
             .attr("transform", "translate(100 , 650)")
             .call(d3.axisBottom(xScale));
            
            svg.append("g")
             .attr("transform", "translate(100, "+margin+")")
             .call(d3.axisLeft(yScale));
    
             svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return xScale(d.Confirmed); } )
            .attr("cy", function (d) { return yScale(d['Deaths']); } )
            .attr("transform", "translate(100 , 50)")
            .attr("r", 3)
            .style("fill", "#3498DB");
            
            svg.append("path")
            .datum(data) 
            .attr("class", "line") 
            .attr("transform", "translate(100, "+margin+")")
            .attr("d", line)
            .style("fill", "none")
            .style("stroke", "#CC0000")
            .style("stroke-width", "2");
    
    
    }