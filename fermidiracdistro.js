// line 2 ensures that the Javascript is not run until the *.html DOM has been pre-loaded. VERY IMPORTANT
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    // your code here.

    // generate the data
    var dataset = [];
    for (i = 0.1; i<20; i += 0.5){
    	dataset.push([i,i])
    }





    // create axes and set their scales
    // domain are the actual values, range will be the scaled output values in pixels 
   	// scales are useful even without axes; but it is necessary and natural for axes to have the same scale
   	var w = 700;
   	var h = 400;
   	var padding = 30;
    var xScale = d3.scale.linear()
    				.domain([0, 20])
    				.range([padding, w - padding*2]);
    var yScale = d3.scale.linear()
    				.domain([0, 20])
    				.range([h - padding, padding]);

    var xAxis = d3.svg.axis()
    				.scale(xScale)
    				.orient("bottom");
    				

    var yAxis = d3.svg.axis()
    				.scale(yScale)
    				.orient("left");
    				


   	//create SVG element
   	//width and height should be at least the sizes of xScale range and yScale range 
   	var svg = d3.select("body")
   					.append("svg")
   					.attr("width", w)
   					.attr("height", h);


   	// generate points from the dataset
	svg.selectAll("circle")
		.data(dataset)
		.enter()
		.append("circle")
		.attr("cx", function(d){
			return xScale(d[0]);
		})
		.attr("cy", function(d){
			return yScale(d[1]);
		})
		.attr("r", 2);


   	//add the axes to the svg element
    svg.append("g")
    	.attr("class", "axis")
    	.attr("transform", "translate(0," + (h - padding) + ")")
    	.call(xAxis);

    svg.append("g")
    	.attr("class", "axis")
    	.attr("transform", "translate(" + padding + ", 0)")
    	.call(yAxis);
    			



    //maxwell-boltzman distribution
    //function mb_distro(x)
    //	return Math.exp(-x)

    	






}