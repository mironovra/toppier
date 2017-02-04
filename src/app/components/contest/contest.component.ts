import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {
  id: string;

  constructor(private route:ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
