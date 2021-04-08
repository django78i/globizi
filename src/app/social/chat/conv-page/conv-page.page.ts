import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase/app';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-conv-page',
  templateUrl: './conv-page.page.html',
  styleUrls: ['./conv-page.page.scss'],
})
export class ConvPagePage implements OnInit {

  messageText: any;
  userID : any;
  messages = [
		{
			date: "2021-03-28T15:18:22.521Z",
			text: "Salut j’ai vu que tu as déjà visit..",
      userId: "imvmCuh4bLhMp1Za5juJ12LjJpd2"
		},
		{
      date: "2021-03-28T15:20:22.521Z",
			text: "bonjour oui en effet j'ai visité ..........",
      userId: "0123456789"
		},
		{
			date: "2021-03-28T15:22:22.521Z",
			text: "j'aimerai bien faire ce voyage ...........",
      userId: "imvmCuh4bLhMp1Za5juJ12LjJpd2"
		},
		{
			date: "2021-03-28T15:25:22.521Z",
			text: "je te le conseil ..........",
      userId: "0123456789"
		}
	]
  
  messagesSub: BehaviorSubject<any[]> = new BehaviorSubject(null);
  messagesObs$: Observable<any[]>;

  constructor(
    private navCtl: NavController,
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    
  ){

    this.messagesSub.next(this.messages);
    this.messagesObs$ = this.messagesSub;

    this.afAuth.authState.subscribe(auth => {
      if(!auth){
        console.log("nop")
      }else{
        console.log('uti :'+auth.uid);
        this.userID = auth.uid;
      }
    })
    

    }
    
  

  ngOnInit() {
  }

  nav() {
    this.navCtl.navigateBack(['']);
  }

  sendMessage(){
    console.log('messageText: '+ this.messageText );
    console.log(this.userID);
    const date= new Date().toISOString();
    console.log(date);
    this.messageText = '';
  }

}
