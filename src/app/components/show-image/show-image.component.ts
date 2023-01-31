import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hit} from "../../photo.interface";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss']
})
export class ShowImageComponent implements OnInit {

  @Input() data: Hit | undefined;
  @Output() response = new EventEmitter<boolean>();

  public photo: any = []

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.photo = this.data?.largeImageURL
  }

}
