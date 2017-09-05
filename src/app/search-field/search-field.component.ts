import { Component, OnInit } from '@angular/core';
import {Jsonp} from "@angular/http";

@Component({
  selector: 'search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.styl']
})
export class SearchFieldComponent implements OnInit {

  public result: Object;


  constructor( private jsonp: Jsonp) { }

  public wikiUrl = 'https://en.wikipedia.org/w/api.php?';

  public wikiParams = {
    params: {
      format: "json",
      action: "query",
      prop: "extracts",
      exchars: "400",
      exintro: "",
      explaintext: "",
      rawcontinue: "",
      generator: "search",
      gsrlimit: "20",
      gsroffset: "0",
      callback: "JSONP_CALLBACK",
      gsrsearch: ""
    }
  };

  ngOnInit() {
    this.doSearch('JavaScript');
  }

  doSearch(search:string) {
    this.wikiParams.params.gsrsearch = search;
    this.jsonp.request(this.wikiUrl, this.wikiParams).subscribe((data) => {
        let list = Object.values(data.json().query.pages || {});
        this.result = list;
      }
    );

    //console.log(this.wikiUrl);
  }

}
