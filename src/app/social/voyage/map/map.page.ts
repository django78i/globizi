import { Observable, } from 'rxjs/internal/Observable';
import { MapServiceService } from './../../../services/map-service.service';
import { tap } from 'rxjs/internal/operators/tap';
import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-map',
	templateUrl: './map.page.html',
	styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

	latitude: number = 48.776731;
	longitude: number = 2.001844;
	marker: {
		latitude: number,
		longitude: number,
		iconUrl: any;
	};

	url: any[] = [
		'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwJyC_66bw53OzjZuOUJR9FLTaIP6d_0lytOE_FpKp9f7_EAKzfAhkVm2GO246PitZnFPHR4rs0zgFoORbGvp_E6C2h-MdLg0zZsUeehX6PX9M2xi3CUCYxDfnuOoL_AYAQ5D7LQw4RhF28aWlM6yFlrBFbvtvNyR3sBI2sQqxFvBzqx&key=AIzaSyBY3yru7c1Oyy8B8iMEAuYcCgiZwPwisnA',
		'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwIXMd4-xeN3ecuJwvzmaciP1po9yLf-1M7cEWEiL8vxtiu0e0XwywP6njKv0xv-6SCwhFS37mZ4_sL0lGFmfpy-ze7hH2T2m5MolwddNyxwA8FMBk9Ky0WTSoW9yE1WTeIdLbmUyh7UwoukB2_Hh6RuUHZzXG5XeGc0blgQKKMySURX&key=AIzaSyBY3yru7c1Oyy8B8iMEAuYcCgiZwPwisnA'

	];

	search: any;


	durationInSeconds = 5;
	image: Observable<any>;

	lieux: any;
	tof: any[] = [];

	GoogleAutocomplete: google.maps.places.AutocompleteService;
	autocomplete: { input: string; };
	autocompleteItems: any[];
	location: any;
	placeid: any;
	show: Boolean = true;
	constructor(public modalController: ModalController, public zone: NgZone,
		public navCtrl: NavController, public router: Router, public mps: MapServiceService, public elemRef: ElementRef) {
		this.image = this.mps.photo;
		this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
		this.autocomplete = { input: '' };
		this.autocompleteItems = [];
	}

	ngOnInit() {

		this.mps.getData().pipe(
			map(r => r.result),
			tap(r => this.onMapClicked(r))
		).subscribe(r => this.lieux = r);
	}

	navigate() {
		this.router.navigate(['/tabs/voyage']);
	}


	updateSearchResults() {
		this.show = false;
		if (this.autocomplete.input == '') {
			this.autocompleteItems = [];
			return;
		}
		console.log(this.autocomplete);
		this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
			(predictions, status) => {
				this.autocompleteItems = [];
				this.zone.run(() => {
					predictions.forEach((prediction) => {
						this.autocompleteItems.push(prediction);
					});
				});
			});
	}

	selectSearchResult(item) {
		console.log(item)
		this.location = item
		this.placeid = this.location.place_id
		console.log('placeid' + this.placeid)
		this.show = true;
	}

	onMapClicked(event) {
		console.log(event);
		this.marker = {
			latitude: event.geometry.location.lat,
			longitude: event.geometry.location.lng,
			iconUrl: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
		};
	}

	presentModal(marker) {
		console.log(marker);
		this.mps.getPhoto()
			.subscribe(
				(r) => {
					this.tof.push(r);
				}
			)
	}


}
