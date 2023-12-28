import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {

  ToggleScroll:string="NormalScroll";

  NotVisualizeBlair:string="NotVisualizeBlair";
  CloseBlair:string="CloseBlair";

  NotVisualizeCassandra:string="NotVisualizeCassandra";
  CloseCassandra:string="CloseCassandra";

  NotVisualizeEdgar:string="NotVisualizeEdgar";
  CloseEdgar:string="CloseEdgar";

  NotVisualizeLavigne:string="NotVisualizeLavigne";
  CloseLavigne:string="CloseLavigne";

  visualizeBlair(){
  this.NotVisualizeBlair ="VisualizeBlair";
  this.ToggleScroll="ToggleScroll";
  }

  closeBlair(){
    this.NotVisualizeBlair="NotVisualizeBlair";
    this.ToggleScroll="NormalScroll";
  }

  visualizeCassandra(){
    this.NotVisualizeCassandra ="VisualizeCassandra";
    this.ToggleScroll="ToggleScroll";
  }
  
  closeCassandra(){
    this.NotVisualizeCassandra="NotVisualizeCassandra";
    this.ToggleScroll="NormalScroll";
  }

  visualizeEdgar(){
    this.NotVisualizeEdgar ="VisualizeEdgar";
    this.ToggleScroll="ToggleScroll"
  }
    
  closeEdgar(){
    this.NotVisualizeEdgar="NotVisualizeEdgar";
    this.ToggleScroll="NormalScroll";
  }

  visualizeLavigne(){
    this.NotVisualizeLavigne ="VisualizeLavigne";
    this.ToggleScroll="ToggleScroll"
  }
    
  closeLavigne(){
    this.NotVisualizeLavigne="NotVisualizeLavigne";
    this.ToggleScroll="NormalScroll";
  }
}
