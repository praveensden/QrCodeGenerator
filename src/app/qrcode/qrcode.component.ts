import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  constructor() {}
  @Input() qrData: string = '';
  @Output() qrUrl = new EventEmitter();
  ngOnInit(): void {}
  getQrUrl(event: SafeUrl) {
    this.qrUrl.emit(event);
  }
}
