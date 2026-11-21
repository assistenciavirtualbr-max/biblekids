# 📖 BibleKids - Gerador Multilíngue de Aulas e Atividades Bíblicas Infantis

Uma aplicação web moderna, pedagógica e 100% responsiva projetada para educadores cristãos, voluntários e professores da Escola Bíblica Infantil (EBI), Ministério Infantil e famílias cristãs no mundo inteiro.

---

## 🌍 Suporte Multilíngue Oficial (4 Idiomas)

A aplicação conta com um seletor instantâneo de idioma no cabeçalho com suporte a:
- 🇧🇷 **Português (Brasil e países lusófonos)**
- 🇺🇸 **Inglês (English - Global)**
- 🇪🇸 **Espanhol (Español - América Latina e Espanha)**
- 🇫🇷 **Francês (Français - França, Canadá e África francófona)**

Ao trocar de idioma, **toda a interface, as histórias adaptadas para 3 faixas etárias, os versículos de ouro, as aplicações cotidianas, as orações, o caça-palavras de 5 palavras, o quiz com feedback imediato, o desafio da semana e as exportações (PDF/DOCX)** são traduzidos instantaneamente.

---

## ⚡ Criação a Partir do Versículo ou Texto Escrito

O educador pode criar a aula de duas formas simples e intuitivas:
1. **📖 Indicação do Versículo / Referência:** Digite o livro, capítulo e versículo (ex: *João 6:1-14*, *Salmo 23*, *Mateus 19:14*, *Genesis 1:1*).
2. **✍️ Texto Escrito do Versículo:** Cole ou digite o texto do versículo (ex: *"Porque Deus amou o mundo de tal maneira..."*, *"O Senhor é o meu pastor e nada me faltará"*, *"Car Dieu a tant aimé le monde..."*, *"Jehová es mi pastor; nada me faltará"*).

O sistema detecta automaticamente o tema bíblico, mapeia para as histórias completas ou cria uma aula inédita estruturada pedagogicamente!

---

## 🎨 Estúdio Visual de Imagens Aprimorado

Para cada lição bíblica, o aplicativo reúne duas imagens coordenadas:
1. **✨ Ilustração de Apresentação (Estilo Animação 3D Pixar):**
   - Cores quentes, iluminação volumétrica e personagens expressivos e acolhedores no padrão de animações cinematográficas familiares.
2. **🖍️ Desenho para Colorir (Pure Black & White Line Art):**
   - A mesma cena correspondente em contorno preto sólido, fundo 100% branco, zero cinzas, zero sombras, perfeito para lápis de cor e giz de cera.

### Ferramentas Integradas do Estúdio:
- ⚡ **Gerar Imagem com IA (1 Clique):** Criação direta em alta definição via IA integrada.
- 🔄 **Nova Variação:** Gera uma nova versão mudando a semente criativa.
- 📁 **Enviar Minha Imagem / Upload Local:** Permite ao professor carregar qualquer imagem ou desenho do próprio computador.
- 🖌️ **Acentuar Traço P&B (Filtro Canvas):** Converte e limpa qualquer imagem para contorno preto e branco puro diretamente no navegador.
- 📋 **Copiar Prompt Mestre Otimizado:** Prompts prontos para Midjourney, ChatGPT/DALL-E 3, Leonardo AI ou Bing.
- ⬇️ **Baixar Imagens em Alta Resolução:** Download individual das artes para uso em projeção ou impressão.

---

## 🌟 Recursos Pedagógicos da Folha de Atividades (A4)

- **📖 A Palavra Contada:** Narrativa bíblica em 3 níveis etários (3 a 5 anos, 6 a 8 anos e 9 a 12 anos).
- **⭐ Versículo para Memorizar:** Citação bíblica de destaque para guardar no coração.
- **🎯 Prática & Aplicação da Palavra:** 3 áreas da vida da criança — Em Casa (família), Na Escola (recreio) e No Coração (amizades).
- **🙏 Oração da Criança:** Oração simples e sincera baseada no ensino da lição.
- **🔍 Caça-Palavras Bíblico:** Grade interativa com exatamente 5 palavras-chave e botão de gabarito.
- **❓ Quiz Bíblico:** 3 perguntas de múltipla escolha com gabarito imediato e feedback visual.
- **🏆 Desafio Prático da Semana:** Cartão destacável pontilhado para a geladeira com assinatura da criança e do responsável.
- **📋 Gabarito Oficial do Professor:** Respostas completas no rodapé para facilidade do educador.
- **🔊 Narração por Áudio (Text-to-Speech):** Leitura com ritmo calmo e voz nativa no idioma selecionado.
- **🖨️ Exportação Completa:** Impressão em A4 com CSS otimizado, Download em PDF em 1 clique e Download em Microsoft Word (.docx) editável.

---

## 🚀 Como Executar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador ou iniciar um servidor HTTP local:

```bash
# Com Python:
python -m http.server 8090 --directory "."

# Ou com Node.js (npx serve):
npx serve .
```

Acesse em seu navegador: **`http://localhost:8090/`** (ou `http://localhost:8090/bible-kids-generator/` a partir da raiz).

---

## 📂 Estrutura de Arquivos

```
bible-kids-generator/
├── index.html                  # Interface semântica multilíngue com abas e seletores
├── style.css                   # Design system infantil, responsivo e regras A4 @media print
├── app.js                      # Motor multilíngue (PT, EN, ES, FR), estúdio de IA e exportações
├── PROTOCOLO_E_MANUAL_EBI.md   # Manual pedagógico e diretrizes visuais da EBI
└── assets/
    ├── html2pdf.bundle.min.js  # Gerador local de PDF A4
    ├── docx.umd.js             # Gerador local de Word (.docx)
    └── images/                 # Banco de ilustrações 3D Pixar e Lineworks de colorir
```
