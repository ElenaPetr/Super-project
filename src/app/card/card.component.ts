import { Component,OnInit }	from '@angular/core';
import { Router }			from '@angular/router';
import { UUID }				from 'angular2-uuid';

import { Media }			from '../media';
import { MediaService }		from '../media.service';
 
@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit{
	medi:Media[];
	selectedPhoto:Media;
	
	constructor(private router:Router, private mediaService: MediaService) { }
	
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
		this.gotoDetail();
	}
	
	gotoDetail(): void {
		this.router.navigate(['/update', this.selectedPhoto.id]);
	}
}
