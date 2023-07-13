import { Component, Input, OnInit } from '@angular/core';
import { ReviewModel } from '@models/reviewModel';
import { ImageService } from '@services/image.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
})
export class CastComponent implements OnInit {
  @Input() credits: ReviewModel[];
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}
  getImageUrl(posterPath: string | undefined): string {
    if (!posterPath) {
      return ''; // veya varsayılan bir resim URL'i döndürebilirsiniz
    }
    return this.imageService.getImageUrl(posterPath);
  }
  handleImageError(event: any) {
    event.target.src = '/assets/images/default_avatar.png';
  }
}
