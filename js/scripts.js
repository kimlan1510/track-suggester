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

    debugger;
    if(style === "back-end") {
      if (environment === environment_1 && company === company_1 && person === personality_1 && app_type === app_type_1) {
        $(".your-track").text("C#/.NET");
        $(".des").text("C# is most popular among bigger established businesses, often for building internal software. Because it's been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice.");
      }
      else if (environment === environment_2 && company === company_3 && person === personality_1 && app_type === app_type_3) {
        $(".your-track").text("PHP/Drupal");
        $(".des").text("PHP is most used in content-heavy websites with relatively little user interaction. The most popular content management systems - Wordpress, Drupal, and Joomla - are all written in PHP, and everything from local restaurants' websites up through large complex government deployments are built with these tools. If you're keen to work for an agency that builds websites for clients, or if you like the idea of building out sites for brands, businesses, and organizations, PHP is a great direction to go.");
      }
      else if (environment === environment_3 && company === company_2 && person === personality_3 && app_type === app_type_2) {
        $(".your-track").text("Ruby/Rails");
        $(".des").text("Ruby is a favorite language of developers building interactive web applications. If an app involves users creating accounts, entering information, and interacting with dynamic content, there's a good chance it is built with Ruby. Ruby became popular because the Rails framework, which is written with Ruby, simplified many of the common tasks associated with building web applications. It's most popular with startups and smaller companies who are looking to build their product quickly.");
      }

      else if (environment === environment_1 && company === company_2 && person === personality_2 && app_type === app_type_2) {
        $(".your-track").text("Java/Android");
        $(".des").text("Java is also a favorite of enterprise companies, but its appeal is broader as well: it's one of the most popular of all programming languages, and it's used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you're interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn.");
      }

      else{
        $(".your-track").text("C#/NET");
        $(".des").text("C# is most popular among bigger established businesses, often for building internal software. Because it's been around for a long time and has the backing of Microsoft, it is one of the most in-demand languages in the job market. C# has also been going through a bit of a rebirth lately, with Microsoft open sourcing the language and surrounding platform, porting it to run on Mac and Linux, and incorporating many of the best features of other languages. If you like the idea of working for a larger company on business software, C# is a great choice.");
      }
    }
    else{
      $(".your-track").text("CSS/Design");
      $(".des").text("Java is also a favorite of enterprise companies, but its appeal is broader as well: it's one of the most popular of all programming languages, and it's used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you're interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn.");
    }


    event.preventDefault();
  });
});
