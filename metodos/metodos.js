
// 1) Implemente um método que crie um novo array baseado nos valores passados.
function metodo1(parametro1, parametro2) {
  var array = [];
  for (x = 0; x < parametro1; x++) {
    array.push(parametro2);
  }
  console.log(array);
}

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
function metodo2(parametro) {
  var array = parametro;
  var arraySaida = [];
  var tamanho = array.length;
  while (tamanho > 0) {
    tamanho--;
    arraySaida.push(array[tamanho]);
  }
  console.log(arraySaida);
}

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
function metodo3(parametro) {
  var array = parametro;
  var arraySaida = [];
  var tamanho = array.length;
  while (tamanho > 0) {
    tamanho--;
    if (array[tamanho] !== '' && array[tamanho] !== undefined && array[tamanho] !== null && array[tamanho] !== 0) {
      arraySaida.push(array[tamanho]);
    }
  }
  console.log(arraySaida);
}

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
function metodo4(parametro) {
  var array = parametro;
  var jsonObj = {};
  var x = 0;
  while (x < array.length) {
    var y = 0;
    while (y < 1) {
      var chave = array[x][y];
      y++;
      var valor = array[x][y];
      jsonObj[chave] = valor;
    }
    x++;
  }
  console.log(jsonObj);
}

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
function metodo5(parametro1, parametro2, parametro3) {
  var array = parametro1;
  var num1 = parametro2;
  var num2 = parametro3;
  for (x = 0; x < array.length; x++) {
    if (array[x] === num1 || array[x] === num2) {
      array.splice(x, 1);
    }
  }
  console.log(array)
}

// 6) Implemente um método que retorne um array, sem valores duplicados.
//Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
function metodo6(parametro) {
  var array = parametro;
  for (x = 0; x < array.length; x++) {
    for (y = 1; y < array.length; y++)
      if (array[x] === array[y]) {
        array.splice(y + 1, 1);
      }
  }
  console.log(array)
}

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
function metodo7(parametro1, parametro2) {
  var array1 = parametro1;
  var array2 = parametro2;
  if (array1.length !== array2.length) {
    console.log('Arrays com tamanhos diferentes.');
  }
  var x = 0;
  var iguais = 0;
  while (x < array1.length) {
    if (array1[x] === array2[x]) {
      iguais++;
    }
    x++;
  }
  if (x === iguais) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
function metodo8(parametro) {
  var array = parametro;
  var arraySaida = [];
  var pos = 0;
  for (x = 0; x < array.length; x++) {
    if (array[x].length === undefined) {
      arraySaida[pos] = array[x]
      pos++;
    }
  }
  for (x = 0; x < array.length; x++) {
    if (array[x].length !== undefined) {
      for (y = 0; y < array[x].length; y++) {
        arraySaida[pos] = array[x][y]
        pos++;
      }
    }
  }

  console.log(arraySaida)
}

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
function metodo9(parametro1, parametro2) {
  var array = parametro1;
  var num = parametro2;
  var a = new Array();
  for (x = 0; x < 1; x++) {
    a[x] = new Array(num);
    for (y = 0; y < array.length; y++) {
      a[x][y] = [array[y], array[y + 1]];
      y++;
    }
  }
  console.log(a)
}

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
function metodo10(parametro1, parametro2) {
  var array1 = parametro1;
  var array2 = parametro2;
  var array = [];
  var pos = 0;
  for (x = 0; x < array1.length; x++) {
    for (y = 0; y < array2.length; y++) {
      if (array1[x] === array2[x]) {
        array[pos] = array1[x]
        pos++
      }else{
        if (array1[x] === array2[y]) {
          array[pos] = array1[x]
          pos++
        }
      }
    }
  }
  console.log(array)
}


///////////////////////////////////////////////
metodo1(3, "a");
metodo2([1, 2, 3, 4]);
metodo3([1, 2, '', undefined]);
metodo4([["c", 2], ["d", 4]]);
metodo5([5, 4, 3, 2, 5], 5, 3);
metodo6([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);
metodo7([1, 2, 3, 4], [1, 2, 3, 4]);
metodo8([1, 2, [3], [4, 5]]);
metodo9([1, 2, 3, 4, 5], 2);
metodo10([6, 8], [8, 9]);