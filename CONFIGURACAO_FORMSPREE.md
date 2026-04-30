# Configuração do Envio de Emails - Formspree

## 📧 Visão Geral

Os formulários de agendamento de consulta estão configurados para enviar emails automaticamente usando o **Formspree**, um serviço gratuito que permite processar formulários e receber emails sem necessidade de servidor backend.

## 📍 Formulários Implementados

O site possui **2 formulários** com envio automático por email:

1. **Formulário da HomePage** (`/src/app/components/HomePage.tsx`) - Seção de contacto na página principal
2. **Formulário Página de Marcação** (`/src/app/components/MarcarConsultaPage.tsx`) - Página dedicada `/marcar-consulta`

**Ambos os formulários devem usar o MESMO Form ID** para que todos os agendamentos cheguem ao mesmo email.

## 🔧 Passos para Configuração

### 1. Criar Conta no Formspree

1. Acesse [Formspree](https://formspree.io/)
2. Clique em **Get Started** e crie uma conta gratuita
3. Confirme seu email

### 2. Criar um Novo Formulário

1. No dashboard do Formspree, clique em **+ New Form**
2. Digite um nome para o formulário: **Agendamento de Consulta - Clínica Predileta**
3. Clique em **Create Form**

### 3. Configurar o Email de Destino

1. Após criar o formulário, você verá a página de configuração
2. Na seção **Email Address**, insira: **mariaqueirozredteam@gmail.com**
3. Clique em **Save**

### 4. Obter o Form ID

1. Na página do formulário, localize o **Endpoint URL**
2. O URL será algo como: `https://formspree.io/f/abc123xyz`
3. **Copie apenas o ID** (a parte depois de `/f/`), por exemplo: `abc123xyz`

### 5. Atualizar os Códigos

#### Arquivo 1: `/src/app/components/MarcarConsultaPage.tsx`

Abra o arquivo e localize a linha ~42:

```typescript
const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
```

Substitua `YOUR_FORM_ID` pelo ID obtido no passo 4:

```typescript
const formspreeEndpoint = "https://formspree.io/f/abc123xyz";  // Substitua abc123xyz pelo seu Form ID
```

#### Arquivo 2: `/src/app/components/HomePage.tsx`

Abra o arquivo e localize a linha ~47:

```typescript
const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
```

Substitua `YOUR_FORM_ID` pelo **MESMO ID** do passo anterior:

```typescript
const formspreeEndpoint = "https://formspree.io/f/abc123xyz";  // Use o MESMO Form ID
```

**IMPORTANTE**: Use o mesmo Form ID em ambos os arquivos para que todos os agendamentos sejam enviados para o mesmo email.

### 6. Configurações Avançadas (Opcional)

No dashboard do Formspree, você pode personalizar:

#### Notifications (Notificações)
- Configurar emails de notificação personalizados
- Adicionar múltiplos destinatários (CC)

#### Autoresponder (Resposta Automática)
- Ativar resposta automática para quem preenche o formulário
- Personalizar a mensagem de confirmação

#### Customization (Personalização)
- Configurar página de agradecimento personalizada
- Redirecionar após o envio

#### Spam Protection (Proteção contra Spam)
- O Formspree já inclui proteção automática contra spam
- Você pode ativar reCAPTCHA se necessário

## ✅ Testar os Formulários

### Teste 1: Formulário da HomePage

1. Acesse a página inicial: `/`
2. Role até à seção "Marcar Consulta"
3. Preencha todos os campos obrigatórios:
   - Primeiro Nome e Último Nome
   - Telefone e Email
   - Serviço Pretendido (opcional)
   - Data Pretendida (opcional)
   - Mensagem (opcional)
4. Clique em **Marcar Consulta**
5. Verifique:
   - Botão mostra "Enviando..." com spinner animado
   - Mensagem de sucesso verde aparece no topo
   - Formulário é limpo automaticamente
6. Verifique o email em: **mariaqueirozredteam@gmail.com**

### Teste 2: Formulário da Página de Marcação

1. Acesse a página: `/marcar-consulta`
2. Preencha todos os campos obrigatórios:
   - Primeiro Nome e Último Nome
   - Email e Telefone
   - Data Preferida e Horário
   - Tipo de Consulta
   - Mensagem Adicional (opcional)
3. Clique em **Enviar Pedido de Marcação**
4. Verifique os mesmos pontos do teste anterior
5. Confirme que o email chegou

## 📨 Formato dos Emails Recebidos

### Email do Formulário HomePage

**Assunto:** Novo agendamento de consulta

**Conteúdo:**
- **Nome Completo**: João Silva
- **Email**: joao.silva@email.pt
- **Telefone**: 253 123 456
- **Serviço**: Limpeza Dentária
- **Data**: 2026-05-20
- **Mensagem**: [Observações do paciente]

### Email do Formulário Página de Marcação

**Assunto:** Novo agendamento de consulta

**Conteúdo:**
- **Nome Completo**: João Silva
- **Email**: joao.silva@email.pt
- **Telefone**: 253 123 456
- **Data Preferida**: 2026-05-20
- **Horário**: Manhã (9h - 12h)
- **Tipo de Consulta**: Primeira Consulta / Avaliação
- **Mensagem**: [Observações do paciente]

## 🎯 Campos Enviados

### Campos Especiais do Formspree

Ambos os formulários utilizam estes campos especiais:

| Campo | Descrição |
|-------|-----------|
| `_subject` | Define o assunto do email: "Novo agendamento de consulta" |
| `_replyto` | Define o email de resposta (email do paciente) |

Isto permite responder diretamente ao paciente clicando em "Responder" no email.

## 🆓 Limite Gratuito do Formspree

**Plano Gratuito:**
- ✅ **50 envios por mês** (total de AMBOS os formulários)
- ✅ Proteção contra spam
- ✅ Upload de arquivos (até 10MB)
- ✅ Email de confirmação automático
- ✅ AJAX submissions

**Se precisar de mais:**
- Plano Basic: $10/mês - 1.000 envios
- Plano Gold: $40/mês - 10.000 envios
- Plano Platinum: $120/mês - 50.000 envios

## 🚨 Troubleshooting

### Erro 404: "Form not found"
- ✔️ Verifique se copiou corretamente o Form ID
- ✔️ Certifique-se de que o formulário está ativo no dashboard
- ✔️ O ID deve ter apenas letras e números (ex: `abc123xyz`)
- ✔️ Confirme que atualizou AMBOS os arquivos com o mesmo ID

### Email não chega
- ✉️ Verifique a pasta de **spam/lixo eletrônico**
- ✉️ Confirme que o email **mariaqueirozredteam@gmail.com** está correto nas configurações do Formspree
- ✉️ Verifique os logs no dashboard do Formspree em **Submissions**
- ✉️ Teste com um email diferente para verificar se é problema do Gmail

### Erro CORS
- O Formspree permite requisições de qualquer domínio por padrão
- Se tiver problemas, adicione seu domínio nas configurações do formulário

### Formulário não envia
- Abra o console do navegador (F12) para ver erros
- Verifique se o endpoint está correto
- Teste com dados válidos em todos os campos obrigatórios
- Confirme que o Form ID é o mesmo em ambos os arquivos

### Primeira submissão pede confirmação
- Na primeira vez que usar um novo formulário, o Formspree pode pedir confirmação
- Isso é normal para prevenir spam
- Confirme através do link enviado ao email configurado

### Toast não aparece
- Verifique se o componente Toast foi importado corretamente
- Confirme que o estado `toast` está sendo atualizado
- Verifique o console para erros JavaScript

## 🎨 Personalização

### Mudar o Email de Destino

1. Acesse o dashboard do Formspree
2. Selecione o formulário
3. Vá em **Settings** > **Email Address**
4. Altere para o novo email
5. Salve

### Adicionar CC/BCC

1. Em **Settings** > **Notifications**
2. Adicione emails adicionais
3. Escolha se será CC ou BCC

### Customizar Mensagens de Sucesso/Erro

No código dos componentes, edite as mensagens:

```typescript
// Sucesso
showToast("success", "Sua mensagem personalizada aqui!");

// Erro
showToast("error", "Mensagem de erro personalizada!");
```

### Adicionar Campos Extras

Para adicionar novos campos a qualquer formulário:

1. Adicione o campo no `formData` state
2. Adicione o input no JSX
3. Inclua o campo no `payload` dentro de `handleSubmit`

## 📊 Monitoramento

### Ver Submissions

1. Acesse o dashboard do Formspree
2. Clique no formulário
3. Veja a aba **Submissions**
4. Aqui você pode ver todos os envios recebidos de ambos os formulários

### Exportar Dados

- Formspree permite exportar submissions em formato CSV
- Útil para backup ou análise de dados
- Clique em "Export" na página de Submissions

### Estatísticas

O dashboard mostra:
- Total de submissions
- Submissions por dia/semana/mês
- Taxa de conversão
- Status de cada envio (sucesso/falha)

## 🔒 Segurança

✅ **HTTPS obrigatório** - Todos os dados são transmitidos de forma segura  
✅ **Proteção anti-spam** - Filtros automáticos  
✅ **Validação de dados** - Validação tanto no frontend quanto no backend  
✅ **Conformidade GDPR** - Formspree é compatível com GDPR  

## 🎯 Funcionalidades Implementadas

### 1. Estado de Loading
- Botão desabilitado durante envio
- Ícone de spinner animado
- Texto muda para "Enviando..."

### 2. Feedback Visual
- Toast de sucesso (verde) quando enviado com sucesso
- Toast de erro (vermelho) em caso de falha
- Animação suave de entrada/saída
- Fechamento automático após 5 segundos
- Botão para fechar manualmente

### 3. Experiência do Utilizador
- Formulário limpo automaticamente após sucesso
- Campos required validados pelo navegador
- Design responsivo e acessível
- Feedback imediato em todas as ações

## 📞 Suporte

Se tiver problemas, consulte:
- [Documentação oficial do Formspree](https://help.formspree.io/)
- [FAQ do Formspree](https://formspree.io/faq)
- [Status do serviço](https://status.formspree.io/)

## 💡 Alternativas ao Formspree

Se precisar de funcionalidades diferentes:
- **EmailJS** - Envio direto sem backend
- **Netlify Forms** - Se hospedar na Netlify
- **Web3Forms** - Alternativa gratuita similar
- **SendGrid/Mailgun** - Para volumes maiores
- **GetForm** - Interface simples
- **Basin** - Focado em privacidade

## ✨ Resumo da Configuração

1. ✅ Criar conta no Formspree
2. ✅ Criar formulário "Agendamento de Consulta"
3. ✅ Configurar email destino: mariaqueirozredteam@gmail.com
4. ✅ Copiar o Form ID
5. ✅ Substituir `YOUR_FORM_ID` em **MarcarConsultaPage.tsx** (linha ~42)
6. ✅ Substituir `YOUR_FORM_ID` em **HomePage.tsx** (linha ~47)
7. ✅ Testar ambos os formulários
8. ✅ Verificar se os emails chegam

---

**Desenvolvido para Clínica Dentária Predileta** 🦷  
**Email de destino:** mariaqueirozredteam@gmail.com  
**Formulários:** HomePage + Página de Marcação
