import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MsoftApi {
  constructor(public http: Http) { }

  getExpiring(){
    return new Promise(resolve=>{
      // this.http.get('api' + "/report/expiring?beforeDate=2050-01-01").map(res => res.json()).subscribe(data=>{
      //   //window.alert('waah waah waaah');
      //   console.log(data);
      //   //alert(data + 'lalal');
      //   // return data;
      // });
      this.http.get('http://shrouded-wildwood-36247.herokuapp.com/report/expiring?beforeDate=2050-01-01').subscribe(res => resolve(res.json()));
    });
    //console.log(this.http.get('https://shrouded-wildwood-36247.herokuapp.com/report/expiring?beforeDate=2050-01-01'));
  }
  getSales(barc, from, to){
    // alert('ok 1');
    return new Promise(resolve=>{
      this.http.get("http://shrouded-wildwood-36247.herokuapp.com/report/sales?barcode=" + barc + "&fromDate=" + from +  "&toDate=" + to).subscribe(res => resolve(res.json()));
    });
  }
}
