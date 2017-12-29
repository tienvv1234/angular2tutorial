# angular2tutorial and github
need to install 
- node version 4.6.x or greater

- npm 3.x.x or greater

- To check the version of node installed : node-v

- To check the version of npm installed : npm-v

- To get the later version of node.js https://nodejs.org/en/download/

- TypeScript 2.2.0 or later

- https://github.com/angular/quickstart 
	copy 4 things in quick start : folder src, bs-config.json, pagekage.js, tslint.js

- npm start (run server)
- npm install (install all require module in package.json)

tsconfig.js
compileonsave : true (to compile TS to JS when TS files are saved set "compileOnSave" to true tsconfig.json file)

- index.html
	+ 4 files js es6-shim, zone, reflect, system.src needed for older browsers and the zone
	+ systemjs.config this is a file that we use to load up all of our angular modules
	+ System.import('main.js').catch(function(err){ console.error(err); }); for loading up all the defined modules before our app is started
- systemjs.config.js
	+ map object is defined where to look for important folders
	+ package object defines which file is going to be used to bootstrap our application
	+ packageNames that we define the angular packages we want to use in our application
- main.ts
	+ platformBrowserDynamic().bootstrapModule(AppModule); we are initilizing angular using the class called bootstrap, which is imported from the platform-browser-dynamic angular package
- package.json
	+ for install dependency
	+ script area use to compile our typescript code into javascript, start our server 
-tsconfig.json
	+ this file provider the settings for our typescript compiler
-typing.json
	+ 

1. {{ }} for interpolation. (double curly braces)|(dùng để hiển thị biến trong class lên view)
2. [] for property binding. (square brackets)|(dùng cho attribute của DOM element, và cả style nữa exp: [style.color], [hidden]="isHidden", [selected]="isCarSelected" )
3. () for event binding. (cho 1 event exp: (keyup)="onKey($event)") onKey(event){
   event.preventDefault();
   event.stopPropagation();
}
4. # for variable declaration. (local variables or tempalte variable tạo ra để reference đến DOM object của nó và có thể đc sử đụng khắm nơi trong template và có thể chấm đc các thuộc tính và phương thức của ref)
for exp : <input type="text" #name>
				{{ name.value }}
One of the useful uses of local variables is when we want to execute some kind of action on another element.
<google-youtube #player></google-youtube>
<button (click)="player.play()">Play!</button>

5. * for structural directives.

