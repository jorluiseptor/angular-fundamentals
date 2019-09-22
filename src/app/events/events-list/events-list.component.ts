import { Component, OnInit } from "@angular/core";
import {EventThumbnailComponent} from "../event-thumbnail/event-thumbnail.component"; 
import {EventService} from "../shared/event.service";
import {ToastrService} from "../../shared/toastr.service";

declare let toastr;

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any[]

  constructor(private eventService: EventService, private toastr:ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents(); 
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }

}