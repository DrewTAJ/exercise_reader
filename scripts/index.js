$.ajax({
  url: "workout.json",
  data: {},
  dataType: "json",
  error: errorCallback,
  success: successCallback,
  type: "GET"
});

function successCallback(data) {
    console.log(data);
    for(var i = 0; i < data.length; i++) {
        var accordian = $("<div class='panel panel-default'></div>");
        for(var key in data[i]) {
            console.log(data[i]);
            var panel_header= $("<div class='panel-heading' role='tab' id='heading"+i+"'></div>");
            panel_header.append("<h4 class='panel-title'><a role='button' data-toggle='collapse' data-parent='#accordian' href='#collapse"+i+"' aria-expanded='false' aria-controls='collapse"+i+"'>"+key+"</a></h4>");
            accordian.append(panel_header);

            var panel_collapse = $("<div id='collapse"+i+"' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading"+i+"'></div>");
            var panel_body = $("<div class='panel-body'></div>");

            panel_body.append("<p>Equipment: "+data[i][key].Equipment+"</p>");
            panel_body.append("<p>Type: "+data[i][key].Type+"</p>");
            panel_body.append("<p>Level: "+data[i][key].Level+"</p>");
            panel_body.append("<p>Main Muscles Worked: "+data[i][key]["Main Muscle Worked"]+", "+data[i][key]["Other Muscles"]+"</p>");
            var instructions = $("<ol></ol>");
            for(var j = 0; j < data[i][key].guide.length; j++) {
                instructions.append("<li>"+data[i][key].guide[j]+"</li>")
            }
            panel_body.append(instructions);
            
            panel_collapse.append(panel_body);
            accordian.append(panel_collapse);
        }


        
        
        $("#accordian").append(accordian);
    }
}

function errorCallback(error) {

}