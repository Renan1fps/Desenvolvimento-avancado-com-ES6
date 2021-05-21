/*Parametro opcional! */
function sendEmail(para: string, assunto: string = "Sem assunto"): void {
  console.log(para, assunto);
}
sendEmail("renan@gmail.com");
sendEmail("renan@gmail.com", "Typescript");

function sendEmailWithParamsOptional(
  para: string,
  assunto: string,
  remetente?: string
): void {
  console.log(para, assunto, remetente);
}

sendEmailWithParamsOptional("renan@gmail.com", "sem assunto");
sendEmailWithParamsOptional("renan@gmail.com", "sem assunto", "eu");
