import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule,FormGroup,FormBuilder,FormControl,Validators }   from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Media }        from '../media';
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
    public activeModal: NgbActiveModal,
    private mediaService: MediaService,
    private route: ActivatedRoute,
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
      // .then(() => this.activeModal.close(ModalUpdateComponent));
  }

  
}