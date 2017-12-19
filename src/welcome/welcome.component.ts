import {Component} from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'bs-welcome',
    templateUrl: 'welcome.component.html'
})

export class WelcomeComponent{
    pageTitle: string = "Welcome";
}