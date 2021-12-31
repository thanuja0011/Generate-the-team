import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-generator',
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.css']
})
export class TeamGeneratorComponent implements OnInit {
  addMember = "";
  memberList:string[] = [];
  errorMsg = "";
  teamsNumber:number | "" = "";
  teams:string[][] = [];

  constructor() { }

  ngOnInit(): void {
  }
  Addmember(){
    if(!this.addMember){
      this.errorMsg = "Name can't be empty";
      return
    }
    this.memberList.push(this.addMember);
    this.addMember = "";
    this.errorMsg = "";
   
  }
  Memberinput(membername:string){
    this.addMember = membername;
    
  }
  teamInput(value:string){
    this.teamsNumber = Number(value);
  }
  teamGenerate(){
    if(!this.teamsNumber || this.teamsNumber <= 0){
      this.errorMsg = "Invalid team Number";
      this.teams = [];
      return
    }
    if(this.memberList.length < this.teamsNumber){
      this.errorMsg = "Not enough members";
      return
    }
    this.errorMsg = "";
    let AllMembers = [...this.memberList];

    while(AllMembers.length){
      for(let i = 0; i<this.teamsNumber;i++){
      const randNumber = Math.floor(Math.random() * AllMembers.length)
      const member = AllMembers.splice(randNumber,1)[0];
      if(!member) break;
      if(this.teams[i]){
        this.teams[i].push(member);
      }else{
        this.teams[i] = [member];
      }
      
      }

    }
    this.memberList = [];
    this.teamsNumber = "";

  }
}
