import { Component, Mesh, math } from "../../xeokit-sdk/dist/xeokit-sdk.es.js";
import { buildGeometry } from "./buildGeometry.js";
import { buildMaterial, buildEmphasisMaterial, buildEdgeMaterial } from "./buildMaterial.js";

/**
 * Create a mesh.
 * 
 * @param {Component} scene
 * @param {object} cfg {@link Mesh#constructor#cfg}
 * @returns {Mesh}
 * @author lijuhong 2025-2-19 创建该方法，用于构建Mesh对象。
 */
function buildMesh(scene, cfg = {}) {
    if (cfg instanceof Mesh)
        return cfg;
    if (!cfg.id) cfg.id = "Mesh#" + math.createUUID();
    cfg.geometry = buildGeometry(scene, cfg.geometry);
    cfg.material = buildMaterial(scene, cfg.material);
    if (cfg.xrayMaterial)
        cfg.xrayMaterial = buildEmphasisMaterial(scene, cfg.xrayMaterial);
    if (cfg.highlightMaterial)
        cfg.highlightMaterial = buildEmphasisMaterial(scene, cfg.highlightMaterial);
    if (cfg.selectedMaterial)
        cfg.selectedMaterial = buildEmphasisMaterial(scene, cfg.selectedMaterial);
    if (cfg.edgeMaterial)
        cfg.edgeMaterial = buildEdgeMaterial(scene, cfg.edgeMaterial);
    return new Mesh(scene, cfg);
}

export { buildMesh };