class Empresa {
  pretandoServico() {
    return "Prestando serviço";
  }
}

class EmpresaDeVendasCAdeiras extends Empresa {
  pretandoServico() {
    return "Vendendo Cadeiras";
  }
}

class EmpresaDeServicosGerais extends Empresa {
  pretandoServico() {
    return "Prestando serviços Gerais";
  }
}

console.log(new Empresa().pretandoServico());
console.log(new EmpresaDeServicosGerais().pretandoServico());
console.log(new EmpresaDeVendasCAdeiras().pretandoServico());
