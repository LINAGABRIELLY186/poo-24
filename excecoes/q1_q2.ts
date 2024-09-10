//1) Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com
//códigos seus ou pesquisados na internet.

import { error } from "console";

//1.TRATAMENTO COM try-catch:
function divide(a: number, b: number): number {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    } catch (error:unknown) {
        if(error instanceof Error){
         console.error("Erro: " + error.message );
    }
        return 0; // Valor padrão em caso de erro
    } finally{
        console.log("Verifique os numeros!");
    }
}
//1 try-catch: codigo menos legivel, captura exceçoes dentro do bloco que e definido.
//2 throw:uso inadequado causa "quebra" no programa.
//3 finally:mesmo com return ou break finally é executado, oq nao é intuitivo.
