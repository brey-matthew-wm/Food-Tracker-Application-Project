$(document).ready(function() {
    var submit = $("#submit");
    $(submit).click(function() {
        var food = $('#input1')[0].value;
        var description = $('#input2')[0].value;
        var calories = $('#input3')[0].value;
        var aDate = $('#input4')[0].value;
            $("#tableinput").append("<tr><td>" + food + "</td><td>"+ description +"</td><td>"+ calories +"</td><td>"+ aDate +"</td></tr>")
        });
    });