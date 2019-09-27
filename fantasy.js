$('#first').click(function(){
    var queryURL = 'https://www.fantasyfootballnerd.com/service/weekly-rankings/json/hqdub92qfbb3/WR/4/1/';
    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log("click works");
        console.log(response);
      });
});