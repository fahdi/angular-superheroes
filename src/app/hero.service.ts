import { Injectable } from '@angular/core';
import {HEROES} from './mocks/mock-heroes'
import {Hero} from './hero'
@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  } 
}
