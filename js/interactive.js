
const MARGIN = { LEFT: 50, RIGHT: 50, TOP: 25, BOTTOM: 50 }
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 250 - MARGIN.TOP - MARGIN.BOTTOM

const MARGIN2 = { LEFT: 50, RIGHT: 50, TOP: 25, BOTTOM: 50 }
const WIDTH2 = 800 - MARGIN2.LEFT - MARGIN2.RIGHT
const HEIGHT2 = 250 - MARGIN2.TOP - MARGIN2.BOTTOM

const svg2 = d3.select("#interactive_viz").append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)

  svg2.append("rect")
    .attr("width", "100%")
    .attr("height", "85%")
    .attr("fill", "white");

  const svg3 = d3.select("#interactive_viz").append("svg")
  .attr("width", WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
  .attr("height", HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)

  svg3.append("rect")
    .attr("width", "100%")
    .attr("height", "85%")
    .attr("fill", "white");

const g = svg2.append("g")
  .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

  const g2 = svg3.append("g")
  .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`);


const runfunc2 = async () => {
  const data =  await d3.csv('https://ammaralzureiqi.github.io/COVID%20Data/weekly_cases.csv');

var parseTime = d3.timeParse("%Y-%m-%d");
data.forEach(function(d) {d['date'] = parseTime(d['date']);});

var x = d3.scaleTime()
  .domain(d3.extent(data, function(d) { return new Date(d['date']);}))
  .range([0, WIDTH]);

svg2.append("g")
  .attr("transform", "translate(70," + HEIGHT + ")")
  .call(d3.axisBottom(x))

  svg3.append("g")
  .attr("transform", "translate(70," + HEIGHT2 + ")")
  .call(d3.axisBottom(x))

var y = d3.scaleLinear()
  .domain([0,45000000])
  .range([HEIGHT-10, 0]);

  var y2 = d3.scaleLinear()
  .domain([0,45000000])
  .range([HEIGHT2-10, 0]); 

var yAxis = svg2.append("g").call(d3.axisLeft(y)).attr("transform", "translate(70,10)");
var yAxis2 = svg3.append("g").call(d3.axisLeft(y2)).attr("transform", "translate(70,10)");



var allCountries = ['World', 'Afghanistan', 'Africa', 'Albania', 
    'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 
    'Argentina', 'Armenia', 'Aruba', 'Asia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 
    'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 
    'Bhutan', 'Bolivia', 'Bonaire Sint Eustatius and Saba', 'Bosnia and Herzegovina', 'Botswana', 
    'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 
    'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 
    'China', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 
    'Cuba', 'Curacao', 'Cyprus', 'Czechia', 'Democratic Republic of Congo', 'Denmark', 'Djibouti', 
    'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 
    'Estonia', 'Eswatini', 'Ethiopia', 'Europe', 'European Union', 'Faeroe Islands', 'Falkland Islands', 
    'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'Gabon', 'Gambia', 'Georgia', 
    'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 
    'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'High income', 'Honduras', 'Hungary',"Iceland", 
    "India","Indonesia","Iran", "Iraq" ,"Ireland","Isle.of.Man","Israel","Italy","Jamaica", "Japan","Jersey" ,
    "Jordan", "Kazakhstan","Kenya","Kiribati", "Kosovo","Kuwait","Kyrgyzstan", "Laos","Latvia","Lebanon", 
    "Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Low.income","Lower.middle.income","Luxembourg",
    "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall.Islands","Martinique","Mauritania",
    "Mauritius","Mayotte","Mexico","Micronesia..country.","Moldova","Monaco","Mongolia","Montenegro","Montserrat",
    "Morocco","Mozambique","Myanmar","Namibia" ,"Nauru","Nepal","Netherlands","New.Caledonia","New.Zealand",
    "Nicaragua","Niger","Nigeria","Niue","North.America","North.Korea","North.Macedonia","Northern.Mariana.Islands",
    "Norway", "Oceania","Oman","Pakistan","Palau","Palestine","Panama" ,"Papua.New.Guinea", "Paraguay","Peru",
    "Philippines","Pitcairn","Poland", "Portugal","Puerto.Rico", "Qatar","Reunion","Romania","Russia","Rwanda",
    "Saint.Barthelemy","Saint.Helena","Saint.Kitts.and.Nevis","Saint.Lucia","Saint.Martin..French.part.",
    "Saint.Pierre.and.Miquelon","Saint.Vincent.and.the.Grenadines","Samoa","San.Marino","Sao.Tome.and.Principe",
    "Saudi.Arabia","Senegal","Serbia","Seychelles","Sierra.Leone","Singapore", "Sint.Maarten..Dutch.part.",
    "Slovakia","Slovenia","Solomon.Islands", "Somalia","South.Africa", "South.America","South.Korea","South.Sudan",
    "Spain","Sri.Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand",
    "Timor","Togo","Tokelau","Tonga","Trinidad.and.Tobago","Tunisia","Turkey","Turkmenistan", "Turks.and.Caicos.Islands",
    "Tuvalu","Uganda","Ukraine", "United.Arab.Emirates","United.Kingdom","United.States", "United.States.Virgin.Islands",
    "Upper.middle.income","Uruguay","Uzbekistan","Vanuatu", "Vatican","Venezuela","Vietnam","Wallis.and.Futuna","Yemen",
    "Zambia","Zimbabwe"]


d3.select("#selectButton2")
  .selectAll('myOptions')
  .data(allCountries)
  .enter()
  .append('option')
  .text(function (d) { return d; }) // text showed in the menu
  .attr("value", function (d) { return d; })

  d3.select("#selectButton3")
  .selectAll('myOptions')
  .data(allCountries)
  .enter()
  .append('option')
  .text(function (d) { return d; }) // text showed in the menu
  .attr("value", function (d) { return d; })

  var myColor = d3.scaleOrdinal()
  .domain(allCountries)
  .range(d3.schemeSet2);

  const continentColor = d3.scaleOrdinal(d3.schemePastel1)

  const legend = g.append("g")
	.attr("transform", `translate(${WIDTH - 5}, ${HEIGHT - 80})`)

  const legendRow = legend.append("g")
      .attr("transform", `translate(0, 0)`)
  
      legendRow.append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", myColor("valueA"))
      
      legendRow.append("text")
      .attr("x", -10)
      .attr("y", 10)
      .attr("text-anchor", "end")
      .style("text-transform", "capitalize")
      .text('World')
      

      const legend2 = g2.append("g")
	.attr("transform", `translate(${WIDTH2 - 5}, ${HEIGHT2 - 80})`)

      const legendRow2 = legend2.append("g")
      .attr("transform", `translate(0, 15)`)

      legendRow2.append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", myColor("valueA"))
      
      legendRow2.append("text")
      .attr("x", -10)
      .attr("y", 10)
      .attr("text-anchor", "end")
      .style("text-transform", "capitalize")
      .text('World')



var line = svg2
  .append('g')
  .append("path")
    .datum(data)
    .attr("d", d3.line()
      .x(function(d) { return x(+d.date) })
      .y(function(d) { return y(+d.World) })
    )
    .attr("transform", "translate(70,10)")
    .attr("stroke", function(d){ return myColor("valueA") })
    .style("stroke-width", 3)
    .style("fill", "none")

var line2 = svg3
.append('g')
.append("path")
  .datum(data)
  .attr("d", d3.line()
    .x(function(d) { return x(+d.date) })
    .y(function(d) { return y(+d.World) })
  )
  .attr("transform", "translate(70,10)")
  .attr("stroke", function(d){ return myColor("valueA") })
  .style("stroke-width", 3)
  .style("fill", "none")



function findMax(data, selected){
  m = 0;
  for(i = 0; i < 1294; i++){
  if((data[i][selected] - m) > 0){m = data[i][selected]}
}
return m;
}


function update(selectedGroup) {

var dataFilter = data.map(function(d){return {date: d.date, value:d[selectedGroup]} });

y.domain([0,max]).range([HEIGHT-10, 0]);
yAxis.transition().duration(200).call(d3.axisLeft(y))

line
  .datum(dataFilter)
  .transition()
  .duration(1000)
  .attr("d", d3.line()
  .x(function(d) { return x(+d.date) })
  .y(function(d) { return y(+d.value) }))
  .attr("stroke", function(d){ return myColor(selectedGroup) })

  legendRow.append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", myColor(selectedGroup))

      legendRow.selectAll('text').remove()

      legendRow.append("text")
      .attr("x", -10)
      .attr("y", 10)
      .attr("text-anchor", "end")
      .style("text-transform", "capitalize")
      .text(selectedGroup)
}

function update2(selectedGroup) {

  var dataFilter = data.map(function(d){return {date: d.date, value:d[selectedGroup]} });
  
  y2.domain([0,max2]).range([HEIGHT2-10, 0]);
  yAxis2.transition().duration(200).call(d3.axisLeft(y2))
  
  line2
    .datum(dataFilter)
    .transition()
    .duration(1000)
    .attr("d", d3.line()
    .x(function(d) { return x(+d.date) })
    .y(function(d) { return y2(+d.value) }))
    .attr("stroke", function(d){ return myColor(selectedGroup) })

    legendRow2.append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", myColor(selectedGroup))
      
      legendRow2.selectAll('text').remove()
      legendRow2.append("text")
      .attr("x", -10)
      .attr("y", 10)
      .attr("text-anchor", "end")
      .style("text-transform", "capitalize")
      .text(selectedGroup)
  }


d3.select("#selectButton2").on("change", function(d) {

var selectedOption = d3.select(this).property("value")
max = findMax(data, selectedOption)
update(selectedOption)

})
d3.select("#selectButton3").on("change", function(d) {

  var selectedOption = d3.select(this).property("value")
  max2 = findMax(data, selectedOption)
  update2(selectedOption)
  
  })
}
runfunc2();