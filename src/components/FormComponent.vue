<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
        
      <header>
        <h1>Formulário de Cadastro</h1>
        <p>Preencha suas informações abaixo.</p>
      </header>

      <div class="centralizador">
        <div class="objetoCentralizador">
          <div class="form-group">
            <label for="nome">Nome</label>
            <input
              type="text"
              v-model="formData.nome"
              placeholder="Insira seu nome aqui"
              required
            />
          </div>

          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input
              type="text"
              v-model="formData.telefone"
              placeholder="(XX) XXXX-XXXX"
              required
            />
          </div>

          <!-- Outros campos de input como E-mail, LinkedIn, Profissão, etc -->

          <div class="form-group">
            <label for="cep">CEP</label>
            <input
              type="text"
              v-model="formData.cep"
              placeholder="Insira seu CEP aqui"
              @blur="fetchAddress"
            />
            <span v-if="loading">Carregando...</span>
          </div>

          <div class="form-group">
            <label for="endereco">Endereço</label>
            <input
              type="text"
              v-model="formData.endereco"
              placeholder="Endereço será preenchido automaticamente"
            />
          </div>

          <!-- Restante dos campos como faculdade, textarea para descrição, etc. -->

        </div>
        <button type="submit" class="cadastrar">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nome: "",
        telefone: "",
        cep: "",
        endereco: "",
        // Outros campos...
      },
      loading: false,
    };
  },
  methods: {
    async fetchAddress() {
      this.loading = true;
      const response = await fetch(
        `https://viacep.com.br/ws/${this.formData.cep}/json/`
      );
      const data = await response.json();
      this.formData.endereco = data.logradouro;
      this.loading = false;
    },
    submitForm() {
      // Lógica para gerar o currículo e exibir as informações
      console.log(this.formData);
    },
  },
};
</script>

<style scoped>
.centralizador {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
}

button {
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
}
</style>
