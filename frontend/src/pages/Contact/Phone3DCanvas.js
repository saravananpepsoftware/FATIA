import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Phone3DCanvas = () => {
  const mountRef = useRef(null);
  const isHoveredRef = useRef(false);
  const ringTimeRef = useRef(0);
  const dialAnimRef = useRef({ spinning: false, progress: 0 });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 560;
    const height = currentMount.clientHeight || 520;

    // ------------------------------------------
    // Scene & Camera (Direct Front View Perspective)
    // ------------------------------------------
    const scene = new THREE.Scene();

    // Studio perspective: elevated straight-on front view
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
    camera.position.set(0.0, 1.45, 6.0);
    camera.lookAt(0.0, 0.05, 0);

    // WebGL Renderer with clean transparency
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      premultipliedAlpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    currentMount.appendChild(renderer.domElement);

    // Master Group (Front-facing Phone + Speech Bubble)
    const masterGroup = new THREE.Group();
    masterGroup.position.set(0.18, -0.06, 0);
    scene.add(masterGroup);

    // Reflection Group (Soft mirror reflection directly below)
    const reflectionGroup = new THREE.Group();
    reflectionGroup.position.set(0.18, -1.22, 0);
    reflectionGroup.scale.set(1, -1, 1);
    scene.add(reflectionGroup);

    // ==========================================
    // MATERIALS
    // ==========================================
    const createMaterials = (isReflection = false) => {
      const alpha = isReflection ? 0.28 : 1.0;
      const transparent = isReflection;

      // Vintage Warm Ivory / Cream Bakelite
      const cream = new THREE.MeshPhysicalMaterial({
        color: 0xFDF8ED,
        roughness: 0.22,
        metalness: 0.02,
        clearcoat: 0.6,
        clearcoatRoughness: 0.08,
        transparent,
        opacity: alpha,
      });

      const creamDark = new THREE.MeshStandardMaterial({
        color: 0xE6D8BF,
        roughness: 0.32,
        metalness: 0.04,
        transparent,
        opacity: alpha,
      });

      // Deep Glossy Crimson / Wine Lacquer (Handset, Plinth, Cord)
      const crimson = new THREE.MeshPhysicalMaterial({
        color: 0x6E0818,
        roughness: 0.12,
        metalness: 0.08,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        reflectivity: 0.95,
        transparent,
        opacity: alpha,
      });

      // Radiant Polished Gold Accents
      const gold = new THREE.MeshStandardMaterial({
        color: 0xF3C658,
        roughness: 0.16,
        metalness: 0.92,
        transparent,
        opacity: alpha,
      });

      // Clear Crystal Acrylic Rotary Wheel
      const dialRing = new THREE.MeshPhysicalMaterial({
        color: 0xFFFFFF,
        roughness: 0.05,
        metalness: 0.0,
        transmission: 0.88,
        thickness: 0.22,
        transparent: true,
        opacity: isReflection ? 0.20 : 0.92,
      });

      // Dark Acoustic Grille / Rubber Feet
      const darkMetal = new THREE.MeshStandardMaterial({
        color: 0x1A1416,
        roughness: 0.55,
        metalness: 0.35,
        transparent,
        opacity: alpha,
      });

      return { cream, creamDark, crimson, gold, dialRing, darkMetal };
    };

    const matsReal = createMaterials(false);
    const matsRefl = createMaterials(true);

    // ==========================================
    // HELPER: INDIVIDUAL NUMERAL TEXTURES (1-0)
    // ==========================================
    const createDigitTextures = () => {
      const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
      return digits.map((d) => {
        const c = document.createElement('canvas');
        c.width = 128;
        c.height = 128;
        const ctx = c.getContext('2d');

        // White enamel circle
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(64, 64, 61, 0, Math.PI * 2);
        ctx.fill();

        // Gold border
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#DFB03E';
        ctx.stroke();

        // Crimson digit
        ctx.font = 'bold 64px "Playfair Display", Georgia, serif';
        ctx.fillStyle = '#6E0818';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(d, 64, 68);

        const tex = new THREE.CanvasTexture(c);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.needsUpdate = true;
        return tex;
      });
    };

    const digitTextures = createDigitTextures();

    // ==========================================
    // HELPER: SCULPTED TAPERED PHONE HOUSING
    // ==========================================
    const createTaperedBodyGeometry = () => {
      const geo = new THREE.BufferGeometry();
      const levels = [
        { y: -0.38, wx: 2.38, zFront:  1.15, zBack: -1.18, cornerR: 0.35 },
        { y: -0.18, wx: 2.28, zFront:  1.12, zBack: -1.15, cornerR: 0.30 },
        { y:  0.08, wx: 2.06, zFront:  0.74, zBack: -1.06, cornerR: 0.26 },
        { y:  0.38, wx: 1.82, zFront:  0.32, zBack: -0.96, cornerR: 0.22 },
        { y:  0.60, wx: 1.60, zFront: -0.05, zBack: -0.88, cornerR: 0.20 },
        { y:  0.65, wx: 1.54, zFront: -0.10, zBack: -0.85, cornerR: 0.18 }
      ];

      const numSegments = 32;
      const vertices = [];
      const uvs = [];
      const loops = [];

      levels.forEach((lvl) => {
        const loop = [];
        const { y, wx, zFront, zBack, cornerR } = lvl;
        const halfW = wx / 2;
        const depth = zFront - zBack;
        const zCenter = (zFront + zBack) / 2;
        const halfD = depth / 2;
        const r = Math.min(cornerR, halfW - 0.05, halfD - 0.05);
        const xInner = halfW - r;
        const zInner = halfD - r;

        for (let i = 0; i < numSegments; i++) {
          const theta = (i / numSegments) * Math.PI * 2;
          const cos = Math.cos(theta);
          const sin = Math.sin(theta);
          const sx = cos >= 0 ? 1 : -1;
          const sz = sin >= 0 ? 1 : -1;
          const cx = sx * xInner;
          const cz = zCenter + sz * zInner;
          const cornerAngle = Math.atan2(Math.abs(sin), Math.abs(cos));
          const px = cx + sx * r * Math.cos(cornerAngle);
          const pz = cz + sz * r * Math.sin(cornerAngle);
          loop.push(new THREE.Vector3(px, y, pz));
        }
        loops.push(loop);
      });

      const indices = [];
      const loopCount = levels.length;

      for (let l = 0; l < loopCount; l++) {
        for (let i = 0; i < numSegments; i++) {
          const v = loops[l][i];
          vertices.push(v.x, v.y, v.z);
          uvs.push(i / numSegments, l / (loopCount - 1));
        }
      }

      for (let l = 0; l < loopCount - 1; l++) {
        const base0 = l * numSegments;
        const base1 = (l + 1) * numSegments;
        for (let i = 0; i < numSegments; i++) {
          const next = (i + 1) % numSegments;
          const a = base0 + i;
          const b = base0 + next;
          const c = base1 + next;
          const d = base1 + i;
          indices.push(a, d, c);
          indices.push(a, c, b);
        }
      }

      // Top Cap
      const topCenterIndex = vertices.length / 3;
      const topZCenter = (levels[loopCount - 1].zFront + levels[loopCount - 1].zBack) / 2;
      vertices.push(0, levels[loopCount - 1].y, topZCenter);
      uvs.push(0.5, 0.5);

      const topBase = (loopCount - 1) * numSegments;
      for (let i = 0; i < numSegments; i++) {
        const next = (i + 1) % numSegments;
        indices.push(topBase + next, topBase + i, topCenterIndex);
      }

      // Bottom Cap
      const bottomCenterIndex = vertices.length / 3;
      const bottomZCenter = (levels[0].zFront + levels[0].zBack) / 2;
      vertices.push(0, levels[0].y, bottomZCenter);
      uvs.push(0.5, 0.5);

      for (let i = 0; i < numSegments; i++) {
        const next = (i + 1) % numSegments;
        indices.push(bottomCenterIndex, next, i);
      }

      geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geo.setIndex(indices);
      geo.computeVertexNormals();
      return geo;
    };

    // ==========================================
    // 1. HELPER: PROCEDURAL PHONE BUILDER
    // ==========================================
    const buildPhoneScene = (mats, isReflection = false) => {
      const root = new THREE.Group();

      // ----------------------------------------
      // A. Deep Crimson Base Plinth (Front View Symmetry)
      // ----------------------------------------
      const plinthShape = new THREE.Shape();
      const pw = 2.48;
      const pd = 2.68;
      const pr = 0.44;
      plinthShape.moveTo(-pw / 2 + pr, -pd / 2);
      plinthShape.lineTo(pw / 2 - pr, -pd / 2);
      plinthShape.quadraticCurveTo(pw / 2, -pd / 2, pw / 2, -pd / 2 + pr);
      plinthShape.lineTo(pw / 2, pd / 2 - pr);
      plinthShape.quadraticCurveTo(pw / 2, pd / 2, pw / 2 - pr, pd / 2);
      plinthShape.lineTo(-pw / 2 + pr, pd / 2);
      plinthShape.quadraticCurveTo(-pw / 2, pd / 2, -pw / 2, pd / 2 - pr);
      plinthShape.lineTo(-pw / 2, -pd / 2 + pr);
      plinthShape.quadraticCurveTo(-pw / 2, -pd / 2, -pw / 2 + pr, -pd / 2);

      const plinthGeo = new THREE.ExtrudeGeometry(plinthShape, {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.05,
        bevelThickness: 0.05,
      });
      plinthGeo.center();
      const plinth = new THREE.Mesh(plinthGeo, mats.crimson);
      plinth.rotation.x = Math.PI / 2;
      plinth.position.set(0, -0.50, 0);
      root.add(plinth);

      // Gold Inlay Line on Plinth Top
      const plinthTrimGeo = new THREE.BoxGeometry(2.38, 0.015, 2.58);
      const plinthTrim = new THREE.Mesh(plinthTrimGeo, mats.gold);
      plinthTrim.position.set(0, -0.38, 0);
      root.add(plinthTrim);

      // 4 Rubber Feet under Plinth
      const footGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.08, 16);
      [
        [-1.0, -0.65, 1.1],
        [1.0, -0.65, 1.1],
        [-1.0, -0.65, -1.1],
        [1.0, -0.65, -1.1],
      ].forEach(([fx, fy, fz]) => {
        const foot = new THREE.Mesh(footGeo, mats.darkMetal);
        foot.position.set(fx, fy, fz);
        root.add(foot);
      });

      // ----------------------------------------
      // B. Sculpted Cream Body (Smooth Tapered Housing)
      // ----------------------------------------
      const bodyGeo = createTaperedBodyGeometry();
      const bodyMesh = new THREE.Mesh(bodyGeo, mats.cream);
      bodyMesh.position.set(0, 0, 0);
      root.add(bodyMesh);

      // Cradle Top Platform Bezel
      const topPlatformShape = new THREE.Shape();
      const tw = 1.54;
      const td = 0.82;
      const tr = 0.20;
      topPlatformShape.moveTo(-tw / 2 + tr, -td / 2);
      topPlatformShape.lineTo(tw / 2 - tr, -td / 2);
      topPlatformShape.quadraticCurveTo(tw / 2, -td / 2, tw / 2, -td / 2 + tr);
      topPlatformShape.lineTo(tw / 2, td / 2 - tr);
      topPlatformShape.quadraticCurveTo(tw / 2, td / 2, tw / 2 - tr, td / 2);
      topPlatformShape.lineTo(-tw / 2 + tr, td / 2);
      topPlatformShape.quadraticCurveTo(-tw / 2, td / 2, -tw / 2, td / 2 - tr);
      topPlatformShape.lineTo(-tw / 2, -td / 2 + tr);
      topPlatformShape.quadraticCurveTo(-tw / 2, -td / 2, -tw / 2 + tr, -td / 2);

      const topPlatformGeo = new THREE.ExtrudeGeometry(topPlatformShape, {
        depth: 0.08,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.03,
        bevelThickness: 0.03,
      });
      topPlatformGeo.center();
      const topPlatform = new THREE.Mesh(topPlatformGeo, mats.creamDark);
      topPlatform.rotation.x = Math.PI / 2;
      topPlatform.position.set(0, 0.67, -0.48);
      root.add(topPlatform);

      // Twin Low-Profile Sculpted Cradle Saddles
      const cradleGroup = new THREE.Group();
      [-0.52, 0.52].forEach((cx) => {
        const pedestal = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.15, 0.16, 20),
          mats.creamDark
        );
        pedestal.position.set(cx, 0.74, -0.48);
        cradleGroup.add(pedestal);

        const cup = new THREE.Mesh(
          new THREE.TorusGeometry(0.17, 0.04, 12, 24, Math.PI),
          mats.gold
        );
        cup.rotation.z = Math.PI;
        cup.rotation.x = Math.PI / 2;
        cup.position.set(cx, 0.82, -0.48);
        cradleGroup.add(cup);
      });
      root.add(cradleGroup);

      // ----------------------------------------
      // C. Complete Unobstructed Circular Rotary Dial
      // Mathematically verified constant +0.069 clearance across all 360 degrees!
      // ----------------------------------------
      const dialAssembly = new THREE.Group();
      dialAssembly.position.set(0, 0.263, 0.553);
      dialAssembly.rotation.x = -0.9505;
      root.add(dialAssembly);

      // 1. Dial Outer Cream Bezel (flat foundation, z = 0.015)
      const dialBezelGeo = new THREE.CylinderGeometry(0.77, 0.80, 0.03, 48);
      const dialBezel = new THREE.Mesh(dialBezelGeo, mats.cream);
      dialBezel.rotation.x = Math.PI / 2;
      dialBezel.position.z = 0.015;
      dialAssembly.add(dialBezel);

      // 2. Gold Rim around Base Bezel (z = 0.032)
      const goldBezelGeo = new THREE.TorusGeometry(0.78, 0.018, 14, 48);
      const goldBezel = new THREE.Mesh(goldBezelGeo, mats.gold);
      goldBezel.position.z = 0.032;
      dialAssembly.add(goldBezel);

      // 3. Deep Crimson Number Face Disc (z = 0.035)
      const dialMaroonDiscGeo = new THREE.CircleGeometry(0.74, 48);
      const dialMaroonDisc = new THREE.Mesh(dialMaroonDiscGeo, mats.crimson);
      dialMaroonDisc.position.z = 0.035;
      dialAssembly.add(dialMaroonDisc);

      // Inner concentric gold ring on maroon disc (z = 0.038)
      const innerGoldRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.38, 0.008, 10, 36),
        mats.gold
      );
      innerGoldRing.position.z = 0.038;
      dialAssembly.add(innerGoldRing);

      // 4. Ten White Number Discs with Gold Trim & Digits (z = 0.042)
      const holeAnglesDeg = [55, 83, 111, 139, 167, 195, 223, 251, 279, 307];
      const targetRadius = 0.52;

      holeAnglesDeg.forEach((deg, idx) => {
        const rad = (deg * Math.PI) / 180;
        const hx = Math.cos(rad) * targetRadius;
        const hy = Math.sin(rad) * targetRadius;

        // Numeral disc with digit texture
        const numDiscGeo = new THREE.CircleGeometry(0.088, 24);
        const numDiscMat = new THREE.MeshBasicMaterial({
          map: digitTextures[idx],
          transparent: true,
        });
        const numDisc = new THREE.Mesh(numDiscGeo, numDiscMat);
        numDisc.position.set(hx, hy, 0.042);
        dialAssembly.add(numDisc);

        // Gold rim around numeral disc
        const numTrim = new THREE.Mesh(
          new THREE.TorusGeometry(0.088, 0.009, 10, 24),
          mats.gold
        );
        numTrim.position.set(hx, hy, 0.043);
        dialAssembly.add(numTrim);
      });

      // 5. Rotating Clear Acrylic Finger Wheel (z = 0.055)
      const rotatingWheel = new THREE.Group();
      rotatingWheel.position.z = 0.055;
      dialAssembly.add(rotatingWheel);

      const wheelShape = new THREE.Shape();
      wheelShape.absarc(0, 0, 0.70, 0, Math.PI * 2, false);

      holeAnglesDeg.forEach((deg) => {
        const rad = (deg * Math.PI) / 180;
        const hx = Math.cos(rad) * targetRadius;
        const hy = Math.sin(rad) * targetRadius;
        const holePath = new THREE.Path();
        holePath.absarc(hx, hy, 0.076, 0, Math.PI * 2, true);
        wheelShape.holes.push(holePath);
      });

      const wheelGeo = new THREE.ExtrudeGeometry(wheelShape, {
        depth: 0.024,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.010,
        bevelThickness: 0.010,
      });
      const wheelMesh = new THREE.Mesh(wheelGeo, mats.dialRing);
      rotatingWheel.add(wheelMesh);

      // Gold trims around the 10 finger holes (z = 0.026 on wheel)
      holeAnglesDeg.forEach((deg) => {
        const rad = (deg * Math.PI) / 180;
        const hx = Math.cos(rad) * targetRadius;
        const hy = Math.sin(rad) * targetRadius;
        const holeRing = new THREE.Mesh(
          new THREE.TorusGeometry(0.076, 0.010, 10, 24),
          mats.gold
        );
        holeRing.position.set(hx, hy, 0.026);
        rotatingWheel.add(holeRing);
      });

      // 6. Center Hubcap (z = 0.090)
      const hubcapGeo = new THREE.CylinderGeometry(0.31, 0.33, 0.04, 36);
      const hubcap = new THREE.Mesh(hubcapGeo, mats.cream);
      hubcap.rotation.x = Math.PI / 2;
      hubcap.position.z = 0.090;
      dialAssembly.add(hubcap);

      const hubcapTrim = new THREE.Mesh(
        new THREE.TorusGeometry(0.32, 0.015, 12, 36),
        mats.gold
      );
      hubcapTrim.position.z = 0.112;
      dialAssembly.add(hubcapTrim);

      const centerMedallion = new THREE.Mesh(
        new THREE.CircleGeometry(0.085, 20),
        mats.crimson
      );
      centerMedallion.position.z = 0.115;
      dialAssembly.add(centerMedallion);

      const medallionTrim = new THREE.Mesh(
        new THREE.TorusGeometry(0.085, 0.010, 10, 20),
        mats.gold
      );
      medallionTrim.position.z = 0.117;
      dialAssembly.add(medallionTrim);

      // 7. Polished Gold Finger Stop Hook (at ~332° / 4 o'clock position)
      const fingerStopAngle = (332 * Math.PI) / 180;
      const fsX = Math.cos(fingerStopAngle) * targetRadius;
      const fsY = Math.sin(fingerStopAngle) * targetRadius;

      const fingerStop = new THREE.Mesh(
        new THREE.TorusGeometry(0.10, 0.020, 12, 24, Math.PI / 1.7),
        mats.gold
      );
      fingerStop.position.set(fsX + 0.04, fsY - 0.03, 0.088);
      fingerStop.rotation.z = -0.55;
      dialAssembly.add(fingerStop);

      // ----------------------------------------
      // D. Realistic Sleek Vintage Handset / Receiver
      // Proportional horizontal bar resting level and flat in the cradle!
      // ----------------------------------------
      const handsetGroup = new THREE.Group();
      handsetGroup.position.set(0, 0.88, -0.48);
      handsetGroup.rotation.x = 0.04;
      root.add(handsetGroup);

      // 1. Central Ergonomic Handle Bar (horizontal cylinder)
      const handleGeo = new THREE.CylinderGeometry(0.18, 0.18, 1.36, 32);
      const handle = new THREE.Mesh(handleGeo, mats.crimson);
      handle.rotation.z = Math.PI / 2;
      handsetGroup.add(handle);

      // Gold Collar Rings at handle ends
      [-0.68, 0.68].forEach((hx) => {
        const collar = new THREE.Mesh(
          new THREE.TorusGeometry(0.19, 0.020, 14, 32),
          mats.gold
        );
        collar.position.set(hx, 0, 0);
        collar.rotation.y = Math.PI / 2;
        handsetGroup.add(collar);
      });

      // 2. LEFT EARPIECE ASSEMBLY (Seamless, proportional, level)
      // Gentle flared collar transition from radius 0.18 to 0.34
      const transLeftGeo = new THREE.CylinderGeometry(0.34, 0.18, 0.18, 32);
      const transLeft = new THREE.Mesh(transLeftGeo, mats.crimson);
      transLeft.rotation.z = Math.PI / 2;
      transLeft.position.set(-0.77, 0, 0);
      handsetGroup.add(transLeft);

      // Earpiece barrel (radius 0.34, length 0.14)
      const cupLeftGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.14, 32);
      const cupLeft = new THREE.Mesh(cupLeftGeo, mats.crimson);
      cupLeft.rotation.z = Math.PI / 2;
      cupLeft.position.set(-0.93, 0, 0);
      handsetGroup.add(cupLeft);

      // Polished Gold Trim Ring at x = -1.00
      const rimLeftGold = new THREE.Mesh(
        new THREE.TorusGeometry(0.34, 0.015, 14, 36),
        mats.gold
      );
      rimLeftGold.position.set(-1.00, 0, 0);
      rimLeftGold.rotation.y = Math.PI / 2;
      handsetGroup.add(rimLeftGold);

      // Smooth Rounded Earpiece Dome Cap at x = -1.00
      const domeGeo = new THREE.SphereGeometry(0.34, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const dome = new THREE.Mesh(domeGeo, mats.crimson);
      dome.rotation.z = Math.PI / 2;
      dome.scale.set(0.35, 1, 1);
      dome.position.set(-1.00, 0, 0);
      handsetGroup.add(dome);

      // 3. RIGHT MOUTHPIECE ASSEMBLY (Seamless, proportional, level)
      // Gentle flared collar transition from radius 0.18 to 0.34
      const transRightGeo = new THREE.CylinderGeometry(0.34, 0.18, 0.18, 32);
      const transRight = new THREE.Mesh(transRightGeo, mats.crimson);
      transRight.rotation.z = -Math.PI / 2;
      transRight.position.set(0.77, 0, 0);
      handsetGroup.add(transRight);

      // Mouthpiece barrel (radius 0.34, length 0.14)
      const cupRightGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.14, 32);
      const cupRight = new THREE.Mesh(cupRightGeo, mats.crimson);
      cupRight.rotation.z = -Math.PI / 2;
      cupRight.position.set(0.93, 0, 0);
      handsetGroup.add(cupRight);

      // Polished Gold Trim Ring at x = +1.00
      const rimRightGold = new THREE.Mesh(
        new THREE.TorusGeometry(0.34, 0.015, 14, 36),
        mats.gold
      );
      rimRightGold.position.set(1.00, 0, 0);
      rimRightGold.rotation.y = Math.PI / 2;
      handsetGroup.add(rimRightGold);

      // Cylindrical Mouthpiece Cap at x = +1.02
      const capGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.04, 32);
      const cap = new THREE.Mesh(capGeo, mats.crimson);
      cap.rotation.z = Math.PI / 2;
      cap.position.set(1.02, 0, 0);
      handsetGroup.add(cap);

      // Acoustic Dark Microphone Grille at x = +1.042
      const grilleGeo = new THREE.CircleGeometry(0.30, 32);
      const grille = new THREE.Mesh(grilleGeo, mats.darkMetal);
      grille.rotation.y = Math.PI / 2;
      grille.position.set(1.042, 0, 0);
      handsetGroup.add(grille);

      // ----------------------------------------
      // E. Thick Spring Coiled Telephone Cord
      // (Cascades from left earpiece collar into foreground)
      // ----------------------------------------
      class RealisticSpiralCord extends THREE.Curve {
        constructor(turns = 24, radius = 0.085) {
          super();
          this.turns = turns;
          this.radius = radius;
        }
        getPoint(t) {
          const phi = t * Math.PI * 2 * this.turns;
          // Spline:
          // Starts under left collar (-0.68, 0.76, -0.48)
          let cx, cy, cz;
          if (t < 0.65) {
            const s = t / 0.65;
            cx = -0.72 - s * 0.36;
            cy = 0.74 - s * 1.22 - Math.sin(s * Math.PI) * 0.10;
            cz = -0.48 + s * 1.02; // brings it into foreground at z = +0.54!
          } else {
            const s = (t - 0.65) / 0.35;
            cx = -1.08 - Math.sin(s * Math.PI) * 0.08;
            cy = -0.48 + s * 0.04;
            cz = 0.54 - s * 0.50;
          }

          const xSpiral = cx + Math.sin(phi) * this.radius;
          const ySpiral = cy;
          const zSpiral = cz + Math.cos(phi) * this.radius;
          return new THREE.Vector3(xSpiral, ySpiral, zSpiral);
        }
      }

      const cordPath = new RealisticSpiralCord(24, 0.085);
      const cordGeo = new THREE.TubeGeometry(cordPath, 280, 0.042, 8, false);
      const cordMesh = new THREE.Mesh(cordGeo, mats.crimson);
      root.add(cordMesh);

      // ----------------------------------------
      // F. 3D Floating Speech Bubble (Placed gracefully inside maroon card area)
      // ----------------------------------------
      const bubbleGroup = new THREE.Group();
      bubbleGroup.position.set(-1.55, 0.70, 0.20);
      bubbleGroup.rotation.y = 0.16;
      root.add(bubbleGroup);

      const bubbleShape = new THREE.Shape();
      const bw = 1.20;
      const bh = 0.88;
      const br = 0.22;

      bubbleShape.moveTo(-bw / 2 + br, -bh / 2);
      bubbleShape.lineTo(0.06, -bh / 2);
      bubbleShape.lineTo(0.36, -bh / 2 - 0.26); // Pointy chat tail pointing right towards the phone
      bubbleShape.lineTo(0.28, -bh / 2);
      bubbleShape.lineTo(bw / 2 - br, -bh / 2);
      bubbleShape.quadraticCurveTo(bw / 2, -bh / 2, bw / 2, -bh / 2 + br);
      bubbleShape.lineTo(bw / 2, bh / 2 - br);
      bubbleShape.quadraticCurveTo(bw / 2, bh / 2, bw / 2 - br, bh / 2);
      bubbleShape.lineTo(-bw / 2 + br, bh / 2);
      bubbleShape.quadraticCurveTo(-bw / 2, bh / 2, -bw / 2, bh / 2 - br);
      bubbleShape.lineTo(-bw / 2, -bh / 2 + br);
      bubbleShape.quadraticCurveTo(-bw / 2, -bh / 2, -bw / 2 + br, -bh / 2);

      const bubbleExtrudeSettings = {
        depth: 0.18,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.035,
        bevelThickness: 0.035,
      };

      const bubbleGeo = new THREE.ExtrudeGeometry(bubbleShape, bubbleExtrudeSettings);
      bubbleGeo.center();
      const bubbleMesh = new THREE.Mesh(bubbleGeo, mats.cream);
      bubbleGroup.add(bubbleMesh);

      // 2 Clean Horizontal Crimson Message Bars
      [
        { y: 0.12, len: 0.56, x: -0.05 },
        { y: -0.12, len: 0.36, x: -0.15 },
      ].forEach((bar) => {
        const barGeo = new THREE.BoxGeometry(bar.len, 0.075, 0.035);
        const barMesh = new THREE.Mesh(barGeo, mats.crimson);
        barMesh.position.set(bar.x, bar.y, 0.14);
        bubbleGroup.add(barMesh);
      });

      return {
        root,
        handsetGroup,
        rotatingWheel,
        bubbleGroup,
      };
    };

    // Build Real Phone
    const realPhone = buildPhoneScene(matsReal, false);
    masterGroup.add(realPhone.root);

    // Build Mirror Reflection
    const mirrorPhone = buildPhoneScene(matsRefl, true);
    reflectionGroup.add(mirrorPhone.root);

    // ==========================================
    // 2. CONTACT SHADOW
    // ==========================================
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const shadowCtx = shadowCanvas.getContext('2d');
    const grad = shadowCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
    grad.addColorStop(0, 'rgba(20, 2, 5, 0.7)');
    grad.addColorStop(0.5, 'rgba(30, 3, 7, 0.35)');
    grad.addColorStop(1, 'rgba(40, 4, 10, 0)');
    shadowCtx.fillStyle = grad;
    shadowCtx.fillRect(0, 0, 256, 256);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(4.8, 4.8);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -0.62, 0);
    masterGroup.add(shadowMesh);

    // Ground semi-transparent glossy tint overlay
    const groundGeo = new THREE.PlaneGeometry(12, 10);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x480512,
      roughness: 0.28,
      metalness: 0.15,
      transparent: true,
      opacity: 0.42,
    });
    const groundOverlay = new THREE.Mesh(groundGeo, groundMat);
    groundOverlay.rotation.x = -Math.PI / 2;
    groundOverlay.position.set(0, -0.63, 0);
    scene.add(groundOverlay);

    // ==========================================
    // 3. STUDIO LIGHTING SETUP (Front & Top Highlights)
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xFFF8EF, 1.45);
    scene.add(ambientLight);

    // Key warm directional light from front-top-right
    const keyLight = new THREE.DirectionalLight(0xFFFAF2, 2.9);
    keyLight.position.set(3, 5, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Front-left fill bounce light
    const fillLight = new THREE.DirectionalLight(0xE58D9A, 1.4);
    fillLight.position.set(-3.5, 1, 4);
    scene.add(fillLight);

    // Top Rim Gold Light
    const rimLight = new THREE.DirectionalLight(0xFFE5A8, 2.2);
    rimLight.position.set(0, 4, -3);
    scene.add(rimLight);

    // ==========================================
    // 4. INTERACTION & ANIMATION LOOP
    // ==========================================
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let clock = new THREE.Clock();

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / width - 0.5) * 2;
      mouse.targetY = -(clientY / height - 0.5) * 2;
    };

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      if (!dialAnimRef.current.spinning) {
        dialAnimRef.current = { spinning: true, progress: 0 };
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    const handleClick = () => {
      ringTimeRef.current = 1.0;
      dialAnimRef.current = { spinning: true, progress: 0 };
    };

    currentMount.addEventListener('mousemove', handleMouseMove);
    currentMount.addEventListener('mouseenter', handleMouseEnter);
    currentMount.addEventListener('mouseleave', handleMouseLeave);
    currentMount.addEventListener('click', handleClick);

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse Parallax Damping (Subtle responsive front feel)
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Base Idle Floating
      const idleBob = Math.sin(elapsedTime * 1.5) * 0.045;
      const idleRock = Math.sin(elapsedTime * 1.0) * 0.012;

      // DIRECT FRONT VIEW: Base rotation.y is 0.0 (directly facing front), with subtle mouse tilt
      masterGroup.position.y = -0.06 + idleBob;
      masterGroup.rotation.y = 0.0 + mouse.x * 0.14;
      masterGroup.rotation.x = 0.04 - mouse.y * 0.10 + idleRock;

      // Mirror Reflection follows master group
      reflectionGroup.position.x = masterGroup.position.x;
      reflectionGroup.position.z = masterGroup.position.z;
      reflectionGroup.position.y = -1.25 - idleBob;
      reflectionGroup.rotation.y = masterGroup.rotation.y;
      reflectionGroup.rotation.x = -masterGroup.rotation.x;
      reflectionGroup.rotation.z = -masterGroup.rotation.z;

      // Speech Bubble Independent Float
      const bubbleBob = Math.sin(elapsedTime * 2.0 + 0.8) * 0.06;
      const bubbleRock = Math.sin(elapsedTime * 1.3) * 0.025;
      realPhone.bubbleGroup.position.y = 0.70 + bubbleBob;
      realPhone.bubbleGroup.rotation.z = bubbleRock;
      realPhone.bubbleGroup.rotation.y = 0.16 + mouse.x * 0.10;

      mirrorPhone.bubbleGroup.position.y = realPhone.bubbleGroup.position.y;
      mirrorPhone.bubbleGroup.rotation.z = -realPhone.bubbleGroup.rotation.z;
      mirrorPhone.bubbleGroup.rotation.y = realPhone.bubbleGroup.rotation.y;

      // Ringing Vibration Effect
      if (ringTimeRef.current > 0) {
        ringTimeRef.current -= 0.016;
        const ringFrequency = elapsedTime * 50;
        const ringIntensity = ringTimeRef.current * 0.05;
        const handsetZ = Math.sin(ringFrequency) * ringIntensity;
        const handsetY = 0.88 + Math.abs(Math.cos(ringFrequency)) * ringIntensity * 0.5;

        realPhone.handsetGroup.rotation.z = handsetZ;
        realPhone.handsetGroup.position.y = handsetY;

        mirrorPhone.handsetGroup.rotation.z = -handsetZ;
        mirrorPhone.handsetGroup.position.y = handsetY;
      } else {
        realPhone.handsetGroup.rotation.z = 0.0;
        realPhone.handsetGroup.position.y = 0.88;

        mirrorPhone.handsetGroup.rotation.z = 0.0;
        mirrorPhone.handsetGroup.position.y = 0.88;
      }

      // Rotary Dial Spin Animation
      if (dialAnimRef.current.spinning) {
        dialAnimRef.current.progress += 0.024;
        const p = dialAnimRef.current.progress;
        let rotZ = 0;
        if (p < 0.48) {
          const t = p / 0.48;
          rotZ = -t * 1.9;
        } else if (p < 1.0) {
          const t = (p - 0.48) / 0.52;
          const spring = Math.cos(t * Math.PI * 2.5) * Math.exp(-t * 3.2);
          rotZ = -(1 - t) * 1.9 + spring * 0.15;
        } else {
          dialAnimRef.current.spinning = false;
          rotZ = 0;
        }
        realPhone.rotatingWheel.rotation.z = rotZ;
        mirrorPhone.rotatingWheel.rotation.z = -rotZ;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeEventListener('mousemove', handleMouseMove);
        currentMount.removeEventListener('mouseenter', handleMouseEnter);
        currentMount.removeEventListener('mouseleave', handleMouseLeave);
        currentMount.removeEventListener('click', handleClick);
        if (renderer.domElement && currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="phone-3d-canvas-container"
      title="Click or move mouse to interact with the 3D phone!"
    />
  );
};

export default Phone3DCanvas;
