import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from "./services/api.service";
import {Hit, Photo} from "./photo.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ModalService } from './services/modal.service';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('simpleTranslation', [
      state('outright', style({ transform: `translateX(100%)` })),
      state('outleft', style({ transform: `translateX(-100%)` })),
      transition('*=>inright',[
        style({transform:`translateX(-100%)`}),
        animate('260ms ease-in',style({ transform: `translateX(0)` }))
      ]),
      transition('*=>inleft',[
        style({transform:`translateX(100%)`}),
        animate('260ms ease-in',style({ transform: `translateX(0)` }))
      ]),
      transition('*=>outleft', [
        animate('260ms ease-in', style({ transform: `translateX(-100%)` }))
      ]),
      transition('*=>outright', [
        animate('260ms ease-in',style({ transform: `translateX(100%)` }))
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {

  public form: FormGroup
  public loading: boolean = true
  public page: number = 1;
  public perPage = 20;
  public selectedCategory: any;

  public data: Photo = {
    total: 0,
    totalHits: 0,
    hits: []
  }

  public categories: any[] = [
    {
      id: 1,
      name: 'Fashion',
      value: 'fashion',
      color: 'primary',
      selected: true
    },
    {
      id: 1,
      name: 'Backgrounds',
      value: 'backgrounds',
      color: 'secondary',
      selected: false
    },
    {
      id: 1,
      name: 'Nature',
      value: 'nature',
      color: 'success',
      selected: false
    },
    {
      id: 1,
      name: 'Science',
      value: 'science',
      color: 'danger',
      selected: false
    },
    {
      id: 1,
      name: 'Education',
      value: 'education',
      color: 'warning',
      selected: false
    },
    {
      id: 1,
      name: 'Feelings',
      value: 'feelings',
      color: 'danger',
      selected: false
    },
    {
      id: 1,
      name: 'Health',
      value: 'health',
      color: 'info',
      selected: false
    },
    {
      id: 1,
      name: 'Religion',
      value: 'religion',
      color: 'dark',
      selected: false
    },
    {
      id: 1,
      name: 'Places',
      value: 'places',
      color: 'warning',
      selected: false
    },
    {
      id: 1,
      name: 'Animals',
      value: 'animals',
      color: 'success',
      selected: false
    },
    {
      id: 1,
      name: 'Industry',
      value: 'industry',
      color: 'info',
      selected: false
    },
    {
      id: 1,
      name: 'Computer',
      value: 'computer',
      color: 'danger',
      selected: false
    },
    {
      id: 1,
      name: 'Food',
      value: 'food',
      color: 'primary',
      selected: false
    },
    {
      id: 1,
      name: 'Sports',
      value: 'sports',
      color: 'warning',
      selected: false
    },
    {
      id: 1,
      name: 'Transportation',
      value: 'transportation',
      color: 'info',
      selected: false
    },
    {
      id: 1,
      name: 'Travel',
      value: 'travel',
      color: 'secondary',
      selected: false
    },
    {
      id: 1,
      name: 'Buildings',
      value: 'buildings',
      color: 'dark',
      selected: false
    },
    {
      id: 1,
      name: 'Business',
      value: 'business',
      color: 'danger',
      selected: false
    },
    {
      id: 1,
      name: 'Music',
      value: 'music',
      color: 'dark',
      selected: false
    }
  ];

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private modalService: ModalService
  ) {
    this.form = this.fb.group({
      q: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.apiService.getAllPhotos('all', this.perPage, 1)
      .subscribe({
        next: (res) => {
          this.data.hits = res.hits;
          this.loading = false;
        },
        error: (err) => {

        }
      })
  }

  changeCategory(value: any) {
    this.page = 1;
    this.selectedCategory = value;
    this.categories.forEach(cate => {
      cate.selected = cate.value === value;
    });
    this.apiService.getImageCategory(value, this.page, this.perPage).subscribe({
      next: (res) => {
        this.data.hits = res.hits;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  showImage(obj: Hit) {
    this.modalService.showImage(obj).subscribe(res => {
      console.log(res);
    });
  }

  previousPage() {
    this.page -= 1;
    if (this.selectedCategory) {
      this.apiService.getImageCategory(this.selectedCategory, this.page, this.perPage)
        .subscribe({
          next: (res) => {
            this.data.hits = res.hits;
            this.loading = false;
          },
          error: (err) => {
            console.error(err);
          }
        });
    } else {
      if (this.form.get('q')?.value) {
        this.apiService.getPhotos(this.form.get('q')?.value, this.page, this.perPage)
          .subscribe({
            next: (res) => {
              this.data.hits = res.hits;
              this.loading = false;
            },
            error: (err) => {
              console.error(err);
            }
          });
      } else {
        this.apiService.getAllPhotos('all', this.perPage, this.page)
          .subscribe({
            next: (res) => {
              this.data.hits = res.hits;
              this.loading = false;
            },
            error: (err) => {
              console.error(err);
            }
          });
      }
    }
  }

  nextPage() {
    this.page += 1;
    if (this.selectedCategory) {
      this.apiService.getImageCategory(this.selectedCategory, this.page, this.perPage)
        .subscribe({
          next: (res) => {
            this.data.hits = res.hits;
            this.loading = false;
          },
          error: (err) => {
            console.error(err);
          }
        });
    } else {
      if (this.form.get('q')?.value) {
        this.apiService.getPhotos(this.form.get('q')?.value, this.page, this.perPage)
          .subscribe({
            next: (res) => {
              this.data.hits = res.hits;
              this.loading = false;
            },
            error: (err) => {
              console.error(err);
            }
          });
      } else {
        this.apiService.getAllPhotos('all', this.perPage, this.page)
          .subscribe({
            next: (res) => {
              this.data.hits = res.hits;
              this.loading = false;
            },
            error: (err) => {
              console.error(err);
            }
          });
      }
    }
  }

  search() {
    this.page = 1;
    this.apiService.getPhotos(this.form.get('q')?.value, this.page,  this.perPage).subscribe({
      next: (res) => {
        this.data.hits = res.hits
        this.loading = false
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
