(function(t){function e(e){for(var n,r,a=e[0],c=e[1],h=e[2],u=0,l=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,h||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},o=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var h=0;h<a.length;h++)e(a[h]);var p=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}})},o=[],r=(i("d3b7"),i("159b"),i("25f0"),i("5a89")),a=i("d3b8"),c=i("598d"),h=i("7e1b"),p=i("4a8d"),u={name:"App",data:function(){return{framestamp:0,framestamp_vector:1,framestamp_scale:600*Math.PI,camera:null,scene:null,renderer:null,animation_frame_callbacks:[],reticle:void 0,functions:[],active_function:0,hit:{hitTestSource:null,hitTestSourceRequested:!1},objects:{grid:{text:{mesh:null}}},options:{miniature:{active:{scale:1.5,position_z:5},inactive:{scale:1},points:{width:20,length:20,color:new r["b"](16777215)}},scale:.5,points:{width:60,length:60,color:new r["b"](16777215)},grid:{text:null,size:{x:15,y:15,z:15}}}}},components:{},methods:{createAnimFunction:function(t){this.functions.push({k:1,fn:t})},updateActiveFunction:function(){var t=this;this.functions.forEach((function(e,i){i==t.active_function?e.k+=(1-e.k)/20:e.k+=(0-e.k)/20}))},setUpSphere:function(t,e){var i=this,n=new r["f"](.1,3),s=new r["n"]({color:16777215}),o=new r["g"](n,s,e.points.width*e.points.length),a=this.options.grid.size.x/e.points.width,c=this.options.grid.size.z/e.points.length,h=(this.options.grid.size.x-1/a*a)/e.points.width,p=(this.options.grid.size.z-1/c*c)/e.points.length;o.instanceMatrix,this.animation_frame_callbacks.push((function(t){for(var n=0,s=0;s<e.points.width;s++)for(var a=0;a<e.points.length;a++){var c=new r["k"],u=p*a,l=h*s,d=0;d=e.fn(l,u),c.setPosition(l,d,u);var f=d/i.options.grid.size.y*8;c.scale(new r["s"](f,f,f)),o.updateMatrix(),o.setMatrixAt(n,c),o.setColorAt(n,new r["b"](a/e.points.length,s/e.points.width,1)),n++,o.instanceMatrix.needsUpdate=!0}})),o.position.x=-this.options.grid.size.x/2,o.position.z=-this.options.grid.size.z/2,t.add(o)},getText:function(t){var e=new p["a"];e.parse(h);var i=new c["a"](t,{font:e.parse(h),size:.3,height:0,curveSegments:10,bevelEnabled:!0,bevelThickness:.01,bevelSize:0,bevelOffset:0,bevelSegments:2}),n=new r["n"]({color:16777215,specular:16777215}),s=new r["l"](i,n);return s},setUpGrid:function(t,e){for(var i=new r["l"],n=new r["i"]({color:e.color,transparent:!0,opacity:e.opacity}),s=[],o=0;o<this.options.grid.size.x;o++){if(o%2==0){var a=this.getText(o.toString());a.position.x=o,a.position.z=this.options.grid.size.z,a.rotateY(Math.PI/3),i.add(a)}for(var c=0;c<this.options.grid.size.y;c++)s.push(new r["s"](o,c,0));for(var h=0;h<this.options.grid.size.z;h++)s.push(new r["s"](o,0,h));s.push(new r["s"](o,0,0))}for(var p=0;p<this.options.grid.size.y;p++){if(p%2==0){var u=this.getText(p.toString());u.position.y=p,u.position.x=this.options.grid.size.x,u.rotateY(Math.PI/3),i.add(u)}for(var l=0;l<this.options.grid.size.z;l++)s.push(new r["s"](0,p,l));for(var d=0;d<this.options.grid.size.x;d++)s.push(new r["s"](d,p,0));s.push(new r["s"](0,p,0))}for(var f=0;f<this.options.grid.size.z;f++){if(f%2==0){var m=this.getText(f.toString());m.position.z=f,m.position.x=this.options.grid.size.x,m.rotateY(Math.PI/3),i.add(m)}for(var v=0;v<this.options.grid.size.y;v++)s.push(new r["s"](0,v,f));for(var g=0;g<this.options.grid.size.x;g++)s.push(new r["s"](g,0,f));s.push(new r["s"](0,0,f))}var w=(new r["a"]).setFromPoints(s),z=new r["h"](w,n);z.position.x=-this.options.grid.size.x/2,z.position.z=-this.options.grid.size.z/2,i.position.x=-this.options.grid.size.x/2,i.position.z=-this.options.grid.size.z/2,this.objects.grid.text.mesh=i,t.add(i),t.add(z)},setUpScene:function(){var t=this;this.camera=new r["o"](45,window.innerWidth/window.innerHeight,.01,60),this.camera.position.z=25,this.camera.position.x=25,this.camera.position.y=35,this.camera.lookAt(new r["s"](0,0,0)),this.scene=new r["q"];var e=new r["e"](16777215,12303359,1);e.position.set(.5,1,.25),this.scene.add(e),this.renderer=new r["t"]({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.xr.enabled=!0,document.body.appendChild(this.renderer.domElement),document.body.appendChild(a["a"].createButton(this.renderer,{requiredFeatures:["hit-test"]}));var i=this.renderer.xr.getController(0);i.addEventListener("select",(function(){if(t.reticle&&t.reticle.visible){var e=new r["l"],i=t.createObjects();e.add(i),t.reticle.matrix.decompose(e.position,e.quaternion,e.scale),e.scale.set(.03,.03,.03),t.scene.add(e)}})),this.scene.add(i),this.reticle=new r["l"](new r["p"](.15,.2,32).rotateX(-Math.PI/2),new r["m"]),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle),this.renderer.setAnimationLoop(this.render)},render:function(t,e){var i=this;if(0==this.framestamp?this.framestamp_vector=1:this.framestamp==this.framestamp_scale&&(this.framestamp_vector=-1),this.framestamp=this.framestamp+this.framestamp_vector,i.animation_frame_callbacks.forEach((function(e){e(t)})),e){var n=i.renderer.xr.getReferenceSpace(),s=i.renderer.xr.getSession();if(!1===i.hit.hitTestSourceRequested&&(s.requestReferenceSpace("viewer").then((function(t){s.requestHitTestSource({space:t}).then((function(t){i.hit.hitTestSource=t}))})),s.addEventListener("end",(function(){i.hit.hitTestSourceRequested=!1,i.hit.hitTestSource=null})),i.hit.hitTestSourceRequested=!0),i.hit.hitTestSource){var o=e.getHitTestResults(i.hit.hitTestSource);if(o.length){var r=o[0];i.reticle.visible=!0,i.reticle.matrix.fromArray(r.getPose(n).transform.matrix)}else i.reticle.visible=!1}}i.renderer.render(i.scene,i.camera)},setUpCharts:function(){this.createAnimFunction((function(t,e){return 2*Math.cos(.1*t)+2*Math.cos(.1*e)+6})),this.createAnimFunction((function(t,e){return 2*Math.cos(.4*t)+2*Math.cos(.2*e)+6})),this.createAnimFunction((function(t,e){return 2*Math.cos(.4*t-.1)+2*Math.cos(.2*e)+6})),this.createAnimFunction((function(t,e){return 2*Math.cos(.4*t-.1)+2*Math.cos(.2*e)+6})),this.createAnimFunction((function(t,e){return 2*Math.cos(.4*t-.1)+2*Math.cos(.2*e)+6})),this.createAnimFunction((function(t,e){return 2*Math.cos(.4*t-.1)+2*Math.cos(.2*e)+6})),this.createAnimFunction((function(t,e){return 2*Math.cos(.4*t-.1)+2*Math.cos(.2*e)+6})),this.createAnimFunction((function(t,e){return 2*Math.cos(.4*t-.1)+2*Math.cos(.2*e)+6})),this.createAnimFunction((function(t,e){return 2*Math.cos(.4*t-.1)+2*Math.cos(.2*e)+6}))},createObjects:function(){var t=this,e=new r["l"];this.setUpCharts(),this.setUpGrid(e,{color:16777215,opacity:1}),this.setUpSphere(e,{points:this.options.points,fn:function(e,i){var n=0;return t.functions.forEach((function(t){return n+=t.k*t.fn(e,i)})),n}}),this.animation_frame_callbacks.push((function(){t.updateActiveFunction(),t.objects.grid.text.mesh.children.forEach((function(e){e.lookAt(t.camera.position)})),e.rotation.y+=.005})),e.scale.set(1,1,1);for(var i=new r["l"],n=new r["l"],s=0;s<this.functions.length;s++){var o=new r["l"];this.setUpGrid(o,{color:16777215,opacity:.3}),this.setUpSphere(o,{points:this.options.miniature.points,fn:this.functions[s].fn}),o.position.x=1.5*this.options.grid.size.x*Math.floor(s/3),o.position.y=s%3*this.options.grid.size.y*3,n.add(o)}return this.animation_frame_callbacks.push((function(){n.children.forEach((function(e,i){i==t.active_function?(e.position.z+=(t.options.grid.size.z-e.position.z)/20,e.scale.set(e.scale.x+(t.options.miniature.active.scale-e.scale.x)/20,e.scale.y+(t.options.miniature.active.scale-e.scale.y)/20,e.scale.z+(t.options.miniature.active.scale-e.scale.z)/20)):(e.position.z+=(t.options.grid.size.z/2-e.position.z)/20,e.scale.set(e.scale.x+(t.options.miniature.inactive.scale-e.scale.x)/20,e.scale.y+(t.options.miniature.inactive.scale-e.scale.y)/20,e.scale.z+(t.options.miniature.inactive.scale-e.scale.z)/20))}))})),i.add(n),i.scale.set(.1,.1,.1),i.position.x=this.options.grid.size.x/2+4,i.position.z=-this.options.grid.size.z/2,i.position.y=2,e.add(i),e}},mounted:function(){this.setUpScene()}},l=u,d=(i("5c0b"),i("2877")),f=Object(d["a"])(l,s,o,!1,null,null,null),m=f.exports,v=i("2f62");n["a"].use(v["a"]);var g=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:g,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.ad597cef.js.map