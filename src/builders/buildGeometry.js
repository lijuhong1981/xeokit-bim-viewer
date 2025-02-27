import { Component, Geometry, ReadableGeometry, VBOGeometry, buildBoxGeometry, buildBoxLinesGeometry, buildBoxLinesGeometryFromAABB, buildCylinderGeometry, buildGridGeometry, buildLineGeometry, buildPlaneGeometry, buildPolylineGeometry, buildPolylineGeometryFromCurve, buildSphereGeometry, buildTorusGeometry, buildVectorTextGeometry, math } from "../../xeokit-sdk/dist/xeokit-sdk.es.js";

/**
 * Create a geometry.
 * 
 * @param {Component} owner
 * @param {object} cfg
 * @param {string} cfg.type The type of geometry to create.
 * 
 * The available values are: 
 * * "box" - Create a box geometry. {@link buildBoxGeometry#cfg}
 * * "boxLines" - Create a box lines geometry. If the cfg.aabb is undefined {@link buildBoxLinesGeometry#cfg} else {@link buildBoxLinesGeometryFromAABB#cfg}
 * * "cylinder" - Create a cylinder geometry. {@link buildCylinderGeometry#cfg}
 * * "grid" - Create a grid geometry. {@link buildGridGeometry#cfg}
 * * "line" - Create a line geometry. {@link buildLineGeometry#cfg}
 * * "plane" - Create a plane geometry. {@link buildPlaneGeometry#cfg}
 * * "polyline" - Create a polyline geometry. If the cfg.curve is undefined {@link buildPolylineGeometry#cfg} else {@link buildPolylineGeometryFromCurve#cfg}
 * * "sphere" - Create a sphere geometry. {@link buildSphereGeometry#cfg}
 * * "torus" - Create a torus geometry. {@link buildTorusGeometry#cfg}
 * * "vectorText" - Create a vector text geometry. {@link buildVectorTextGeometry#cfg}
 * * "readable" - Create a Readable geometry. {@link ReadableGeometry#constructor#cfg}
 * * "vbo" - Create a VBO geometry. {@link VBOGeometry#constructor#cfg}
 * @returns {Geometry}
 * @author lijuhong 2025-2-18 创建该方法，用于构建几何体对象。
 */
function buildGeometry(owner, cfg = {}) {
    if (cfg instanceof Geometry)
        return cfg;
    if (!cfg.id) cfg.id = "Geometry#" + math.createUUID();
    switch (cfg.type) {
        case 'box':
            return new ReadableGeometry(owner, buildBoxGeometry(cfg));
        case 'boxLines':
            if (cfg.aabb)
                return new ReadableGeometry(owner, buildBoxLinesGeometryFromAABB(cfg));
            else
                return new ReadableGeometry(owner, buildBoxLinesGeometry(cfg));
        case 'cylinder':
            return new ReadableGeometry(owner, buildCylinderGeometry(cfg));
        case 'grid':
            return new ReadableGeometry(owner, buildGridGeometry(cfg));
        case 'line':
            return new ReadableGeometry(owner, buildLineGeometry(cfg));
        case 'plane':
            return new ReadableGeometry(owner, buildPlaneGeometry(cfg));
        case 'polyline':
            if (cfg.curve)
                return new ReadableGeometry(owner, buildPolylineGeometryFromCurve(cfg));
            else
                return new ReadableGeometry(owner, buildPolylineGeometry(cfg));
        case 'sphere':
            return new ReadableGeometry(owner, buildSphereGeometry(cfg));
        case 'torus':
            return new ReadableGeometry(owner, buildTorusGeometry(cfg));
        case 'vectorText':
            return new ReadableGeometry(owner, buildVectorTextGeometry(cfg));
        case 'vbo':
            return new VBOGeometry(owner, cfg);
        case 'readable':
        default:
            return new ReadableGeometry(owner, cfg);
    }
}

export { buildGeometry };