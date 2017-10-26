import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { FormsModule,FormGroup,FormBuilder,FormControl,Validators }   from '@angular/forms';

import { Media }        from '../list/media';
import { MediaService } from '../service/media.service';


@Component({
  selector: 'modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})

export class ModalUpdateComponent implements OnInit {
 photo: Media;
 mediaForm:FormGroup;
  
  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private location: Location,
    private fb:FormBuilder) {this.createForm();}
  
  createForm() {
    this.mediaForm=this.fb.group({
      url:['', Validators.required ],
      description:'',
    });
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.mediaService.getMedia(params.get('id')))
      .subscribe(jkkk => this.photo = jkkk);
  }
  
  save(): void {
    this.mediaService.update(this.photo)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}