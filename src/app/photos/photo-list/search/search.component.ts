import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ap-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string; '';
  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
      this.debounce.unsubscribe();
  }
}

function subscribe(arg0: (filter: any) => void) {
  throw new Error('Function not implemented.');
}

