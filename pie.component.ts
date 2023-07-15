import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements  OnInit {
  @ViewChild('pieForm')  pieFormObj : any;
  @ViewChild('val1') val : any;
  @ViewChild('val2') val2 : any;
  chart: any;
  
  ngOnInit(): void {

  }
  onInput1Blur(){

    if(this.pieFormObj.form.controls['val1'].value <=100  ){
      this.pieFormObj.form.patchValue({
        val2 : (100-this.pieFormObj.form.controls['val1'].value)
      })
      console.log(this.pieFormObj.form.controls['val2'].value)
      this.pieFormObj.form.controls['val2'].touched = true
    }
  }
    onInput2Blur(){
    if(this.pieFormObj.form.controls['val2'].value <= 100  ){
      this.pieFormObj.form.patchValue({
        val1 : (100-this.pieFormObj.form.controls['val2'].value)
      })
      console.log(this.pieFormObj.form.controls['val'].value)
      this.pieFormObj.form.controls['val1'].touched = true
    }
  }

  createChart(){
    if(this.chart){
        this.chart.clear();
        this.chart.destroy();
    }
    let newVal1 =this.pieFormObj.form.controls['val1'].value;
    let newVal2 = this.pieFormObj.form.controls['val2'].value;
    console.log(newVal1, newVal2)
    this.chart = new Chart("PieChart", {
      type: 'pie',
      data: {
        labels: ['Number1', 'Number2'],
	       datasets: [{
    label: 'Value',
    data: [newVal1, newVal2],
    backgroundColor: [
      'pink',
      'green'
    ],
    hoverOffset: 5
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
    this.pieFormObj.reset();
  }

}
  
  

