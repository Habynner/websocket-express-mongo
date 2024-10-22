import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://habynnerjeuel:Habynner10@websocketcluster.tvf8h.mongodb.net/?retryWrites=true&w=majority&appName=WebsocketCluster");

let documentosColecao;
try {
    await cliente.connect();

    const db = cliente.db("learning-websockets");
    documentosColecao = db.collection("documentos");

    console.log("conectado ao bando com sucesso !")


} catch (erro) {
    console.log(erro);
}

export { documentosColecao };