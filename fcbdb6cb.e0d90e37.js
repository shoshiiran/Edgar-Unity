(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{251:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return m})),o.d(t,"default",(function(){return p}));var n=o(2),r=o(6),a=(o(0),o(254)),l=o(257),i={title:"Current room detection"},c={id:"version-2.0.0-alpha.4/guides/current-room-detection",title:"Current room detection",description:"In this guide, we will learn how to detect when a player enters or leaves a room. We can use this information to keep track of the currently active room or we can for example spawn enemies when the player enters a room.",source:"@site/versioned_docs\\version-2.0.0-alpha.4\\guides\\current-room-detection.md",permalink:"/ProceduralLevelGenerator-Unity/docs/guides/current-room-detection",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.4/guides/current-room-detection.md",version:"2.0.0-alpha.4",sidebar:"version-2.0.0-alpha.4/docs",previous:{title:"Room template customization",permalink:"/ProceduralLevelGenerator-Unity/docs/guides/room-template-customization"},next:{title:"(PRO) Procedural level graphs",permalink:"/ProceduralLevelGenerator-Unity/docs/guides/procedural-level-graphs"}},m=[{value:"Setup",id:"setup",children:[]},{value:"Floor collider",id:"floor-collider",children:[]},{value:"Trigger handler",id:"trigger-handler",children:[]},{value:"Room manager",id:"room-manager",children:[]},{value:"Game manager",id:"game-manager",children:[]}],s={rightToc:m};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this guide, we will learn how to detect when a player enters or leaves a room. We can use this information to keep track of the currently active room or we can for example spawn enemies when the player enters a room."),Object(a.b)(l.c,{src:"img/v2/guides/current_room_detection/result.png",caption:"Information about the current room are displayed in the top-left corner.",mdxType:"Image"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(a.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/CurrentRoomDetection"),".")),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"Our plan is the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add a ",Object(a.b)("strong",{parentName:"li"},"trigger collider")," to the ",Object(a.b)("strong",{parentName:"li"},"floor tilemap")," layer of individual room templates"),Object(a.b)("li",{parentName:"ul"},"Add a ",Object(a.b)("strong",{parentName:"li"},"RoomManager")," component that will react to the ",Object(a.b)("strong",{parentName:"li"},"player entering or leaving the room")),Object(a.b)("li",{parentName:"ul"},"Add a ",Object(a.b)("em",{parentName:"li"},"handler")," that will react to the ",Object(a.b)("strong",{parentName:"li"},"OnTriggerEnter2D")," and ",Object(a.b)("strong",{parentName:"li"},"OnTriggerExit2D")," events and delegate that to the room manager"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"(Optional)")," Add a ",Object(a.b)("strong",{parentName:"li"},"GameManager")," component that will display the ",Object(a.b)("strong",{parentName:"li"},"currently active room"))),Object(a.b)("p",null,"We will use the room templates from ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../examples/example-1"}),"Example 1")," and the following level graph:"),Object(a.b)(l.c,{src:"img/v2/guides/current_room_detection/result.png",caption:"The level graph that is used in this guide. Each room has a unique name so that we can easily recognize if our implementation works or not.",mdxType:"Image"}),Object(a.b)("h2",{id:"floor-collider"},"Floor collider"),Object(a.b)("p",null,"We will use a trigger collider attached to the floor layer of individual room templates to detect when a player enters or leaves a room. There are at least two ways of adding this collider:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"We can ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../guides/room-template-customization"}),"override the default structure of tilemaps")," in order to add the floor collider to each room template right after it is created."),Object(a.b)("li",{parentName:"ol"},"We can use a custom post processing script to add the floor collider to each room after a level is generated.")),Object(a.b)("p",null,"An advantage of the first approach is that Unity does not have to recompute the colliders every time a level is generated. An advantage of the second approach is that it is more flexible and easier to experiment with because we can just write a simple post processing script a do not have to modify any room templates. We decided to use the second approach because we use room template from ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../examples/example-1"}),"Example 1")," and they do not have any floro colliders."),Object(a.b)("p",null,"Below you can see the post processing code that is needed to add this floor collider to each of the rooms in a generated level."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'public class CurrentRoomDetectionPostProcess : DungeonGeneratorPostProcessBase\n{\n    public override void Run(GeneratedLevel level, LevelDescription levelDescription)\n    {\n        foreach (var roomInstance in level.GetRoomInstances())\n        {\n            var roomTemplateInstance = roomInstance.RoomTemplateInstance;\n\n            // Find floor tilemap layer\n            var tilemaps = RoomTemplateUtils.GetTilemaps(roomTemplateInstance);\n            var floor = tilemaps.Single(x => x.name == "Floor").gameObject;\n\n            // Add floor collider\n            AddFloorCollider(floor);\n        }\n    }\n\n    protected void AddFloorCollider(GameObject floor)\n    {\n        var tilemapCollider2D = floor.AddComponent<TilemapCollider2D>();\n        tilemapCollider2D.usedByComposite = true;\n\n        var compositeCollider2d = floor.AddComponent<CompositeCollider2D>();\n        compositeCollider2d.geometryType = CompositeCollider2D.GeometryType.Polygons;\n        compositeCollider2d.isTrigger = true;\n        compositeCollider2d.generationType = CompositeCollider2D.GenerationType.Manual;\n\n        floor.GetComponent<Rigidbody2D>().bodyType = RigidbodyType2D.Static;\n    }\n}\n')),Object(a.b)("h2",{id:"trigger-handler"},"Trigger handler"),Object(a.b)("p",null,"When we have our floor colliders enabled, we must be able to do something when the player triggers the collider. We will create a very simple component that will be added the floor tilemap layer. This component will have two methods - ",Object(a.b)("strong",{parentName:"p"},"OnTriggerEnter2D")," and ",Object(a.b)("strong",{parentName:"p"},"OnTriggerExit2D")," - and inside these methods we will call the room manager that we will create in the next step."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'public class CurrentRoomDetectionTriggerHandler : MonoBehaviour\n{\n    private CurrentRoomDetectionRoomManager roomManager;\n\n    public void Start()\n    {\n        roomManager = transform.parent.parent.gameObject.GetComponent<CurrentRoomDetectionRoomManager>();\n    }\n\n    public void OnTriggerEnter2D(Collider2D otherCollider)\n    {\n        if (otherCollider.gameObject.tag == "Player")\n        {\n            roomManager?.OnRoomEnter(otherCollider.gameObject);\n        }\n    }\n\n    public void OnTriggerExit2D(Collider2D otherCollider)\n    {\n        if (otherCollider.gameObject.tag == "Player")\n        {\n            roomManager?.OnRoomLeave(otherCollider.gameObject);\n        }\n    }\n}\n')),Object(a.b)("p",null,"We have to add this component to each room in the generated level. We will modify our post-processing logic to look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'public class CurrentRoomDetectionPostProcess : DungeonGeneratorPostProcessBase\n{\n    public override void Run(GeneratedLevel level, LevelDescription levelDescription)\n    {\n        foreach (var roomInstance in level.GetRoomInstances())\n        {\n            var roomTemplateInstance = roomInstance.RoomTemplateInstance;\n\n            // Find floor tilemap layer\n            var tilemaps = RoomTemplateUtils.GetTilemaps(roomTemplateInstance);\n            var floor = tilemaps.Single(x => x.name == "Floor").gameObject;\n\n            // Add floor collider\n            AddFloorCollider(floor);\n\n            // Add current room detection handler\n            floor.AddComponent<CurrentRoomDetectionTriggerHandler>();\n        }\n    }\n\n    protected void AddFloorCollider(GameObject floor) { ... }\n}\n')),Object(a.b)("h2",{id:"room-manager"},"Room manager"),Object(a.b)("p",null,"We could handle all the logic inside the handler that we created in the previous step. However, it might be better to have a central place where all the logic regarding individual rooms takes place. Therefore, we will create a simple room manager component with two methods - ",Object(a.b)("strong",{parentName:"p"},"OnRoomEnter")," and ",Object(a.b)("strong",{parentName:"p"},"OnRoomLeave")," which will be called by the handler from the previous step."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'public class CurrentRoomDetectionRoomManager : MonoBehaviour\n{\n    /// <summary>\n    /// Room instance of the corresponding room.\n    /// </summary>\n    public RoomInstance RoomInstance;\n\n    /// <summary>\n    /// Gets called when a player enters the room.\n    /// </summary>\n    /// <param name="player"></param>\n    public void OnRoomEnter(GameObject player)\n    {\n        Debug.Log($"Room enter. Room name: {RoomInstance.Room.GetDisplayName()}, Room template: {RoomInstance.RoomTemplatePrefab.name}");\n        CurrentRoomDetectionGameManager.Instance.OnRoomEnter(RoomInstance);\n    }\n\n    /// <summary>\n    /// Gets called when a player leaves the room.\n    /// </summary>\n    /// <param name="player"></param>\n    public void OnRoomLeave(GameObject player)\n    {\n        Debug.Log($"Room leave {RoomInstance.Room.GetDisplayName()}");\n        CurrentRoomDetectionGameManager.Instance.OnRoomLeave(RoomInstance);\n    }\n}\n')),Object(a.b)("p",null,"Again, we will use our post-processing logic to add this room manager to each room in the level. Moreover, we will also set the ",Object(a.b)("inlineCode",{parentName:"p"},"RoomInstance")," field so that the room manager has access to all the information about the room."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"public class CurrentRoomDetectionPostProcess : DungeonGeneratorPostProcessBase\n{\n    public override void Run(GeneratedLevel level, LevelDescription levelDescription)\n    {\n        foreach (var roomInstance in level.GetRoomInstances())\n        {\n            var roomTemplateInstance = roomInstance.RoomTemplateInstance;\n\n            // Find floor tilemap layer\n            // Add floor collider\n\n            // Add the room manager component\n            var roomManager = roomTemplateInstance.AddComponent<CurrentRoomDetectionRoomManager>();\n            roomManager.RoomInstance = roomInstance;\n\n            // Add current room detection handler\n        }\n    }\n\n    protected void AddFloorCollider(GameObject floor) { ... }\n}\n")),Object(a.b)("h2",{id:"game-manager"},"Game manager"),Object(a.b)("p",null,"The last thing that we can do is to add a game manager that will keep track of in which room the player is currently located. A straightforward solution would be to simply keep track of which room was entered most recently. However, there is a catch. The player collider might be quite large so it is possible that it collides with two neighbouring rooms at once. That means that if the player goes just slightly to the next room and then back to the previous room, ",Object(a.b)("inlineCode",{parentName:"p"},"OnTriggerEnter2D")," will not be called because the player did not leave the room."),Object(a.b)("p",null,"The solution is quite simple. We will set the new room to be active only when the player completely leaves the current room. An example implementation can be seen in the game manager class that is included in the folder with the example."))}p.isMDXComponent=!0},254:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var m=r.a.createContext({}),s=function(e){var t=r.a.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(o),u=n,b=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return o?r.a.createElement(b,i(i({ref:t},m),{},{components:o})):r.a.createElement(b,i({ref:t},m))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<a;m++)l[m]=o[m];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},255:function(e,t,o){"use strict";var n=o(0),r=o(34);t.a=function(){return Object(n.useContext)(r.a)}},256:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o(255);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:o="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?o+e.slice(1):o+e}},257:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return m})),o.d(t,"c",(function(){return p}));var n=o(2),r=o(0),a=o.n(r),l=o(256);const i=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),m=e=>a.a.createElement(i,{cols:e.cols},a.a.createElement("a",{href:Object(l.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(l.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(s,null,e.caption)),s=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:o,...r}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(n.a)({src:Object(l.a)(e.src)},r)),void 0!==e.caption&&a.a.createElement(s,null,e.caption))}}}]);