import { Component,OnInit,Input }	from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Media }			from '../media';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls:['./card.component.css']
})
export class CardComponent implements OnInit{
	@Input() photo:Media;
	
	constructor(
		private modalService: NgbModal) { }
	
	ngOnInit(): void {}
}
