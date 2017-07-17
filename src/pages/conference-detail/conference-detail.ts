import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { DataService } from "./../service/data.service";
import { SpeakerDetailPage } from './../speaker-detail/speaker-detail';
@Component({
  selector: "page-conference-detail",
  templateUrl: "conference-detail.html"
})
export class ConferenceDetailPage {
  confence: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dataS: DataService
  ) {}

  ionViewDidLoad() {
    let conferenceID = this.navParams.data.conferenceID;
    this.confence = this.dataS.filterConference(conferenceID);
  }

  goToSpeakerDetail(speakerID: any) {
    this.navCtrl.push(SpeakerDetailPage, {
      speaker: speakerID
    });
  }
}
