import {Component,NgModule,OnInit} from '@angular/core';
import { Router }            	from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MediaService }         from '../../service/media.service';
import {Media} from '../../list/media';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl,FormBuilder}   from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})

export class AddContentComponent implements OnInit {
	medi:Media[]=[];
addForm: FormGroup; 

  constructor(public activeModal: NgbActiveModal,
  private mediaService: MediaService,
  private router:Router,
  private fb: FormBuilder) { 
    this.createForm(); 
  }

  createForm() {
    this.addForm = this.fb.group({
    url: '', 
    description:''
    });
  }

  ngOnInit() {}

  add(url:string,description:string): void {
   const id =  UUID.UUID();
    url = url.trim();
	description=description.trim();
	
    if (!url && !description) { return; }
	
    this.mediaService.create(id,url,description)
      .then(media => {
	  console.log(media);
        this.medi.push(media);
      });
  }
}
