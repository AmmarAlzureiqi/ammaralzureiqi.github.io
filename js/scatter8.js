const runfunc = async () => {
    
   // set the dimensions and margins of the graph
   var margin = {top: 10, right: 30, bottom: 30, left: 60},
   width = 600 - margin.left - margin.right,
   height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#overview-chart-area")
 .append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
 .append("g")
   .attr("transform",
         "translate(" + margin.left + "," + margin.top + ")");

//Read the data
    const data = await d3.csv('https://ammaralzureiqi.github.io/COVID%20Data/country_wise_latest.csv');
    // const df = await {a:[100000,200000,300000,400000,500000,600000,7000000,800000,900000,1000000],
    //     b:[10000,20000,30000,40000,50000,60000,700000,80000,90000,100000]} 

        var df = [ {a: 100000, b: 10000},
                              {a: 200000, b: 20000},
                              {a: 300000, b: 30000},
                              {a: 400000, b: 40000},
                              {a: 500000, b: 50000},
                              {a: 600000, b: 60000},
                              {a: 700000, b: 700000},
                              {a: 800000, b: 80000},
                              {a: 900000, b: 90000},
                              {a: 1000000, b: 100000}];


 // Add X axis
 var x = d3.scalePow()
   .exponent(0.5)
   .domain([10, 452529])
   .range([ 0, width ]);
 svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x));

 // Add Y axis
 var y = d3.scalePow()
   .exponent(0.5)
   .domain([0, 45844])
   .range([ height, 0]);
 svg.append("g")
   .call(d3.axisLeft(y));

 // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
 // Its opacity is set to 0: we don't see it by default.
 var tooltip = d3.select("#my_dataviz")
   .append("div")
   .style("opacity", 0)
   .attr("class", "tooltip")
   .style("background-color", "white")
   .style("border", "solid")
   .style("border-width", "1px")
   .style("border-radius", "5px")
   .style("padding", "10px")
   .style("position", "absolute")



 // A function that change this tooltip when the user hover a point.
 // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
 var mouseover = function(d) {
   tooltip
     .style("opacity", 1)
 }

 var mousemove = function(d) {
   tooltip
     .html("Confirmed Cases: " + d.Confirmed + "<br> Country: " + d['Country/Region'])
     .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
     .style("top", (d3.mouse(this)[1]) + "px")
 }

 // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
 var mouseleave = function(d) {
   tooltip
     .transition()
     .duration(200)
     .style("opacity", 0)
 }
console.log(df)
console.log(data)
 // Add dots
 svg.append('g')
   .selectAll("dot")
   .data(df) // the .filter part is just to keep a few dots on the chart, not all of them
   .enter()
   .append("circle")
     .attr("cx", function (d) { return x(d['a']); } )
     .attr("cy", function (d) { return y(d['b']); } )
    //  .attr("cx", function (d) { return x(d['Confirmed']); } )
    //  .attr("cy", function (d) { return y(d['Deaths']); } )
     .attr("fake", d=> console.log(d['Confirmed']))
     .attr("r", 7)
     .style("fill", "#69b3a2")
     .style("opacity", 0.3)
     .style("stroke", "white")
   .on("mouseover", mouseover )
   .on("mousemove", mousemove )
   .on("mouseleave", mouseleave )


    
    }
    runfunc();