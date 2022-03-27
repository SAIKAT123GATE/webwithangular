import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import {faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  user!: any
  faEnvelope=faEnvelope;
  faPhone=faPhone;

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getUser().subscribe(
      (user: any) => {
        console.log(user.results[0]);
        this.user = user.results[0]
      },
      (err) => {
        console.log(err)
      }
    )
  }

  reload() {
    this.user=null
    this.webService.getUser().subscribe(
      (user: any) => {
        console.log(user.results[0]);
        this.user = user.results[0]
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
