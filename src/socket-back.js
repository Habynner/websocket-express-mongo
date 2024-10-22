import { atualizaDocumento, encontrarDocumento } from "./documentosDb.js";
import io from "./servidor.js";


io.on("connection", (socket) => {

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const documento = await atualizaDocumento(nomeDocumento, texto);

    if (documento.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });
});
