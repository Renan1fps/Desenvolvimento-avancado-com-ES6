interface IUsuarioNotificacao {
  email: string;
  nome: string;
  telefone: string
}

abstract class Notificacao {
  abstract enviar(usuario: IUsuarioNotificacao): boolean;
}

class Email extends Notificacao {
  enviar(usuario: IUsuarioNotificacao): boolean {
    console.log(`Enviando email para o usuario ${usuario.nome}
                 Email: ${usuario.email}`);
    return true;
  }
}

class SMS extends Notificacao{
    enviar(usuario: IUsuarioNotificacao): boolean {
        console.log(`Enviando SMS para ${usuario.telefone}`)
        return true
    }
}
