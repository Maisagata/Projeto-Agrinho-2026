function calcularSimulacao() {
    // 1. Coleta dos dados digitados na tela
    const qtdGado = parseInt(document.getElementById('quantidade').value, 10);
    const tipoManejo = document.getElementById('manejo').value;
    const precoArrobaBase = parseFloat(document.getElementById('precoArroba').value);
    // A lógica foi criada por IA.
    // Validação de segurança básica
    if (isNaN(qtdGado) || isNaN(precoArrobaBase) || qtdGado <= 0 || precoArrobaBase <= 0) {
        alert("Por favor, preencha todos os campos com valores maiores que zero.");
        return;
    }

    // 2. Definição das variáveis de negócio baseadas na sustentabilidade
    let pesoMedioArroba = 0;
    let precoArrobaFinal = 0;
    let textoImpacto = "";
    let classeEstilo = "";

    // 3. Aplicação das Regras de Equilíbrio Ambiental
    if (tipoManejo === "sustentavel") {
        // Pecuária Sustentável (ILPF e Piquetes Rotacionados)
        pesoMedioArroba = 21.0; // O animal engorda mais rápido e melhor devido ao conforto térmico da sombra e pasto nutritivo
        precoArrobaFinal = precoArrobaBase * 1.07; // Recebe 7% de bônus financeiro de mercado ("Bônus Verde")
        classeEstilo = "sucesso";
        
        textoImpacto = `🌱 <strong>Impacto Socioambiental Excelente!</strong><br> 
        Ao integrar árvores com pastagens (ILPF) e rotacionar os piquetes, você evitou a erosão do solo e sequestrou carbono da atmosfera. 
        O conforto térmico reduziu o estresse do rebanho, fazendo com que atingissem <strong>21 @</strong> mais rápido. 
        Graças à preservação, você conquistou o <strong>Bônus Verde (+7%)</strong> no preço da sua arroba!`;
    } else {
        // Pecuária Tradicional Degradada
        pesoMedioArroba = 17.5; // Solo compactado, capim fraco, animal caminha mais e perde peso
        precoArrobaFinal = precoArrobaBase; // Vende pelo preço comum/com desconto de qualidade
        classeEstilo = "alerta";
        
        textoImpacto = `⚠️ <strong>Alerta de Degradação Ambiental!</strong><br> 
        O superpastoreio contínuo compactou o solo e causou perda de nutrientes. Sem árvores, os animais sofrem com o estresse térmico, demorando mais para engordar e parando em apenas <strong>17.5 @</strong>. 
        Além do menor rendimento financeiro, sua propriedade emitiu mais gases estufa por quilo de carne produzido.`;
    }

    // 4. Cálculos Matemáticos Finais
    const faturamentoBruto = qtdGado * pesoMedioArroba * precoArrobaFinal;

    // 5. Atualização dos Resultados na Interface do Usuário
    document.getElementById('res-peso').innerText = `${pesoMedioArroba.toFixed(1)} @`;
    
    // Formata o dinheiro para o padrão brasileiro R$
    document.getElementById('res-faturamento').innerText = faturamentoBruto.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Atualiza a caixa de texto de impacto ecológico
    const cardImpacto = document.getElementById('card-impacto');
    cardImpacto.innerHTML = textoImpacto;
    // Mantém a classe base e alterna o estado (sucesso/alerta) sem sobrescrever outras classes
    cardImpacto.classList.remove('sucesso', 'alerta');
    cardImpacto.classList.add('mensagem-impacto', classeEstilo);

    // Faz a área oculta de resultados aparecer na tela
    const painelResultado = document.getElementById('painel-resultado');
    painelResultado.classList.remove('resultado-oculto');
    painelResultado.classList.add('resultado-visivel');
}

// Conecta o botão ao handler sem usar atributos inline
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn-calcular');
    if (btn) btn.addEventListener('click', calcularSimulacao);
});