(this.webpackJsonptrelloyes=this.webpackJsonptrelloyes||[]).push([[0],{3:function(e,t,r){e.exports=r(9)},8:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(2),i=r.n(l);var c=function(e){return n.a.createElement("div",{className:"Card"},n.a.createElement("button",{type:"button"},"delete"),n.a.createElement("h3",null,e.title),n.a.createElement("p",null,e.content))},d={lists:[{id:"1",header:"First list",cardIds:["a","b","e","f","g","j","l","m"]},{id:"2",header:"Second list",cardIds:["b","c","d","f","h","i","k"]},{id:"3",header:"Third list",cardIds:["a","b","c","d","e","f","g","h","i","j","k","l","m"]},{id:"4",header:"Fourth list",cardIds:["l","m"]}],allCards:{a:{id:"a",title:"First card",content:"lorem ipsum"},b:{id:"b",title:"Second card",content:"lorem ipsum"},c:{id:"c",title:"Third card",content:"lorem ipsum"},d:{id:"d",title:"Fourth card",content:"lorem ipsum"},e:{id:"e",title:"Fifth card",content:"lorem ipsum"},f:{id:"f",title:"Sixth card",content:"lorem ipsum"},g:{id:"g",title:"Seventh card",content:"lorem ipsum"},h:{id:"h",title:"Eighth card",content:"lorem ipsum"},i:{id:"i",title:"Ninth card",content:"lorem ipsum"},j:{id:"j",title:"Tenth card",content:"lorem ipsum"},k:{id:"k",title:"Eleventh card",content:"lorem ipsum"},l:{id:"l",title:"Twelfth card",content:"lorem ipsum"},m:{id:"m",title:"Thirteenth card",content:"lorem ipsum"}}};var s=function(e){console.log(e);var t=e.cardIds.map((function(e){var t=d.allCards[e];return n.a.createElement(c,{key:e,title:t.title,content:t.content})}));return n.a.createElement("section",{className:"List"},n.a.createElement("header",{className:"List-header"},n.a.createElement("h2",null,e.header)),n.a.createElement("div",{className:"List-cards"}),t)};r(8);var o=function(){var e=d.lists.map((function(e){return n.a.createElement(s,{key:e.id,header:e.header,cardIds:e.cardIds})}));return n.a.createElement("main",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{style:{textAlign:"center",fontSize:40}},"Trelloyes!")),n.a.createElement("div",{className:"App-list"},e))};i.a.render(n.a.createElement(o,null),document.querySelector("#root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.841ff172.chunk.js.map