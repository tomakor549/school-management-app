import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public gridData = [{ "id": "848e6002-8a92-447d-951b-1ffd5e695578", "full_name": "Sig Jeannel", "job_title": "Human Resources Assistant III", "country": "US", "is_online": true, "rating": 3, "target": 100, "budget": 47601, "phone": "(936) 9429601", "address": "138 Buhler Avenue", "img_id": 1, "gender": "M" },
  { "id": "19d18d40-0e64-4837-9420-92130a0ed253", "full_name": "Shelden Greyes", "job_title": "Operator", "country": "GB", "is_online": true, "rating": 5, "target": 40, "budget": 12253, "phone": "(343) 6656271", "address": "2 Waxwing Point", "img_id": 2, "gender": "M" },
  { "id": "bebdc6eb-9179-484a-917d-2e16a23bfdfe", "full_name": "Megen Cody", "job_title": "Operator", "country": "BR", "is_online": true, "rating": 1, "target": 66, "budget": 96183, "phone": "(178) 2336256", "address": "4082 Stephen Court", "img_id": 6, "gender": "F" },
  { "id": "38b08b88-e482-46fc-8976-83590c02ec23", "full_name": "Clevey Thursfield", "job_title": "VP Quality Control", "country": "BR", "is_online": true, "rating": 2, "target": 58, "budget": 54936, "phone": "(277) 7415010", "address": "1563 Glacier Hill Parkway", "img_id": 5, "gender": "M" }]
    
    public gridView: any[];

    public mySelection: string[] = [];

    public ngOnInit(): void {
      this.gridView = this.gridData;
    }
}
