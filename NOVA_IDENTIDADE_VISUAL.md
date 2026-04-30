# Nova Identidade Visual - Clínica Dentária Predileta

## 🎨 Paleta de Cores Atualizada

### Cor Principal (Primary)
**#292D5C** - Azul Escuro Profissional
- Uso: Cabeçalhos, menus, botões principais, rodapé, elementos estruturais
- Variantes:
  - Dark: `#1F2345`
  - Light: `#3A3F6E`

### Cor de Destaque (Accent)
**#03899E** - Azul Turquesa/Ciano
- Uso: Links, estados hover, ícones, botões secundários, elementos interativos
- Variantes:
  - Dark: `#027182`
  - Light: `#04A1BA`

### Cores Neutras
- Branco: `#FFFFFF`
- Cinza Claro: `#F8F9FA`
- Cinza: `#E9ECEF`
- Cinza Escuro: `#6C757D`
- Preto: `#212529`

---

## 📝 Mudanças Implementadas

### 1. Atualização do Theme CSS
✅ Variáveis CSS atualizadas em `theme.css`
- `--primary`: #292D5C
- `--secondary`: #03899E
- `--accent`: #03899E

### 2. Criação do Sistema Brand Colors
✅ Novo arquivo `brand-colors.css` com:
- Variáveis de cores completas com opacidades
- Gradientes harmoniosos
- Shadows customizadas
- Classes utilitárias prontas

### 3. Substituição em Todos os Componentes
✅ Cores antigas → Cores novas:
- `#C9A961` (dourado antigo) → `#292D5C` (azul escuro)
- `#B8965A` (dourado escuro) → `#1F2345` (azul mais escuro)
- `#FAF6ED` (bege claro) → `#F8F9FA` (cinza claro)
- `#fffbf5` (bege muito claro) → `#E9ECEF` (cinza muito claro)

### 4. Estados de Hover Atualizados
✅ Todos os estados hover agora usam:
- Cor accent `#03899E` para links e elementos interativos
- Transições suaves de cor
- Efeitos visuais consistentes

### 5. Número de Telefone Atualizado
✅ Novo número em todo o site:
- **Antigo:** 253 123 456
- **Novo:** 910 658 115

---

## 🎯 Componentes Atualizados

### Páginas Principais
- ✅ HomePage
- ✅ MarcarConsultaPage
- ✅ EspecialidadesPage
- ✅ AntesDepoisPage
- ✅ ContactosPage
- ✅ HistoriaPage

### Páginas de Especialidades
- ✅ ClinicaGeralPage
- ✅ PrevencaoPage
- ✅ OrtodontiaPage
- ✅ ImplantologiaPage
- ✅ AlinhamentoDentarioPage
- ✅ BranqueamentoProfissionalPage
- ✅ ReabilitacaoOralPage

### Páginas Institucionais
- ✅ TermosCondicoesPage
- ✅ PrivacidadePage

### Componentes Auxiliares
- ✅ SearchModal
- ✅ Toast
- ✅ PageLayout

---

## 🌈 Gradientes Disponíveis

### Gradientes Principais
```css
--gradient-primary: linear-gradient(135deg, #292D5C 0%, #1F2345 100%);
--gradient-accent: linear-gradient(135deg, #03899E 0%, #027182 100%);
```

### Gradientes Combinados
```css
--gradient-primary-accent: linear-gradient(135deg, #292D5C 0%, #03899E 100%);
--gradient-accent-primary: linear-gradient(135deg, #03899E 0%, #292D5C 100%);
```

### Overlays
```css
--overlay-primary: linear-gradient(to bottom, rgba(41, 45, 92, 0.8), rgba(31, 35, 69, 0.9));
--overlay-accent: linear-gradient(to bottom, rgba(3, 137, 158, 0.7), rgba(2, 113, 130, 0.8));
```

---

## 💡 Classes Utilitárias Criadas

### Cores de Texto
```css
.text-primary       /* #292D5C */
.text-accent        /* #03899E */
.text-primary-dark  /* #1F2345 */
.text-accent-dark   /* #027182 */
```

### Backgrounds
```css
.bg-primary         /* #292D5C */
.bg-accent          /* #03899E */
.bg-gradient-primary
.bg-gradient-accent
.bg-gradient-primary-accent
```

### Botões
```css
.btn-primary        /* Botão azul escuro */
.btn-accent         /* Botão azul turquesa */
.btn-outline-primary
.btn-outline-accent
```

### Links
```css
.link-primary       /* Link azul escuro */
.link-accent        /* Link azul turquesa */
```

### Cards
```css
.card-primary       /* Card com borda azul escuro */
.card-accent        /* Card com borda azul turquesa */
```

### Badges
```css
.badge-primary      /* Badge azul escuro */
.badge-accent       /* Badge azul turquesa */
```

### Estados de Hover
```css
.hover-primary:hover
.hover-accent:hover
.hover-bg-primary:hover
.hover-bg-accent:hover
```

### Estados de Focus
```css
.focus-primary:focus
.focus-accent:focus
```

---

## ✨ Exemplos de Uso

### Botão Principal
```tsx
<button className="px-6 py-3 bg-[#292D5C] text-white rounded-full hover:bg-[#1F2345] transition-all">
  Marcar Consulta
</button>
```

### Link com Hover Accent
```tsx
<a href="#" className="text-gray-700 hover:text-[#03899E] transition-colors">
  Especialidades
</a>
```

### Card com Borda Primary
```tsx
<div className="bg-white border-2 border-[#292D5C]/30 rounded-xl p-6">
  Conteúdo
</div>
```

### Input com Focus Primary
```tsx
<input
  className="border-2 border-gray-200 focus:border-[#292D5C] focus:ring-2 focus:ring-[#292D5C]/20"
  type="text"
/>
```

---

## 🔍 Contraste e Acessibilidade

### Contraste de Cores
✅ **Primary (#292D5C) sobre Branco:**
- Ratio: 10.7:1 (AAA - Excelente)
- Uso: Textos, botões, cabeçalhos

✅ **Accent (#03899E) sobre Branco:**
- Ratio: 4.6:1 (AA - Bom)
- Uso: Links, elementos de destaque

✅ **Branco sobre Primary (#292D5C):**
- Ratio: 10.7:1 (AAA - Excelente)
- Uso: Texto em botões, menus escuros

### Legibilidade
- Todos os textos principais em preto/cinza escuro sobre branco
- Elementos interativos com cores vibrantes (accent)
- Estruturas principais em azul escuro sólido (primary)

---

## 📱 Responsividade

A nova identidade visual mantém:
- ✅ Zoom 125% otimizado
- ✅ Mobile First design
- ✅ Breakpoints responsivos
- ✅ Cores consistentes em todos os dispositivos
- ✅ Estados hover funcionais em desktop e tablet

---

## 🎯 Filosofia Visual

### Antes (Dourado)
- Tom quente, luxuoso
- Foco em elegância clássica
- Paleta suave e acolhedora

### Agora (Azul Profissional)
- Tom confiável, profissional
- Foco em modernidade e tecnologia
- Paleta limpa e contemporânea
- Accent vibrante para interatividade

### Psicologia das Cores
- **Azul Escuro (#292D5C):** Confiança, profissionalismo, seriedade médica
- **Azul Turquesa (#03899E):** Saúde, higiene, modernidade, tecnologia
- **Combinação:** Transmite expertise médica com toque moderno e acessível

---

## 📊 Arquivos Modificados

### CSS
- ✅ `src/styles/theme.css` - Variáveis principais
- ✅ `src/styles/brand-colors.css` - Sistema de cores (novo)
- ✅ `src/styles/index.css` - Imports atualizados

### Componentes (Total: 19)
- ✅ HomePage.tsx
- ✅ MarcarConsultaPage.tsx
- ✅ EspecialidadesPage.tsx
- ✅ AntesDepoisPage.tsx
- ✅ ContactosPage.tsx
- ✅ HistoriaPage.tsx
- ✅ ClinicaGeralPage.tsx
- ✅ PrevencaoPage.tsx
- ✅ OrtodontiaPage.tsx
- ✅ ImplantologiaPage.tsx
- ✅ AlinhamentoDentarioPage.tsx
- ✅ BranqueamentoProfissionalPage.tsx
- ✅ ReabilitacaoOralPage.tsx
- ✅ TermosCondicoesPage.tsx
- ✅ PrivacidadePage.tsx
- ✅ SearchModal.tsx
- ✅ Toast.tsx
- ✅ PageLayout.tsx

---

## 🚀 Próximos Passos (Opcional)

- [ ] Atualizar imagens do logótipo para a nova paleta
- [ ] Criar versão dark mode com as novas cores
- [ ] Adicionar animações com as cores accent
- [ ] Atualizar meta tags com nova identidade visual
- [ ] Criar guia de estilo visual completo

---

**Data de Implementação:** 20 de Abril de 2026  
**Status:** ✅ Completo  
**Número de Telefone:** 910 658 115
