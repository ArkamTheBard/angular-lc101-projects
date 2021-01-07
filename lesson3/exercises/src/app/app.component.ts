import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  takeOffEnabled : boolean = true;

  color : string = 'green';
  height : number = 0;
  width : number = 0;
  message : string = 'Space shuttle ready for takeoff!';

  @ViewChild('boundedArea', {static: false}) boundedArea: ElementRef;

  confirmLaunch() : void{
    let response = window.confirm("Is the shuttle ready for launch?");
    if(response === true){
      this.message = "Shuttle in flight";
      this.color = "blue";
      this.height = 10000;
      this.takeOffEnabled = false;
    }
  }

  alertLand(rocketImage) : void{
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.takeOffEnabled = true;
  }

  confirmAbort(rocketImage) : void{
    let response = window.confirm("Are you sure you wish to abort?");
    if(response === true){
      this.message = "Mission aborted.";
      this.color = "red";
      this.height = 0;
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction){
    let upperMostBound = this.boundedArea.nativeElement.offsetHeight;
    let rightMostBound = this.boundedArea.nativeElement.offsetWidth;
    if(direction === 'right'){
      this.checkBounds(rocketImage, direction);
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      if(parseInt(movement) < (parseInt(rightMostBound)) - 75){
        rocketImage.style.left = movement;
        this.width = this.width + 10000;
      }
    }
    else if(direction === 'left'){
      this.checkBounds(rocketImage, direction);
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      if(this.width > 0){
        rocketImage.style.left = movement;
        this.width = this.width - 10000;
      }
    }
    else if(direction === 'up'){
      this.checkBounds(rocketImage, direction);
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      if(parseInt(movement) < (parseInt(upperMostBound)) - 75){
        rocketImage.style.bottom = movement;
        this.height += 10000;
      }
    }
    else if(direction === 'down'){
      this.checkBounds(rocketImage, direction);
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      if(this.height > 0){
        rocketImage.style.bottom = movement;
        this.height -= 10000;
      }
    }
  }

  checkBounds(rocketImage, direction) : void{
    let upperMostBound = parseInt(this.boundedArea.nativeElement.offsetHeight);
    let rightMostBound = parseInt(this.boundedArea.nativeElement.offsetWidth);
    if(direction === 'right'){
      if(parseInt(rocketImage.style.left) > rightMostBound - 100){
        this.color = "orange";
      }
      else{
        this.color = "blue";
      }
    }
    if(direction === 'left'){
      if(parseInt(rocketImage.style.left) > rightMostBound - 100 || parseInt(rocketImage.style.left) > 10){
        this.color = "blue";
      }
      else{
        this.color = "orange";
      }
    }
    if(direction === 'up'){
      if(parseInt(rocketImage.style.bottom) > upperMostBound - 100){
        this.color = "orange";
      }
      else{
        this.color = "blue";
      }
    }
    if(direction === 'down'){
      if(parseInt(rocketImage.style.bottom) > upperMostBound - 100 || parseInt(rocketImage.style.bottom) > 10){
        this.color = "blue";
      }
      else{
        this.color = "orange";
      }
    }
  }
}
