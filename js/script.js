// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = 
                res.basicInfo.firstName + " " + res.basicInfo.lastName
              if (res.basicInfo.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += res.basicInfo.numberOfDisplays;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h3>" + message + "</h3>";

              message = "Current postion: " + res.profession.CurrentJob + "<br>";
              message += "Highest education: " + res.profession.HighestEducation + "<br>";
              message += "Profession: " + res.profession.Profession + "<br>";
              message += "Programming languages: " + res.profession["Programming Languages"] + "<br>";

              document.querySelector("#content2")
                .innerHTML = "<p>" + message + "</p>";
            });
      }, 
      true);
  }
);





