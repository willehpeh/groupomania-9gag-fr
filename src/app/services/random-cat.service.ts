import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomCatService {
  private catArray = [
    'https://media.giphy.com/media/FP2OpdSFCR7hK/giphy.gif',
    'https://media.giphy.com/media/LZaA5gGjbUJOw/giphy.gif',
    'https://media.giphy.com/media/AC8n0wdJvnA6A/giphy.gif',
    'https://media.giphy.com/media/wHc92cHADhpLi/giphy.gif',
    'https://media.giphy.com/media/40Fpxgn6Yq640/giphy.gif',
    'https://media.giphy.com/media/CF93EZqOxjdHG/giphy.gif',
    'https://media.giphy.com/media/RhFpe57haA7WU/giphy.gif',
    'https://media.giphy.com/media/OF1Q7e9vuZIVG/giphy.gif',
    'https://media.giphy.com/media/v9GAXEMy4qNgI/giphy.gif',
    'https://media.giphy.com/media/a0dG9NJaR2tQQ/giphy.gif'
  ];

  public returnRandomCatGif() {
    return this.catArray[Math.floor(Math.random() * 10)];
  }
}
