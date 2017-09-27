import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//Image Model
import { Image } from '../model/image';
//Gallery Service to get gallery images
import { GalleryService } from '../services/gallery.service';

// Component decorator
@Component({
    selector: 'photo-gallery',
    templateUrl: `./photo-gallery.html`
})
// PhotoGallery Component class
export class PhotoGalleryComponent implements OnInit {
    // Local properties
    images: Image[]; // image array of type Image
    current: Image; // big image object of type Image
    currentIndex: Number = 0; // current big Image index
    loading: Boolean = true; // current big Image loading flag
    isLoaded: Boolean = false; // service data loading flag

    // Constructor with injected service
    constructor(private galleryService: GalleryService) {
        this.current = new Image;
    }

    // Life Cycle hook
    ngOnInit() {
        // Load gallery images
        this.loadGallery();
    }

    /*
     * @method : loadGallery
     * @purpose : to get gallery images
     * @input :
     * @return : void
     */
    loadGallery(): void {
        // Get all Gallery Images
        this.galleryService.getGellary()
            .subscribe((images => {
                this.images = images;
                this.current = this.images[0];
                this.isLoaded = true;
            }), (
                err => {
                    console.log(err);
                }
            ));
    }

    /**
     * @method : onLoad
     * @purpose : to set loading flag for big image
     * @input :
     * @return : void
     */
    onLoad(): void {
        this.loading = false;
    }

    /**
     * @method : next
     * @purpose : nevigator on image data array work on click event
     * @input :
     * @return : void
     */
    next(): void {
        console.log(this.currentIndex);
        console.log(this.images);
        if (((+this.currentIndex) + 1) != this.images.length) {
            this.currentIndex = (+this.currentIndex) + 1;
        } else {
            this.currentIndex = 0;
        }
        this.loading = true;
        this.current = this.images[+this.currentIndex];
    }

    /**
     * @method : prev
     * @purpose : nevigator on image data array work on click event
     * @input :
     * @return : void
     */
    prev(): void {
        if (this.currentIndex != 0) {
            this.loading = true;
            this.currentIndex = (+this.currentIndex) - 1;
            this.current = this.images[+this.currentIndex];
        }
    }

    /**
     * @method : setNav
     * @purpose : to set nevigator on clicked thumbnali index
     * @input : index(number)
     * @return : void
     */
    setNav(index: Number): void {
        this.currentIndex = index;
        this.loading = true;
        this.current = this.images[+this.currentIndex];
    }

    isActive(index: Number): String {
        return (this.currentIndex == index) ? 'active' : '';
    }
}