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

function show_cn() {
     $('.cn').show(); $('.en').hide();
     document.title = '“文明二次方” -- 万物沟通与协作';
}

function show_en() {
     $('.cn').hide(); $('.en').show();
     document.title = '"Civilization Quadratic" -- Massive Communication and Cooperation';
}

$(function(){
     // title
     document.title = '“文明二次方” -- 万物沟通与协作';

     // favicon
     $('head').append('<link href="http://oitistang.github.io/CivilizationQuadratic/images/CivilizationQuadratic.png" rel="shortcut icon" type="image/png"/>');

     // styles
     $(".main_content").css("padding-left", "0px").css("padding-right", "0px");

     // navbar
     $(".navbar-inverse").css('height', '0px').prependTo('#page-top');
     $('body').prepend(
          '<nav id="my-navbar" class="navbar navbar-default navbar-fixed-top">' +
               '<div class="container">' +
               '    <!-- Brand and toggle get grouped for better mobile display -->' +
               '    <div class="navbar-header page-scroll">' +
               '    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
               '        <span class="sr-only">Toggle navigation</span>' +
               '        <span class="icon-bar"></span>' +
               '        <span class="icon-bar"></span>' +
               '        <span class="icon-bar"></span>' +
               '    </button>' +
               '    <a class="navbar-brand cn" href="#page-top">文明二次方</a>' +
               '    <a class="navbar-brand en" href="#page-top"  style="font-size: 20px; display: none;">Civilization Quadratic</a>' +
               '    </div>' +
               '' +
               '    <!-- Collect the nav links, forms, and other content for toggling -->' +
               '    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
               '    <ul class="nav navbar-nav navbar-right">' +
               '        <li class="hidden">' +
               '         <a href="#page-top"></a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#summary">' +
               '             <div class="cn">摘要</div>' +
               '             <div class="en" style="font-size: 12px; display: none;">Summary</div>' +
               '         </a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#concept">' +
               '             <div class="cn">概念</div>' +
               '             <div class="en" style="font-size: 12px; display: none;">Concept</div>' +
               '         </a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#universa">' +
               '             <font color="yellow">' +
               '                 <div class="cn"><i class="fa fa-fw fa-play-circle-o"></i>宇言</div>' +
               '                 <div class="en" style="font-size: 12px; display: none;"><i class="fa fa-fw fa-play-circle-o"></i>Universa</div>' +
               '             </font>' +
               '         </a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#protocol">' +
               '             <div class="cn">协议</div>' +
               '             <div class="en" style="font-size: 12px; display: none;">Protocol</div>' +
               '         </a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#cloud">' +
               '             <div class="cn">Cloud</div>' +
               '             <div class="en" style="font-size: 12px; display: none;">Cloud</div>' +
               '         </a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#demo">' +
               '             <font color="yellow">' +
               '                 <div class="cn"><i class="fa fa-fw fa-car"></i>演示</div>' +
               '                 <div class="en" style="font-size: 12px; display: none;"><i class="fa fa-fw fa-car"></i>Demo</div>' +
               '             </font>' +
               '         </a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#vision">' +
               '             <div class="cn">应用前景</div>' +
               '             <div class="en" style="font-size: 12px; display: none;">Vision</div>' +
               '         </a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#opportunity-challenge">' +
               '             <div class="cn">机遇与挑战</div>' +
               '             <div class="en" style="font-size: 12px; display: none;">Op &amp; Ch</div>' +
               '         </a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#us">' +
               '             <div class="cn">我们</div>' +
               '             <div class="en" style="font-size: 12px; display: none;">Us</div>' +
               '         </a>' +
               '        </li>' +
               '        <li class="page-scroll">' +
               '         <a href="#" class="cn" onclick="show_en()">English</a>' +
               '         <a href="#" class="en" onclick="show_cn()" style="font-size: 12px; display: none;">中文</a>' +
               '        </li>' +
               '    </ul>' +
               '    </div>' +
               '    <!-- /.navbar-collapse -->' +
               '</div>' +
               '<!-- /.container-fluid -->' +
          '</nav>'
     );

     // remove big title
     $('.main_content').children('h1').remove();

     // remove designer floater
     $('.mastfoot').hide();

     // fix vote bar
     $('.idea_progress').css('top', '140px');

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
