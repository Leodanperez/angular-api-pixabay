import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Photo} from "../../photo.interface";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  public pages: any;

  constructor(private apiService: ApiService) {}

  public data: Photo = {
    total: 0,
    totalHits: 0,
    hits: []
  }

  ngOnInit(): void {
    this.getAllPhoto();
  }

  getAllPhoto() {
    this.apiService.getAllPhotos('all', 20, 1)
      .subscribe({
        next: (res) => {
          this.data.hits = res.hits;
          this.pages = Math.ceil(res.totalHits / 20);
        },
        error: (err) => {

        }
      })
  }

}
