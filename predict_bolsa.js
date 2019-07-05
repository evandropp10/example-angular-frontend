var ui = SpreadsheetApp.getUi();
var ss = SpreadsheetApp.getActiveSpreadsheet();
var aba1 = ss.getSheets()[0];
var aba2 = ss.getSheets()[1];


ui.alert("Oi eu funciono");

marca = aba1.getRange('C3').getValue();
unidade = aba1.getRange('C4').getValue();
segmento = aba1.getRange('C5').getValue();
tuma = aba1.getRange('C6').getValue();
turno = aba1.getRange('C7').getValue();
bolsa_meta = parseFloat(aba1.getRange('C9').getValue());

data = aba1.getRange('E3').getValue();
vl_acumulado = parseFloat(aba1.getRange('E4').getValue());
qt_aluno = parseFloat(aba1.getRange('E5').getValue());
ticket = parseFloat(aba1.getRange('E6').getValue());
peso_meta = parseFloat(aba1.getRange('E8').getValue())


distancia = parseFloat(aba1.getRange('G3').getValue());
salario = parseFloat(aba1.getRange('G4').getValue());
media_sal = parseFloat(aba1.getRange('G5').getValue());
media_per_cap = parseFloat(aba1.getRange('G6').getValue());
peso_pessoa = parseFloat(aba1.getRange('G8').getValue())

conc_unid = parseFloat(aba1.getRange('I3').getValue());
conc_aluno = parseFloat(aba1.getRange('I4').getValue());

interesse = parseFloat(aba1.getRange('K3').getValue());
pegou = parseFloat(aba1.getRange('K4').getValue());
grade = parseFloat(aba1.getRange('K5').getValue());


for (var i = 35; i <= 43; i++) {

    if (aba1.getRange('B' + i.toString()).getValue() == data) {

        vl_ciclo_ant = parseFloat(aba1.getRange('C' + i.toString()).getValue());
        qt_ciclo_ant = parseFloat(aba1.getRange('D' + i.toString()).getValue());
        tm_ciclo_ant = parseFloat(aba1.getRange('E' + i.toString()).getValue());

        vl_meta = parseFloat(aba1.getRange('F' + i.toString()).getValue());
        qt_meta = parseFloat(aba1.getRange('G' + i.toString()).getValue());
        tm_meta = parseFloat(aba1.getRange('H' + i.toString()).getValue());

        pc_ciclo = parseFloat(aba1.getRange('I' + i.toString()).getValue());

        break;
    }
}

// ******** 1 - Calcula preenchimento de meta
vl_dif_ciclo = vl_acumulado - vl_ciclo_ant;
vl_dif_meta = vl_acumulado - vl_meta;

pc_val_ciclo = vl_dif_ciclo / vl_ciclo_ant;
pc_val_meta = vl_dif_meta / vl_meta;

bolsa_recom = bolsa_meta - pc_val_ciclo;

// ******** 2 - Atributos de Pessoa
// ********** 2.1 - Salário médio

sal_min = parseFloat(aba2.getRange('F2').getValue());
sal_max = parseFloat(aba2.getRange('G2').getValue());
sal_media = parseFloat(aba2.getRange('H2').getValue());
sal_mediana = parseFloat(aba2.getRange('I2').getValue());
sal_ampl = parseFloat(aba2.getRange('J2').getValue());

pc_sal = ((sal_mediana - salario) / sal_ampl) / 10;

pc_pessoa = pc_sal;

// ********** 2.2 - Média salarial CEP
med_sal_min = parseFloat(aba2.getRange('F3').getValue());
med_sal_max = parseFloat(aba2.getRange('G3').getValue());
med_sal_media = parseFloat(aba2.getRange('H3').getValue());
med_sal_mediana = parseFloat(aba2.getRange('I3').getValue());
med_sal_ampl = parseFloat(aba2.getRange('J3').getValue());

pc_med_sal = ((med_sal_mediana - media_sal) / med_sal_ampl) / 10;

pc_pessoa = pc_pessoa + pc_med_sal;

// ********** 2.3 - Média salarial per capita CEP
per_sal_min = parseFloat(aba2.getRange('F4').getValue());
per_sal_max = parseFloat(aba2.getRange('G4').getValue());
per_sal_media = parseFloat(aba2.getRange('H4').getValue());
per_sal_mediana = parseFloat(aba2.getRange('I4').getValue());
per_sal_ampl = parseFloat(aba2.getRange('J4').getValue());

pc_per_sal = ((per_sal_mediana - media_per_cap) / per_sal_ampl) / 10;

pc_pessoa = pc_pessoa + pc_per_sal;

// ********** 2.4 - Distância
dist_min = parseFloat(aba2.getRange('F4').getValue());
dist_max = parseFloat(aba2.getRange('G4').getValue());
dist_media = parseFloat(aba2.getRange('H4').getValue());
dist_mediana = parseFloat(aba2.getRange('I4').getValue());
dist_ampl = parseFloat(aba2.getRange('J4').getValue());

dist_sal = ((distancia - dist_mediana) / dist_ampl) / 10;

pc_pessoa = pc_pessoa + dist_sal;

// Final
bolsa_recom = (bolsa_recom * peso_meta) + (pc_pessoa * peso_pessoa);

aba1.getRange('I14').setValue(bolsa_recom.toFixed(2));