import { Component, OnInit, NgModule} from '@angular/core';
import { Router }            	from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


import { MediaService }         from '../service/media.service';
import {Media} 					from '../list/media'
import { CardComponent}         from '../card/card.component';



@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  constructor(private modalService: NgbModal,
   private mediaService: MediaService) { }

  ngOnInit() {
  }

  // open() {
  //   const modalRef = this.modalService.open(NgbdModalContent);
  
  // }

}






  