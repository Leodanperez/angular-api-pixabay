import {Injectable} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Hit} from "../photo.interface";
import {ShowImageComponent} from "../components/show-image/show-image.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    config: NgbModalConfig,
    private md: NgbModal
  ) {
  }

  public showImage(obj: Hit): Observable<boolean> {
    const modalRef = this.md.open(ShowImageComponent, {
      backdrop: 'static',
      size: 'xl',
      keyboard: false
    });
    modalRef.componentInstance.data = obj;
    return modalRef.componentInstance.response as Observable<boolean>;
  }
}
