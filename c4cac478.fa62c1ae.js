(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return d}));var r=a(2),o=a(6),l=(a(0),a(254)),i=a(257),n=a(259),s={title:"Example 2"},c={id:"examples/example-2",title:"Example 2",description:"In this tutorial, we will use this tileset by 0x72. Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles.",source:"@site/docs\\examples\\example-2.md",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-2",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/docs/examples/example-2.md",version:"next",sidebar:"docs",previous:{title:"Example 1",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-1"},next:{title:"(PRO) Platformer 1",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/platformer-1"}},m=[{value:"Simple example",id:"simple-example",children:[{value:"Basic rooms romplates",id:"basic-rooms-romplates",children:[]},{value:"Vertical corridors",id:"vertical-corridors",children:[]},{value:"Horizontal corridors",id:"horizontal-corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Real-life example",id:"real-life-example",children:[{value:"Spawn and boss rooms",id:"spawn-and-boss-rooms",children:[]},{value:"Additional room template",id:"additional-room-template",children:[]},{value:"Wider corridors",id:"wider-corridors",children:[]},{value:"Level graph",id:"level-graph-1",children:[]},{value:"Results",id:"results-1",children:[]}]}],p={rightToc:m};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this tutorial, we will use ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://0x72.itch.io/dungeontileset-ii"}),"this tileset")," by ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://0x72.itch.io/"}),"0x72"),". Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_result1.png",caption:"Simple example",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/example2/result_reallife1.png",caption:"Real-life example",mdxType:"GalleryImage"})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," I recommend reading ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," first as this is a little bit harder to setup and I will not repeat the basics here.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(l.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/Example2"),".")),Object(l.b)(n.a,{id:"example-2",mdxType:"ExampleFeatures"}),Object(l.b)("h2",{id:"simple-example"},"Simple example"),Object(l.b)("p",null,"The goal is to create two basic rectangular room remplates of different sizes and a room template for both horizontal and vertical corridors."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," This tileset is trickier than the one used in ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," because there is an additional row of ligther tiles above all horizontal wall tiles. It will cause us problems when working with corridors.")),Object(l.b)("h3",{id:"basic-rooms-romplates"},"Basic rooms romplates"),Object(l.b)("p",null,"For this example, I am using doors with two different lengths (1 and 2). That means that we have to use the ",Object(l.b)("em",{parentName:"p"},"Specific positions mode")," mode because the ",Object(l.b)("em",{parentName:"p"},"Simple mode")," can only handle doors with the same length. As you can see below, the door positions look quite messy because they overlap. However, this is only to showcase that it is possible and you can use doors with the same length."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_room1.png",caption:"Smaller room",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example2_room2.png",caption:"Bigger room",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"vertical-corridors"},"Vertical corridors"),Object(l.b)("p",null,"As I said before, there is a problem with corridors when working with this tileset. To be more precise, there is a problem with vertical corridors because of the additional roow of tiles above wall tiles. If we were to design our vertical corridors as in Example 1, we would end up with something like this:"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_wrong_corridor.png",caption:"Incorrent vertical corridor",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example2_wrong_corridor2.png",caption:"Incorrent connection",mdxType:"GalleryImage"})),Object(l.b)("p",null,"We can solve this by using the ",Object(l.b)("strong",{parentName:"p"},"Outline override")," feature. It allows us to tell the algorithm that instead of automatically computing the outline of the room template, we want to draw it manually. You can see the result below. By doing so, we easily fix the problem with walls being one tile taller and the level is drawn correctly."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_before.png",caption:"Incorrect - Without outline override",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_after.png",caption:"Correct - With outline override",mdxType:"GalleryImage"})),Object(l.b)("p",null,"To enable the ",Object(l.b)("strong",{parentName:"p"},"Outline override"),", we have to click the ",Object(l.b)("strong",{parentName:"p"},"Add outline override")," button. This button adds another tilemap layer called ",Object(l.b)("em",{parentName:"p"},"Outline Override"),". "),Object(l.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_before_gui.png",caption:"Add outline override button",mdxType:"Image"}),Object(l.b)("p",null,"When computing the outline of this room template, the generator will now ignore all the other layers and use only the ",Object(l.b)("em",{parentName:"p"},"Outline Override")," layer. Moreover, the generator will ignore this layer while copying individual tiles to the shared tilemap so we can use any tiles to draw on this layer. And where we are done with drawing the outline, we can make that tilemap layer inactive so we can see how the room template normally looks."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," We must not forget to make sure that all our doors are contained on the new outline.")),Object(l.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_with_outline_shown.png",caption:"We can use any tiles to draw on the Outline Override layer as they are not used in the output.",mdxType:"Image"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," In the previous version of the algorithm, we had to manually implement some additional logic to fix these situations. The goal of the current version is to make it possible without writing any code.")),Object(l.b)("h3",{id:"horizontal-corridors"},"Horizontal corridors"),Object(l.b)("p",null,"There is also a slight problem with horizontal corridors. It is currently not possible to have doors with length 1 to be at the corners of the room template outline. We fix this by adding ",Object(l.b)("strong",{parentName:"p"},"Outline override")," and using a rectangular outline where the doors are not at the corners."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_before.png",caption:"Incorrect - Without outline override. There must not be doors of length 1 at the corners of the outline.",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_after.png",caption:"Correct - With outline override. Doors are no longer at the corners of the outline.",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"level-graph"},"Level graph"),Object(l.b)(i.c,{src:"img/v2/examples/example2/level_graph1.png",caption:"Level graph",mdxType:"Image"}),Object(l.b)("h3",{id:"results"},"Results"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example2_result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(l.b)("h2",{id:"real-life-example"},"Real-life example"),Object(l.b)("p",null,"To create something that is closer to a real-life example, we will add more rooms to the level graph, add special room templates for spawn and boss rooms and also two more corridor room templates."),Object(l.b)("h3",{id:"spawn-and-boss-rooms"},"Spawn and boss rooms"),Object(l.b)("p",null,"These rooms will contain:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"our player prefab with basic movement"),Object(l.b)("li",{parentName:"ul"},"interactable chest that changes appearance after interaction (no loot is implemented)"),Object(l.b)("li",{parentName:"ul"},"ladder that causes the game manager to generated a new level after interaction"),Object(l.b)("li",{parentName:"ul"},"an ogre in the boss room (no AI implemented)")),Object(l.b)(i.c,{src:"img/v2/examples/example2/spawn.png",caption:"Spawn room with our player prefab, chest and exit",mdxType:"Image"}),Object(l.b)(i.c,{src:"img/v2/examples/example2/boss.png",caption:"Boss room with our enemy prefab, chest and exit",mdxType:"Image"}),Object(l.b)("h3",{id:"additional-room-template"},"Additional room template"),Object(l.b)("p",null,"We can make generated dungeons more interesting by adding smaller room templates to our dead-end rooms."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_room3.png",caption:"Additional room tempalte",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"wider-corridors"},"Wider corridors"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example2_corridor_horizontal2.png",caption:"Wider horizontal corridor",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example2_corridor_vertical2.png",caption:"Wider vertical corridor",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"level-graph-1"},"Level graph"),Object(l.b)("p",null,"So the goal is to have more rooms than in the simple example and also a spawn room and a boss room. You can see one such level graph below."),Object(l.b)(i.c,{src:"img/v2/examples/example2/level_graph2.png",caption:"Level graph",mdxType:"Image"}),Object(l.b)("h3",{id:"results-1"},"Results"),Object(l.b)(i.c,{src:"img/v2/examples/example2/result_reallife2.png",caption:"Example result",mdxType:"Image"}),Object(l.b)(i.c,{src:"img/v2/examples/example2/result_reallife3.png",caption:"Example result",mdxType:"Image"}))}d.isMDXComponent=!0},257:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return p}));var r=a(2),o=a(0),l=a.n(o),i=a(256);const n=e=>l.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),s=e=>l.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},l.a.Children.map(e.children,t=>l.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),c=e=>l.a.createElement(n,{cols:e.cols},l.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},l.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&l.a.createElement(m,null,e.caption)),m=e=>l.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:a,...o}=e;return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",Object(r.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&l.a.createElement(m,null,e.caption))}},259:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return m}));a(261),a(262),a(263),a(264),a(265),a(266),a(267);var r=a(0),o=a.n(r),l=a(258),i=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],n=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function s(e){if("undefined"!=typeof window){var t=window.location.href,a=t.split("/");(a[a.length-1].startsWith("#")||t.endsWith("/"))&&(e="../"+e)}return e}var c=function(e){var t=i.find((function(t){return t.id===e.id})).usages.map((function(e){return Object.assign({},e,{examples:[]})}));return n.forEach((function(a){a.features.forEach((function(r){r.id===e.id&&t.find((function(e){return e.id===r.usage})).examples.push({example:a,feature:r})}))})),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),o.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),o.a.createElement("table",null,o.a.createElement("tbody",null,t.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.examples.map((function(e,t){return o.a.createElement("span",null,t?", ":"",o.a.createElement(l.a,{to:s(e.example.url+"#"+e.feature.anchor),onClick:function(){return t=e.feature.anchor,void setTimeout((function(){var e=document.getElementById(t);e&&e.scrollIntoView()}),750);var t}},e.example.name))}))),o.a.createElement("td",null,e.description))})))))},m=function(e){var t=n.find((function(t){return t.id===e.id})),a=[];return t.features.forEach((function(e){var t=i.find((function(t){return t.id===e.id})),r=t.usages.find((function(t){return t.id===e.usage}));a.push(Object.assign({},e,{feature:t,featureUsage:r}))})),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"List of used features"),o.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),o.a.createElement("table",null,o.a.createElement("tbody",null,a.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement(l.a,{to:e.feature.url},e.feature.name)),o.a.createElement("td",null,e.featureUsage.description))})))))}}}]);