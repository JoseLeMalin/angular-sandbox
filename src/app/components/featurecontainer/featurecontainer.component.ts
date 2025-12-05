/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from "@angular/common";
import { Component, Injector } from "@angular/core";

@Component({
  selector: "app-featurecontainer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./featurecontainer.component.html",
  styleUrl: "./featurecontainer.component.css",
})
export class FeaturecontainerComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentType: any = null;
  componentModule: any = null;
  customInjector: Injector;


  constructor(private injector: Injector) {
    // Create custom injector with additional data
    this.customInjector = Injector.create({
      providers: [
        {
          provide: "featureConfig",
          useValue: {
            message: "Dynamically configured message",
            buttonText: "Dynamic Action",
          },
        },
      ],
      parent: this.injector,
    });
  }

  async loadFeatureComponent() {
    try {
      // Dynamically import the module
      const moduleImport = await import("../featureoutlet/featureoutlet.module");
      const componentImport = await import("../featureoutlet/featureoutlet.component");

      // Set the component type and module
      this.componentType = componentImport.FeatureoutletComponent;
      this.componentModule = moduleImport.FeatureoutletModule;

      console.log("Feature component loaded successfully");
    } catch (error) {
      console.error("Error loading feature component:", error);
    }
  }
}
