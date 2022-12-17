import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title: String = 'qrcode';
  qrInput: FormControl = new FormControl('', [Validators.required]);
  url: string = '';
  downloadUrl(url: string, fileName: string) {
    const a: any = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
  }
  downloadImage() {
    this.http.get(this.url, { responseType: 'blob' }).subscribe((val) => {
      const imageUrl = URL.createObjectURL(val);
      this.downloadUrl(imageUrl, 'image.png');
      URL.revokeObjectURL(imageUrl);
    });
  }
  getQrImageUrl(event: any) {
    this.url = event.changingThisBreaksApplicationSecurity;
  }
}
