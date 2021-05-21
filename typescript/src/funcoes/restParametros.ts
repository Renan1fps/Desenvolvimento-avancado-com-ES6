function somarRenda(...meses: number[]): number {
  return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}

somarRenda(450, 489, 2568, 1684);
