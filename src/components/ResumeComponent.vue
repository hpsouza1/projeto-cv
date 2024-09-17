<template>
    <div class="resume-container">
      <div class="header">
        <h1>{{ formData.nome }}</h1>
        <h2>{{ formData.profissao }}</h2>
      </div>
      <div class="profile">
        <h3>Profile</h3>
        <p>{{ formData.perfil }}</p>
      </div>
      <div class="main-skills">
        <h3>Main Skills</h3>
        <ul>
          <li v-for="skill in formData.habilidades" :key="skill">{{ skill }}</li>
        </ul>
      </div>
      <div class="employment">
        <h3>Employment</h3>
        <p>{{ formData.experiencia }}</p>
      </div>
      <div class="contact-information">
        <h3>Contact Information</h3>
        <p>Tel: {{ formData.telefone }}</p>
        <p>Email: {{ formData.email }}</p>
        <p>Location: {{ formData.localizacao }}</p>
      </div>
      <div class="education">
        <h3>Education</h3>
        <p>{{ formData.educacao }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      formData: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Adicione aqui o CSS baseado no layout do currículo */
  </style>
  