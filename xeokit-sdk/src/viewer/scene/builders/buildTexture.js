import { Component } from "../Component.js";
import { Texture } from "../materials/Texture.js";
import { math } from "../math/math.js";

/**
 * Creates a texture.
 * 
 * @param {Component} owner 
 * @param {object} cfg {@link Texture#constructor#cfg}
 * @returns {Texture}
 * @author lijuhong 2025-02-18 创建该方法，用于构建纹理对象。
 */
function buildTexture(owner, cfg = {}) {
    if (cfg instanceof Texture)
        return cfg;
    if (!cfg.id) cfg.id = "Texture#" + math.createUUID();
    return new Texture(owner, cfg);
}

export { buildTexture }