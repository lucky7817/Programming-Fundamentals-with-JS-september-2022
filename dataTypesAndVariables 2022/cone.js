function cone(coneRadius, coneHeight) {

    let areaOfConeBase = Math.PI * Math.pow(coneRadius, 2);
    let coneVolume = areaOfConeBase * coneHeight / 3;
    let baseSurface = Math.PI * Math.pow(coneRadius, 2);
    let formingCone = Math.sqrt(Math.pow(coneHeight, 2) + Math.pow(coneRadius, 2));
    let areaSurroundingSurface = Math.PI * coneRadius * formingCone;
    let totalSurfaceArea = baseSurface + areaSurroundingSurface;

    console.log(`volume = ${coneVolume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);  

}

cone(3, 5);