import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
    selector: 'vr-player',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})

export class VRPlayer implements OnInit {
    elem: any;
    aframe: any;
    timeout: any;
   

    constructor(ref: ElementRef) {
        this.elem = ref.nativeElement;
    }

    ngOnInit() {
        this.aframe = this.elem.querySelector('a-scene');
    }
}
