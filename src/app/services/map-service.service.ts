import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, share } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class MapServiceService {
	url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJkbVMqVVl5kcRmF-iadbv-v4&fields=name,photo,rating,geometry,formatted_phone_number&key=AIzaSyBY3yru7c1Oyy8B8iMEAuYcCgiZwPwisnA';
	img =
		[
			'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwLVNP78QxmvKV1-vKIXBBNPkDqZLIdwMXTs6g036BQxZEZGiFgLqqEr-x8rbQB0x6mzpSy3MTmspog3LAibtg01XG3WTmUFCi3mxC7ZXXS7K34vH1nyEbd0DwX6hTBoDEuF-zrKsUubaOyEWC8lz_ZRwXzP9Gikix_I_P8711ykEyTH&key=AIzaSyBY3yru7c1Oyy8B8iMEAuYcCgiZwPwisnA',
			'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=ATtYBwJyC_66bw53OzjZuOUJR9FLTaIP6d_0lytOE_FpKp9f7_EAKzfAhkVm2GO246PitZnFPHR4rs0zgFoORbGvp_E6C2h-MdLg0zZsUeehX6PX9M2xi3CUCYxDfnuOoL_AYAQ5D7LQw4RhF28aWlM6yFlrBFbvtvNyR3sBI2sQqxFvBzqx&key=AIzaSyBY3yru7c1Oyy8B8iMEAuYcCgiZwPwisnA'
		];
	photo: BehaviorSubject<any> = new BehaviorSubject(null);
	image: any[] = [];

	constructor(private http: HttpClient) { }


	getData(): Observable<any> {
		return this.http.get(this.url).pipe(
			catchError(err => {
				console.log(err);
				return throwError(err);
			})
		);
	}

	getPhoto() {
		let dat: Observable<any>;
		this.img.forEach(url => {
			console.log('i');
			this.trap(url).subscribe((r: Blob) => {
				this.createImageFromBlob(r)
			}
			);
		})
		return this.photo;
	}

	createImageFromBlob(image: Blob) {
		let reader = new FileReader();
		reader.addEventListener("load", () => {
			this.photo.next(reader.result);
		}, false);
		if (image) {
			reader.readAsDataURL(image);
		}
	}

	trap(url) {
		return this.http.get(url, { responseType: 'blob' as 'json' }).pipe(
			tap(r => {
				console.log(r);
				// this.photo.next(r)
			}),
			catchError(err => {
				return throwError(err);
			}), share()
		);
	}

}

