var _0xd97c=['toFixed','getActiveSpreadsheet','getSheets','Oi\x20eu\x20funciono','getRange','getValue','toString','I14'];(function(_0x45a4a8,_0x107da7){var _0x10f0ae=function(_0x2c14d5){while(--_0x2c14d5){_0x45a4a8['push'](_0x45a4a8['shift']());}};_0x10f0ae(++_0x107da7);}(_0xd97c,0x71));var _0x4026=function(_0x5ca804,_0x5a5925){_0x5ca804=_0x5ca804-0x0;var _0xebdc9f=_0xd97c[_0x5ca804];return _0xebdc9f;};var ui=SpreadsheetApp['getUi']();var ss=SpreadsheetApp[_0x4026('0x0')]();var aba1=ss[_0x4026('0x1')]()[0x0];var aba2=ss[_0x4026('0x1')]()[0x1];ui['alert'](_0x4026('0x2'));marca=aba1[_0x4026('0x3')]('C3')[_0x4026('0x4')]();unidade=aba1['getRange']('C4')[_0x4026('0x4')]();segmento=aba1[_0x4026('0x3')]('C5')[_0x4026('0x4')]();tuma=aba1['getRange']('C6')[_0x4026('0x4')]();turno=aba1[_0x4026('0x3')]('C7')[_0x4026('0x4')]();bolsa_meta=parseFloat(aba1[_0x4026('0x3')]('C9')['getValue']());data=aba1[_0x4026('0x3')]('E3')[_0x4026('0x4')]();vl_acumulado=parseFloat(aba1[_0x4026('0x3')]('E4')[_0x4026('0x4')]());qt_aluno=parseFloat(aba1['getRange']('E5')[_0x4026('0x4')]());ticket=parseFloat(aba1[_0x4026('0x3')]('E6')[_0x4026('0x4')]());peso_meta=parseFloat(aba1[_0x4026('0x3')]('E8')['getValue']());distancia=parseFloat(aba1[_0x4026('0x3')]('G3')['getValue']());salario=parseFloat(aba1[_0x4026('0x3')]('G4')[_0x4026('0x4')]());media_sal=parseFloat(aba1['getRange']('G5')[_0x4026('0x4')]());media_per_cap=parseFloat(aba1[_0x4026('0x3')]('G6')[_0x4026('0x4')]());peso_pessoa=parseFloat(aba1[_0x4026('0x3')]('G8')[_0x4026('0x4')]());conc_unid=parseFloat(aba1[_0x4026('0x3')]('I3')[_0x4026('0x4')]());conc_aluno=parseFloat(aba1[_0x4026('0x3')]('I4')[_0x4026('0x4')]());interesse=parseFloat(aba1[_0x4026('0x3')]('K3')[_0x4026('0x4')]());pegou=parseFloat(aba1[_0x4026('0x3')]('K4')[_0x4026('0x4')]());grade=parseFloat(aba1[_0x4026('0x3')]('K5')['getValue']());for(var i=0x23;i<=0x2b;i++){if(aba1[_0x4026('0x3')]('B'+i[_0x4026('0x5')]())['getValue']()==data){vl_ciclo_ant=parseFloat(aba1[_0x4026('0x3')]('C'+i['toString']())[_0x4026('0x4')]());qt_ciclo_ant=parseFloat(aba1[_0x4026('0x3')]('D'+i[_0x4026('0x5')]())[_0x4026('0x4')]());tm_ciclo_ant=parseFloat(aba1[_0x4026('0x3')]('E'+i[_0x4026('0x5')]())[_0x4026('0x4')]());vl_meta=parseFloat(aba1[_0x4026('0x3')]('F'+i[_0x4026('0x5')]())['getValue']());qt_meta=parseFloat(aba1[_0x4026('0x3')]('G'+i[_0x4026('0x5')]())[_0x4026('0x4')]());tm_meta=parseFloat(aba1[_0x4026('0x3')]('H'+i[_0x4026('0x5')]())[_0x4026('0x4')]());pc_ciclo=parseFloat(aba1[_0x4026('0x3')]('I'+i[_0x4026('0x5')]())[_0x4026('0x4')]());break;}}vl_dif_ciclo=vl_acumulado-vl_ciclo_ant;vl_dif_meta=vl_acumulado-vl_meta;pc_val_ciclo=vl_dif_ciclo/vl_ciclo_ant;pc_val_meta=vl_dif_meta/vl_meta;bolsa_recom=bolsa_meta-pc_val_ciclo;sal_min=parseFloat(aba2[_0x4026('0x3')]('F2')['getValue']());sal_max=parseFloat(aba2[_0x4026('0x3')]('G2')[_0x4026('0x4')]());sal_media=parseFloat(aba2['getRange']('H2')[_0x4026('0x4')]());sal_mediana=parseFloat(aba2[_0x4026('0x3')]('I2')[_0x4026('0x4')]());sal_ampl=parseFloat(aba2[_0x4026('0x3')]('J2')['getValue']());pc_sal=(sal_mediana-salario)/sal_ampl/0xa;pc_pessoa=pc_sal;med_sal_min=parseFloat(aba2[_0x4026('0x3')]('F3')[_0x4026('0x4')]());med_sal_max=parseFloat(aba2[_0x4026('0x3')]('G3')['getValue']());med_sal_media=parseFloat(aba2['getRange']('H3')[_0x4026('0x4')]());med_sal_mediana=parseFloat(aba2[_0x4026('0x3')]('I3')['getValue']());med_sal_ampl=parseFloat(aba2[_0x4026('0x3')]('J3')[_0x4026('0x4')]());pc_med_sal=(med_sal_mediana-media_sal)/med_sal_ampl/0xa;pc_pessoa=pc_pessoa+pc_med_sal;per_sal_min=parseFloat(aba2[_0x4026('0x3')]('F4')[_0x4026('0x4')]());per_sal_max=parseFloat(aba2[_0x4026('0x3')]('G4')[_0x4026('0x4')]());per_sal_media=parseFloat(aba2[_0x4026('0x3')]('H4')[_0x4026('0x4')]());per_sal_mediana=parseFloat(aba2[_0x4026('0x3')]('I4')[_0x4026('0x4')]());per_sal_ampl=parseFloat(aba2[_0x4026('0x3')]('J4')[_0x4026('0x4')]());pc_per_sal=(per_sal_mediana-media_per_cap)/per_sal_ampl/0xa;pc_pessoa=pc_pessoa+pc_per_sal;dist_min=parseFloat(aba2[_0x4026('0x3')]('F4')['getValue']());dist_max=parseFloat(aba2[_0x4026('0x3')]('G4')[_0x4026('0x4')]());dist_media=parseFloat(aba2[_0x4026('0x3')]('H4')[_0x4026('0x4')]());dist_mediana=parseFloat(aba2[_0x4026('0x3')]('I4')[_0x4026('0x4')]());dist_ampl=parseFloat(aba2[_0x4026('0x3')]('J4')[_0x4026('0x4')]());dist_sal=(distancia-dist_mediana)/dist_ampl/0xa;pc_pessoa=pc_pessoa+dist_sal;bolsa_recom=bolsa_recom*peso_meta+pc_pessoa*peso_pessoa;aba1[_0x4026('0x3')](_0x4026('0x6'))['setValue'](bolsa_recom[_0x4026('0x7')](0x2));