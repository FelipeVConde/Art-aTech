var database = require("../database/config");

function buscarUltimasMedidas(idObra, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        lm35_temperatura as temperatura, 
        ldr_luminosidade as luminosidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fkObra = ${idObra}
                    order by idMedida desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        lm35_temperatura as temperatura, 
        ldr_luminosidade as luminosidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fkObra = ${idAquario}
                    order by idMedida desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idObra) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        lm35_temperatura as temperatura, 
        ldr_luminosidade as luminosidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fkObra 
                        from medida where fkObra = ${idObra} 
                    order by idMedida desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        lm35_temperatura as temperatura, 
        ldr_luminosidade as luminosidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fkObra 
                        from medida where fkObra = ${idObra} 
                    order by idMedida desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
