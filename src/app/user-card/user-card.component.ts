import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: any;
  @Input() link: string;
  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  onXButtonClick() {
    this.deleteEvent.emit();
  }

}
