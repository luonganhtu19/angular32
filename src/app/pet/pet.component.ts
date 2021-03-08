import { Component, OnInit } from '@angular/core';
import {Pet} from "../models/pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {};
  constructor() {}
  ngOnInit(): void {
    this.pet.petName='Dung';
    this.pet.petImg ='https://i.pinimg.com/564x/1c/54/76/1c5476cb3a8a8d53aa3e70fbba21cc86.jpg';
  }
  upDateName( name: string): void{
    this.pet.petName= name;
  }
  upDateImg(img: string): void{
    this.pet.petImg= img;
  }
}
