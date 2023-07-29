// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
width = 1000 - margin.left - margin.right,
height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#myworld")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");
      


//Read the data
const runfunc1 = async () => {
  const data1 =  await d3.csv('https://ammaralzureiqi.github.io/COVID%20Data/weekly_cases.csv');

// Add X axis --> it is a date format
var parseTime = d3.timeParse("%Y-%m-%d");
data1.forEach(function(d) {d['date'] = parseTime(d['date']);});
var x = d3.scaleTime().domain(d3.extent(data1, function(d) { return new Date(d['date']);})).range([0, width]);
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear()
.domain([0,44819041])
.range([height, 0]);
svg.append("g")
.call(d3.axisLeft(y));

// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.date; }).left;

// Create the circle that travels along the curve of chart
var focus = svg
.append('g')
.append('circle')
  .style("fill", "none")
  .attr("stroke", "black")
  .attr('r', 8.5)
  .style("opacity", 0)

// Create the text that travels along the curve of chart
var focusText = svg
.append('g')
.append('text')
  .style("opacity", 0)
  .attr("text-anchor", "left")
  .attr("alignment-baseline", "middle")

var tooltip = d3.select("#my_dataviz")
.append("div")
.append("tooltip")
.style("opacity", 0)
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "1px")
.style("border-radius", "5px")
.style("padding", "10px")
.style("position", "absolute")



// Add the line
svg
.append("path")
.datum(data1)
.attr("fill", "none")
.attr("stroke", "steelblue")
.attr("stroke-width", 1.5)
.attr("d", d3.line()
  .x(function(d) { return x(d.date) })
  .y(function(d) { return y(d.World) }))
.on("mouseover", mouseover )
.on("mousemove", mousemove )
.on("mouseout", mouseout )
  

// Create a rect on top of the svg area: this rectangle recovers mouse position
svg
.append('rect')
.style("fill", "none")
.style("pointer-events", "all")
.attr('width', width)
.attr('height', height)
.on('mouseover', mouseover)
.on('mousemove', mousemove)
.on('mouseout', mouseout);


// What happens when the mouse move -> show the annotations at the right positions.
function mouseover() {
focus.style("opacity", 1)
focusText.style("opacity",1)
tooltip.style("opacity",1)
}

function mousemove() {
// recover coordinate we need
var x0 = x.invert(d3.mouse(this)[0]);
var i = bisect(data1, x0, 1);
selectedData = data1[i]
focus
  .attr("cx", x(selectedData.date))
  .attr("cy", y(selectedData.World))
focusText
  .html("x:" + selectedData.date + "  -  " + "y:" + selectedData.y)
  .attr("x", x(selectedData.date)+15)
  .attr("y", y(selectedData.World))
tooltip
  .html("Confirmed Cases: " + selectedData.World + "<br> Country: ")
  .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
  .style("top", (d3.mouse(this)[1]) + "px")
}
function mouseout() {
focus.style("opacity", 0)
focusText.style("opacity", 0)
tooltip.style("opacity",0)
}

}
runfunc1();