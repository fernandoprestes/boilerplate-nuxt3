<script lang="ts" setup>
  definePageMeta({
    title: 'Forms input',
  });
</script>
<template>
  <div class="container text-left space-y-2">
    <h2 class="text-2xl">Forms input</h2>

    <div class="bg-slate-800 p-2 rounded-md text-white w-full font-mono">🚧 Work in progress...</div>

    <div class="container text-left space-y-2">
      <h2 class="text-2xl">Inputs</h2>
      <div class="grid grid-cols-2 gap-2">
        <SInput
          label="Nome"
          placeholder="Como devemos te chamar"
        />
        <SInput
          label="Sobrenome"
          placeholder="Qual seu sobrenome"
        />
      </div>
      <div class="grid grid-cols-2 gap-2">
        <SInput
          label="Telefone"
          placeholder="Qual o seu telefone"
          type="tel"
        />
        <SInput
          label="Idade"
          placeholder="Qual a sua idade"
          type="number"
        />
      </div>
      <div class="grid grid-cols-2 gap-2">
        <SInput
          label="Data de nascimento"
          type="date"
        />
        <SInput
          label="Horas"
          type="time"
        />
      </div>
      <SInput
        label="Site"
        pattern="https?://.+"
        placeholder="Digite o seu site https://..."
        type="url"
      />
      <SInput
        label="E-mail"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1, 3}$"
        placeholder="Qual o seu melhor e-mail"
        type="email"
      />
      <SInput
        label="Senha"
        placeholder="Digite sua senha mais forte"
        type="password"
      />
      <SInput
        label="Confira a senha"
        placeholder="Confira a senha digitada"
        type="password"
      />
    </div>
  </div>
</template>
