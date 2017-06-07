import { Injectable } from '@angular/core'

@Injectable()

export class SliderService{
    getEvents(){
        return SLIDES
    }
}

const SLIDES = [
    {
      id: 1,
      name: 'Image 01',
      imageUrl: '/app/assets/images/image_01.jpg',
      description: 'Some Description',
      title: 'Some Title 1',
      url: 'http://google.com' 
    },
    {
      id: 2,
      name: 'Image 02',
      imageUrl: '/app/assets/images/image_02.jpg',
      description: 'Some Description',
      title: 'Some Title 2',
      url: 'http://google.com' 
    },
    {
      id: 3,
      name: 'Image 03',
      imageUrl: '/app/assets/images/image_03.jpg',
      description: 'Some Description',
      title: 'Some Title 3',
      url: 'http://google.com' 
    },
    {
      id: 4,
      name: 'Image 04',
      imageUrl: '/app/assets/images/image_04.jpg',
      description: 'Some Description',
      title: 'Some Title 4',
      url: 'http://google.com' 
    },
    {
      id: 5,
      name: 'Image 05',
      imageUrl: '/app/assets/images/image_05.jpg',
      description: 'Some Description',
      title: 'Some Title 5',
      url: 'http://google.com' 
    }
]