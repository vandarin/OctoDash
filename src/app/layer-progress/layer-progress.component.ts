import { Component } from "@angular/core";

@Component({
  selector: "app-layer-progress",
  templateUrl: "./layer-progress.component.html",
  styleUrls: ["./layer-progress.component.scss"],
})
export class LayerProgressComponent {
  public layerProgress: LayerProgress;

  public constructor() {
    this.layerProgress = {
      current: "--",
      total: "?",
    };
  }
}

export interface LayerProgress {
  current: string;
  total: string;
}
