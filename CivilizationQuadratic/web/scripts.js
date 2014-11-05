function loadjscssfile(filename, filetype){
     if (filetype == "js"){ //if filename is a external JavaScript file
          var fileref = document.createElement('script');
          fileref.setAttribute("type","text/javascript");
          fileref.setAttribute("src", filename);
     }
     else if (filetype == "css"){ //if filename is an external CSS file
          var fileref = document.createElement("link");
          fileref.setAttribute("rel", "stylesheet");
          fileref.setAttribute("type", "text/css");
          fileref.setAttribute("href", filename);
     }
     if (typeof fileref != "undefined") {
          document.getElementsByTagName("head")[0].appendChild(fileref);
     }
}

$(function(){
     // title
     document.title = '“文明二次方” -- 万物沟通与协作';

     // styles
     $(".main_content").css("padding-left", "0px").css("padding-right", "0px");

     // navbar
     $(".navbar-inverse").css('height', '0px').prependTo('#page-top');
     $('body').prepend(
          '<nav id="my-navbar" class="navbar navbar-default navbar-fixed-top">' +
          '        <div class="container">' +
          '            <!-- Brand and toggle get grouped for better mobile display -->' +
          '            <div class="navbar-header page-scroll">' +
          '                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
          '                    <span class="sr-only">Toggle navigation</span>' +
          '                    <span class="icon-bar"></span>' +
          '                    <span class="icon-bar"></span>' +
          '                    <span class="icon-bar"></span>' +
          '                </button>' +
          '                <a class="navbar-brand" href="#page-top">文明二次方</a>' +
          '            </div>' +
          '' +
          '            <!-- Collect the nav links, forms, and other content for toggling -->' +
          '            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
          '                <ul class="nav navbar-nav navbar-right">' +
          '                    <li class="hidden">' +
          '                        <a href="#page-top"></a>' +
          '                    </li>' +
          '                    <li class="page-scroll">' +
          '                        <a href="#summary">摘要</a>' +
          '                    </li>' +
          '                    <li class="page-scroll">' +
          '                        <a href="#concept">概念</a>' +
          '                    </li>' +
          '                    <li class="page-scroll">' +
          '                        <a href="#universa">宇言</a>' +
          '                    </li>' +
          '                    <li class="page-scroll">' +
          '                        <a href="#protocol">协议</a>' +
          '                    </li>' +
          '                    <li class="page-scroll">' +
          '                        <a href="#cloud">Cloud</a>' +
          '                    </li>' +
          '                    <li class="page-scroll">' +
          '                        <a href="#demo">演示</a>' +
          '                    </li>' +
          '                    <li class="page-scroll">' +
          '                        <a href="#vision">应用前景</a>' +
          '                    </li>' +
          '                    <li class="page-scroll">' +
          '                        <a href="#opportunity-challenge">机遇与挑战</a>' +
          '                    </li>' +
          '                    <li class="page-scroll">' +
          '                        <a href="#us">我们</a>' +
          '                    </li>' +
          '                </ul>' +
          '            </div>' +
          '            <!-- /.navbar-collapse -->' +
          '        </div>' +
          '        <!-- /.container-fluid -->' +
          '</nav>'
     );

     // remove big title
     $('.main_content').children('h1').remove();

     // css
     // Bootstrap Core CSS - Uses Bootswatch Flatly Theme: http://bootswatch.com/flatly/
     loadjscssfile("http://oitistang.github.io/CivilizationQuadratic/web/css/bootstrap.min.css", "css");
     // Custom CSS
     loadjscssfile("http://oitistang.github.io/CivilizationQuadratic/web/css/freelancer.css", "css");
     // Custom Fonts
     loadjscssfile("http://oitistang.github.io/CivilizationQuadratic/web/font-awesome-4.1.0/css/font-awesome.min.css", "css");
     loadjscssfile("http://fonts.useso.com/css?family=Montserrat:400,700", "css");
     loadjscssfile("http://fonts.useso.com/css?family=Lato:400,700,400italic,700italic", "css");

     // js
     // Bootstrap Core JavaScript
     loadjscssfile("http://oitistang.github.io/CivilizationQuadratic/web/js/bootstrap.min.js", "js");
     // Plugin JavaScript
     loadjscssfile("http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js", "js");
     loadjscssfile("http://oitistang.github.io/CivilizationQuadratic/web/js/classie.js", "js");
     loadjscssfile("http://oitistang.github.io/CivilizationQuadratic/web/js/cbpAnimatedHeader.js", "js");
     // Contact Form JavaScript
     loadjscssfile("http://oitistang.github.io/CivilizationQuadratic/web/js/jqBootstrapValidation.js", "js");
     loadjscssfile("http://oitistang.github.io/CivilizationQuadratic/web/js/contact_me.js", "js");
     // Custom Theme JavaScript
     loadjscssfile("http://oitistang.github.io/CivilizationQuadratic/web/js/freelancer.js", "js");
});
