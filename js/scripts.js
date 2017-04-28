$(document).ready(function(){
  $("form#track-picker").submit(function(event){

    var style = $("#style").val();
    var environment = $("#environment").val();
    var company = $("#company").val();
    var app_type = $("#app-type").val();
    var person = $("#personality").val();
    var environment_1 = $(".environment-1").val();
    var environment_2 = $(".environment-2").val();
    var environment_3 = $(".environment-3").val();
    var company_1 = $(".company-1").val();
    var company_2 = $(".company-2").val();
    var company_3 = $(".company-3").val();
    var app_type_1 = $(".app-type-1").val();
    var app_type_2 = $(".app-type-2").val();
    var app_type_3 = $(".app-type-3").val();
    var personality_1 = $(".personality-1").val();
    var personality_2 = $(".personality-2").val();
    var personality_3 = $(".personality-3").val();

    // debugger;
    if(style = "front-end") {
      if (environment === environment_1 && company === company_1 && person === personality_1 && app_type === app_type_1) {
        $(".your-track").text("CSS/Design");
        $(".description").text("C# is most popular among bigger established businesses, often for building internal software. Because it's been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice.")
      }
      
    }

    event.preventDefault();
  });
});
