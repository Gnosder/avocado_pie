const h = "900px";

function pageChange(value) {
    d3.select(".plot img").remove();
    Plotly.purge("plot");
    if (value === "Home") {
        home();
    } else if (value === "Scatter") {
        vis1();
    } else if (value === "Line") {
        test2();        
    } else if (value === "Disabled") {
        test3();        
    } else if (value === "Heatmap") {
        vis3();
    }
};

function home() {
    d3.select(".plot")
        .append("img")
        .attr("src", "assets/images/avocado.jpg")
        .attr("class", "img-fluid")
        .attr("height", h)
};

function vis1() {
    d3.select(".plot")
        .append("img")
        .attr("src", "assets/images/300px-Buddy_christ.jpg")
        .attr("class", "img-fluid")
        .attr("height", h)

};

function vis2() {
    d3.select(".plot")
        .append("img")
        .attr("src", "assets/images/ugandan-knuckles.jpg")
        .attr("class", "img-fluid")
        .attr("height", h)
}

function vis3() {
    d3.select(".plot")
        .append("img")
        .attr("src", "assets/images/Webp.net-resizeimage-27.jpg")
        .attr("class", "img-fluid")
        .attr("height", h)
};

function test1() {
    var trace1 = {x: ["beer", "wine", "martini", "margarita", "ice tea", "rum & coke", "mai tai", "gin & tonic"], y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],  type: "bar"};
    var data = [trace1];
    var layout = {title: "'Bar' Chart"};
    Plotly.newPlot("plot", data, layout);

};

function test2() {
    var data = [{
        values: ["10560823880", "5245673340", "414373301"],
        labels: ["Small","Large","Extra Large"],
        type: 'pie'
    }];
    var layout = {title: "Avocado Pie"};
    Plotly.newPlot("plot", data, layout);
};

function test3() {
    var data = [{type: 'densitymapbox', lon: [10, 20, 30], lat: [15, 25, 35], z: [1, 3, 2]}];

    var layout = {width: 600, height: 400, mapbox: {style: 'stamen-terrain'}};

    Plotly.newPlot('plot', data, layout);
}

// Page Change Listener
d3.selectAll("a.nav-item.nav-link").on("click", function() {
    var value = d3.select(this).text();
    pageChange(value);  
});
// Makes the currently selected view 'active' and removes 'active' from others
$(".navbar-nav .nav-link").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });