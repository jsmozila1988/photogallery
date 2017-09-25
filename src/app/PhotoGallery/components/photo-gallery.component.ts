import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Image } from '../model/image';
import { GalleryService } from '../services/gallery.service';

// Component decorator
@Component({
    selector: 'photo-gallery',
    templateUrl: `./photo-gallery.html`
})
// Component class
export class PhotoGalleryComponent implements OnInit {
    // Local properties
    images: Image[];
    dImage: any 
    // Constructor with injected service
    constructor(private galleryService: GalleryService) { }

    ngOnInit() {
        // Load gallery images
        this.loadGallery()
    }

    loadGallery() {
        // Get all Gallery Images
        this.galleryService.getGellary()
            .subscribe((
                images => {
                    console.log(images);
                    this.images = images;
                }
            ),(
                err => {
                    console.log(err);
                }
            ));
    }

    next() {

    }

    prev() {

    }
}