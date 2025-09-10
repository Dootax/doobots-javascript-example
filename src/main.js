import { Response } from "doobots";

export async function main(request) {
  const response = new Response();
  const nome = request.get("nome", "Desconhecido");

  response.put("greeting", `Ola, ${nome}!`);

  if (request.getFiles() && request.getFiles().length > 0) {
    const first = request.getFiles()[0];
    response.put("fileContent", Buffer.from(first.base64, "base64").toString("utf8"));
  }

  return response;
}
