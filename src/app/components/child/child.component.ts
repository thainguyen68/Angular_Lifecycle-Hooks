import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() userName = '';
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered', changes);
    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === "Chris") {
        this.userName = 'Hello ' + this.userName
      } else {
        this.userName = changes['userName'].previousValue
        console.log("sr, U're not Chris")
      }
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit from the child component 🐣')
  }
  ngDoCheck() {
    console.log('ngDoCheck triggered 🛑');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - (1)wrapper', this.wrapper);
    console.log('ngAfterContentInit - (2)\'contentWrapper', this.content);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered ✔️');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - (1.1)wrapper', this.wrapper);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered(2.2)  ');
  }

  ngOnDestroy(): void {
    console.log('Child component is destroyed! :(');
  }

}
