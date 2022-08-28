import * as THREE from "three";

export class PickHelper {
  constructor(fn, div) {
    this.raycaster = new THREE.Raycaster();
    this.currentIntersect = null;
    this.activo = false;
    this.estado = 0;
    this.changeTab = fn;
    this.div = div;
    if (window.matchMedia("(pointer: coarse)").matches) {
      // touchscreen
      this.isTouch = true;
    } else {
      this.isTouch = false;
    }
  }

  click() {
    window.addEventListener("click", () => {
      if (this.currentIntersect) {
        switch (true) {
          case this.currentIntersect.object.name.includes("whiteBread"):
            this.changeTab("pan");

            break;
          case this.currentIntersect.object.name.includes("Baguette"):
            this.changeTab("pan");
            break;
          case this.currentIntersect.object.name.includes("patty"):
            this.changeTab("relleno");

            break;
          case this.currentIntersect.object.name.includes("ham"):
            this.changeTab("relleno");

            break;
          case this.currentIntersect.object.name.includes("dd360Flag"):
            this.changeTab("color");

            break;
          case this.currentIntersect.object.name.includes("Stick"):
            this.changeTab("color");

            break;
          case this.currentIntersect.object.name.includes("colorFlag"):
            this.changeTab("color");

            break;

          default:
            break;
        }
      }
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(pointer: coarse)").matches) {
        this.isTouch = true;
      } else {
        this.isTouch = false;
      }
    });
  }

  pick(normalizedPosition, scene, camera) {
    this.scene = scene;
    if (this.pickedObject) {
      this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
      this.pickedObject = undefined;
    }
    if (
      parseFloat(normalizedPosition.x) === 0 &&
      parseFloat(normalizedPosition.y) === 0
    ) {
      return;
    }

    this.raycaster.setFromCamera(normalizedPosition, camera);
    let intersectedObjects = this.raycaster.intersectObjects(scene.children);
    if (intersectedObjects.length) {
      if (!this.currentIntersect) {
        if (this.isTouch) {
          switch (true) {
            case intersectedObjects[0].object.name.includes("whiteBread"):
              if (this.activo) return;
              this.activo = true;
              this.changeTab("pan");
              normalizedPosition.x = -10000;
              normalizedPosition.y = -10000;

              break;
            case intersectedObjects[0].object.name.includes("Baguette"):
              if (this.activo) return;
              this.activo = true;
              this.changeTab("pan");
              normalizedPosition.x = -10000;
              normalizedPosition.y = -10000;

              break;
            case intersectedObjects[0].object.name.includes("patty"):
              if (this.activo) return;
              this.activo = true;
              this.changeTab("relleno");
              normalizedPosition.x = -10000;
              normalizedPosition.y = -10000;

              break;
            case intersectedObjects[0].object.name.includes("ham"):
              if (this.activo) return;
              this.activo = true;
              this.changeTab("relleno");
              normalizedPosition.x = -10000;
              normalizedPosition.y = -10000;

              break;
            case intersectedObjects[0].object.name.includes("dd360Flag"):
              if (this.activo) return;
              this.activo = true;
              this.changeTab("color");
              normalizedPosition.x = -10000;
              normalizedPosition.y = -10000;

              break;
            case intersectedObjects[0].object.name.includes("Stick"):
              if (this.activo) return;
              this.activo = true;
              this.changeTab("color");
              normalizedPosition.x = -10000;
              normalizedPosition.y = -10000;

              break;
            case intersectedObjects[0].object.name.includes("colorFlag"):
              if (this.activo) return;
              this.activo = true;
              this.changeTab("color");
              normalizedPosition.x = -10000;
              normalizedPosition.y = -10000;

              break;

            default:
              break;
          }
        }
        console.log("mouse enter");
        this.div.style.cursor = "pointer";
      }
      this.currentIntersect = intersectedObjects[0];
    } else {
      if (this.currentIntersect) {
        this.div.style.cursor = "grab";
        this.activo = false;
      }

      this.currentIntersect = null;
    }
  }
}
