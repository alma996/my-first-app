import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-overview',
  template: `
    <p>
      department-overview works!
    </p>
  `,
  styles: []
})
export class DepartmentOverviewComponent implements OnInit { //ovo praimo nakon detail and list kako bi prikazali ostale info

  constructor() { }

  ngOnInit() {
  }

}
