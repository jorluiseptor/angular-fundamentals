import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavComponent } from "./nav/nav/nav.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./shared/toastr.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, EventsListComponent, EventThumbnailComponent, NavComponent, EventDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EventService, ToastrService]
})
export class AppModule { }
