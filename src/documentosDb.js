import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(nome) {
    const documento = documentosColecao.findOne({
      nome
    });

    return documento;
  }

  function atualizaDocumento(nome, texto) {
    const atualiza = documentosColecao.updateOne({
        nome
    },{
        $set: {
            texto
        }
    })

    return atualiza;
  }

  export { encontrarDocumento, atualizaDocumento };