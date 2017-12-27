# angular2tutorial
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