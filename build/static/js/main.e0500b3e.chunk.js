(this.webpackJsonpnappi_frontend=this.webpackJsonpnappi_frontend||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(4),i=n.n(a),l=(n(10),n(2)),s=(n(11),n(1)),u=n.n(s),r=function(e){var t=e.message;return null===t?null:c.a.createElement("div",{className:"notif"},t)},p=function(){var e=u.a.get("points"),t=e||20,n=Object(o.useState)(null),a=Object(l.a)(n,2),i=a[0],s=a[1],p=Object(o.useState)(null),f=Object(l.a)(p,2),m=f[0],h=f[1];return c.a.createElement("div",null,c.a.createElement("h1",null,"Click the button and win prizes!"),c.a.createElement("p",null,"Points: ",t),c.a.createElement("button",{onClick:function(){console.log("button was clicked"),t>0?fetch("/clicked",{method:"PUT"}).then((function(e){if(e.ok)return t-=1,u.a.set("points",t),console.log("Click was recorded. You have ".concat(t," points left.")),void e.json().then((function(e){console.log(e),0!==e.p&&(t+=e.p,u.a.set("points",t),h("You have won ".concat(e.p," points!!")),setTimeout((function(){h(null)}),3e3)),s("You have ".concat(t," points left. Next prize is ").concat(e.t," clicks away")),setTimeout((function(){s(null)}),3e3)}));throw new Error("Request failed.")})).catch((function(e){console.log(e)})):(s("You need points to click the button. If you want to reset back to 20 points, click the 'Reset' button."),setTimeout((function(){s(null)}),3e3))}},"Click me!"),c.a.createElement("button",{onClick:function(){t=20,u.a.set("points",t),s("Your ponits have been reseted. You now have 20 points"),setTimeout((function(){s(null)}),3e3)}},"Reset"),c.a.createElement(r,{message:i}),c.a.createElement(r,{message:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.e0500b3e.chunk.js.map