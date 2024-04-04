import { Component, OnInit, WritableSignal, inject, Input, signal } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';
import { cashOutline, calendarOutline } from 'ionicons/icons'
import { addIcons } from 'ionicons';
import { IonHeader, IonToolbar, IonTitle, IonContent, InfiniteScrollCustomEvent,IonList,IonItem, IonSkeletonText,
  IonAvatar,IonAlert,IonLabel,IonBadge,IonInfiniteScroll,IonInfiniteScrollContent,IonCard,IonCardHeader,IonCardSubtitle,
  IonCardTitle,IonText, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonList, IonItem, IonSkeletonText, 
    IonAvatar,IonAlert,IonLabel, DatePipe, RouterModule, IonBadge,IonInfiniteScroll,IonInfiniteScrollContent, CurrencyPipe, DatePipe,IonCard,
    IonCardHeader,IonCardSubtitle,IonCardTitle,IonText,IonCardContent,IonIcon],
})

export class DetailsPage implements OnInit {
  private movieService = inject(MovieService)
  public imageBaseUrl = 'https://image.tmdb.org/t/p'
  public movie: WritableSignal<MovieResult | null> = signal(null)

  @Input()
  set id(movieId: string){
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      console.log('movie',movie)

      this.movie.set(movie)
    })
  }


  constructor() {
    addIcons({ cashOutline, calendarOutline})
   }

  ngOnInit() {
  }

}
