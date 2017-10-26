import { Component,OnInit }	from '@angular/core';
import { Router }			from '@angular/router';
import { UUID }				from 'angular2-uuid';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Media }			from '../list/media';
import { MediaService }		from '../service/media.service';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';
@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit{
	medi:Media[];
	selectedPhoto:Media;
	
	constructor(
		private router:Router,
		private modalService: NgbModal, 
		private mediaService: MediaService) { }
	
	ngOnInit(): void {
		this.getMedia();
	}

	getMedia(): void {
		this.mediaService.getMedias().then(response => this.medi = response);
	}
	
	delete(media: Media): void {
		this.mediaService
			.delete(media.id).then(() => {
				this.medi = this.medi.filter(h => h !== media);
				if (this.selectedPhoto === media) { 
					this.selectedPhoto = null;
				}});
	}

	onSelect(photo:Media) : void {
		this.selectedPhoto=photo;
		this.open();
	}
	
	open() {
    const modalRef = this.modalService.open(ModalUpdateComponent);
  }
}
