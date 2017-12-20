import {Directive, ElementRef, Input, Renderer} from '@angular/core';
import { Element } from '@angular/compiler';
@Directive({
    selector:'[myHighLight]'
})

export class HighLightDirective{
    constructor(el:ElementRef, renderer:Renderer){
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}