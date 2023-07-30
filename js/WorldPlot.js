// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
width = 900 - margin.left - margin.right,
height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#myworld")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");
      
      svg.append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "white")
      .attr("transform","translate(-75,0)");

var allCountries = ['Afghanistan', 'Africa', 'Albania', 
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
  
//Read the data
const runfunc1 = async () => {
  const data1 =  await d3.csv('https://ammaralzureiqi.github.io/COVID%20Data/weekly_cases.csv');

// Add X axis --> it is a date format
var parseTime = d3.timeParse("%Y-%m-%d");
data1.forEach(function(d) {d['Date'] = parseTime(d['date']);});
var x = d3.scaleTime().domain(d3.extent(data1, function(d) { return new Date(d['Date']);})).range([0, width]);
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear()
.domain([0,45000000])
.range([height-10, 0]);
svg.append("g")
.call(d3.axisLeft(y)).attr("transform", "translate(0,10)");

// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.Date; }).left;

// Create the circle that travels along the curve of chart
var focus = svg
.append('g')
.append('circle')
  .style("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 3)
  .attr("transform", "translate(0,10)")
  .attr('r', 8.5)
  .style("opacity", 0)

// Create the text that travels along the curve of chart
var focusText = svg
.append('g')
.append('text')
  .style("opacity", 0)
  .attr("text-anchor", "left")
  .attr("alignment-baseline", "middle")

var tooltip = d3.select("#myworld")
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
  .x(function(d) { return x(d.Date) })
  .y(function(d) { return y(d.World) }))
.attr("transform", "translate(0,10)")
.on("mouseover", mouseover )
.on("mousemove", mousemove )
.on("mouseout", mouseout )
  
const type = d3.annotationLabel
const annotations = [{
  note: {
    label: "Wave 1: 2020-02-25",
    bgPadding: 20,
  },
  data: { date: '2020-02-25', World: 6577 },
  className: "show-bg",
  dy: -137,
  dx: 15
}]

const makeAnnotations = d3.annotation()
  .editMode(true)
  .notePadding(15)
  .type(type)
  .accessors({
    x: d => x(parseTime(d.date)),
    y: d => y(d.World)
  })
  .annotations(annotations)
  svg
  .append("g")
  .attr("class", "annotation-group")
  .attr("transform", "translate(0,10)")
  .call(makeAnnotations)

  const type1 = d3.annotationLabel
const annotations1 = [{
  note: {
    label: "Wave 2: 2020-08-31",
    bgPadding: 20,
  },
  data: { date: '2020-08-31', World: 1886525 },
  className: "show-bg",
  dy: -137,
  dx: -0
}]

const makeAnnotations1 = d3.annotation()
  .editMode(true)
  .notePadding(15)
  .type(type1)
  .accessors({
    x: d => x(parseTime(d.date)),
    y: d => y(d.World)
  })
  .annotations(annotations1)
  svg
  .append("g")
  .attr("class", "annotation-group")
  .attr("transform", "translate(0,10)")
  .call(makeAnnotations1)

  const type2 = d3.annotationLabel
const annotations2 = [{
  note: {
    label: "Wave 3: 2021-03-01",
    bgPadding: 20,
  },
  data: { date: '2021-03-01', World: 2672625 },
  className: "show-bg",
  dy: -137,
  dx: -0
}]

const makeAnnotations2 = d3.annotation()
  .editMode(true)
  .notePadding(15)
  .type(type2)
  .accessors({
    x: d => x(parseTime(d.date)),
    y: d => y(d.World)
  })
  .annotations(annotations2)
  svg
  .append("g")
  .attr("class", "annotation-group")
  .attr("transform", "translate(0,10)")
  .call(makeAnnotations2)

  const type3 = d3.annotationLabel
const annotations3 = [{
  note: {
    label: "Wave 4: 2021-08-01",
    bgPadding: 20,
  },
  data: { date: '2021-08-01', World: 4143183 },
  className: "show-bg",
  dy: -137,
  dx: -0
}]

const makeAnnotations3 = d3.annotation()
  .editMode(true)
  .notePadding(15)
  .type(type3)
  .accessors({
    x: d => x(parseTime(d.date)),
    y: d => y(d.World)
  })
  .annotations(annotations3)
  svg
  .append("g")
  .attr("class", "annotation-group")
  .attr("transform", "translate(0,10)")
  .call(makeAnnotations3)

  const type4 = d3.annotationLabel
const annotations4 = [{
  note: {
    label: "Wave 5: 2021-12-14",
    bgPadding: 20,
  },
  data: { date: '2021-12-14', World: 4336882 },
  className: "show-bg",
  dy: -200,
  dx: -20
}]

const makeAnnotations4 = d3.annotation()
  .editMode(true)
  .notePadding(15)
  .type(type4)
  .accessors({
    x: d => x(parseTime(d.date)),
    y: d => y(d.World)
  })
  .annotations(annotations4)
  svg
  .append("g")
  .attr("class", "annotation-group")
  .attr("transform", "translate(0,10)")
  .call(makeAnnotations4)

  const type5 = d3.annotationLabel
const annotations5 = [{
  note: {
    label: "Wave 6: 2022-03-01",
    bgPadding: 20,
  },
  data: { date: '2022-03-01', World: 10944027 },
  className: "show-bg",
  dy: -150,
  dx: 20
}]

const makeAnnotations5 = d3.annotation()
  .editMode(true)
  .notePadding(15)
  .type(type5)
  .accessors({
    x: d => x(parseTime(d.date)),
    y: d => y(d.World)
  })
  .annotations(annotations5)
  svg
  .append("g")
  .attr("class", "annotation-group")
  .attr("transform", "translate(0,10)")
  .call(makeAnnotations5)

// Create a rect on top of the svg area: this rectangle recovers mouse position
svg
.append('rect')
.style("fill", "none")
.style("pointer-events", "all")
.attr('width', width)
.attr('height', height)
.attr("transform", "translate(0,10)")
.on('mouseover', mouseover)
.on('mousemove', mousemove)
.on('mouseout', mouseout);

d3.select("#country-select")
.selectAll('myOptions')
.data(allCountries)
.enter()
.append('option')
.text(function (d) { return d; }) // text showed in the menu
.attr("value", function (d) { return d; })

country = $("#country-select").val()

$("#country-select")
        .on("change", () => {
          country = $("#country-select").val()
        })

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
  .attr("cx", x(selectedData.Date))
  .attr("cy", y(selectedData.World))
if (country != "World"){
tooltip
  .html("Confirmed Cases: " + Math.trunc(selectedData.World) + "<br> Date: " + selectedData.date + "<br>" + country + ": " +
          Math.trunc(selectedData[country]))
  .style("left", (d3.mouse(this)[0]+90) + "px") 
  .style("top", (d3.mouse(this)[1]) + "px")
}
else{
  tooltip
    .html("Confirmed Cases: " + Math.trunc(selectedData.World) + "<br> Date: " + selectedData.date)
    .style("left", (d3.mouse(this)[0]+90) + "px") 
    .style("top", (d3.mouse(this)[1]) + "px")
  }
}

function mouseout() {
focus.style("opacity", 0)
focusText.style("opacity", 0)
tooltip.style("opacity",0)
}


}
runfunc1();