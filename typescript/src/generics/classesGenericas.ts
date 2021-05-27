interface CadastroUser {
  readonly id: number;
  nome: string;
  email: string;
  senha: string;
}

interface Categoria {
  readonly id: number;
  nome: string;
}

class ControllerBasic<T> {
  create(user: T): T {
    console.log("Crinado novo usuario>");
    return user;
  }
  getUsers(): T {
    return {} as T;
  }

  update(id: number): T {
    return {} as T;
  }
  delete(id: number): void {
    console.log("Usuario deletado.");
  }
}

const novoUser = new ControllerBasic<CadastroUser>();

novoUser.create({
  id: 1,
  email: "joao@gmail.co",
  nome: "João",
  senha: "joao123",
});

const novoProduct = new ControllerBasic<Categoria>();

novoProduct.create({
  id: 2,
  nome: "Leite",
});
