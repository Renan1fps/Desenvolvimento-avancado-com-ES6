interface IPessoa {
  nome: string;
  idade?: number;
  cpf?: string;
}

interface IUsuario extends IPessoa {
  email: string;
  password: string;
}

class ContaSocial implements IUsuario {
  nome = "joão";
  password = "sf5d85d";
  email = "joao@gmail.com";
}

const Usuario: IUsuario = {
  email: "joão@gmail.com",
  nome: "joão",
  password: "9s45f94",
};
