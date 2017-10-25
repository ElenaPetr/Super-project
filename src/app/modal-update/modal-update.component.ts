import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl,FormBuilder}   from '@angular/forms';

import { Media }        from '../list/media';
import { MediaService } from '../service/media.service';


@Component({
  selector: 'modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {
 photo: Media;
  constructor(private mediaService: MediaService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit():void {this.route.paramMap
      .switchMap((params: ParamMap) => this.mediaService.getMedia(params.get('id')))
      .subscribe(jkkk => this.photo = jkkk);
  }
save(): void {
    this.mediaService.update(this.photo)
    // .then(()=>""
  }

}