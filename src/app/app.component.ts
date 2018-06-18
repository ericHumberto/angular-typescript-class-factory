import { Component } from '@angular/core';
import { FormatterFactory } from './formatter/formatter.factory';
import { Example1 } from './model/example1.model';
import { Example2 } from './model/example2.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POC class factory angular';

  formattedStringName: string;
  formattedPercentageByName: string;
  formattedStringByModel: string;
  formattedPercentageByModel: string;

  format() {
    this.formattedStringName = FormatterFactory.getInstanceByName("stringKey").format("stringKey");
    this.formattedPercentageByName = FormatterFactory.getInstanceByName("percentageKey").format(10);
    
    this.formattedStringByModel = FormatterFactory.getInstanceByModel(new Example1()).format("modelKey");
    this.formattedPercentageByModel = FormatterFactory.getInstanceByModel(new Example2()).format(25);
  }
}
