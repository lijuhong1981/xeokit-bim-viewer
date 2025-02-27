import {Controller} from "../Controller.js";
// @reviser lijuhong 2025-2-19 修改 xeokit-sdk 导入路径
import {NavCubePlugin} from "../../xeokit-sdk/dist/xeokit-sdk.es.js";

/** @private */
class NavCubeMode extends Controller {

    constructor(parent, cfg) {

        super(parent, cfg);

        if (!cfg.navCubeCanvasElement) {
            throw "Missing config: navCubeCanvasElement";
        }

        const navCubeCanvasElement = cfg.navCubeCanvasElement;

        this._navCube = new NavCubePlugin(this.viewer, {
            canvasElement: navCubeCanvasElement,
            fitVisible: true,
            color: "#CFCFCF"
        });

        this._navCube.setVisible(this._active);

        this.on("active", (active) => {
            this._navCube.setVisible(active);
        });
    }

    destroy() {
        this._navCube.destroy();
        super.destroy();
    }
}

export {NavCubeMode};