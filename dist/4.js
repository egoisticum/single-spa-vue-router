(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(a,t){a.exports='<div ng-style=vm.styles> <div class=container> <div class=row> <h4 class=light> Angular 1 example </h4> <p class=caption> This is a sample application written with Angular 1.5 and angular-ui-router. </p> </div> <div> <a class="waves-effect waves-light btn-large" href=/angularJS/gifs style=margin-right:10px> Show me cat gifs </a> <a class="waves-effect waves-light btn-large" href=/angularJS style=margin-right:10px> Take me home </a> </div> <div class=row> <ui-view/> </div> </div> </div> '},139:function(a,t){a.exports='<div style=padding-top:20px> <h4 class=light> Cat Gifs gifs </h4> <p> </p> <div ng-repeat="gif in vm.gifs" style=margin:5px> <img ng-src={{gif.images.downsized_medium.url}} class="col l3"> </div> </div> '},240:function(a,t,e){"use strict";e.r(t);var n=e(137),i=e.n(n),r=e(21),o=e.n(r);e(238);o.a.module("angularJS-app",["ui.router"]);var s=e(138),l=e.n(s);o.a.module("angularJS-app").component("root",{template:l.a});var u=e(139),g=e.n(u);o.a.module("angularJS-app").component("gifs",{template:g.a,controllerAs:"vm",controller:function(a){var t=this;a.get("https://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC").then(function(a){t.gifs=a.data.data}).catch(function(a){setTimeout(function(){throw a},0)})}}),o.a.module("angularJS-app").config(function(a,t){t.html5Mode({enabled:!0,requireBase:!1}),a.state("root",{url:"/angularJS",template:"<root />"}).state("root.gifs",{url:"/gifs",template:"<gifs />"})}),e.d(t,"bootstrap",function(){return c}),e.d(t,"mount",function(){return d}),e.d(t,"unmount",function(){return m});var p=i()({angular:o.a,domElementGetter:function(){return document.getElementById("angularJS")},mainAngularModule:"angularJS-app",uiRouter:!0,preserveGlobal:!1}),c=[p.bootstrap],d=[p.mount],m=[p.unmount]}}]);
//# sourceMappingURL=4.js.map