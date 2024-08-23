(() => {
  const matrix3x3x3 = [];
  const n = 3
  // Linha  
  for (let i = 0; i < n; i++) {
    matrix3x3x3[i] = [];
    // Coluna
    for (let j = 0; j < n; j++) {
      matrix3x3x3[i][j] = [];
      // Profundidade
      for (let z = 0; z < n; z++) {
        matrix3x3x3[i][j][z] = i + j + z;
      }
    }
  }
  console.table(matrix3x3x3);
  for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
      for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
        console.table(matrix3x3x3[i][j][z]);
      }
    }
  }
})()