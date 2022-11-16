import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private popCtrl: PopoverController) { }

  ngOnInit() { }

  dismissPopover(item: string) {
    this.popCtrl.dismiss({
      'fromPop': item + ' Subscribed'
    });
  }
}
