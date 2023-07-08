import { Component, Input, OnInit } from '@angular/core';
import { ReviewResult } from '../../../../../models/Movie';
import { ImageService } from '../../../../../services/image.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  @Input() review: ReviewResult[];
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
