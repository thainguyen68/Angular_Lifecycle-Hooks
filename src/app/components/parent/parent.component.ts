import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  isChildDestroyed = false;

  destroy() {
    this.isChildDestroyed = true;
  }


  ngOnInit(): void {
    console.log('ngOnInit from the 🧓🏾 component xxxxxx');
  }

  userName = 'Maria';

  updateUser() {
    this.userName = 'Chris';
  }
}
