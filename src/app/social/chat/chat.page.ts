import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.page.html',
	styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

	rooms = [
		{
			name: "Muriel Mumu",
			lastMsg: "Salut, j’ai vu que tu as déjà visit..."
		},
		{
			name: "Zak Naan",
			lastMsg: "Yo, envoi ton num au pire, ce se..."
		},
		{
			name: "Ano Pliz",
			lastMsg: "Salut, j’ai vu que tu as déjà visit..."
		},
		{
			name: "Jude End",
			lastMsg: "Salut, j’ai vu que tu as déjà visit..."
		}
	]


	roomsSub: BehaviorSubject<any[]> = new BehaviorSubject(null);
	roomsObs$: Observable<any[]>;
	custom: any;

	constructor() {
		this.roomsSub.next(this.rooms);
		this.roomsObs$ = this.roomsSub;
	}

	ngOnInit() {
	}

	change(event) {
		this.roomsObs$ = this.roomsSub.pipe(
			map(r => event.detail.value == "" ? this.rooms : r.filter(r => r.name.toLowerCase().includes(event.detail.value.toLowerCase()))),
			tap(dat => console.log(dat))
		)
		console.log(event.detail.value);
	}

	send() {
		console.log(this.custom);
	}


}
