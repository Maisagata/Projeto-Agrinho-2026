# 🌾 Simulador de Pecuária Sustentável — Agrinho 2026

> **Tema:** Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente
> **Categoria:** Ensino Médio (3º Ano)

---

## 📝 Sobre o Projeto
Este projeto é um **Simulador de Vendas e Gestão de Bovinos** desenvolvido como aplicação web. O objetivo principal é conscientizar produtores rurais e estudantes sobre como a adoção de práticas sustentáveis no campo não apenas protege o meio ambiente, mas também aumenta a produtividade e o retorno financeiro (rentabilidade) do negócio.

A ferramenta contrapõe o modelo de **Manejo Tradicional** (pastagem contínua e degradada) com o **Manejo Sustentável** (Rotação de Piquetes + Integração Lavoura-Pecuária-Floresta — ILPF), demonstrando graficamente e através de cálculos matemáticos os benefícios reais do equilíbrio ecológico.

---

## 🚀 Como o Simulador Funciona (Lógica do Negócio)

O simulador utiliza três variáveis principais para calcular o resultado da venda do rebanho:

1. **Manejo Tradicional:** * O gado sofre maior estresse térmico (falta de sombra) e consome pastagem de baixa qualidade.
   * **Resultado:** Menor ganho de peso médio por animal ($17.5 \text{ @}$) e venda pelo preço comum de mercado. Maior pegada de carbono.

2. **Manejo Sustentável (ILPF / Piquetes):** * O bem-estar animal e a rotação do solo garantem pasto nutritivo e recuperação da terra.
   * **Resultado:** Maior ganho de peso médio por animal ($21.0 \text{ @}$) e direito ao **"Bônus Verde"** ($+7\%$ no preço da arroba), mimetizando as bonificações reais pagas por frigoríficos para carne sustentável e rastreada.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias fundamentais do desenvolvimento web (Front-end), sem a necessidade de dependências externas, garantindo leveza e rapidez na execução:

* **HTML5:** Estrutura semântica da interface e formulários.
* **CSS3:** Design moderno, responsivo (adaptado para celulares e computadores) e paleta de cores voltada à identidade visual do agronegócio sustentável.
* **JavaScript (ES6):** Processamento lógico dos dados, cálculos matemáticos e manipulação dinâmica do DOM para exibição dos relatórios de impacto socioambiental.

---

## 📂 Estrutura de Arquivos

```text
SimuladorAgrinho/
├── index.html      # Estrutura principal da página e do formulário
├── style.css       # Estilização visual, cores e responsividade
├── script.js       # Lógica matemática e regras de impacto ambiental
└── README.md       # Documentação do projeto (este arquivo)



## ▶ Como executar (modo rápido)

Opções rápidas para abrir o simulador localmente:

- Abrir `index.html` diretamente no navegador (duplo clique ou "Abrir arquivo").
- Ou rodar um servidor simples na pasta do projeto e abrir http://localhost:8000:

```bash
cd Projeto-Agrinho-2026
python3 -m http.server 8000
# depois abra http://localhost:8000 no navegador
```

## 🧾 Licença

Veja o arquivo `LICENSE` para detalhes sobre a licença do projeto.

----

Se quiser, faço outra rodada de melhorias no `README.md` (ex.: adicionar autor, screenshots, ou badge de licença). 

