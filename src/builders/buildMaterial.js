import { Component, Material, EdgeMaterial, EmphasisMaterial, LambertMaterial, MetallicMaterial, PhongMaterial, SpecularMaterial, math } from "../../xeokit-sdk/dist/xeokit-sdk.es.js";
import { buildTexture } from "./buildTexture.js";

/**
 * Create an material.
 * 
 * @param {Component} owner
 * @param {object} cfg
 * @param {string} cfg.type The type of material to create.
 * 
 * The available values are: 
 * * "edge" - Create an edge material. {@link EdgeMaterial#constructor#cfg}
 * * "emphasis" - Create an emphasis material. {@link EmphasisMaterial#constructor#cfg}
 * * "lambert" - Create a lambert material. {@link LambertMaterial#constructor#cfg}
 * * "metallic" - Create a metallic material. {@link MetallicMaterial#constructor#cfg}
 * * "phong" - Create a phong material. {@link PhongMaterial#constructor#cfg}
 * * "specular" - Create a specular material. {@link SpecularMaterial#constructor#cfg}
 * @returns {Material}
 * @author lijuhong 2025-2-18 创建该方法，用于构建材质对象。
 */
function buildMaterial(owner, cfg = {}) {
    if (cfg instanceof Material)
        return cfg;
    if (!cfg.id) cfg.id = "Material#" + math.createUUID();
    if (cfg.diffuseMap) cfg.diffuseMap = buildTexture(owner, cfg.diffuseMap);
    if (cfg.specularMap) cfg.specularMap = buildTexture(owner, cfg.specularMap);
    if (cfg.emissiveMap) cfg.emissiveMap = buildTexture(owner, cfg.emissiveMap);
    if (cfg.alphaMap) cfg.alphaMap = buildTexture(owner, cfg.alphaMap);
    if (cfg.occlusionMap) cfg.occlusionMap = buildTexture(owner, cfg.occlusionMap);
    if (cfg.normalMap) cfg.normalMap = buildTexture(owner, cfg.normalMap);
    if (cfg.glossinessMap) cfg.glossinessMap = buildTexture(owner, cfg.glossinessMap);
    if (cfg.specularGlossinessMap) cfg.specularGlossinessMap = buildTexture(owner, cfg.specularGlossinessMap);
    if (cfg.baseColorMap) cfg.baseColorMap = buildTexture(owner, cfg.baseColorMap);
    if (cfg.metallicMap) cfg.metallicMap = buildTexture(owner, cfg.metallicMap);
    if (cfg.roughnessMap) cfg.roughnessMap = buildTexture(owner, cfg.roughnessMap);
    if (cfg.metallicRoughnessMap) cfg.metallicRoughnessMap = buildTexture(owner, cfg.metallicRoughnessMap);

    switch (cfg.type) {
        case 'edge':
            return new EdgeMaterial(owner, cfg);
        case 'emphasis':
            return new EmphasisMaterial(owner, cfg);
        case 'lambert':
            return new LambertMaterial(owner, cfg);
        case 'metallic':
            return new MetallicMaterial(owner, cfg);
        case 'specular':
            return new SpecularMaterial(owner, cfg);
        case 'phong':
        default:
            return new PhongMaterial(owner, cfg);
    }
}

/**
 * Create an emphasis material.
 * 
 * @param {Component} owner
 * @param {object} cfg {@link EmphasisMaterial#constructor#cfg}
 * @returns {EmphasisMaterial}
 * @author lijuhong 2025-2-19 创建该方法，用于构建EmphasisMaterial对象。
 */
function buildEmphasisMaterial(owner, cfg = {}) {
    if (cfg instanceof EmphasisMaterial)
        return cfg;
    cfg.type = 'emphasis';
    return buildMaterial(owner, cfg);
}

/**
 * Create an edge material.
 * 
 * @param {Component} owner
 * @param {object} cfg {@link EdgeMaterial#constructor#cfg}
 * @returns {EmphasisMaterial}
 * @author lijuhong 2025-2-19 创建该方法，用于构建EdgeMaterial对象。
 */
function buildEdgeMaterial(owner, cfg = {}) {
    if (cfg instanceof EdgeMaterial)
        return cfg;
    cfg.type = 'edge';
    return buildMaterial(owner, cfg);
}

export { buildMaterial, buildEmphasisMaterial, buildEdgeMaterial };