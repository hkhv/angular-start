import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-start';
  @Input() text: string = '';
  @Output() clicks = new EventEmitter<number>();
  public click = 0;
  constructor(private el: ElementRef) {
    console.log('widget-demo');
  }
  ngOnInit(): void {
    console.log(this.text);
  }
  btnClick() {
    this.click++;
    this.clicks.emit(this.click);
    console.dir(this.el.nativeElement);
  }
}
