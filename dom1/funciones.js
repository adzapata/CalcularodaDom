
var tabla = document.createElement("table");

var tr = document.createElement("tr");
var td = document.createElement("td");

tabla.id = "tablaPrincipal";

document.body.appendChild(tabla);

//document.getElementById("tablaPrincipal").style.border = '1px solid red';


var input = document.createElement('input');
input.type = "text";
input.id = "resultado";
input.value = "0";
input.id = "resultado"
td.appendChild(input);
tabla.appendChild(tr);
tr.appendChild(td);

/*var trm = document.createElement("tr");
var tdm = document.createElement("td");
var inputmemory = document.createElement('input');
inputmemory.text = "hidden";
inputmemory.id = "memoria";
inputmemory.value = "0";
tdm.appendChild(inputmemory);
tabla.appendChild(trm);
trm.appendChild(tdm);*/

var td1 = document.createElement("td");
var tr1 = document.createElement("tr");
var input = document.createElement('input');
input.type = "button";
input.value = "1";
/*input.onclick = `
var ent1 = document.getElementById('resultado').value; 
                if(ent1 == '0') { document.getElementById('resultado').value=1}else{ var ent2 = '1'
                var res = ent1.concat(ent2); 
                document.getElementById('resultado').value=res;}
`;*/
input.onclick = onclick2();
function onclick2() {
    var ent1 = document.getElementById('resultado').value; 
                if(ent1 == '0') { document.getElementById('resultado').value=1}else{ var ent2 = '1'
                var res = ent1.concat(ent2); 
                document.getElementById('resultado').value=res; return res;}
}
tabla.appendChild(tr1);
tr1.appendChild(td1);
td1.appendChild(input);

var td2 = document.createElement("td");
tr1.appendChild(td2);
var input2 = document.createElement('input');
input2.type = "button";
input2.value = "2";
input.onclick = onclick3();
function onclick3() {
    var ent1 = document.getElementById('resultado').value; 
                if(ent1 == '0') { document.getElementById('resultado').value=2}else{ var ent2 = '2'
                var res = ent1.concat(ent2); 
                document.getElementById('resultado').value=res;}
}
td2.appendChild(input2);

var td3 = document.createElement("td");
tr1.appendChild(td3);
var input3 = document.createElement('input');
input3.type = "button";
input3.value = "3";
input.onclick = onclick4();
function onclick4() {
    var ent1 = document.getElementById('resultado').value; 
                if(ent1 == '0') { document.getElementById('resultado').value=3}else{ var ent2 = '3'
                var res = ent1.concat(ent2); 
                document.getElementById('resultado').value=res;}
}
td3.appendChild(input3);


var tdmas = document.createElement("td");
tr1.appendChild(tdmas);
var inputmas = document.createElement('input');
inputmas.type = "button";
inputmas.value = "+";
input.onclick = onclick5('sumar');
function onclick5(sumar) {
    if(!sumar){
        return false;
    }
    
}
tdmas.appendChild(inputmas);


var tr2 = document.createElement("tr");
var td4 = document.createElement("td");
tabla.appendChild(tr2);
tr2.appendChild(td4);
var input4 = document.createElement('input');
input4.type = "button";
input4.value = "4";
input.onclick = onclick6();
function onclick6() {
    var ent1 = document.getElementById('resultado').value; 
                if(ent1 == '0') { document.getElementById('resultado').value=4}else{ var ent2 = '4'
                var res = ent1.concat(ent2); 
                document.getElementById('resultado').value=res;}
}
td4.appendChild(input4);

var td5 = document.createElement("td");
tr2.appendChild(td5);
var input5 = document.createElement('input');
input5.type = "button";
input5.value = "5";
input.onclick = onclick7();
function onclick7() {
    var ent1 = document.getElementById('resultado').value; 
                if(ent1 == '0') { document.getElementById('resultado').value=5}else{ var ent2 = '5'
                var res = ent1.concat(ent2); 
                document.getElementById('resultado').value=res;}
}
td5.appendChild(input5);

var td6 = document.createElement("td");
tr2.appendChild(td6);
var input6 = document.createElement('input');
input6.type = "button";
input6.value = "6";
input.onclick = onclick8();
function onclick8() {
    var ent1 = document.getElementById('resultado').value; 
                if(ent1 == '0') { document.getElementById('resultado').value=6}else{ var ent2 = '6'
                var res = ent1.concat(ent2); 
                document.getElementById('resultado').value=res;}
}
td6.appendChild(input6);

var tdmenos = document.createElement("td");
tr2.appendChild(tdmenos);
var inputmenos = document.createElement('input');
inputmenos.type = "button";
inputmenos.value = "-";
input.onclick = onclick9('restar');
function onclick9(restar) {
    if(!restar){
        return false;
    }
    
}
tdmenos.appendChild(inputmenos);



var tr3 = document.createElement("tr");
var td7 = document.createElement("td");
tabla.appendChild(tr3);
tr3.appendChild(td7);
var input7 = document.createElement('input');
input7.type = "button";
input7.value = "7";
input.onclick = onclick10();
function onclick10() {
    var ent1 = document.getElementById('resultado').value; 
                if(ent1 == '0') { document.getElementById('resultado').value=7}else{ var ent2 = '7'
                var res = ent1.concat(ent2); 
                document.getElementById('resultado').value=res;}
}
td7.appendChild(input7);

var td8 = document.createElement("td");
tr3.appendChild(td8);
var input8 = document.createElement('input');
input8.type = "button";
input8.value = "8";

td8.appendChild(input8);

var td9 = document.createElement("td");
tr3.appendChild(td9);
var input9 = document.createElement('input');
input9.type = "button";
input9.value = "9";
td9.appendChild(input9);

var tdx = document.createElement("td");
tr3.appendChild(tdx);
var inputx = document.createElement('input');
inputx.type = "button";
inputx.value = "*";
tdx.appendChild(inputx);



var tr4 = document.createElement("tr");
var td0 = document.createElement("td");
tabla.appendChild(tr4);
tr4.appendChild(td0);
var input0 = document.createElement('input');
input0.type = "button";
input0.value = "0";
td0.appendChild(input0);

var tdpunto = document.createElement("td");
tr4.appendChild(tdpunto);
var inputpunto = document.createElement('input');
inputpunto.type = "button";
inputpunto.value = ".";
tdpunto.appendChild(inputpunto);

var tddiv = document.createElement("td");
tr4.appendChild(tddiv);
var inputdiv = document.createElement('input');
inputdiv.type = "button";
inputdiv.value = "/";
tddiv.appendChild(inputdiv);



var tr5 = document.createElement("tr");
var tddel = document.createElement("td");
tabla.appendChild(tr5);
tr5.appendChild(tddel);
var inputdel = document.createElement('input');
inputdel.type = "button";
inputdel.value = "Del";
tddel.appendChild(inputdel);

var tdc = document.createElement("td");
tr5.appendChild(tdc);
var inputc = document.createElement('input');
inputc.type = "button";
inputc.value = "C";
tdc.appendChild(inputc);

var tdigual = document.createElement("td");
tr5.appendChild(tdigual);
var inputigual = document.createElement('input');
inputigual.type = "button";
inputigual.value = "=";
tdigual.appendChild(inputigual);



function operacion(op) {

    //var num1;
    //var num2;

    var oprcion = {
        sumar: function operacionSumar(num1, num2) {
            return (parseFloat(num1) + parseFloat(num2));
        },
        restar: function operacionResta(num1, num2) {
            return (parseFloat(num1) - parseFloat(num2));
        },
        multiplicar: function operacionMultiplicar(num1, num2) {
            return (parseFloat(num1) * parseFloat(num2));
        },
        dividir: function operacionDividir(num1, num2) {
            return (parseFloat(num1) / parseFloat(num2));
        }
    };



    var operacion;

    switch (op) {
        case 'sumar':
            var oper1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = oper1 + "+";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "sum";
            break;
        case 'restar':
            var oper1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = oper1 + "-";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "res";
            break;
        case 'multiplicar':
            var oper1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = oper1 + "*";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "mult";
            break;
        case 'dividir':
            var oper1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = oper1 + "/";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "div";
            break;

        case 'igual':
            operacion = document.getElementById("resultado").value;
            var memoriaOpr = document.getElementById("memoria").value;

            switch (memoriaOpr) {
                case 'sum':
                    var splitOper = operacion.split("+");
                    var result = oprcion.sumar(splitOper[0], splitOper[1]);
                    document.getElementById("resultado").value = result;
                    break;
                case 'res':
                    var splitOper = operacion.split("-");
                    var result = oprcion.restar(splitOper[0], splitOper[1]);
                    document.getElementById("resultado").value = result;
                    break;
                case 'mult':
                    var splitOper = operacion.split("*");
                    var result = oprcion.multiplicar(splitOper[0], splitOper[1]);
                    document.getElementById("resultado").value = result;
                    break;
                case 'div':
                    var splitOper = operacion.split("/");
                    var result = oprcion.dividir(splitOper[0], splitOper[1]);
                    document.getElementById("resultado").value = result;
                    break;

            }

            break;
        case 'reset':
            document.getElementById("resultado").value = "0";
            document.getElementById("memoria").value = "";
            break;
        case 'punto':
            var oper1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = oper1 + ".";
            operacion = document.getElementById("resultado").value;
            break;
        case 'del':
            var resul = document.getElementById("resultado").value;
            console.log(resul);
            resul = resul.substring(0, resul.length -1);
            document.getElementById("resultado").value = resul;
            break;
            
           
            
    }




}