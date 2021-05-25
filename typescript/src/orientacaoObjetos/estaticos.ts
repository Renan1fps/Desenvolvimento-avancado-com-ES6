interface IBancoDeDados {
  ip: string;
  usuario: string;
  senha: string;
  tipoBanco: string;
}

class BancoDeDadosEstatico {
  static LOCAL = "127.0.0.1";
  static TIPO_MYSQL = "MySQL";
  static TIPO_SQLSERVER = "SQL Server";
  constructor(
    private ip: string,
    private usuario: string,
    private senha: string,
    private tipoBanco: string
  ) {}

  static factory(parametros: IBancoDeDados) {
    if (
      ![
        BancoDeDadosEstatico.TIPO_MYSQL,
        BancoDeDadosEstatico.TIPO_SQLSERVER,
      ].includes(parametros.tipoBanco)
    ) {
      throw new Error("Tipo de banco incorreto!");
    }
    return new BancoDeDadosEstatico(
      parametros.ip,
      parametros.usuario,
      parametros.senha,
      parametros.tipoBanco
    );
  }
}

const conexaoBanco = BancoDeDadosEstatico.factory({
  tipoBanco: BancoDeDadosEstatico.TIPO_MYSQL,
  ip: BancoDeDadosEstatico.LOCAL,
  senha: "root",
  usuario: "ROOT",
});
