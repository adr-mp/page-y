
        document.getElementById('coulombForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const k = 8.987e9; // Constante de Coulomb
            const q1 = parseFloat(document.getElementById('charge1').value);
            const q2 = parseFloat(document.getElementById('charge2').value);
            const r = parseFloat(document.getElementById('distance').value);

            if (r <= 0) {
                alert("La distance doit être supérieure à zéro.");
                return;
            }

            const F = k * Math.abs(q1 * q2) / Math.pow(r, 2);
            document.getElementById('result').textContent = F.toFixed(2);
        });
 document.getElementById('kineticForm').addEventListener('submit', function(event) {
     event.preventDefault();
     const m = parseFloat(document.getElementById('mass').value);
     const v = parseFloat(document.getElementById('velocity').value);

     if (m <= 0 || v <= 0) {
         alert("La masse et la vitesse doivent être supérieures à zéro.");
         return;
     }

     const Ek = 0.5 * m * Math.pow(v, 2);
     document.getElementById('kineticResult').textContent = Ek.toFixed(2);
 });
document.getElementById('quantumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);

    if (n1 <= 0 || n2 <= 0) {
        alert("Les niveaux quantiques doivent être des entiers positifs.");
        return;
    }

    if (n1 === n2) {
        alert("Les niveaux quantiques doivent être différents pour une transition.");
        return;
    }

    // Constantes
    const h = 6.626e-34; // Constante de Planck (J.s)
    const c = 3e8;       // Vitesse de la lumière (m/s)
    const eV_to_J = 1.602e-19; // Conversion 1 eV -> Joules

    // Calculs
    const energy1 = -13.6 / Math.pow(n1, 2); // Énergie initiale (eV)
    const energy2 = -13.6 / Math.pow(n2, 2); // Énergie finale (eV)
    const deltaE = Math.abs(energy1 - energy2); // Variation d'énergie (eV)

    // Conversion de \Delta E en Joules
    const deltaE_J = deltaE * eV_to_J;

    // Calcul de la longueur d'onde (m)
    const wavelength_m = (h * c) / deltaE_J;

    // Conversion de la longueur d'onde en nanomètres (nm)
    const wavelength_nm = wavelength_m * 1e9;

    // Affichage des résultats
    document.getElementById('energy1').textContent = energy1.toFixed(2);
    document.getElementById('energy2').textContent = energy2.toFixed(2);
    document.getElementById('deltaE').textContent = deltaE.toFixed(2);
    document.getElementById('wavelength').textContent = wavelength_nm.toFixed(2);
});
document.getElementById('plasmaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupérer la densité d'électrons et le temps de relaxation
    const density = parseFloat(document.getElementById('density').value);
    const relaxationTime = parseFloat(document.getElementById('relaxationTime').value);
    
    // Vérification de la validité des valeurs
    if (isNaN(density) || density <= 0 || isNaN(relaxationTime) || relaxationTime <= 0) {
        alert("Veuillez entrer des valeurs valides.");
        return;
    }

    // Constantes
    const e = 1.602e-19; // Charge de l'électron en C
    const epsilon0 = 8.854e-12; // Permittivité du vide en F/m
    const me = 9.109e-31; // Masse de l'électron en kg

    // Calcul de la fréquence de plasma (en rad/s)
    const plasmaFrequency = Math.sqrt((density * e ** 2) / (epsilon0 * me));

    // Calcul de la conductivité (en S/m)
    const conductivity = (density * e ** 2 * relaxationTime) / me;

    // Conversion de la fréquence de plasma en Hz (en divisant par 2π)
    const plasmaFrequencyHz = plasmaFrequency / (2 * Math.PI);

    // Affichage des résultats
    document.getElementById('plasmaFrequency').textContent = plasmaFrequencyHz.toExponential(3) + " Hz";
    document.getElementById('conductivity').textContent = conductivity.toExponential(3) + " S/m";
});
document.getElementById('electroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const U = parseFloat(document.getElementById('voltage').value);
    const R = parseFloat(document.getElementById('resistance').value);

    if (R <= 0) {
        alert("La résistance doit être positive.");
        return;
    }

    const I = U / R; // Intensité
    const P = U * I; // Puissance

    document.getElementById('current').textContent = I.toFixed(2);
    document.getElementById('power').textContent = P.toFixed(2);
});