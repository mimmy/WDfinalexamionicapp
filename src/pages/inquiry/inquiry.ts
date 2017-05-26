import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MsoftApi } from '../../providers/msoft-api.service';

@Component({
  templateUrl: 'inquiry.html'
})
export class InquiryPage {
  results: any;
  lala: any;
  cityOfStars: any;

  constructor(private barcodeScanner: BarcodeScanner, public msoftService: MsoftApi) {
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData)=>{
      this.results=barcodeData;
    }, (err)=> {
      alert('oh noee ${err}');
      }
    );
  }

  lookUp(from, to) {
    this.msoftService.getSales(this.results.text, from, to).then((data:any) => {
      this.lala=data;
      alert(this.results.text.toString());
      console.log(data);
    });
  }
  lookOp(from, to) {
    this.msoftService.getSales('4104480465352', from, to).then((data:any) => {
      this.cityOfStars=data;
      console.log(data);
    });
  }
}
