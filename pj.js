// Force Électrostatique
document.getElementById('coulombForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const k = 8.99e9; // Constante de Coulomb (N·m²/C²)
    const q1 = parseFloat(document.getElementById('charge1').value);
    const q2 = parseFloat(document.getElementById('charge2').value);
    const r = parseFloat(document.getElementById('distance').value);

    if (r <= 0 || isNaN(q1) || isNaN(q2) || isNaN(r)) {
        alert("Veuillez entrer des valeurs valides. La distance doit être supérieure à zéro.");
        return;
    }

    const force = (k * Math.abs(q1) * Math.abs(q2)) / Math.pow(r, 2);
    document.getElementById('coulombResult').textContent = force.toExponential(3) + " N";
});

// Force Magnétique
document.getElementById('magneticForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const q = parseFloat(document.getElementById('chargeMag').value);
    const v = parseFloat(document.getElementById('velocityMag').value);
    const B = parseFloat(document.getElementById('fieldMag').value);

    if (isNaN(q) || isNaN(v) || isNaN(B) || q === 0 || v === 0 || B === 0) {
        alert("Veuillez entrer des valeurs valides. Aucun des paramètres ne doit être nul.");
        return;
    }

    const forceMag = Math.abs(q * v * B);
    document.getElementById('magneticResult').textContent = forceMag.toExponential(3) + " N";
});

// Énergie Cinétique
document.getElementById('kineticForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const m = parseFloat(document.getElementById('mass').value);
    const v = parseFloat(document.getElementById('velocity').value);

    if (isNaN(m) || isNaN(v) || m <= 0 || v <= 0) {
        alert("La masse et la vitesse doivent être des valeurs valides et supérieures à zéro.");
        return;
    }

    const Ek = 0.5 * m * Math.pow(v, 2);
    document.getElementById('kineticResult').textContent = Ek.toFixed(2) + " J";
});

// Transition Quantique
document.getElementById('quantumForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);

    if (isNaN(n1) || isNaN(n2) || n1 <= 0 || n2 <= 0) {
        alert("Les niveaux quantiques doivent être des entiers positifs.");
        return;
    }

    if (n1 === n2) {
        alert("Les niveaux quantiques doivent être différents pour une transition.");
        return;
    }

    const h = 6.626e-34; // Constante de Planck (J·s)
    const c = 3e8;       // Vitesse de la lumière (m/s)
    const eV_to_J = 1.602e-19; // Conversion 1 eV -> Joules

    const energy1 = -13.6 / Math.pow(n1, 2); // Énergie initiale (eV)
    const energy2 = -13.6 / Math.pow(n2, 2); // Énergie finale (eV)
    const deltaE = Math.abs(energy1 - energy2); // Variation d'énergie (eV)
    const deltaE_J = deltaE * eV_to_J; // Conversion en Joules

    const wavelength_m = (h * c) / deltaE_J; // Longueur d'onde en mètres
    const wavelength_nm = wavelength_m * 1e9; // Conversion en nanomètres

    document.getElementById('energy1').textContent = energy1.toFixed(2) + " eV";
    document.getElementById('energy2').textContent = energy2.toFixed(2) + " eV";
    document.getElementById('deltaE').textContent = deltaE.toFixed(2) + " eV";
    document.getElementById('wavelength').textContent = wavelength_nm.toFixed(2) + " nm";
});

// Plasma
document.getElementById('plasmaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const density = parseFloat(document.getElementById('density').value);
    const relaxationTime = parseFloat(document.getElementById('relaxationTime').value);

    if (isNaN(density) || isNaN(relaxationTime) || density <= 0 || relaxationTime <= 0) {
        alert("Veuillez entrer des valeurs valides pour la densité et le temps de relaxation.");
        return;
    }

    const e = 1.602e-19; // Charge de l'électron (C)
    const epsilon0 = 8.854e-12; // Permittivité du vide (F/m)
    const me = 9.109e-31; // Masse de l'électron (kg)

    const plasmaFrequency = Math.sqrt((density * e ** 2) / (epsilon0 * me));
    const conductivity = (density * e ** 2 * relaxationTime) / me;

    const plasmaFrequencyHz = plasmaFrequency / (2 * Math.PI);

    document.getElementById('plasmaFrequency').textContent = plasmaFrequencyHz.toExponential(3) + " Hz";
    document.getElementById('conductivity').textContent = conductivity.toExponential(3) + " S/m";
});

// Loi d'Ohm
document.getElementById('electroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const U = parseFloat(document.getElementById('voltage').value);
    const R = parseFloat(document.getElementById('resistance').value);

    if (isNaN(U) || isNaN(R) || R <= 0) {
        alert("Veuillez entrer des valeurs valides. La résistance doit être positive.");
        return;
    }

    const I = U / R; // Intensité (A)
    const P = U * I; // Puissance (W)

    document.getElementById('current').textContent = I.toFixed(2) + " A";
    document.getElementById('power').textContent = P.toFixed(2) + " W";
});
