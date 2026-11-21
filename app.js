/**
 * ==========================================================================
 * BIBLEKIDS - GERADOR DE AULAS E ATIVIDADES BÍBLICAS INFANTIS
 * Motor Multilíngue (PT, EN, ES, FR), Geração de Imagens & Interpretação Bíblica
 * ==========================================================================
 */

// --- 1. DICIONÁRIO DE TRADUÇÃO DA INTERFACE (I18N) ---
const I18N_STRINGS = {
  pt: {
    app_title: "BibleKids",
    header_subtitle: "Gerador de Aulas e Atividades Bíblicas Infantis",
    lang_label: "🌍 Idioma:",
    badge_ebi: "🏫 Escola Bíblica Infantil (EBI)",
    badge_biblical: "🕊️ 100% Bíblico & Pedagógico",
    panel_title: "🎨 Criar Aula Bíblica",
    panel_subtitle: "Indique a referência ou cole o texto escrito do versículo bíblico.",
    tab_ref: "Indicar Versículo",
    tab_text: "Texto Escrito / Trecho",
    label_passage_ref: "📖 Referência ou Livro e Capítulo:",
    hint_passage_ref: "Digite o livro e versículo ou o tema da aula.",
    label_verse_text: "✍️ Texto Escrito do Versículo Bíblico:",
    hint_verse_text: "O sistema interpreta o versículo e cria a aula, a ilustração e os exercícios.",
    label_version: "📜 Tradução / Versão Bíblica:",
    opt_version_standard: "📖 Tradução Padrão Recomendada",
    label_age: "👶 Faixa Etária da Criança:",
    opt_age_35: "👶 3 a 5 anos (Primeira Infância / Maternal)",
    opt_age_68: "👧 6 a 8 anos (Alfabetização / Primários)",
    opt_age_912: "🧑 9 a 12 anos (Juniores / Pré-adolescentes)",
    btn_generate: "Gerar Aula e Atividades",
    label_presets: "📚 Aulas Já Criadas (1 Clique):",
    btn_toggle_api: "Configurar Chave Gemini (Opcional)",
    api_help_text: "Com o motor inteligente integrado, todas as histórias bíblicas já contam com imagens, atividades e traduções automáticas. Para passagens personalizadas exclusivas via IA avançada, insira sua chave gratuita:",
    status_ready: "Material pronto para aula e impressão",
    status_generating: "Interpretando versículo e criando aula bíblica...",
    status_custom_success: "Material bíblico gerado com sucesso!",
    btn_speech: "Ouvir História",
    btn_speech_stop: "Parar Áudio",
    btn_print: "Imprimir Folha A4",
    btn_pdf: "Baixar PDF",
    btn_docx: "Baixar Word (.docx)",
    label_student_name: "Nome da Criança:",
    label_date: "Data:",
    meta_bible: "Bíblia Sagrada",
    sec1_title: "1. A Palavra Contada",
    sec1_tag: "História Bíblica Adaptada",
    sec2_title: "2. Ilustração da Palavra",
    sec2_tag: "Ponto Principal da Lição",
    label_word_image: "✨ Imagem da Palavra:",
    loading_pixar: "Gerando ilustração 3D Pixar via IA...",
    btn_gen_ai_pixar: "Gerar Imagem com IA",
    btn_regen_variation: "Nova Variação",
    btn_upload_image: "Enviar Minha Imagem",
    btn_copy_prompt_pixar: "Copiar Prompt",
    btn_download_image: "Baixar Imagem",
    label_memory_verse: "Versículo para Guardar no Coração:",
    sec3_title: "3. Hora de Colorir!",
    sec3_tag: "Desenho Fiel à Passagem",
    sec3_instructions: "Pinte bem bonito este desenho correspondente à história bíblica:",
    coloring_caption_default: "Linhas pretas nítidas sobre fundo branco — perfeito para lápis de cor e giz de cera!",
    loading_coloring: "Criando desenho para colorir (traço puro P&B)...",
    btn_gen_ai_coloring: "Gerar Desenho com IA",
    btn_filter_lineart: "Acentuar Traço P&B",
    btn_upload_drawing: "Enviar Meu Desenho",
    btn_copy_prompt_coloring: "Copiar Prompt",
    btn_download_coloring: "Baixar para Colorir",
    sec4_title: "4. Prática & Aplicação da Palavra",
    sec4_tag: "Vivendo a Mensagem no Dia a Dia",
    sec4_instructions: "Como você pode colocar essa história da Bíblia em prática na sua vida? Veja as três áreas:",
    app_home_title: "Em Casa (Família)",
    app_school_title: "Na Escola (Recreio)",
    app_heart_title: "No Coração (Amizades)",
    label_prayer: "Minha Oração com Jesus:",
    sec5_title: "5. Caça-Palavras Bíblico",
    sec5_tag: "5 Palavras da Mensagem",
    sec5_instructions: "Encontre na grade as 5 palavras-chave que aprendemos na história:",
    btn_toggle_answers: "Mostrar / Ocultar Respostas",
    label_words_to_find: "🎯 Palavras a Encontrar:",
    tip_wordsearch: "💡 Dica: No computador ou celular, você pode clicar nas letras para marcar!",
    sec6_title: "6. Quiz Bíblico",
    sec6_tag: "Perguntas de Múltipla Escolha",
    sec6_instructions: "Marque um ( X ) na resposta certa de acordo com a história da Bíblia:",
    sec7_title: "7. Desafio Prático da Semana",
    sec7_tag: "Para Colar na Geladeira",
    badge_weekly_mission: "Minha Missão com Jesus Esta Semana:",
    sig_child: "Assinatura da Criança",
    sig_guardian: "Assinatura do Responsável",
    teacher_guide_title: "Gabarito Oficial & Dicas do Professor",
    teacher_guide_tag: "Uso do Educador",
    label_quiz_answers: "Respostas do Quiz:",
    label_words_answers: "Palavras do Caça-Palavras:",
    footer_text: "Educando corações na Palavra de Deus • Uso liberado para Escolas Bíblicas, Igrejas e Famílias",
    years_label: "anos"
  },

  en: {
    app_title: "BibleKids",
    header_subtitle: "Children's Bible Lesson & Activity Sheet Generator",
    lang_label: "🌍 Language:",
    badge_ebi: "🏫 Sunday School & Kids Ministry",
    badge_biblical: "🕊️ 100% Biblical & Educational",
    panel_title: "🎨 Create Bible Lesson",
    panel_subtitle: "Enter the reference or paste the written scripture verse.",
    tab_ref: "Scripture Reference",
    tab_text: "Written Verse Text",
    label_passage_ref: "📖 Reference, Book and Chapter:",
    hint_passage_ref: "Type the book, chapter and verse or lesson theme.",
    label_verse_text: "✍️ Written Biblical Verse Text:",
    hint_verse_text: "The system reads the verse text and generates the lesson, illustration and activities.",
    label_version: "📜 Bible Version / Translation:",
    opt_version_standard: "📖 Recommended Standard Translation",
    label_age: "👶 Child Age Group:",
    opt_age_35: "👶 Ages 3 to 5 (Early Childhood / Preschool)",
    opt_age_68: "👧 Ages 6 to 8 (Primary / Early Elementary)",
    opt_age_912: "🧑 Ages 9 to 12 (Juniors / Pre-teens)",
    btn_generate: "Generate Lesson & Activities",
    label_presets: "📚 Ready-to-Use Lessons (1 Click):",
    btn_toggle_api: "Configure Gemini Key (Optional)",
    api_help_text: "All core biblical stories are fully pre-built with illustrations, coloring pages and activities. To generate fresh lessons from unique custom verses via AI, enter your free API key:",
    status_ready: "Worksheet ready for teaching and printing",
    status_generating: "Interpreting scripture and generating lesson...",
    status_custom_success: "Custom Bible lesson generated successfully!",
    btn_speech: "Listen to Story",
    btn_speech_stop: "Stop Audio",
    btn_print: "Print A4 Sheet",
    btn_pdf: "Download PDF",
    btn_docx: "Download Word (.docx)",
    label_student_name: "Child's Name:",
    label_date: "Date:",
    meta_bible: "Holy Bible",
    sec1_title: "1. The Spoken Word",
    sec1_tag: "Adapted Bible Story",
    sec2_title: "2. Word Illustration",
    sec2_tag: "Main Visual Theme",
    label_word_image: "✨ Word Illustration:",
    loading_pixar: "Generating 3D Pixar illustration with AI...",
    btn_gen_ai_pixar: "Generate AI Image",
    btn_regen_variation: "New Variation",
    btn_upload_image: "Upload My Image",
    btn_copy_prompt_pixar: "Copy Prompt",
    btn_download_image: "Download Image",
    label_memory_verse: "Memory Verse to Keep in the Heart:",
    sec3_title: "3. Coloring Time!",
    sec3_tag: "Coloring Page Faithful to the Story",
    sec3_instructions: "Color this picture nicely according to the Bible story:",
    coloring_caption_default: "Crisp black lines on pure white background — perfect for crayons and colored pencils!",
    loading_coloring: "Creating coloring page (pure B&W line art)...",
    btn_gen_ai_coloring: "Generate Coloring Page",
    btn_filter_lineart: "Sharpen B&W Lines",
    btn_upload_drawing: "Upload My Drawing",
    btn_copy_prompt_coloring: "Copy Prompt",
    btn_download_coloring: "Download Coloring Page",
    sec4_title: "4. Practice & Daily Application",
    sec4_tag: "Living God's Word Every Day",
    sec4_instructions: "How can you put this Bible story into practice in your life? Look at these three areas:",
    app_home_title: "At Home (Family)",
    app_school_title: "At School (Recess)",
    app_heart_title: "In the Heart (Friendships)",
    label_prayer: "My Prayer with Jesus:",
    sec5_title: "5. Bible Word Search",
    sec5_tag: "5 Key Words from the Story",
    sec5_instructions: "Find in the grid the 5 key words we learned in today's story:",
    btn_toggle_answers: "Show / Hide Answers",
    label_words_to_find: "🎯 Words to Find:",
    tip_wordsearch: "💡 Tip: On computer or tablet, click on letters to highlight them!",
    sec6_title: "6. Bible Quiz",
    sec6_tag: "Multiple Choice Questions",
    sec6_instructions: "Mark an ( X ) on the correct answer according to the Bible story:",
    sec7_title: "7. Weekly Practice Challenge",
    sec7_tag: "To Stick on the Refrigerator",
    badge_weekly_mission: "My Mission with Jesus This Week:",
    sig_child: "Child's Signature",
    sig_guardian: "Parent / Guardian Signature",
    teacher_guide_title: "Teacher's Official Guide & Answer Key",
    teacher_guide_tag: "Teacher's Use Only",
    label_quiz_answers: "Quiz Answers:",
    label_words_answers: "Word Search Words:",
    footer_text: "Nurturing young hearts in God's Word • Free for Sunday Schools, Churches and Christian Families",
    years_label: "years old"
  },

  es: {
    app_title: "BibleKids",
    header_subtitle: "Generador de Clases y Actividades Bíblicas Infantiles",
    lang_label: "🌍 Idioma:",
    badge_ebi: "🏫 Escuela Bíblica Infantil (EBI)",
    badge_biblical: "🕊️ 100% Bíblico y Pedagógico",
    panel_title: "🎨 Crear Clase Bíblica",
    panel_subtitle: "Indique la referencia o pegue el texto escrito del versículo bíblico.",
    tab_ref: "Indicar Versículo",
    tab_text: "Texto Escrito / Pasaje",
    label_passage_ref: "📖 Referencia o Libro y Capítulo:",
    hint_passage_ref: "Escriba el libro y versículo o el tema de la lección.",
    label_verse_text: "✍️ Texto Escrito del Versículo Bíblico:",
    hint_verse_text: "El sistema interpreta el versículo y crea la lección, la ilustración y los ejercicios.",
    label_version: "📜 Traducción / Versión Bíblica:",
    opt_version_standard: "📖 Traducción Estándar Recomendada",
    label_age: "👶 Grupo de Edad del Niño:",
    opt_age_35: "👶 3 a 5 años (Primera Infancia / Maternal)",
    opt_age_68: "👧 6 a 8 años (Primarios / Alfabetización)",
    opt_age_912: "🧑 9 a 12 años (Menores / Preadolescentes)",
    btn_generate: "Generar Clase y Actividades",
    label_presets: "📚 Clases Listas (1 Clic):",
    btn_toggle_api: "Configurar Clave Gemini (Opcional)",
    api_help_text: "Las principales historias bíblicas ya vienen con ilustraciones y actividades preparadas. Para pasajes personalizados inéditos vía IA avanzada, ingrese su clave gratuita:",
    status_ready: "Material listo para la clase e impresión",
    status_generating: "Interpretando versículo y generando clase bíblica...",
    status_custom_success: "¡Material bíblico generado con éxito!",
    btn_speech: "Escuchar Historia",
    btn_speech_stop: "Detener Audio",
    btn_print: "Imprimir Hoja A4",
    btn_pdf: "Descargar PDF",
    btn_docx: "Descargar Word (.docx)",
    label_student_name: "Nombre del Niño:",
    label_date: "Fecha:",
    meta_bible: "Santa Biblia",
    sec1_title: "1. La Palabra Contada",
    sec1_tag: "Historia Bíblica Adaptada",
    sec2_title: "2. Ilustración de la Palabra",
    sec2_tag: "Punto Principal de la Lección",
    label_word_image: "✨ Ilustración de la Palabra:",
    loading_pixar: "Generando ilustración 3D Pixar con IA...",
    btn_gen_ai_pixar: "Generar Imagen con IA",
    btn_regen_variation: "Nueva Variación",
    btn_upload_image: "Subir Mi Imagen",
    btn_copy_prompt_pixar: "Copiar Prompt",
    btn_download_image: "Descargar Imagen",
    label_memory_verse: "Versículo para Guardar en el Corazón:",
    sec3_title: "3. ¡Hora de Colorear!",
    sec3_tag: "Dibujo Fiel a la Historia",
    sec3_instructions: "Colorea bien bonito este dibujo correspondiente a la historia bíblica:",
    coloring_caption_default: "Líneas negras nítidas sobre fondo blanco — ¡perfecto para crayones y lápices de colores!",
    loading_coloring: "Creando dibujo para colorear (líneas puras B&N)...",
    btn_gen_ai_coloring: "Generar para Colorear",
    btn_filter_lineart: "Realzar Trazos B&N",
    btn_upload_drawing: "Subir Mi Dibujo",
    btn_copy_prompt_coloring: "Copiar Prompt",
    btn_download_coloring: "Descargar para Colorear",
    sec4_title: "4. Práctica y Aplicación Diaria",
    sec4_tag: "Viviendo el Mensaje en el Día a Día",
    sec4_instructions: "¿Cómo puedes poner esta historia de la Biblia en práctica en tu vida? Mira las tres áreas:",
    app_home_title: "En Casa (Familia)",
    app_school_title: "En la Escuela (Recreio)",
    app_heart_title: "En el Corazón (Amistades)",
    label_prayer: "Mi Oración con Jesús:",
    sec5_title: "5. Sopa de Letras Bíblica",
    sec5_tag: "5 Palabras Clave del Relato",
    sec5_instructions: "Encuentra en la cuadrícula las 5 palabras clave que aprendimos en la historia:",
    btn_toggle_answers: "Mostrar / Ocultar Respuestas",
    label_words_to_find: "🎯 Palabras a Encontrar:",
    tip_wordsearch: "💡 Consejo: ¡En la computadora o celular puedes tocar las letras para marcarlas!",
    sec6_title: "6. Quiz Bíblico",
    sec6_tag: "Preguntas de Opción Múltiple",
    sec6_instructions: "Marca con una ( X ) la respuesta correcta según la historia bíblica:",
    sec7_title: "7. Desafío Práctico Semanal",
    sec7_tag: "Para Pegar en el Refrigerador",
    badge_weekly_mission: "Mi Misión con Jesús Esta Semana:",
    sig_child: "Firma del Niño",
    sig_guardian: "Firma del Tutor / Padres",
    teacher_guide_title: "Guía Oficial y Respuestas del Maestro",
    teacher_guide_tag: "Uso del Educador",
    label_quiz_answers: "Respuestas del Quiz:",
    label_words_answers: "Palabras de la Sopa de Letras:",
    footer_text: "Educando corazones en la Palabra de Dios • Uso libre para Escuelas Bíblicas, Iglesias y Familias",
    years_label: "años"
  },

  fr: {
    app_title: "BibleKids",
    header_subtitle: "Générateur de Leçons et d'Activités Bibliques pour Enfants",
    lang_label: "🌍 Langue :",
    badge_ebi: "🏫 École du Dimanche (Écodim / EBI)",
    badge_biblical: "🕊️ 100% Biblique et Pédagogique",
    panel_title: "🎨 Créer une Leçon Biblique",
    panel_subtitle: "Indiquez la référence ou collez le texte écrit du verset biblique.",
    tab_ref: "Indiquer le Verset",
    tab_text: "Texte Écrit / Extrait",
    label_passage_ref: "📖 Référence, Livre et Chapitre :",
    hint_passage_ref: "Entrez le livre et verset ou le thème de la leçon.",
    label_verse_text: "✍️ Texte Écrit du Verset Biblique :",
    hint_verse_text: "Le système analyse le verset et génère la leçon, l'illustration et les exercices.",
    label_version: "📜 Traduction / Version Biblique :",
    opt_version_standard: "📖 Traduction Recommandée Standard",
    label_age: "👶 Tranche d'Âge de l'Enfant :",
    opt_age_35: "👶 3 à 5 ans (Petite Enfance / Maternelle)",
    opt_age_68: "👧 6 à 8 ans (CP / Primaire)",
    opt_age_912: "🧑 9 à 12 ans (Juniors / Préadolescents)",
    btn_generate: "Générer la Leçon et les Activités",
    label_presets: "📚 Leçons Prêtes (1 Clic) :",
    btn_toggle_api: "Configurer la Clé Gemini (Optionnel)",
    api_help_text: "Toutes les grandes histoires bibliques sont préconfigurées avec illustrations et activités. Pour des versets personnalisés inédits via l'IA avancée, insérez votre clé gratuite :",
    status_ready: "Document prêt pour la leçon et l'impression",
    status_generating: "Interprétation du verset et génération de la leçon...",
    status_custom_success: "Leçon biblique générée avec succès !",
    btn_speech: "Écouter l'Histoire",
    btn_speech_stop: "Arrêter l'Audio",
    btn_print: "Imprimer la Feuille A4",
    btn_pdf: "Télécharger en PDF",
    btn_docx: "Télécharger en Word (.docx)",
    label_student_name: "Nom de l'Enfant :",
    label_date: "Date :",
    meta_bible: "Sainte Bible",
    sec1_title: "1. La Parole Racontée",
    sec1_tag: "Histoire Biblique Adaptée",
    sec2_title: "2. Illustration de la Parole",
    sec2_tag: "Point Central de la Leçon",
    label_word_image: "✨ Image de la Parole :",
    loading_pixar: "Génération de l'illustration 3D Pixar par l'IA...",
    btn_gen_ai_pixar: "Générer l'Image par IA",
    btn_regen_variation: "Nouvelle Variation",
    btn_upload_image: "Téléverser Mon Image",
    btn_copy_prompt_pixar: "Copier le Prompt",
    btn_download_image: "Télécharger l'Image",
    label_memory_verse: "Verset d'Or à Garder dans le Cœur :",
    sec3_title: "3. L'Heure du Coloriage !",
    sec3_tag: "Dessin Fidèle à l'Histoire",
    sec3_instructions: "Colorie joliment ce dessin inspiré de l'histoire biblique :",
    coloring_caption_default: "Contours noirs nets sur fond blanc pur — idéal pour crayons et feutres !",
    loading_coloring: "Création du coloriage (traits purs N&B)...",
    btn_gen_ai_coloring: "Générer le Coloriage",
    btn_filter_lineart: "Renforcer Traits N&B",
    btn_upload_drawing: "Téléverser Mon Dessin",
    btn_copy_prompt_coloring: "Copier le Prompt",
    btn_download_coloring: "Télécharger le Coloriage",
    sec4_title: "4. Pratique & Application Quotidienne",
    sec4_tag: "Vivre le Message au Quotidien",
    sec4_instructions: "Comment mettre cette histoire de la Bible en pratique dans ta vie ? Regarde ces trois domaines :",
    app_home_title: "À la Maison (Famille)",
    app_school_title: "À l'École (Récréation)",
    app_heart_title: "Dans le Cœur (Amitiés)",
    label_prayer: "Ma Prière avec Jésus :",
    sec5_title: "5. Mots Mêlés Bibliques",
    sec5_tag: "5 Mots Clés de l'Histoire",
    sec5_instructions: "Trouve dans la grille les 5 mots clés que nous avons appris dans l'histoire :",
    btn_toggle_answers: "Afficher / Masquer Réponses",
    label_words_to_find: "🎯 Mots à Trouver :",
    tip_wordsearch: "💡 Astuce : Sur ordinateur ou tablette, clique sur les lettres pour les surligner !",
    sec6_title: "6. Quiz Biblique",
    sec6_tag: "Questions à Choix Multiples",
    sec6_instructions: "Coche d'une croix ( X ) la bonne réponse selon l'histoire de la Bible :",
    sec7_title: "7. Défi Pratique de la Semaine",
    sec7_tag: "À Coller sur le Réfrigérateur",
    badge_weekly_mission: "Ma Mission avec Jésus Cette Semaine :",
    sig_child: "Signature de l'Enfant",
    sig_guardian: "Signature du Responsable / Parent",
    teacher_guide_title: "Guide Officiel & Réponses de l'Enseignant",
    teacher_guide_tag: "Usage de l'Éducateur",
    label_quiz_answers: "Réponses du Quiz :",
    label_words_answers: "Mots des Mots Mêlés :",
    footer_text: "Nourrir les cœurs d'enfants de la Parole de Dieu • Libre d'usage pour Écoles du Dimanche, Églises et Familles",
    years_label: "ans"
  }
};

// --- 2. BANCO DE DADOS DE HISTÓRIAS BÍBLICAS MULTILÍNGUES ---
const STORIES_DB = {
  "criacao": {
    "en": {
      "application": {
        "heart": "Praise God daily for life, breath, and the wonder of the natural world around us.",
        "home": "Turn off water taps, take care of our home, and appreciate the blessings God gave our family.",
        "school": "Never litter on school grounds and treat living plants and animals with respect."
      },
      "challenge": "This week I will care for a plant or outdoor space and thank God for His beautiful Creation!",
      "imageColorDesc": "Light, sun, ocean, blooming plants, and friendly animals formed by the loving voice of God.",
      "imageColoringDesc": "Coloring page of Creation showing the bright sun, stars, ocean, trees, and animals.",
      "prayer": "Creator of the universe, thank You for the warm sun, cool water, green trees, and for making me with love. Amen!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Let there be light!",
            "Let there be rain!",
            "Let there be stars!"
          ],
          "question": "What did God say on the first day of Creation?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Animals",
            "In the image and likeness of God",
            "Angels"
          ],
          "question": "In whose image was humanity created according to Genesis 1?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Saw it was unfinished",
            "Saw that it was very good",
            "Wanted to redo it"
          ],
          "question": "How did God view His completed creation?"
        }
      ],
      "ref": "Genesis 1",
      "storyByAge": {
        "3-5": "In the very beginning, there was only God! Then God spoke: 'Let there be light!', and brightness filled everything! God made the blue sky, the warm sun, sparkling oceans, and colorful flowers. He made singing birds and playful animals. And best of all, He created you and me with tender love!",
        "6-8": "In Genesis 1 we see God's magnificent power. By His Word, He separated light from darkness, created the sky, seas, stars, and living creatures. On the sixth day, God created humanity in His own image and likeness to care for the world. God looked at everything He had made, and it was very good!",
        "9-12": "The Creation account establishes that our world is not an accident, but the intentional masterpiece of a wise Creator. Human beings hold sacred dignity as God's image-bearers, called to stewardship over creation and lifelong worship of the Living God."
      },
      "title": "The Creation of the World",
      "verse": {
        "ref": "Genesis 1:1",
        "text": "In the beginning God created the heavens and the earth."
      },
      "words": [
        "GOD",
        "WORLD",
        "LIGHT",
        "EARTH",
        "LIFE"
      ]
    },
    "es": {
      "application": {
        "heart": "Agradecer a Dios cada mañana por el regalo de la vida y la belleza del mundo.",
        "home": "Cuidar el agua, no desperdiciar recursos y valorar las cosas que Dios nos da.",
        "school": "No arrojar basura al suelo y cuidar las plantas y animales del colegio."
      },
      "challenge": "Esta semana regaré una planta o cuidaré un jardín dando gracias a Dios por Su Creación.",
      "imageColorDesc": "La luz, el sol, las plantas, los mares y los animales creados por la poderosa voz de Dios.",
      "imageColoringDesc": "Dibujo para colorear de la creación con el sol, la luna, las estrellas y la naturaleza viva.",
      "prayer": "Creador del universo, gracias por el sol, los animales y por haberme creado con tanto amor. ¡Alabado sea Tu nombre! ¡Amén!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "¡Sea la luz!",
            "¡Haya lluvia!",
            "¡Haya estrellas!"
          ],
          "question": "¿Qué dijo Dios el primer día de la Creación?"
        },
        {
          "answerIndex": 1,
          "options": [
            "De los animales",
            "A imagen y semejanza de Dios",
            "De los ángeles"
          ],
          "question": "¿A semejanza de quién fue creado el ser humano?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Vio que faltaban cosas",
            "Vio que era muy buena en gran manera",
            "No le gustó"
          ],
          "question": "¿Cómo consideró Dios toda Su creación al terminar?"
        }
      ],
      "ref": "Génesis 1",
      "storyByAge": {
        "3-5": "¡Al principio solo existía Dios! Entonces Dios dijo: '¡Sea la luz!', ¡y todo brilló con hermosura! Dios hizo el cielo azul, el sol radiante, los mares con peces y las plantas con flores. Creó las aves y los animales. ¡Y por último, nos creó a ti y a mí con mucho amor!",
        "6-8": "En Génesis 1 contemplamos el poder creador de Dios. Con Su sola Palabra ordenó el universo: separó la luz de las tinieblas, formó las estrellas y llenó la tierra de vida. En el sexto día creó al ser humano a Su imagen y semejanza. Y vio Dios todo lo que había hecho, ¡y era muy bueno!",
        "9-12": "El relato de la Creación enseña que la vida tiene propósito y diseño divino. El ser humano posee un valor incalculable como portador de la imagen de Dios, llamado a cuidar con responsabilidad ecológica la creación y a adorar al Hacedor de todas las cosas."
      },
      "title": "La Creación del Mundo",
      "verse": {
        "ref": "Génesis 1:1",
        "text": "En el principio creó Dios los cielos y la tierra."
      },
      "words": [
        "DIOS",
        "MUNDO",
        "LUZ",
        "TIERRA",
        "VIDA"
      ]
    },
    "fr": {
      "application": {
        "heart": "Remercier Dieu chaque jour pour la vie, la famille et les merveilles de la nature.",
        "home": "Économiser l'eau, prendre soin de notre maison et remercier Dieu pour Ses bienfaits.",
        "school": "Ne pas jeter de déchets par terre et respecter les plantes et les animaux dans la cour."
      },
      "challenge": "Cette semaine, je prendrai soin d'une plante ou de la nature en remerciant Dieu pour Sa Création !",
      "imageColorDesc": "La lumière, le soleil, les plantes, les océans et les animaux créés par la voix d'amour de Dieu.",
      "imageColoringDesc": "Coloriage de la Création avec le soleil, les étoiles, les mers, les arbres et les animaux.",
      "prayer": "Créateur de l'univers, merci pour le soleil, la terre, les animaux et pour m'avoir façonné avec amour. Sois loué à jamais ! Amen !",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Que la lumière soit !",
            "Qu'il pleuve !",
            "Que les étoiles brillent !"
          ],
          "question": "Qu'a dit Dieu le premier jour de la Création ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Des animaux",
            "À l'image et à la ressemblance de Dieu",
            "Des anges"
          ],
          "question": "À quelle ressemblance l'être humain a-t-il été créé ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Incomplète",
            "Très bonne",
            "À recommencer"
          ],
          "question": "Comment Dieu a-t-Il jugé toute Sa création achevée ?"
        }
      ],
      "ref": "Genèse 1",
      "storyByAge": {
        "3-5": "Au tout début, il n'y avait que Dieu ! Alors Dieu parla : 'Que la lumière soit !', et tout devint lumineux ! Dieu fit le ciel bleu, le soleil chaud, les mers et les jolies fleurs. Il fit aussi les oiseaux et les animaux. Et pour finir, Il nous a créés toi et moi avec un amour infini !",
        "6-8": "Dans Genèse 1, nous contemplons la puissance créatrice de Dieu. Par Sa seule Parole, Il organisa l'univers : Il sépara la lumière des ténèbres, créa les étoiles, les mers et les êtres vivants. Au sixième jour, Il créa l'homme et la femme à Son image. Et Dieu vit que tout cela était très bon !",
        "9-12": "Le récit de la Création révèle l'origine voulue et bienveillante de la vie. L'être humain reçoit une dignité unique en tant qu'image de Dieu, établi gardien responsable de la nature et invité à célébrer la grandeur de son Créateur."
      },
      "title": "La Création du Monde",
      "verse": {
        "ref": "Genèse 1:1",
        "text": "Au commencement, Dieu créa les cieux et la terre."
      },
      "words": [
        "DIEU",
        "MONDE",
        "LUMIERE",
        "TERRE",
        "VIE"
      ]
    },
    "icon": "🌍✨",
    "id": "criacao",
    "imageColor": "assets/images/creation_pixar.jpg",
    "imageColoring": "assets/images/creation_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Agradecer a Deus todos os dias pela vida, pela família e pela beleza da criação.",
        "home": "Cuidar da casa, fechar a torneira para economizar água e tratar com carinho o que Deus nos deu.",
        "school": "Não jogar lixo no chão e respeitar as plantas e os animais criados por Deus."
      },
      "challenge": "Esta semana vou regar uma plantinha ou cuidar da natureza e agradecer a Deus pela Criação!",
      "imageColorDesc": "A luz, o sol, as plantas, os mares e os animais criados pela poderosa voz de Deus!",
      "imageColoringDesc": "Desenho para colorir da criação com o sol, lua, estrelas, animais e natureza viva.",
      "prayer": "Criador do universo, obrigado pelo sol, pela água fresca, pelos animais e pelo Teu amor que me criou. Louvado seja o Teu nome! Amém!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Haja luz!",
            "Haja chuva!",
            "Haja estrelas!"
          ],
          "question": "O que Deus disse no primeiro dia da Criação?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Aos animais",
            "À imagem e semelhança de Deus",
            "Aos anjos"
          ],
          "question": "A quem o ser humano foi criado semelhante segundo Gênesis 1?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Viu que estava incompleta",
            "Viu que era muito boa",
            "Viu que precisava mudar"
          ],
          "question": "Como Deus considerou toda a Sua criação ao terminar?"
        }
      ],
      "ref": "Gênesis 1",
      "storyByAge": {
        "3-5": "No começo de tudo só existia Deus! Então Deus falou: 'Haja luz!', e tudo ficou brilhante e lindo! Deus fez o céu azul, o sol amarelinho, os mares com peixinhos e as plantinhas com flores coloridas. Fez também os passarinhos e os animais. E por último, fez a mim e a você com muito amor!",
        "6-8": "Em Gênesis 1 vemos o poder criador de Deus. Com Sua Palavra, Ele trouxe à existência a luz, o firmamento, as árvores frutíferas e as estrelas no céu. Em seis dias Deus orquestrou o universo com beleza perfeita. No sexto dia, criou o ser humano à Sua imagem e semelhança. E viu Deus que tudo era muito bom!",
        "9-12": "A narrativa da Criação estabelece a cosmovisão bíblica: o universo é fruto do design amoroso e sábio de um Criador pessoal. O ser humano possui dignidade especial como imagem de Deus e guardião da Terra, chamado a cuidar da natureza e a adorar ao Criador de todas as coisas."
      },
      "title": "A Criação do Mundo",
      "verse": {
        "ref": "Gênesis 1:1",
        "text": "No princípio criou Deus os céus e a terra."
      },
      "words": [
        "DEUS",
        "MUNDO",
        "LUZ",
        "TERRA",
        "VIDA"
      ]
    }
  },
  "criancas": {
    "en": {
      "application": {
        "heart": "Keep a humble, trusting and pure heart before God every day.",
        "home": "Knowing that Jesus loves me personally and that I can talk to Him in prayer anytime.",
        "school": "Treat my classmates with kindness and include anyone who feels left out or lonely."
      },
      "challenge": "This week I will give a big warm hug to my parents, tell them I love them, and pray for children everywhere!",
      "imageColorDesc": "Jesus warmly welcomes children and babies into His arms under the warm golden sunlight.",
      "imageColoringDesc": "Pure black and white coloring page of Jesus blessing the children with open arms.",
      "prayer": "Dear Jesus, thank You for loving children so deeply. Bless my life, my family, and my friends today. Amen!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Turn the children away",
            "Throw a party",
            "Give them gifts"
          ],
          "question": "What did the disciples try to do when people brought children to Jesus?"
        },
        {
          "answerIndex": 1,
          "options": [
            "'Send them away'",
            "'Let the little children come to me'",
            "'I am too busy'"
          ],
          "question": "What did Jesus say to His disciples?"
        },
        {
          "answerIndex": 1,
          "options": [
            "He sent them home",
            "He embraced and blessed them with love",
            "He told them to be quiet"
          ],
          "question": "What did Jesus do with the children?"
        }
      ],
      "ref": "Matthew 19:13-15",
      "storyByAge": {
        "3-5": "One day, moms and dads brought their little babies to meet Jesus. Jesus opened His arms wide and said: 'Come here! Let the little children come to me!'. Jesus held the children, hugged each one, and blessed them. Jesus loves you so much!",
        "6-8": "In Matthew 19:13-15, parents brought little children to Jesus so He might place His hands on them and pray. When the disciples tried to send them away, Jesus said: 'Let the little children come to me, for the kingdom of heaven belongs to such as these!' He took them in His arms and blessed them.",
        "9-12": "Matthew 19:13-15 reveals Jesus' profound love and valuation of children. In a society that often overlooked the weak, Jesus placed children at the center of the Kingdom of Heaven, teaching that childlike faith, humility, and trust are essential to enter God's presence."
      },
      "title": "Jesus Blesses the Little Children",
      "verse": {
        "ref": "Matthew 19:14",
        "text": "Jesus said, 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.'"
      },
      "words": [
        "JESUS",
        "CHILDREN",
        "KINGDOM",
        "HEAVEN",
        "LOVE"
      ]
    },
    "es": {
      "application": {
        "heart": "Mantener mi corazón limpio, humilde y lleno de confianza en Dios.",
        "home": "Saber que Jesús me ama y que puedo hablar con Él en oración en cualquier momento del día.",
        "school": "Tratar a mis compañeros con cariño e incluir a quien esté triste o solo en el recreo."
      },
      "challenge": "Esta semana le daré un abrazo muy fuerte a mis padres diciéndoles que los amo y oraré por otros niños.",
      "imageColorDesc": "Jesús sentado acogiendo con cariño a los niños en Sus brazos bajo la luz dorada del sol.",
      "imageColoringDesc": "Dibujo para colorear en blanco y negro puro de Jesús bendiciendo a los niños con amor.",
      "prayer": "Querido Jesús, gracias por amar a los niños con tanto cariño. Bendice mi vida, mi familia y a mis amigos. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Intentaron apartar a los niños",
            "Hicieron una fiesta",
            "Dieron regalos"
          ],
          "question": "¿Qué hicieron los discípulos cuando trajeron los niños a Jesús?"
        },
        {
          "answerIndex": 1,
          "options": [
            "'Manden a los niños lejos'",
            "'Dejad a los niños venir a mí'",
            "'No tengo tiempo'"
          ],
          "question": "¿Qué les dijo Jesús a Sus discípulos?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Los mandó a casa",
            "Los abrazó y los bendijo con amor",
            "Pidió silencio"
          ],
          "question": "¿Qué hizo Jesús con los niños?"
        }
      ],
      "ref": "Mateo 19:13-15",
      "storyByAge": {
        "3-5": "Un día, muchos papás y mamás llevaron a sus hijitos a ver a Jesús. Jesús abrió Sus brazos con mucho amor y dijo: '¡Vengan aquí! ¡Dejen que los niños vengan a mí!'. Jesús abrazó a cada niño y los bendijo. ¡Jesús te ama muchísimo!",
        "6-8": "En Mateo 19:13-15, trajeron niños a Jesús para que pusiera las manos sobre ellos y orase. Los discípulos reprendieron a la gente, pero Jesús les dijo con ternura: '¡Dejad a los niños venir a mí, porque de los tales es el reino de los cielos!'. Luego los tomó en Sus brazos y los bendijo.",
        "9-12": "El pasaje de Mateo 19:13-15 resalta el valor supremo de los niños en el Reino de Dios. Jesús enseñó que para entrar en el Reino es necesario tener un corazón humilde, confiado y puro como el de un niño, derribando prejuicios humanos con Su gracia divina."
      },
      "title": "Jesús Bendice a los Niños",
      "verse": {
        "ref": "Mateo 19:14",
        "text": "Pero Jesús dijo: Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de los cielos."
      },
      "words": [
        "JESUS",
        "NINOS",
        "REINO",
        "CIELOS",
        "AMOR"
      ]
    },
    "fr": {
      "application": {
        "heart": "Garder un cœur humble, pur et rempli de confiance envers Dieu.",
        "home": "Savoir que Jésus m'aime profondément et que je peux Lui parler dans la prière à tout moment.",
        "school": "Traiter mes camarades avec douceur et accueillir celui qui est triste ou isolé dans la cour."
      },
      "challenge": "Cette semaine, je ferai un gros câlin à mes parents en leur disant que je les aime, et je prierai pour tous les enfants !",
      "imageColorDesc": "Jésus accueille tendrement les enfants dans Ses bras sous la douce lumière du soleil.",
      "imageColoringDesc": "Coloriage aux traits noirs purs de Jésus bénissant les enfants avec amour.",
      "prayer": "Cher Jésus, merci d'aimer les enfants avec une telle tendresse. Bénis ma vie, ma famille et tous mes amis. Amen !",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Ils ont voulu repousser les enfants",
            "Ils ont fait une fête",
            "Ils ont donné des jouets"
          ],
          "question": "Qu'ont fait les disciples quand on a amené les enfants à Jésus ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "'Renvoyez-les chez eux'",
            "'Laissez les petits enfants venir à moi'",
            "'Je n'ai pas le temps'"
          ],
          "question": "Qu'a répondu Jésus à Ses disciples ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Il les a renvoyés",
            "Il les a serrés dans Ses bras et les a bénis",
            "Il leur a demandé de se taire"
          ],
          "question": "Qu'a fait Jésus avec les enfants ?"
        }
      ],
      "ref": "Matthieu 19:13-15",
      "storyByAge": {
        "3-5": "Un jour, des papas et des mamans amenèrent leurs tout-petits à Jésus. Jésus ouvrit grand Ses bras et dit : 'Venez ! Laissez les petits enfants venir à moi !'. Jésus prit les bébés sur Ses genoux, les serra fort et les bénit. Jésus t'aime tellement !",
        "6-8": "Dans Matthieu 19:13-15, on amena des enfants à Jésus pour qu'Il prie pour eux. Les disciples voulurent les renvoyer, mais Jésus dit avec autorité et tendresse : 'Laissez les petits enfants venir à moi, car le royaume des cieux est pour ceux qui leur ressemblent !'. Il posa Ses mains sur eux et les bénit.",
        "9-12": "Le récit de Matthieu 19:13-15 illustre l'importance capitale des enfants aux yeux de Dieu. Jésus enseigne que pour faire partie du Royaume des Cieux, nous devons posséder la foi simple, sincère et humble d'un enfant qui fait entièrement confiance à son Père céleste."
      },
      "title": "Jésus Bénit les Petits Enfants",
      "verse": {
        "ref": "Matthieu 19:14",
        "text": "Et Jésus dit : Laissez les petits enfants, et ne les empêchez pas de venir à moi; car le royaume des cieux est pour ceux qui leur ressemblent."
      },
      "words": [
        "JESUS",
        "ENFANTS",
        "ROYAUME",
        "CIEUX",
        "AMOUR"
      ]
    },
    "icon": "👶❤️",
    "id": "criancas",
    "imageColor": "assets/images/children_pixar.jpg",
    "imageColoring": "assets/images/children_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Manter meu coraçãozinho puro, sincero e cheio de confiança em Deus.",
        "home": "Saber que Jesus me ama muito e que posso conversar com Ele em oração a qualquer momento do dia.",
        "school": "Tratar meus colegas com carinho e acolher quem estiver triste ou sozinho no recreio."
      },
      "challenge": "Esta semana vou dar um abraço bem apertado em meus pais dizendo que os amo e fazer uma oração pelas crianças do mundo!",
      "imageColorDesc": "Jesus acolhe com carinho as criancinhas nos braços sob a luz do sol.",
      "imageColoringDesc": "Desenho para colorir de Jesus abençoando as crianças em contorno preto e branco puro.",
      "prayer": "Querido Jesus, obrigado por amar as crianças com tanto carinho. Abençoa minha vida, minha família e meus amigos. Amém!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Afastar as crianças",
            "Fizeram uma festa",
            "Deram brinquedos"
          ],
          "question": "O que os discípulos tentaram fazer quando trouxeram as crianças a Jesus?"
        },
        {
          "answerIndex": 1,
          "options": [
            "'Mandem as crianças embora'",
            "'Deixai vir a mim as criancinhas'",
            "'Não tenho tempo agora'"
          ],
          "question": "O que Jesus disse aos Seus discípulos?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Mandou-as para casa",
            "Abraçou-as e as abençoou com amor",
            "Pediu silêncio"
          ],
          "question": "O que Jesus fez com as crianças?"
        }
      ],
      "ref": "Mateus 19:13-15",
      "storyByAge": {
        "3-5": "Um dia, muitos papais e mamães levaram seus filhinhos pequeninos para ver Jesus. Jesus abriu Seus braços bem grandes e disse: 'Venham cá! Deixem as criancinhas virem a mim!'. Jesus pegou os bebês no colo, abraçou cada um e os abençoou. Jesus ama muito você!",
        "6-8": "Em Mateus 19:13-15, pessoas trouxeram crianças a Jesus para que Ele orasse por elas. Os discípulos achavam que as crianças incomodavam, mas Jesus os repreendeu com ternura: 'Deixai vir a mim as criancinhas, porque das tais é o Reino dos Céus!'. Jesus as abraçou e abençoou a todas.",
        "9-12": "A passagem de Mateus 19:13-15 estabelece o Reino de Deus através da pureza e humildade das crianças. Ao acolher os pequeninos e declarar que deles é o Reino, Jesus ensina que para estar perto de Deus precisamos de um coração sincero, humilde e confiante como o de uma criança."
      },
      "title": "Jesus Abençoa as Criancinhas",
      "verse": {
        "ref": "Mateus 19:14",
        "text": "Disse-lhes Jesus: Deixai vir a mim as criancinhas e não as impeçais, porque das tais é o Reino dos Céus."
      },
      "words": [
        "JESUS",
        "CRIANCAS",
        "REINO",
        "CEUS",
        "AMOR"
      ]
    }
  },
  "cruz": {
    "en": {
      "application": {
        "heart": "Rest in the unchanging knowledge that you are unconditionally loved by God.",
        "home": "Practice heartfelt forgiveness with parents and siblings without holding grudges.",
        "school": "Never return insult for insult; respond with peace and kindness as Jesus did."
      },
      "challenge": "This week I will practice genuine forgiveness whenever someone upsets me, remembering the cross!",
      "imageColorDesc": "The cross on the gentle hill with radiant celestial light and the dove of peace.",
      "imageColoringDesc": "Coloring page with the wooden cross, divine rays of light and garden flowers.",
      "prayer": "Lord Jesus, thank You for Your endless love on the cross. Teach me to forgive others freely and love with all my heart. Amen!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "'Father, forgive them'",
            "He called down fire",
            "He stayed silent angrily"
          ],
          "question": "What did Jesus pray on the cross?"
        },
        {
          "answerIndex": 1,
          "options": [
            "A long earthly life",
            "'Today you will be with me in Paradise'",
            "Nothing"
          ],
          "question": "What did Jesus promise to the repentant man beside Him?"
        },
        {
          "answerIndex": 1,
          "options": [
            "The Roman guards",
            "Joseph of Arimathea",
            "Strangers"
          ],
          "question": "Who honorably placed Jesus in a new garden tomb?"
        }
      ],
      "ref": "Luke 23:26-56",
      "storyByAge": {
        "3-5": "Jesus opened His arms wide in love to teach us the greatest forgiveness! Even when people were unkind, Jesus looked up to heaven and prayed: 'Father, forgive them!'. Jesus loves us with all His heart!",
        "6-8": "In Luke 23, we see the greatest demonstration of love in human history. Hanging upon the cross for our salvation, Jesus prayed: 'Father, forgive them, for they do not know what they are doing.' He promised Paradise to the repentant man and gave His life for us.",
        "9-12": "The crucifixion in Luke 23 represents the climax of God's redemptive plan. Through voluntary sacrifice, Christ demonstrated supreme love, offering forgiveness to His executioners and securing eternal life for all who place their trust in Him."
      },
      "title": "The Great Love of Jesus on the Cross",
      "verse": {
        "ref": "Luke 23:34",
        "text": "Jesus said, 'Father, forgive them, for they do not know what they are doing.'"
      },
      "words": [
        "JESUS",
        "CROSS",
        "LOVE",
        "FORGIVE",
        "HEAVEN"
      ]
    },
    "es": {
      "application": {
        "heart": "Tener la certeza de que Jesús nos ama con amor eterno y perfecto.",
        "home": "Aprender a pedir perdón y perdonar sinceramente a mis padres y hermanos en casa.",
        "school": "No responder con insultos ante provocaciones; responder con paz y bondad como Jesús."
      },
      "challenge": "Esta semana practicaré el perdón sincero hacia alguien que me haya ofendido, recordando la cruz.",
      "imageColorDesc": "La cruz en la suave colina con la luz celestial de la gracia y la paloma de la paz.",
      "imageColoringDesc": "Dibujo para colorear con la cruz de madera, los rayos divinos y las flores del jardín.",
      "prayer": "Señor Jesús, gracias por Tu amor infinito en la cruz. Enséñame a perdonar a los demás con un corazón puro. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "'Padre, perdónalos, porque no saben lo que hacen'",
            "Pidió castigo",
            "Guardó silencio con enojo"
          ],
          "question": "¿Qué oró Jesús en la cruz?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Volver a su casa",
            "'Hoy estarás conmigo en el Paraíso'",
            "Ninguna esperanza"
          ],
          "question": "¿Qué prometió Jesús al hombre que se arrepintió?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Los soldados",
            "José de Arimatea",
            "Nadie"
          ],
          "question": "¿Quién colocó a Jesús con cuidado en el sepulcro?"
        }
      ],
      "ref": "Lucas 23:26-56",
      "storyByAge": {
        "3-5": "¡Jesús abrió Sus brazos de amor para enseñarnos el perdón! Aunque algunas personas fueron malas, Jesús oró: '¡Padre, perdónalos!'. ¡El amor de Jesús es más fuerte que todo!",
        "6-8": "En Lucas 23:26-56 aprendemos la lección de misericordia más hermosa. En la cruz, Jesús oró por quienes le hacían daño diciendo: 'Padre, perdónalos, porque no saben lo que hacen', y le prometió el Paraíso al hombre arrepentido.",
        "9-12": "El relato de Lucas 23 destaca el perdón redentor de Cristo. Al entregar Su vida voluntariamente, Jesús triunfó sobre el pecado y nos dejó el modelo definitivo de gracia: amar incluso a quienes nos ofenden."
      },
      "title": "El Gran Amor de Jesús en la Cruz",
      "verse": {
        "ref": "Lucas 23:34",
        "text": "Y Jesús decía: Padre, perdónalos, porque no saben lo que hacen."
      },
      "words": [
        "JESUS",
        "CRUZ",
        "AMOR",
        "PERDON",
        "GRACIA"
      ]
    },
    "fr": {
      "application": {
        "heart": "Garder la certitude que je suis infiniment aimé par Jésus quoi qu'il arrive.",
        "home": "Apprendre à demander pardon et à pardonner de tout cœur à mes parents et mes frères et sœurs.",
        "school": "Ne pas répondre par la colère quand quelqu'un est désagréable ; répondre avec douceur comme Jésus."
      },
      "challenge": "Cette semaine, je pardonnerai sincèrement à quelqu'un qui m'a blessé, en me rappelant la croix !",
      "imageColorDesc": "La croix sur la colline illuminée par la grâce divine et la colombe de paix.",
      "imageColoringDesc": "Coloriage avec la croix de bois, les rayons célestes et les fleurs du jardin.",
      "prayer": "Seigneur Jésus, merci pour Ton amour parfait sur la croix. Apprends-moi à pardonner et à aimer les autres. Amen !",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "'Père, pardonne-leur, car ils ne savent ce qu'ils font'",
            "Il a demandé vengeance",
            "Il est resté silencieux en colère"
          ],
          "question": "Qu'a prié Jésus sur la croix ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "De rentrer chez lui",
            "'Aujourd'hui tu seras avec moi dans le Paradis'",
            "Rien du tout"
          ],
          "question": "Qu'a promis Jésus à l'homme repentant à Ses côtés ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Les soldats romains",
            "Joseph d'Arimathée",
            "Personne"
          ],
          "question": "Qui a déposé Jésus avec respect dans le sépulcre ?"
        }
      ],
      "ref": "Luc 23:26-56",
      "storyByAge": {
        "3-5": "Jésus a ouvert grand Ses bras d'amour pour nous apprendre à pardonner ! Même quand des gens ont été méchants, Jésus a prié : 'Père céleste, pardonne-leur !'. L'amour de Jésus est plus fort que tout !",
        "6-8": "Dans Luc 23, Jésus nous donne la plus belle preuve d'amour. Sur la croix, Il a prié pour Ses ennemis : 'Père, pardonne-leur, car ils ne savent ce qu'ils font'. Il a aussi promis le Paradis à l'homme repentant à Ses côtés.",
        "9-12": "La croix dans Luc 23 est le sommet de la rédemption. En pardonnant à Ses bourreaux et en donnant Sa vie pure, Christ a brisé le pouvoir de la haine et nous a offert la réconciliation avec Dieu."
      },
      "title": "L'Amour de Jésus sur la Croix",
      "verse": {
        "ref": "Luc 23:34",
        "text": "Jésus dit : Père, pardonne-leur, car ils ne savent ce qu'ils font."
      },
      "words": [
        "JESUS",
        "CROIX",
        "AMOUR",
        "PARDON",
        "PARADIS"
      ]
    },
    "icon": "✝️❤️",
    "id": "cruz",
    "imageColor": "assets/images/cross_pixar.jpg",
    "imageColoring": "assets/images/cross_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Guardar a certeza no coração de que sou infinitamente amado por Jesus.",
        "home": "Aprender a pedir desculpas e a perdoar de verdade meus pais e irmãos sem guardar mágoa.",
        "school": "Não revidar com grosseria quando alguém chatear você; responder com paz e bondade como Jesus fez."
      },
      "challenge": "Esta semana vou perdoar com sinceridade quem me chatear, lembrando do amor de Jesus na cruz!",
      "imageColorDesc": "A cruz no monte com a luz divina da graça rompendo os céus e a pomba da paz.",
      "imageColoringDesc": "Desenho para colorir com a cruz, os raios de luz celestial e as flores do jardim.",
      "prayer": "Senhor Jesus, obrigado pelo Teu amor infinito na cruz. Ensina-me a ser manso e a perdoar de todo o coração. Amém!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "'Pai, perdoa-lhes, porque não sabem o que fazem'",
            "Pediu fogo do céu",
            "Ficou em silêncio zangado"
          ],
          "question": "O que Jesus orou na cruz?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Voltar para casa",
            "'Hoje estarás comigo no Paraíso'",
            "Nenhuma esperança"
          ],
          "question": "O que Jesus prometeu ao homem arrependido?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Soldados",
            "José de Arimateia",
            "Ninguém"
          ],
          "question": "Quem cuidou de Jesus com carinho e o colocou no sepulcro?"
        }
      ],
      "ref": "Lucas 23:26-56",
      "storyByAge": {
        "3-5": "Jesus abriu Seus braços de amor para nos ensinar o perdão! Mesmo quando algumas pessoas foram maldosas, Jesus orou: 'Papai do Céu, perdoa essas pessoas!'. O amor de Jesus é mais forte que tudo!",
        "6-8": "Em Lucas 23:26-56, aprendemos sobre a maior prova de amor da história. Na cruz, estendendo os braços por nós, Jesus orou: 'Pai, perdoa-lhes, porque não sabem o que fazem'. Ele nos perdoou e nos deu a certeza do Paraíso!",
        "9-12": "O sacrifício voluntário de Cristo na cruz é o ponto central da redenção cristã. Ao proclamar o perdão aos Seus algozes e a promessa de vida eterna ao ladrão arrependido, Jesus triunfou sobre o ódio com amor sacrificial perfeito."
      },
      "title": "O Grande Amor de Jesus na Cruz",
      "verse": {
        "ref": "Lucas 23:34",
        "text": "E dizia Jesus: Pai, perdoa-lhes, porque não sabem o que fazem."
      },
      "words": [
        "JESUS",
        "CRUZ",
        "AMOR",
        "PERDAO",
        "PARAISo"
      ]
    }
  },
  "daniel": {
    "en": {
      "application": {
        "heart": "Stand firm in doing what is right even when facing peer pressure.",
        "home": "Develop a blessed daily routine of prayer in the morning, at meals, and at bedtime.",
        "school": "Never be embarrassed about loving Jesus; pray and act with integrity at school."
      },
      "challenge": "This week I will pray faithfully 3 times every day just as Daniel did!",
      "imageColorDesc": "Daniel praying peacefully surrounded by gentle lions and God's shining angel.",
      "imageColoringDesc": "Coloring page of faithful Daniel praying among the peaceful lions.",
      "prayer": "Lord God, give me a bold and faithful heart like Daniel's to seek You constantly in prayer. Amen!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Once a week",
            "Three times a day",
            "Only on Sundays"
          ],
          "question": "How many times a day did Daniel pray to God?"
        },
        {
          "answerIndex": 0,
          "options": [
            "His mighty angel",
            "Royal guards",
            "Animal trainers"
          ],
          "question": "Whom did God send to protect Daniel in the den?"
        },
        {
          "answerIndex": 1,
          "options": [
            "He was injured",
            "He came out safe and unharmed",
            "He ran away"
          ],
          "question": "What happened to Daniel in the lions' den?"
        }
      ],
      "ref": "Daniel 6",
      "storyByAge": {
        "3-5": "Daniel loved talking to God in prayer three times every day! Unkind men threw him into a pit with big lions. But God sent a bright angel who shut the lions' mouths. They were gentle as kittens, and Daniel was completely safe!",
        "6-8": "Daniel faithfully prayed in his room three times a day. Jealous leaders passed an unjust law banning prayer to God. Even knowing the danger, Daniel kept praying. Thrown into the lions' den, God protected him, and the next morning he emerged without a scratch!",
        "9-12": "Daniel 6 highlights uncompromising spiritual integrity. When forced to choose between political security and devotion to God, Daniel remained steadfast. His miraculous deliverance led King Darius to proclaim God's sovereignty throughout the entire kingdom."
      },
      "title": "Daniel in the Lions' Den",
      "verse": {
        "ref": "Daniel 6:22",
        "text": "My God sent his angel, and he shut the mouths of the lions. They have not hurt me."
      },
      "words": [
        "DANIEL",
        "LIONS",
        "PRAYER",
        "ANGEL",
        "FAITH"
      ]
    },
    "es": {
      "application": {
        "heart": "Permanecer fiel a Dios incluso cuando los demás me presionen a hacer lo indebido.",
        "home": "Crear el hábito de orar tres veces al día: al levantarse, al comer y antes de dormir.",
        "school": "No avergonzarme de mi fe y dar buen ejemplo ante mis compañeros de clase."
      },
      "challenge": "Esta semana oraré puntualmente 3 veces al día como hacía Daniel.",
      "imageColorDesc": "Daniel orando en paz en el foso rodeado de leones mansos y el ángel de Dios.",
      "imageColoringDesc": "Dibujo para colorear de Daniel orando en el foso con los leones tranquilos.",
      "prayer": "Dios amado, dame la fe y el valor de Daniel para orar siempre y confiar en Tu protección. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "1 vez a la semana",
            "3 veces al día",
            "Solo los domingos"
          ],
          "question": "¿Cuántas veces al día oraba Daniel a Dios?"
        },
        {
          "answerIndex": 0,
          "options": [
            "A Su poderoso ángel",
            "A los soldados del rey",
            "A cazadores"
          ],
          "question": "¿A quién envió Dios para cerrar la boca de los leones?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Salió herido",
            "Salió sano y salvo sin rasguños",
            "Escapó de noche"
          ],
          "question": "¿Qué le pasó a Daniel en el foso?"
        }
      ],
      "ref": "Daniel 6",
      "storyByAge": {
        "3-5": "¡Daniel amaba orar a Dios tres veces al día! Unos hombres malos lo arrojaron a un foso con leones hambrientos. ¡Pero Dios envió un ángel resplandeciente que cerró la boca de los leones! Se portaron como gatitos mansos y Daniel salió sano y salvo.",
        "6-8": "Daniel oraba en su habitación con las ventanas abiertas hacia Jerusalén. Aunque firmaron una ley prohibiendo orar, Daniel no dejó de buscar a Dios. Fue arrojado al foso de los leones, pero a la mañana siguiente el rey comprobó que el Dios vivo lo había protegido milagrosamente.",
        "9-12": "Daniel 6 demuestra que la fidelidad a Dios trasciende cualquier ley terrenal injusta. Daniel no negoció sus convicciones. Su testimonio y rescate milagroso sirvieron para que el rey Darío reconociera al Dios de Daniel como el Dios viviente y eterno."
      },
      "title": "Daniel en el Foso de los Leones",
      "verse": {
        "ref": "Daniel 6:22",
        "text": "Mi Dios envió su ángel, el cual cerró la boca de los leones, para que no me hiciesen daño."
      },
      "words": [
        "DANIEL",
        "LEONES",
        "ORACION",
        "ANGEL",
        "FE"
      ]
    },
    "fr": {
      "application": {
        "heart": "Demeurer fidèle à Dieu même sous la pression de mon entourage.",
        "home": "Prendre l'habitude de prier le matin, aux repas et le soir au coucher.",
        "school": "Ne pas avoir honte de ma foi devant mes amis et faire preuve d'honnêteté partout."
      },
      "challenge": "Cette semaine, je prierai fidèlement 3 fois par jour à l'exemple de Daniel !",
      "imageColorDesc": "Daniel priant avec sérénité au milieu des lions dociles et l'ange envoyé de Dieu.",
      "imageColoringDesc": "Coloriage de Daniel priant dans la fosse aux côtés des lions paisibles.",
      "prayer": "Seigneur Dieu, accorde-moi le courage et la fidélité de Daniel pour Te prier chaque jour avec ferveur. Amen !",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Une fois par semaine",
            "Trois fois par jour",
            "Uniquement le dimanche"
          ],
          "question": "Combien de fois par jour Daniel priait-il Dieu ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Son ange puissant",
            "Les gardes du roi",
            "Des dompteurs"
          ],
          "question": "Qui Dieu a-t-Il envoyé pour fermer la gueule des lions ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Il a été blessé",
            "Il est sorti sain et sauf sans une égratignure",
            "Il a fui"
          ],
          "question": "Qu'est-il arrivé à Daniel dans la fosse ?"
        }
      ],
      "ref": "Daniel 6",
      "storyByAge": {
        "3-5": "Daniel aimait prier Dieu trois fois par jour ! Des hommes jaloux l'ont jeté dans une fosse avec de gros lions. Mais Dieu a envoyé un bel ange qui a fermé la bouche des lions. Ils sont devenus doux comme des chatons et Daniel est sorti sans une égratignure !",
        "6-8": "Daniel priait fidèlement chaque jour dans sa chambre tournée vers Jérusalem. Même lorsqu'un décret interdit de prier, Daniel resta fidèle. Jeté dans la fosse aux lions, Dieu envoya Son ange pour le garder. Au matin, le roi le trouva en parfaite santé !",
        "9-12": "Le chapitre 6 de Daniel illustre la fidélité héroïque. Face au choix entre le compromis politique et la fidélité à Dieu, Daniel choisit la loyauté absolue. Cette foi inébranlable amena le roi Darius à reconnaître la souveraineté éternelle du Dieu de Daniel."
      },
      "title": "Daniel dans la Fosse aux Lions",
      "verse": {
        "ref": "Daniel 6:22",
        "text": "Mon Dieu a envoyé son ange et fermé la gueule des lions, qui ne m'ont fait aucun mal."
      },
      "words": [
        "DANIEL",
        "LIONS",
        "PRIERE",
        "ANGE",
        "FOI"
      ]
    },
    "icon": "🦁👑",
    "id": "daniel",
    "imageColor": "assets/images/daniel_pixar.jpg",
    "imageColoring": "assets/images/daniel_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Permanecer fiel a Deus mesmo diante de dificuldades ou pressões dos outros.",
        "home": "Cultivar o hábito de orar de manhã, nas refeições e antes de dormir.",
        "school": "Não ter vergonha da minha fé diante dos colegas e agir sempre com integridade."
      },
      "challenge": "Esta semana vou orar pontualmente 3 vezes ao dia como Daniel fazia!",
      "imageColorDesc": "Daniel orando com serenidade cercado por leões mansos e o anjo do Senhor.",
      "imageColoringDesc": "Desenho para colorir de Daniel orando na cova com os leões amigos.",
      "prayer": "Deus amado, dá-me um coração corajoso e fiel como o de Daniel para Te buscar em oração todos os dias. Amém!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "1 vez na semana",
            "3 vezes ao dia",
            "Apenas no sábado"
          ],
          "question": "Quantas vezes ao dia Daniel orava a Deus?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Seu anjo poderoso",
            "Soldados do rei",
            "Domadores"
          ],
          "question": "Quem Deus enviou para proteger Daniel na cova?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Ficou ferido",
            "Saiu são e salvo sem arranhões",
            "Fugiu à noite"
          ],
          "question": "O que aconteceu com Daniel na cova dos leões?"
        }
      ],
      "ref": "Daniel 6",
      "storyByAge": {
        "3-5": "Daniel amava orar a Deus três vezes ao dia! Pessoas invejosas o jogaram numa cova funda com leões. Mas Deus enviou um anjo brilhante que fechou a boquinha de todos os leões. Eles viraram gatinhos mansos e Daniel saiu sem nenhum arranhão!",
        "6-8": "Daniel orava fielmente em seu quarto voltado para Jerusalém. Homens maus criaram uma lei proibindo orações, mas Daniel continuou fiel. Jogaram-no na cova dos leões, mas na manhã seguinte Daniel respondeu ao rei: 'Ó rei, Deus enviou Seu anjo e fechou a boca dos leões!'.",
        "9-12": "Daniel 6 é um tributo à fidelidade inabalável. Quando pressionado a renunciar sua devoção para salvar a própria vida, Daniel preferiu honrar a Deus. O livramento milagroso demonstrou ao império persa que o Senhor reina sobre todas as nações."
      },
      "title": "Daniel na Cova dos Leões",
      "verse": {
        "ref": "Daniel 6:22",
        "text": "O meu Deus enviou o seu anjo, e fechou a boca dos leões, para que não me fizessem dano."
      },
      "words": [
        "DANIEL",
        "LEOES",
        "ORACAO",
        "ANJO",
        "FE"
      ]
    }
  },
  "davi": {
    "en": {
      "application": {
        "heart": "Place full trust in God whenever confronting difficult challenges at school.",
        "home": "Never fear the dark or night terrors, knowing God Almighty watches over my room.",
        "school": "Stand up bravely for others against bullying and speak truth with kindness."
      },
      "challenge": "This week I will face one fear bravely by praying and trusting in God like David did!",
      "imageColorDesc": "Young David holding his sling and smooth stones, standing courageous in the name of the Lord.",
      "imageColoringDesc": "Coloring page of courageous David facing the giant with faith in God Almighty.",
      "prayer": "Almighty God, You are greater than any fear or giant. Fill my heart with David's bold faith today. Amen!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "10 stones",
            "5 smooth stones",
            "Only 1 stone"
          ],
          "question": "How many smooth stones did David take from the stream?"
        },
        {
          "answerIndex": 1,
          "options": [
            "In King Saul's name",
            "In the name of the Lord Almighty",
            "In his own name"
          ],
          "question": "In whose name did David face Goliath?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Tending sheep",
            "Leading the army",
            "Serving as king"
          ],
          "question": "What was David doing before the battle?"
        }
      ],
      "ref": "1 Samuel 17",
      "storyByAge": {
        "3-5": "David was a young shepherd boy who loved singing praises to God. A giant named Goliath tried to scare everyone. But David said: 'God is bigger than any giant!'. With a sling and smooth stone, David won because God was with him!",
        "6-8": "Goliath the giant intimidated the whole army of Israel. Young David arrived and asked: 'Who is this giant to defy the armies of the living God?'. Refusing heavy armor, David took his shepherd's staff, sling, and five smooth stones. In the name of the Lord, he defeated the giant!",
        "9-12": "The story of 1 Samuel 17 reminds us that God's power is not measured by human weapons or physical size. Where seasoned soldiers saw an unbeatable giant, David saw an opportunity for God's glory. When we face our own 'giants' — fear, anxiety, bullying — God fights for us."
      },
      "title": "David and Goliath",
      "verse": {
        "ref": "1 Samuel 17:45",
        "text": "You come against me with sword and spear and javelin, but I come against you in the name of the Lord Almighty."
      },
      "words": [
        "DAVID",
        "GOLIATH",
        "SLING",
        "FAITH",
        "COURAGE"
      ]
    },
    "es": {
      "application": {
        "heart": "Confiar en Dios ante exámenes difíciles o situaciones complicadas.",
        "home": "No tener miedo a la oscuridad ni a pesadillas, recordando que Dios guarda mi hogar.",
        "school": "Tener valor para defender a quien sufra burlas en la escuela con paz y respeto."
      },
      "challenge": "Esta semana venceré un miedo orando a Dios con valentía como David.",
      "imageColorDesc": "El joven David con su honda y piedras del arroyo, confiando con valentía en el Señor de los Ejércitos.",
      "imageColoringDesc": "Dibujo para colorear de David con su honda confiando en el poder de Dios frente a Goliat.",
      "prayer": "Dios Todopoderoso, gracias porque eres más grande que cualquier gigante. Llena mi corazón de fe y valentía. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "10 piedras",
            "5 piedras lisas",
            "Solo 1 piedra"
          ],
          "question": "¿Cuántas piedras lisas tomó David del arroyo?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Del rey Saúl",
            "De Jehová de los ejércitos",
            "En su propio nombre"
          ],
          "question": "¿En el nombre de quién fue David a la batalla?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Cuidaba las ovejas",
            "Era capitán del ejército",
            "Era juez"
          ],
          "question": "¿Qué hacía David antes de la batalla?"
        }
      ],
      "ref": "1 Samuel 17",
      "storyByAge": {
        "3-5": "David era un pastorcito valiente que cuidaba ovejas. Un gigante enorme llamado Goliat asustaba a todos. ¡Pero David no tuvo miedo! Tomó una piedrita en su honda y venció porque Dios estaba a su lado.",
        "6-8": "Goliat desafió a los ejércitos de Israel durante cuarenta días. David fue a llevar provisiones a sus hermanos y dijo: '¿Quién es este para desafiar a Dios?'. Con su cayado, su honda y cinco piedras lisas del arroyo, David derrotó al gigante en el nombre del Señor.",
        "9-12": "En 1 Samuel 17 vemos que la batalla es de Dios. Mientras los guerreros se fijaban en la estatura de Goliat, David confiaba en la grandeza del Dios todopoderoso. Ningún desafío humano es invencible cuando caminamos en el nombre del Señor."
      },
      "title": "David y el Gigante Goliat",
      "verse": {
        "ref": "1 Samuel 17:45",
        "text": "Tú vienes a mí con espada y lanza y jabalina; mas yo vengo a ti en el nombre de Jehová de los ejércitos."
      },
      "words": [
        "DAVID",
        "GOLIAT",
        "HONDA",
        "PIEDRA",
        "VALOR"
      ]
    },
    "fr": {
      "application": {
        "heart": "Faire confiance à Dieu lors des examens ou des défis scolaires.",
        "home": "Ne pas avoir peur du noir ou des mauvais rêves, sachant que le Seigneur protège ma chambre.",
        "school": "Avoir le courage de dire la vérité et défendre ceux qui sont victimes de moqueries avec douceur."
      },
      "challenge": "Cette semaine, je vaincrai une de mes peurs en priant avec assurance comme David !",
      "imageColorDesc": "Le jeune David avec sa fronde et ses pierres polies, fort de sa foi en l'Éternel des armées.",
      "imageColoringDesc": "Coloriage de David avec sa fronde, affrontant le géant avec courage et foi en Dieu.",
      "prayer": "Seigneur Dieu Tout-Puissant, Tu es plus grand que toutes mes peurs. Remplis mon cœur du courage et de la foi de David ! Amen !",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "10 pierres",
            "5 pierres polies",
            "Une seule pierre"
          ],
          "question": "Combien de pierres polies David a-t-il ramassées dans le torrent ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Du roi Saül",
            "Au nom de l'Éternel des armées",
            "En son propre nom"
          ],
          "question": "Au nom de qui David a-t-il marché contre Goliath ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Il gardait les brebis",
            "Il était général de l'armée",
            "Il vivait au palais"
          ],
          "question": "Que faisait David avant ce combat ?"
        }
      ],
      "ref": "1 Samuel 17",
      "storyByAge": {
        "3-5": "David était un jeune berger qui aimait Dieu. Un méchant géant nommé Goliath faisait peur à tout le monde. Mais David n'avait pas peur, car Dieu était son ami ! Avec une petite pierre et sa fronde, David a vaincu le géant !",
        "6-8": "Goliath effrayait l'armée d'Israël. Le jeune David entendit ses provocations et dit : 'Qui est cet homme pour défier l'armée du Dieu vivant ?'. Il refusa les armures lourdes, prit sa fronde et cinq pierres polies du torrent. Au nom de l'Éternel, il abattit le géant d'un seul tir !",
        "9-12": "Le récit de 1 Samuel 17 enseigne que la victoire dépend de la foi et non de la force humaine. Là où les soldats voyaient un obstacle insurmontable, David voyait la fidélité de Dieu. Aucun 'géant' — peur, anxiété, intimidation — n'est plus grand que le Tout-Puissant."
      },
      "title": "David et le Géant Goliath",
      "verse": {
        "ref": "1 Samuel 17:45",
        "text": "Tu marches contre moi avec l'épée, la lance et le javelot; et moi, je marche contre toi au nom de l'Éternel des armées."
      },
      "words": [
        "DAVID",
        "GOLIATH",
        "FRONDE",
        "PIERRE",
        "FOI"
      ]
    },
    "icon": "⚔️🛡️",
    "id": "davi",
    "imageColor": "assets/images/david_pixar.jpg",
    "imageColoring": "assets/images/david_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Confiar em Deus quando enfrentar provas difíceis ou desafios escolares.",
        "home": "Não ter medo do escuro ou de pesadelos, sabendo que o Senhor dos Exércitos protege a minha casa.",
        "school": "Ter coragem para falar a verdade e defender quem estiver sofrendo bullying com mansidão e firmeza."
      },
      "challenge": "Esta semana vou vencer um medo orando com coragem como Davi!",
      "imageColorDesc": "O jovem Davi com a funda e as pedrinhas do riacho, confiando com coragem no Senhor dos Exércitos!",
      "imageColoringDesc": "Desenho para colorir de Davi com sua funda, enfrentando o gigante com a força de Deus.",
      "prayer": "Senhor Deus Todo-Poderoso, Tu és maior do que qualquer medo. Enche o meu coraçãozinho de coragem e fé como o de Davi! Amém!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "10 pedras",
            "5 pedras lisas",
            "1 pedra apenas"
          ],
          "question": "Quantas pedras lisas do ribeiro Davi pegou?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Do rei Saul",
            "Do Senhor dos Exércitos",
            "Em seu próprio nome"
          ],
          "question": "Em nome de quem Davi foi lutar contra Golias?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Cuidava de ovelhas",
            "Era capitão do exército",
            "Morava no palácio"
          ],
          "question": "O que Davi fazia antes da batalha?"
        }
      ],
      "ref": "1 Samuel 17",
      "storyByAge": {
        "3-5": "Davi era um menino pastorzinho que cuidava de ovelhas. Apareceu um gigante muito bravo chamado Golias. Todos tiveram medo, menos Davi! Davi pegou pedrinhas, girou sua fundinha e venceu o gigante porque Deus estava com ele!",
        "6-8": "O gigante Golias desafiava o exército de Israel com ameaças. O jovem Davi ouviu e declarou: 'Quem é esse homem para afrontar o exército do Deus vivo?'. Recusou armaduras pesadas, levou apenas sua funda e cinco pedras lisas do ribeiro. Em nome do Senhor, venceu o gigante com uma pedrada certeira!",
        "9-12": "1 Samuel 17 demonstra que as maiores vitórias pertencem ao Senhor. Enquanto soldados experientes tremiam perante a força física de Golias, Davi via a situação sob a ótica da fé. Nenhum 'gigante' na nossa vida — medo, insegurança, zombaria — é páreo para o Deus que nos defende."
      },
      "title": "Davi e o Gigante Golias",
      "verse": {
        "ref": "1 Samuel 17:45",
        "text": "Tu vens a mim com espada, e com lança, e com escudo; porém eu vou a ti em nome do Senhor dos Exércitos."
      },
      "words": [
        "DAVI",
        "GOLIAS",
        "FUNDA",
        "PEDRA",
        "CORAGEM"
      ]
    }
  },
  "filipenses413": {
    "en": {
      "application": {
        "heart": "Rest in the truth that Christ's power is made perfect in our weakness.",
        "home": "Persevere through chores and responsibilities cheerfully with Christ's strength.",
        "school": "Pray before difficult assignments and trust God for focus and peace."
      },
      "challenge": "This week, whenever facing something hard, I will say: 'I can do all things through Christ!' and do my best!",
      "imageColorDesc": "Courage and strength granted by Jesus to conquer every challenge through faith.",
      "imageColoringDesc": "Coloring page showing spiritual courage, triumph, and Christ's power in us.",
      "prayer": "Lord Jesus, thank You for being my strength every day. With You by my side, I can do all things. Amen!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Through Christ who gives strength",
            "By our own effort alone",
            "By luck"
          ],
          "question": "Through whom can we do all things in Philippians 4:13?"
        },
        {
          "answerIndex": 0,
          "options": [
            "From Christ living in us",
            "From fame",
            "From physical size"
          ],
          "question": "Where does true spiritual courage come from?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Pray and trust Jesus",
            "Give up in anger",
            "Run away"
          ],
          "question": "What should we do when facing a difficult task?"
        }
      ],
      "ref": "Philippians 4:13",
      "storyByAge": {
        "3-5": "Even when we feel small, Jesus takes our little hands and gives us His mighty power! With Jesus, we are strong and brave to do what is right!",
        "6-8": "In Philippians 4:13, Paul teaches a wonderful secret: our true strength comes from Jesus! When we trust in Christ, He gives us peace to face hard school tests and never give up!",
        "9-12": "Philippians 4:13 reflects Paul's triumphant contentment in Christ regardless of trials. In Christ, we receive supernatural grace to overcome adversity and honor God in all things."
      },
      "title": "My Strength in Christ: Philippians 4:13",
      "verse": {
        "ref": "Philippians 4:13",
        "text": "I can do all this through him who gives me strength."
      },
      "words": [
        "JESUS",
        "STRENGTH",
        "FAITH",
        "POWER",
        "PEACE"
      ]
    },
    "es": {
      "application": {
        "heart": "Recordar que cuando me siento débil, Cristo me hace fuerte.",
        "home": "Cumplir mis deberes en casa con ánimo y sin quejarme, confiando en Dios.",
        "school": "Orar antes de un examen difícil pidiendo la sabiduría que viene de Jesús."
      },
      "challenge": "Esta semana diré con fe ante cualquier reto: '¡Todo lo puedo en Cristo que me fortalece!'.",
      "imageColorDesc": "La fuerza y el valor que Cristo nos otorga para vencer cualquier reto con fe.",
      "imageColoringDesc": "Dibujo para colorear de fortaleza espiritual, victoria y el poder de Cristo.",
      "prayer": "Señor Jesús, gracias por ser mi fortaleza en todo momento. ¡En Ti todo lo puedo! ¡Amén!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "En Cristo que nos fortalece",
            "En nosotros solos",
            "En la casualidad"
          ],
          "question": "¿En quién podemos todo según Filipenses 4:13?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Del poder de Jesús en el corazón",
            "Del dinero",
            "De la estatura"
          ],
          "question": "¿De dónde proviene la fuerza del cristiano?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Orar y confiar en Cristo",
            "Rendirnos enojados",
            "Huir"
          ],
          "question": "¿Qué debemos hacer ante una situación difícil?"
        }
      ],
      "ref": "Filipenses 4:13",
      "storyByAge": {
        "3-5": "¡Aunque seamos pequeños, Jesús toma nuestras manitas y nos da Su fuerza! ¡Con Jesús podemos ser valientes y buenos siempre!",
        "6-8": "¡En Filipenses 4:13 aprendemos un secreto poderoso! Nuestra fuerza no viene de los músculos, sino de Jesús. Con Su ayuda podemos superar retos y no rendirnos jamás.",
        "9-12": "Filipenses 4:13 nos enseña el contentamiento espiritual en Cristo. La fortaleza divina capacita al creyente para mantenerse firme y fiel ante cualquier circunstancia."
      },
      "title": "Mi Fortaleza es Jesús: Filipenses 4:13",
      "verse": {
        "ref": "Filipenses 4:13",
        "text": "Todo lo puedo en Cristo que me fortalece."
      },
      "words": [
        "JESUS",
        "FUERZA",
        "CRISTO",
        "PUEDO",
        "FE"
      ]
    },
    "fr": {
      "application": {
        "heart": "Savoir que dans ma faiblesse, la force de Jésus se manifeste pleinement.",
        "home": "Faire mes corvées et ranger ma chambre sans me décourager.",
        "school": "Prier Jésus avant un contrôle difficile et Lui demander Sa sagesse."
      },
      "challenge": "Cette semaine, face à un obstacle, je dirai avec foi : 'Je puis tout par Jésus qui me fortifie !'.",
      "imageColorDesc": "Le courage et la force accordés par Jésus pour surmonter tous les défis avec foi.",
      "imageColoringDesc": "Coloriage montrant la victoire spirituelle, la foi et la puissance de Christ en nous.",
      "prayer": "Seigneur Jésus, merci d'être ma force chaque jour. Avec Toi, je peux tout accomplir pour Ta gloire. Amen !",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Par Christ qui nous fortifie",
            "Par nous-mêmes uniquement",
            "Par chance"
          ],
          "question": "Par qui pouvons-nous tout accomplir dans Philippiens 4:13 ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "De la présence de Jésus dans le cœur",
            "De l'argent",
            "Des muscles"
          ],
          "question": "D'où vient la vraie force du chrétien ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Prier et faire confiance à Jésus",
            "Pleurer et abandonner",
            "Se fâcher"
          ],
          "question": "Que faire face à un devoir difficile ?"
        }
      ],
      "ref": "Philippiens 4:13",
      "storyByAge": {
        "3-5": "Même quand nous sommes tout petits, Jésus prend notre petite main et nous donne Sa grande force ! Avec Jésus, nous sommes courageux pour faire le bien !",
        "6-8": "Dans Philippiens 4:13, l'apôtre Paul nous livre un secret formidable : notre vraie force vient de Jésus ! Avec Lui, nous pouvons réussir nos devoirs et garder la paix !",
        "9-12": "Philippiens 4:13 exprime la victoire de la grâce chrétienne. Par la communion avec Christ, le croyant reçoit la persévérance et la force intérieure pour glorifier Dieu en toutes circonstances."
      },
      "title": "Ma Force en Christ : Philippiens 4:13",
      "verse": {
        "ref": "Philippiens 4:13",
        "text": "Je puis tout par celui qui me fortifie."
      },
      "words": [
        "JESUS",
        "FORCE",
        "CHRIST",
        "PUISSANCE",
        "FOI"
      ]
    },
    "icon": "💪✝️",
    "id": "filipenses413",
    "imageColor": "assets/images/filipenses_pixar.jpg",
    "imageColoring": "assets/images/filipenses_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Saber que nunca estou fraco quando Jesus habita no meu coração.",
        "home": "Não desistir de arrumar meu quarto ou ajudar em casa mesmo quando estiver cansado.",
        "school": "Orar a Jesus antes de fazer uma prova difícil na escola pedindo sabedoria e calma."
      },
      "challenge": "Esta semana, quando surgir uma tarefa difícil, vou orar: 'Tudo posso em Jesus que me fortalece!' e realizar com alegria!",
      "imageColorDesc": "Criança corajosa no topo da montanha comemorando com Jesus em um pôr do sol radiante de vitória e fé.",
      "imageColoringDesc": "Desenho para colorir de vitória e superação com Jesus nos fortalecendo no topo da montanha.",
      "prayer": "Senhor Jesus, obrigado por ser a minha força todos os dias. Quando eu achar que não consigo, lembra-me de que tudo posso em Ti! Amém!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Naquele que nos fortalece (Jesus)",
            "Em nossas próprias forças",
            "Na sorte"
          ],
          "question": "Em quem podemos todas as coisas segundo Filipenses 4:13?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Do poder de Cristo no coração",
            "Do dinheiro",
            "Do tamanho do corpo"
          ],
          "question": "De onde vem a verdadeira coragem do cristão?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Orar e confiar em Jesus",
            "Desistir e chorar",
            "Ficar com raiva"
          ],
          "question": "O que devemos fazer quando enfrentamos um desafio difícil?"
        }
      ],
      "ref": "Filipenses 4:13",
      "storyByAge": {
        "3-5": "Às vezes achamos que somos pequenininhos e não conseguimos fazer algo difícil. Mas Jesus segura a nossa mãozinha e nos dá a força Dele! Com Jesus, somos fortes e corajosos para fazer o bem!",
        "6-8": "Em Filipenses 4:13 o apóstolo Paulo nos ensina um segredo incrível: a nossa força verdadeira não vem dos nossos músculos, mas de Jesus! Quando confiamos em Cristo, Ele nos ajuda a vencer provas difíceis, a ser pacientes e a nunca desistir!",
        "9-12": "Filipenses 4:13 foi escrito por Paulo enquanto estava na prisão, demonstrando que o versículo não fala de superpoderes egoístas, mas de contentamento e poder espiritual concedidos por Cristo para suportar e vencer qualquer circunstância da vida."
      },
      "title": "Minha Força Vem de Jesus: Filipenses 4:13",
      "verse": {
        "ref": "Filipenses 4:13",
        "text": "Tudo posso naquele que me fortalece."
      },
      "words": [
        "JESUS",
        "FORCA",
        "TUDO",
        "POSSO",
        "FE"
      ]
    }
  },
  "joao316": {
    "en": {
      "application": {
        "heart": "Trust Jesus with my whole life as my personal Lord and Savior.",
        "home": "Rest in the certainty that God loves me unconditionally, and share that love with family.",
        "school": "Be a beacon of God's kindness at school, including others and sharing Christ's love."
      },
      "challenge": "This week I will memorize John 3:16 and tell someone: 'God loves you so much!'",
      "imageColorDesc": "God's boundless love in sending His Son Jesus to bring grace and eternal life to the world.",
      "imageColoringDesc": "Coloring page showing the cross, celestial light of salvation and God's love.",
      "prayer": "Heavenly Father, thank You for loving me so much and sending Jesus to be my Savior. Help me to shine Your love everywhere I go. Amen!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "He gave His one and only Son",
            "He stayed far away",
            "He gave up on us"
          ],
          "question": "How did God demonstrate His love according to John 3:16?"
        },
        {
          "answerIndex": 0,
          "options": [
            "They shall not perish but have eternal life",
            "They will be forgotten",
            "Nothing"
          ],
          "question": "What promise is given to whoever believes in Jesus?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Material riches",
            "Jesus Christ His Son",
            "Human wisdom"
          ],
          "question": "Who is the greatest gift God gave to the world?"
        }
      ],
      "ref": "John 3:16",
      "storyByAge": {
        "3-5": "Did you know God has a heart bigger than the whole wide world? He loved each of us so much that He sent His precious Son, our friend Jesus! Jesus came to wrap us in His love and give us eternal life in heaven. God's love never ever ends!",
        "6-8": "In John 3:16 we discover the most famous and beautiful verse in the Bible! God loved the entire world so deeply that He gave heaven's greatest treasure: Jesus. When we place our trust in Jesus, He washes away our mistakes, takes away our fears, and gives us eternal life!",
        "9-12": "John 3:16 encapsulates the heartbeat of the Christian Gospel. Salvation originates in God's unconditional, self-giving love. By giving His only begotten Son upon the cross, God bridged the gulf of sin, offering eternal life to anyone who receives Christ in genuine faith."
      },
      "title": "God's Greatest Love: John 3:16",
      "verse": {
        "ref": "John 3:16",
        "text": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
      },
      "words": [
        "GOD",
        "LOVED",
        "WORLD",
        "SON",
        "LIFE"
      ]
    },
    "es": {
      "application": {
        "heart": "Entregar mi corazón a Jesús con fe y confianza total en Su salvación.",
        "home": "Saber que soy infinitamente amado por Dios y ayudar en casa con alegría y agradecimiento.",
        "school": "Reflejar el amor de Dios con mis compañeros, tratando a todos con respeto y cariño."
      },
      "challenge": "Esta semana memorizaré Juan 3:16 con mi familia y le diré a un amigo: '¡Dios te ama muchísimo!'.",
      "imageColorDesc": "El amor infinito de Dios que envió a Su Hijo Jesús para darnos salvación y vida eterna.",
      "imageColoringDesc": "Dibujo para colorear con la cruz, la luz celestial de la salvación y el amor divino.",
      "prayer": "Querido Padre Celestial, gracias por amarme tanto y por darme a Jesús como mi Salvador. Ayúdame a amar a los demás como Tú me amas. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "De tal manera que dio a Su Hijo unigénito",
            "Con indiferencia",
            "Solo por un tiempo"
          ],
          "question": "¿De qué manera amó Dios al mundo según Juan 3:16?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Que no se pierda, mas tenga vida eterna",
            "Que estará solo",
            "Ninguna"
          ],
          "question": "¿Qué promesa tiene todo aquel que cree en Jesús?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Su Hijo Jesucristo",
            "Riquezas materiales",
            "Juguetes"
          ],
          "question": "¿Cuál es el regalo más grande que Dios dio a la humanidad?"
        }
      ],
      "ref": "Juan 3:16",
      "storyByAge": {
        "3-5": "¡Dios nos ama con un corazón más grande que el cielo! Nos ama tanto que envió a Su Hijo amado, Jesús. Jesús vino para cuidarnos y darnos una vida llena de paz y alegría para siempre. ¡El amor de Dios nunca se acaba!",
        "6-8": "¡En Juan 3:16 encontramos el versículo más hermoso de toda la Biblia! Dios amó al mundo de una manera tan grande que entregó a Su único Hijo. Cuando creemos en Jesús de todo corazón, Él nos perdona y nos da el regalo maravilloso de la vida eterna.",
        "9-12": "Juan 3:16 es el corazón del Evangelio. La salvación no es fruto de méritos humanos, sino del amor sacrificial de Dios Padre al entregar a Su Hijo unigénito en la cruz. Quien cree en Cristo recibe la promesa inquebrantable de la vida eterna."
      },
      "title": "El Gran Amor de Dios: Juan 3:16",
      "verse": {
        "ref": "Juan 3:16",
        "text": "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."
      },
      "words": [
        "DIOS",
        "AMO",
        "MUNDO",
        "HIJO",
        "VIDA"
      ]
    },
    "fr": {
      "application": {
        "heart": "Donner mon cœur à Jésus avec une foi sincère et grandir dans Sa paix.",
        "home": "Me souvenir chaque jour que je suis aimé de Dieu et faire preuve de douceur à la maison.",
        "school": "Être un reflet de l'amour de Jésus à l'école en respectant et aidant chacun."
      },
      "challenge": "Cette semaine, j'apprendrai Jean 3:16 par cœur et je dirai à un ami : 'Dieu t'aime tellement !'.",
      "imageColorDesc": "L'amour infini de Dieu qui a envoyé Son Fils Jésus pour apporter salut et vie éternelle.",
      "imageColoringDesc": "Coloriage avec la croix, la lumière de la grâce et le cœur de l'amour de Dieu.",
      "prayer": "Père céleste, merci de m'aimer d'un si grand amour et d'avoir donné Jésus pour me sauver. Remplis mon cœur de Ton amour. Amen !",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "En donnant Son Fils unique",
            "Avec indifférence",
            "Pour un court instant"
          ],
          "question": "Comment Dieu a-t-Il manifesté Son amour selon Jean 3:16 ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Qu'il ne périsse point mais ait la vie éternelle",
            "Qu'il sera oublié",
            "Rien"
          ],
          "question": "Quelle promesse est faite à quiconque croit en Jésus ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Son Fils bien-aimé Jésus-Christ",
            "Des richesses d'argent",
            "Des honneurs"
          ],
          "question": "Quel est le plus grand cadeau de Dieu pour le monde ?"
        }
      ],
      "ref": "Jean 3:16",
      "storyByAge": {
        "3-5": "Dieu a un cœur plus grand que tout l'univers ! Il nous aime tellement qu'Il a envoyé Son Fils bien-aimé, Jésus ! Jésus est venu pour prendre soin de nous et nous donner Sa joie pour toujours. L'amour de Dieu ne s'arrête jamais !",
        "6-8": "Dans Jean 3:16, nous découvrons le verset le plus beau de la Bible ! Dieu a tant aimé le monde entier qu'Il a fait le plus grand cadeau : Son Fils unique Jésus. Quand nous croyons en Lui de tout notre cœur, Il pardonne nos erreurs et nous offre la vie éternelle !",
        "9-12": "Jean 3:16 est le résumé parfait de l'Évangile chrétien. Le salut trouve sa source dans l'amour inconditionnel de Dieu. En offrant Son Fils sur la croix, Dieu ouvre les portes du Ciel à tous ceux qui placent leur foi vivante en Jésus-Christ."
      },
      "title": "Le Plus Grand Amour de Dieu : Jean 3:16",
      "verse": {
        "ref": "Jean 3:16",
        "text": "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."
      },
      "words": [
        "DIEU",
        "AIME",
        "MONDE",
        "FILS",
        "VIE"
      ]
    },
    "icon": "✝️❤️",
    "id": "joao316",
    "imageColor": "assets/images/joao316_pixar.jpg",
    "imageColoring": "assets/images/joao316_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Entregar meu coraçãozinho a Jesus com fé sincera, sabendo que Ele é o meu Salvador e Amigo fiel.",
        "home": "Lembrar todos os dias de que sou infinitamente amado por Deus e demonstrar esse amor ajudando meus pais com alegria.",
        "school": "Ser um reflexo do amor de Deus com meus amigos na escola, compartilhando bondade e respeito com todos."
      },
      "challenge": "Esta semana vou memorizar João 3:16 com a minha família e dizer para um amigo: 'Deus ama muito você!'.",
      "imageColorDesc": "Jesus acolhendo com os braços abertos as crianças de todas as nações, com a luz radiante do amor de Deus.",
      "imageColoringDesc": "Desenho para colorir de Jesus abençoando as crianças do mundo com amor e alegria celestial.",
      "prayer": "Querido Papai do Céu, muito obrigado por me amar tanto e por ter enviado Jesus para ser o meu Salvador. Guarda o meu coração no Teu amor e ajuda-me a amar o meu próximo todos os dias. Amém!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "De tal maneira que deu o Seu Filho unigênito",
            "Com indiferença",
            "Apenas por um dia"
          ],
          "question": "De que maneira Deus amou o mundo segundo João 3:16?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Fica sozinho",
            "Não perece, mas tem a vida eterna",
            "Perde a alegria"
          ],
          "question": "O que acontece com quem crê em Jesus?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Brinquedos caros",
            "Seu Filho amado Jesus Cristo",
            "Apenas coisas materiais"
          ],
          "question": "Qual é o maior presente que Deus deu para nós?"
        }
      ],
      "ref": "João 3:16",
      "storyByAge": {
        "3-5": "Vocês sabiam que o Papai do Céu tem um coração do tamanho do universo? Ele amou cada um de nós tanto, mas tanto, que enviou Seu Filho querido, o amigo Jesus! Jesus veio nos abraçar, cuidar do nosso coraçãozinho e nos dar uma vida linda e feliz para sempre com Ele! O amor de Deus nunca acaba!",
        "6-8": "Em João 3:16 aprendemos o versículo mais precioso de toda a Bíblia! Deus amou o mundo inteiro de um jeito tão profundo e perfeito que nos deu o maior presente do céu: Jesus Cristo. Quando confiamos em Jesus de todo o nosso coração, Ele perdoa os nossos erros, tira o medo e nos dá a promessa maravilhosa da vida eterna ao Seu lado!",
        "9-12": "O versículo de João 3:16 é o resumo sublime do Evangelho de Cristo. Ele revela a origem de toda a nossa salvação: o amor incondicional e voluntário de Deus Pai. Ao entregar Seu Filho unigênito na cruz, Deus quebrou todas as barreiras do pecado. A salvação não depende de nossos próprios méritos humanos, mas da fé sincera e transformadora em Jesus, que nos concede a vida eterna."
      },
      "title": "O Maior Amor do Mundo: João 3:16",
      "verse": {
        "ref": "João 3:16",
        "text": "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
      },
      "words": [
        "DEUS",
        "AMOU",
        "MUNDO",
        "FILHO",
        "VIDA"
      ]
    }
  },
  "joao6": {
    "criacao": {
      "en": {
        "application": {
          "heart": "Praise God daily for life, breath, and the wonder of the natural world around us.",
          "home": "Turn off water taps, take care of our home, and appreciate the blessings God gave our family.",
          "school": "Never litter on school grounds and treat living plants and animals with respect."
        },
        "challenge": "This week I will care for a plant or outdoor space and thank God for His beautiful Creation!",
        "imageColorDesc": "Light, sun, ocean, blooming plants, and friendly animals formed by the loving voice of God.",
        "imageColoringDesc": "Coloring page of Creation showing the bright sun, stars, ocean, trees, and animals.",
        "prayer": "Creator of the universe, thank You for the warm sun, cool water, green trees, and for making me with love. Amen!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Let there be light!",
              "Let there be rain!",
              "Let there be stars!"
            ],
            "question": "What did God say on the first day of Creation?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Animals",
              "In the image and likeness of God",
              "Angels"
            ],
            "question": "In whose image was humanity created according to Genesis 1?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Saw it was unfinished",
              "Saw that it was very good",
              "Wanted to redo it"
            ],
            "question": "How did God view His completed creation?"
          }
        ],
        "ref": "Genesis 1",
        "storyByAge": {
          "3-5": "In the very beginning, there was only God! Then God spoke: 'Let there be light!', and brightness filled everything! God made the blue sky, the warm sun, sparkling oceans, and colorful flowers. He made singing birds and playful animals. And best of all, He created you and me with tender love!",
          "6-8": "In Genesis 1 we see God's magnificent power. By His Word, He separated light from darkness, created the sky, seas, stars, and living creatures. On the sixth day, God created humanity in His own image and likeness to care for the world. God looked at everything He had made, and it was very good!",
          "9-12": "The Creation account establishes that our world is not an accident, but the intentional masterpiece of a wise Creator. Human beings hold sacred dignity as God's image-bearers, called to stewardship over creation and lifelong worship of the Living God."
        },
        "title": "The Creation of the World",
        "verse": {
          "ref": "Genesis 1:1",
          "text": "In the beginning God created the heavens and the earth."
        },
        "words": [
          "GOD",
          "WORLD",
          "LIGHT",
          "EARTH",
          "LIFE"
        ]
      },
      "es": {
        "application": {
          "heart": "Agradecer a Dios cada mañana por el regalo de la vida y la belleza del mundo.",
          "home": "Cuidar el agua, no desperdiciar recursos y valorar las cosas que Dios nos da.",
          "school": "No arrojar basura al suelo y cuidar las plantas y animales del colegio."
        },
        "challenge": "Esta semana regaré una planta o cuidaré un jardín dando gracias a Dios por Su Creación.",
        "imageColorDesc": "La luz, el sol, las plantas, los mares y los animales creados por la poderosa voz de Dios.",
        "imageColoringDesc": "Dibujo para colorear de la creación con el sol, la luna, las estrellas y la naturaleza viva.",
        "prayer": "Creador del universo, gracias por el sol, los animales y por haberme creado con tanto amor. ¡Alabado sea Tu nombre! ¡Amén!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "¡Sea la luz!",
              "¡Haya lluvia!",
              "¡Haya estrellas!"
            ],
            "question": "¿Qué dijo Dios el primer día de la Creación?"
          },
          {
            "answerIndex": 1,
            "options": [
              "De los animales",
              "A imagen y semejanza de Dios",
              "De los ángeles"
            ],
            "question": "¿A semejanza de quién fue creado el ser humano?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Vio que faltaban cosas",
              "Vio que era muy buena en gran manera",
              "No le gustó"
            ],
            "question": "¿Cómo consideró Dios toda Su creación al terminar?"
          }
        ],
        "ref": "Génesis 1",
        "storyByAge": {
          "3-5": "¡Al principio solo existía Dios! Entonces Dios dijo: '¡Sea la luz!', ¡y todo brilló con hermosura! Dios hizo el cielo azul, el sol radiante, los mares con peces y las plantas con flores. Creó las aves y los animales. ¡Y por último, nos creó a ti y a mí con mucho amor!",
          "6-8": "En Génesis 1 contemplamos el poder creador de Dios. Con Su sola Palabra ordenó el universo: separó la luz de las tinieblas, formó las estrellas y llenó la tierra de vida. En el sexto día creó al ser humano a Su imagen y semejanza. Y vio Dios todo lo que había hecho, ¡y era muy bueno!",
          "9-12": "El relato de la Creación enseña que la vida tiene propósito y diseño divino. El ser humano posee un valor incalculable como portador de la imagen de Dios, llamado a cuidar con responsabilidad ecológica la creación y a adorar al Hacedor de todas las cosas."
        },
        "title": "La Creación del Mundo",
        "verse": {
          "ref": "Génesis 1:1",
          "text": "En el principio creó Dios los cielos y la tierra."
        },
        "words": [
          "DIOS",
          "MUNDO",
          "LUZ",
          "TIERRA",
          "VIDA"
        ]
      },
      "fr": {
        "application": {
          "heart": "Remercier Dieu chaque jour pour la vie, la famille et les merveilles de la nature.",
          "home": "Économiser l'eau, prendre soin de notre maison et remercier Dieu pour Ses bienfaits.",
          "school": "Ne pas jeter de déchets par terre et respecter les plantes et les animaux dans la cour."
        },
        "challenge": "Cette semaine, je prendrai soin d'une plante ou de la nature en remerciant Dieu pour Sa Création !",
        "imageColorDesc": "La lumière, le soleil, les plantes, les océans et les animaux créés par la voix d'amour de Dieu.",
        "imageColoringDesc": "Coloriage de la Création avec le soleil, les étoiles, les mers, les arbres et les animaux.",
        "prayer": "Créateur de l'univers, merci pour le soleil, la terre, les animaux et pour m'avoir façonné avec amour. Sois loué à jamais ! Amen !",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Que la lumière soit !",
              "Qu'il pleuve !",
              "Que les étoiles brillent !"
            ],
            "question": "Qu'a dit Dieu le premier jour de la Création ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Des animaux",
              "À l'image et à la ressemblance de Dieu",
              "Des anges"
            ],
            "question": "À quelle ressemblance l'être humain a-t-il été créé ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Incomplète",
              "Très bonne",
              "À recommencer"
            ],
            "question": "Comment Dieu a-t-Il jugé toute Sa création achevée ?"
          }
        ],
        "ref": "Genèse 1",
        "storyByAge": {
          "3-5": "Au tout début, il n'y avait que Dieu ! Alors Dieu parla : 'Que la lumière soit !', et tout devint lumineux ! Dieu fit le ciel bleu, le soleil chaud, les mers et les jolies fleurs. Il fit aussi les oiseaux et les animaux. Et pour finir, Il nous a créés toi et moi avec un amour infini !",
          "6-8": "Dans Genèse 1, nous contemplons la puissance créatrice de Dieu. Par Sa seule Parole, Il organisa l'univers : Il sépara la lumière des ténèbres, créa les étoiles, les mers et les êtres vivants. Au sixième jour, Il créa l'homme et la femme à Son image. Et Dieu vit que tout cela était très bon !",
          "9-12": "Le récit de la Création révèle l'origine voulue et bienveillante de la vie. L'être humain reçoit une dignité unique en tant qu'image de Dieu, établi gardien responsable de la nature et invité à célébrer la grandeur de son Créateur."
        },
        "title": "La Création du Monde",
        "verse": {
          "ref": "Genèse 1:1",
          "text": "Au commencement, Dieu créa les cieux et la terre."
        },
        "words": [
          "DIEU",
          "MONDE",
          "LUMIERE",
          "TERRE",
          "VIE"
        ]
      },
      "icon": "🌍✨",
      "id": "criacao",
      "imageColor": "assets/images/creation_pixar.jpg",
      "imageColoring": "assets/images/creation_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Agradecer a Deus todos os dias pela vida, pela família e pela beleza da criação.",
          "home": "Cuidar da casa, fechar a torneira para economizar água e tratar com carinho o que Deus nos deu.",
          "school": "Não jogar lixo no chão e respeitar as plantas e os animais criados por Deus."
        },
        "challenge": "Esta semana vou regar uma plantinha ou cuidar da natureza e agradecer a Deus pela Criação!",
        "imageColorDesc": "A luz, o sol, as plantas, os mares e os animais criados pela poderosa voz de Deus!",
        "imageColoringDesc": "Desenho para colorir da criação com o sol, lua, estrelas, animais e natureza viva.",
        "prayer": "Criador do universo, obrigado pelo sol, pela água fresca, pelos animais e pelo Teu amor que me criou. Louvado seja o Teu nome! Amém!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Haja luz!",
              "Haja chuva!",
              "Haja estrelas!"
            ],
            "question": "O que Deus disse no primeiro dia da Criação?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Aos animais",
              "À imagem e semelhança de Deus",
              "Aos anjos"
            ],
            "question": "A quem o ser humano foi criado semelhante segundo Gênesis 1?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Viu que estava incompleta",
              "Viu que era muito boa",
              "Viu que precisava mudar"
            ],
            "question": "Como Deus considerou toda a Sua criação ao terminar?"
          }
        ],
        "ref": "Gênesis 1",
        "storyByAge": {
          "3-5": "No começo de tudo só existia Deus! Então Deus falou: 'Haja luz!', e tudo ficou brilhante e lindo! Deus fez o céu azul, o sol amarelinho, os mares com peixinhos e as plantinhas com flores coloridas. Fez também os passarinhos e os animais. E por último, fez a mim e a você com muito amor!",
          "6-8": "Em Gênesis 1 vemos o poder criador de Deus. Com Sua Palavra, Ele trouxe à existência a luz, o firmamento, as árvores frutíferas e as estrelas no céu. Em seis dias Deus orquestrou o universo com beleza perfeita. No sexto dia, criou o ser humano à Sua imagem e semelhança. E viu Deus que tudo era muito bom!",
          "9-12": "A narrativa da Criação estabelece a cosmovisão bíblica: o universo é fruto do design amoroso e sábio de um Criador pessoal. O ser humano possui dignidade especial como imagem de Deus e guardião da Terra, chamado a cuidar da natureza e a adorar ao Criador de todas as coisas."
        },
        "title": "A Criação do Mundo",
        "verse": {
          "ref": "Gênesis 1:1",
          "text": "No princípio criou Deus os céus e a terra."
        },
        "words": [
          "DEUS",
          "MUNDO",
          "LUZ",
          "TERRA",
          "VIDA"
        ]
      }
    },
    "criancas": {
      "en": {
        "application": {
          "heart": "Keep a humble, trusting and pure heart before God every day.",
          "home": "Knowing that Jesus loves me personally and that I can talk to Him in prayer anytime.",
          "school": "Treat my classmates with kindness and include anyone who feels left out or lonely."
        },
        "challenge": "This week I will give a big warm hug to my parents, tell them I love them, and pray for children everywhere!",
        "imageColorDesc": "Jesus warmly welcomes children and babies into His arms under the warm golden sunlight.",
        "imageColoringDesc": "Pure black and white coloring page of Jesus blessing the children with open arms.",
        "prayer": "Dear Jesus, thank You for loving children so deeply. Bless my life, my family, and my friends today. Amen!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Turn the children away",
              "Throw a party",
              "Give them gifts"
            ],
            "question": "What did the disciples try to do when people brought children to Jesus?"
          },
          {
            "answerIndex": 1,
            "options": [
              "'Send them away'",
              "'Let the little children come to me'",
              "'I am too busy'"
            ],
            "question": "What did Jesus say to His disciples?"
          },
          {
            "answerIndex": 1,
            "options": [
              "He sent them home",
              "He embraced and blessed them with love",
              "He told them to be quiet"
            ],
            "question": "What did Jesus do with the children?"
          }
        ],
        "ref": "Matthew 19:13-15",
        "storyByAge": {
          "3-5": "One day, moms and dads brought their little babies to meet Jesus. Jesus opened His arms wide and said: 'Come here! Let the little children come to me!'. Jesus held the children, hugged each one, and blessed them. Jesus loves you so much!",
          "6-8": "In Matthew 19:13-15, parents brought little children to Jesus so He might place His hands on them and pray. When the disciples tried to send them away, Jesus said: 'Let the little children come to me, for the kingdom of heaven belongs to such as these!' He took them in His arms and blessed them.",
          "9-12": "Matthew 19:13-15 reveals Jesus' profound love and valuation of children. In a society that often overlooked the weak, Jesus placed children at the center of the Kingdom of Heaven, teaching that childlike faith, humility, and trust are essential to enter God's presence."
        },
        "title": "Jesus Blesses the Little Children",
        "verse": {
          "ref": "Matthew 19:14",
          "text": "Jesus said, 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.'"
        },
        "words": [
          "JESUS",
          "CHILDREN",
          "KINGDOM",
          "HEAVEN",
          "LOVE"
        ]
      },
      "es": {
        "application": {
          "heart": "Mantener mi corazón limpio, humilde y lleno de confianza en Dios.",
          "home": "Saber que Jesús me ama y que puedo hablar con Él en oración en cualquier momento del día.",
          "school": "Tratar a mis compañeros con cariño e incluir a quien esté triste o solo en el recreo."
        },
        "challenge": "Esta semana le daré un abrazo muy fuerte a mis padres diciéndoles que los amo y oraré por otros niños.",
        "imageColorDesc": "Jesús sentado acogiendo con cariño a los niños en Sus brazos bajo la luz dorada del sol.",
        "imageColoringDesc": "Dibujo para colorear en blanco y negro puro de Jesús bendiciendo a los niños con amor.",
        "prayer": "Querido Jesús, gracias por amar a los niños con tanto cariño. Bendice mi vida, mi familia y a mis amigos. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Intentaron apartar a los niños",
              "Hicieron una fiesta",
              "Dieron regalos"
            ],
            "question": "¿Qué hicieron los discípulos cuando trajeron los niños a Jesús?"
          },
          {
            "answerIndex": 1,
            "options": [
              "'Manden a los niños lejos'",
              "'Dejad a los niños venir a mí'",
              "'No tengo tiempo'"
            ],
            "question": "¿Qué les dijo Jesús a Sus discípulos?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Los mandó a casa",
              "Los abrazó y los bendijo con amor",
              "Pidió silencio"
            ],
            "question": "¿Qué hizo Jesús con los niños?"
          }
        ],
        "ref": "Mateo 19:13-15",
        "storyByAge": {
          "3-5": "Un día, muchos papás y mamás llevaron a sus hijitos a ver a Jesús. Jesús abrió Sus brazos con mucho amor y dijo: '¡Vengan aquí! ¡Dejen que los niños vengan a mí!'. Jesús abrazó a cada niño y los bendijo. ¡Jesús te ama muchísimo!",
          "6-8": "En Mateo 19:13-15, trajeron niños a Jesús para que pusiera las manos sobre ellos y orase. Los discípulos reprendieron a la gente, pero Jesús les dijo con ternura: '¡Dejad a los niños venir a mí, porque de los tales es el reino de los cielos!'. Luego los tomó en Sus brazos y los bendijo.",
          "9-12": "El pasaje de Mateo 19:13-15 resalta el valor supremo de los niños en el Reino de Dios. Jesús enseñó que para entrar en el Reino es necesario tener un corazón humilde, confiado y puro como el de un niño, derribando prejuicios humanos con Su gracia divina."
        },
        "title": "Jesús Bendice a los Niños",
        "verse": {
          "ref": "Mateo 19:14",
          "text": "Pero Jesús dijo: Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de los cielos."
        },
        "words": [
          "JESUS",
          "NINOS",
          "REINO",
          "CIELOS",
          "AMOR"
        ]
      },
      "fr": {
        "application": {
          "heart": "Garder un cœur humble, pur et rempli de confiance envers Dieu.",
          "home": "Savoir que Jésus m'aime profondément et que je peux Lui parler dans la prière à tout moment.",
          "school": "Traiter mes camarades avec douceur et accueillir celui qui est triste ou isolé dans la cour."
        },
        "challenge": "Cette semaine, je ferai un gros câlin à mes parents en leur disant que je les aime, et je prierai pour tous les enfants !",
        "imageColorDesc": "Jésus accueille tendrement les enfants dans Ses bras sous la douce lumière du soleil.",
        "imageColoringDesc": "Coloriage aux traits noirs purs de Jésus bénissant les enfants avec amour.",
        "prayer": "Cher Jésus, merci d'aimer les enfants avec une telle tendresse. Bénis ma vie, ma famille et tous mes amis. Amen !",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Ils ont voulu repousser les enfants",
              "Ils ont fait une fête",
              "Ils ont donné des jouets"
            ],
            "question": "Qu'ont fait les disciples quand on a amené les enfants à Jésus ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "'Renvoyez-les chez eux'",
              "'Laissez les petits enfants venir à moi'",
              "'Je n'ai pas le temps'"
            ],
            "question": "Qu'a répondu Jésus à Ses disciples ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Il les a renvoyés",
              "Il les a serrés dans Ses bras et les a bénis",
              "Il leur a demandé de se taire"
            ],
            "question": "Qu'a fait Jésus avec les enfants ?"
          }
        ],
        "ref": "Matthieu 19:13-15",
        "storyByAge": {
          "3-5": "Un jour, des papas et des mamans amenèrent leurs tout-petits à Jésus. Jésus ouvrit grand Ses bras et dit : 'Venez ! Laissez les petits enfants venir à moi !'. Jésus prit les bébés sur Ses genoux, les serra fort et les bénit. Jésus t'aime tellement !",
          "6-8": "Dans Matthieu 19:13-15, on amena des enfants à Jésus pour qu'Il prie pour eux. Les disciples voulurent les renvoyer, mais Jésus dit avec autorité et tendresse : 'Laissez les petits enfants venir à moi, car le royaume des cieux est pour ceux qui leur ressemblent !'. Il posa Ses mains sur eux et les bénit.",
          "9-12": "Le récit de Matthieu 19:13-15 illustre l'importance capitale des enfants aux yeux de Dieu. Jésus enseigne que pour faire partie du Royaume des Cieux, nous devons posséder la foi simple, sincère et humble d'un enfant qui fait entièrement confiance à son Père céleste."
        },
        "title": "Jésus Bénit les Petits Enfants",
        "verse": {
          "ref": "Matthieu 19:14",
          "text": "Et Jésus dit : Laissez les petits enfants, et ne les empêchez pas de venir à moi; car le royaume des cieux est pour ceux qui leur ressemblent."
        },
        "words": [
          "JESUS",
          "ENFANTS",
          "ROYAUME",
          "CIEUX",
          "AMOUR"
        ]
      },
      "icon": "👶❤️",
      "id": "criancas",
      "imageColor": "assets/images/children_pixar.jpg",
      "imageColoring": "assets/images/children_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Manter meu coraçãozinho puro, sincero e cheio de confiança em Deus.",
          "home": "Saber que Jesus me ama muito e que posso conversar com Ele em oração a qualquer momento do dia.",
          "school": "Tratar meus colegas com carinho e acolher quem estiver triste ou sozinho no recreio."
        },
        "challenge": "Esta semana vou dar um abraço bem apertado em meus pais dizendo que os amo e fazer uma oração pelas crianças do mundo!",
        "imageColorDesc": "Jesus acolhe com carinho as criancinhas nos braços sob a luz do sol.",
        "imageColoringDesc": "Desenho para colorir de Jesus abençoando as crianças em contorno preto e branco puro.",
        "prayer": "Querido Jesus, obrigado por amar as crianças com tanto carinho. Abençoa minha vida, minha família e meus amigos. Amém!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Afastar as crianças",
              "Fizeram uma festa",
              "Deram brinquedos"
            ],
            "question": "O que os discípulos tentaram fazer quando trouxeram as crianças a Jesus?"
          },
          {
            "answerIndex": 1,
            "options": [
              "'Mandem as crianças embora'",
              "'Deixai vir a mim as criancinhas'",
              "'Não tenho tempo agora'"
            ],
            "question": "O que Jesus disse aos Seus discípulos?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Mandou-as para casa",
              "Abraçou-as e as abençoou com amor",
              "Pediu silêncio"
            ],
            "question": "O que Jesus fez com as crianças?"
          }
        ],
        "ref": "Mateus 19:13-15",
        "storyByAge": {
          "3-5": "Um dia, muitos papais e mamães levaram seus filhinhos pequeninos para ver Jesus. Jesus abriu Seus braços bem grandes e disse: 'Venham cá! Deixem as criancinhas virem a mim!'. Jesus pegou os bebês no colo, abraçou cada um e os abençoou. Jesus ama muito você!",
          "6-8": "Em Mateus 19:13-15, pessoas trouxeram crianças a Jesus para que Ele orasse por elas. Os discípulos achavam que as crianças incomodavam, mas Jesus os repreendeu com ternura: 'Deixai vir a mim as criancinhas, porque das tais é o Reino dos Céus!'. Jesus as abraçou e abençoou a todas.",
          "9-12": "A passagem de Mateus 19:13-15 estabelece o Reino de Deus através da pureza e humildade das crianças. Ao acolher os pequeninos e declarar que deles é o Reino, Jesus ensina que para estar perto de Deus precisamos de um coração sincero, humilde e confiante como o de uma criança."
        },
        "title": "Jesus Abençoa as Criancinhas",
        "verse": {
          "ref": "Mateus 19:14",
          "text": "Disse-lhes Jesus: Deixai vir a mim as criancinhas e não as impeçais, porque das tais é o Reino dos Céus."
        },
        "words": [
          "JESUS",
          "CRIANCAS",
          "REINO",
          "CEUS",
          "AMOR"
        ]
      }
    },
    "cruz": {
      "en": {
        "application": {
          "heart": "Rest in the unchanging knowledge that you are unconditionally loved by God.",
          "home": "Practice heartfelt forgiveness with parents and siblings without holding grudges.",
          "school": "Never return insult for insult; respond with peace and kindness as Jesus did."
        },
        "challenge": "This week I will practice genuine forgiveness whenever someone upsets me, remembering the cross!",
        "imageColorDesc": "The cross on the gentle hill with radiant celestial light and the dove of peace.",
        "imageColoringDesc": "Coloring page with the wooden cross, divine rays of light and garden flowers.",
        "prayer": "Lord Jesus, thank You for Your endless love on the cross. Teach me to forgive others freely and love with all my heart. Amen!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "'Father, forgive them'",
              "He called down fire",
              "He stayed silent angrily"
            ],
            "question": "What did Jesus pray on the cross?"
          },
          {
            "answerIndex": 1,
            "options": [
              "A long earthly life",
              "'Today you will be with me in Paradise'",
              "Nothing"
            ],
            "question": "What did Jesus promise to the repentant man beside Him?"
          },
          {
            "answerIndex": 1,
            "options": [
              "The Roman guards",
              "Joseph of Arimathea",
              "Strangers"
            ],
            "question": "Who honorably placed Jesus in a new garden tomb?"
          }
        ],
        "ref": "Luke 23:26-56",
        "storyByAge": {
          "3-5": "Jesus opened His arms wide in love to teach us the greatest forgiveness! Even when people were unkind, Jesus looked up to heaven and prayed: 'Father, forgive them!'. Jesus loves us with all His heart!",
          "6-8": "In Luke 23, we see the greatest demonstration of love in human history. Hanging upon the cross for our salvation, Jesus prayed: 'Father, forgive them, for they do not know what they are doing.' He promised Paradise to the repentant man and gave His life for us.",
          "9-12": "The crucifixion in Luke 23 represents the climax of God's redemptive plan. Through voluntary sacrifice, Christ demonstrated supreme love, offering forgiveness to His executioners and securing eternal life for all who place their trust in Him."
        },
        "title": "The Great Love of Jesus on the Cross",
        "verse": {
          "ref": "Luke 23:34",
          "text": "Jesus said, 'Father, forgive them, for they do not know what they are doing.'"
        },
        "words": [
          "JESUS",
          "CROSS",
          "LOVE",
          "FORGIVE",
          "HEAVEN"
        ]
      },
      "es": {
        "application": {
          "heart": "Tener la certeza de que Jesús nos ama con amor eterno y perfecto.",
          "home": "Aprender a pedir perdón y perdonar sinceramente a mis padres y hermanos en casa.",
          "school": "No responder con insultos ante provocaciones; responder con paz y bondad como Jesús."
        },
        "challenge": "Esta semana practicaré el perdón sincero hacia alguien que me haya ofendido, recordando la cruz.",
        "imageColorDesc": "La cruz en la suave colina con la luz celestial de la gracia y la paloma de la paz.",
        "imageColoringDesc": "Dibujo para colorear con la cruz de madera, los rayos divinos y las flores del jardín.",
        "prayer": "Señor Jesús, gracias por Tu amor infinito en la cruz. Enséñame a perdonar a los demás con un corazón puro. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "'Padre, perdónalos, porque no saben lo que hacen'",
              "Pidió castigo",
              "Guardó silencio con enojo"
            ],
            "question": "¿Qué oró Jesús en la cruz?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Volver a su casa",
              "'Hoy estarás conmigo en el Paraíso'",
              "Ninguna esperanza"
            ],
            "question": "¿Qué prometió Jesús al hombre que se arrepintió?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Los soldados",
              "José de Arimatea",
              "Nadie"
            ],
            "question": "¿Quién colocó a Jesús con cuidado en el sepulcro?"
          }
        ],
        "ref": "Lucas 23:26-56",
        "storyByAge": {
          "3-5": "¡Jesús abrió Sus brazos de amor para enseñarnos el perdón! Aunque algunas personas fueron malas, Jesús oró: '¡Padre, perdónalos!'. ¡El amor de Jesús es más fuerte que todo!",
          "6-8": "En Lucas 23:26-56 aprendemos la lección de misericordia más hermosa. En la cruz, Jesús oró por quienes le hacían daño diciendo: 'Padre, perdónalos, porque no saben lo que hacen', y le prometió el Paraíso al hombre arrepentido.",
          "9-12": "El relato de Lucas 23 destaca el perdón redentor de Cristo. Al entregar Su vida voluntariamente, Jesús triunfó sobre el pecado y nos dejó el modelo definitivo de gracia: amar incluso a quienes nos ofenden."
        },
        "title": "El Gran Amor de Jesús en la Cruz",
        "verse": {
          "ref": "Lucas 23:34",
          "text": "Y Jesús decía: Padre, perdónalos, porque no saben lo que hacen."
        },
        "words": [
          "JESUS",
          "CRUZ",
          "AMOR",
          "PERDON",
          "GRACIA"
        ]
      },
      "fr": {
        "application": {
          "heart": "Garder la certitude que je suis infiniment aimé par Jésus quoi qu'il arrive.",
          "home": "Apprendre à demander pardon et à pardonner de tout cœur à mes parents et mes frères et sœurs.",
          "school": "Ne pas répondre par la colère quand quelqu'un est désagréable ; répondre avec douceur comme Jésus."
        },
        "challenge": "Cette semaine, je pardonnerai sincèrement à quelqu'un qui m'a blessé, en me rappelant la croix !",
        "imageColorDesc": "La croix sur la colline illuminée par la grâce divine et la colombe de paix.",
        "imageColoringDesc": "Coloriage avec la croix de bois, les rayons célestes et les fleurs du jardin.",
        "prayer": "Seigneur Jésus, merci pour Ton amour parfait sur la croix. Apprends-moi à pardonner et à aimer les autres. Amen !",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "'Père, pardonne-leur, car ils ne savent ce qu'ils font'",
              "Il a demandé vengeance",
              "Il est resté silencieux en colère"
            ],
            "question": "Qu'a prié Jésus sur la croix ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "De rentrer chez lui",
              "'Aujourd'hui tu seras avec moi dans le Paradis'",
              "Rien du tout"
            ],
            "question": "Qu'a promis Jésus à l'homme repentant à Ses côtés ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Les soldats romains",
              "Joseph d'Arimathée",
              "Personne"
            ],
            "question": "Qui a déposé Jésus avec respect dans le sépulcre ?"
          }
        ],
        "ref": "Luc 23:26-56",
        "storyByAge": {
          "3-5": "Jésus a ouvert grand Ses bras d'amour pour nous apprendre à pardonner ! Même quand des gens ont été méchants, Jésus a prié : 'Père céleste, pardonne-leur !'. L'amour de Jésus est plus fort que tout !",
          "6-8": "Dans Luc 23, Jésus nous donne la plus belle preuve d'amour. Sur la croix, Il a prié pour Ses ennemis : 'Père, pardonne-leur, car ils ne savent ce qu'ils font'. Il a aussi promis le Paradis à l'homme repentant à Ses côtés.",
          "9-12": "La croix dans Luc 23 est le sommet de la rédemption. En pardonnant à Ses bourreaux et en donnant Sa vie pure, Christ a brisé le pouvoir de la haine et nous a offert la réconciliation avec Dieu."
        },
        "title": "L'Amour de Jésus sur la Croix",
        "verse": {
          "ref": "Luc 23:34",
          "text": "Jésus dit : Père, pardonne-leur, car ils ne savent ce qu'ils font."
        },
        "words": [
          "JESUS",
          "CROIX",
          "AMOUR",
          "PARDON",
          "PARADIS"
        ]
      },
      "icon": "✝️❤️",
      "id": "cruz",
      "imageColor": "assets/images/cross_pixar.jpg",
      "imageColoring": "assets/images/cross_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Guardar a certeza no coração de que sou infinitamente amado por Jesus.",
          "home": "Aprender a pedir desculpas e a perdoar de verdade meus pais e irmãos sem guardar mágoa.",
          "school": "Não revidar com grosseria quando alguém chatear você; responder com paz e bondade como Jesus fez."
        },
        "challenge": "Esta semana vou perdoar com sinceridade quem me chatear, lembrando do amor de Jesus na cruz!",
        "imageColorDesc": "A cruz no monte com a luz divina da graça rompendo os céus e a pomba da paz.",
        "imageColoringDesc": "Desenho para colorir com a cruz, os raios de luz celestial e as flores do jardim.",
        "prayer": "Senhor Jesus, obrigado pelo Teu amor infinito na cruz. Ensina-me a ser manso e a perdoar de todo o coração. Amém!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "'Pai, perdoa-lhes, porque não sabem o que fazem'",
              "Pediu fogo do céu",
              "Ficou em silêncio zangado"
            ],
            "question": "O que Jesus orou na cruz?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Voltar para casa",
              "'Hoje estarás comigo no Paraíso'",
              "Nenhuma esperança"
            ],
            "question": "O que Jesus prometeu ao homem arrependido?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Soldados",
              "José de Arimateia",
              "Ninguém"
            ],
            "question": "Quem cuidou de Jesus com carinho e o colocou no sepulcro?"
          }
        ],
        "ref": "Lucas 23:26-56",
        "storyByAge": {
          "3-5": "Jesus abriu Seus braços de amor para nos ensinar o perdão! Mesmo quando algumas pessoas foram maldosas, Jesus orou: 'Papai do Céu, perdoa essas pessoas!'. O amor de Jesus é mais forte que tudo!",
          "6-8": "Em Lucas 23:26-56, aprendemos sobre a maior prova de amor da história. Na cruz, estendendo os braços por nós, Jesus orou: 'Pai, perdoa-lhes, porque não sabem o que fazem'. Ele nos perdoou e nos deu a certeza do Paraíso!",
          "9-12": "O sacrifício voluntário de Cristo na cruz é o ponto central da redenção cristã. Ao proclamar o perdão aos Seus algozes e a promessa de vida eterna ao ladrão arrependido, Jesus triunfou sobre o ódio com amor sacrificial perfeito."
        },
        "title": "O Grande Amor de Jesus na Cruz",
        "verse": {
          "ref": "Lucas 23:34",
          "text": "E dizia Jesus: Pai, perdoa-lhes, porque não sabem o que fazem."
        },
        "words": [
          "JESUS",
          "CRUZ",
          "AMOR",
          "PERDAO",
          "PARAISo"
        ]
      }
    },
    "daniel": {
      "en": {
        "application": {
          "heart": "Stand firm in doing what is right even when facing peer pressure.",
          "home": "Develop a blessed daily routine of prayer in the morning, at meals, and at bedtime.",
          "school": "Never be embarrassed about loving Jesus; pray and act with integrity at school."
        },
        "challenge": "This week I will pray faithfully 3 times every day just as Daniel did!",
        "imageColorDesc": "Daniel praying peacefully surrounded by gentle lions and God's shining angel.",
        "imageColoringDesc": "Coloring page of faithful Daniel praying among the peaceful lions.",
        "prayer": "Lord God, give me a bold and faithful heart like Daniel's to seek You constantly in prayer. Amen!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Once a week",
              "Three times a day",
              "Only on Sundays"
            ],
            "question": "How many times a day did Daniel pray to God?"
          },
          {
            "answerIndex": 0,
            "options": [
              "His mighty angel",
              "Royal guards",
              "Animal trainers"
            ],
            "question": "Whom did God send to protect Daniel in the den?"
          },
          {
            "answerIndex": 1,
            "options": [
              "He was injured",
              "He came out safe and unharmed",
              "He ran away"
            ],
            "question": "What happened to Daniel in the lions' den?"
          }
        ],
        "ref": "Daniel 6",
        "storyByAge": {
          "3-5": "Daniel loved talking to God in prayer three times every day! Unkind men threw him into a pit with big lions. But God sent a bright angel who shut the lions' mouths. They were gentle as kittens, and Daniel was completely safe!",
          "6-8": "Daniel faithfully prayed in his room three times a day. Jealous leaders passed an unjust law banning prayer to God. Even knowing the danger, Daniel kept praying. Thrown into the lions' den, God protected him, and the next morning he emerged without a scratch!",
          "9-12": "Daniel 6 highlights uncompromising spiritual integrity. When forced to choose between political security and devotion to God, Daniel remained steadfast. His miraculous deliverance led King Darius to proclaim God's sovereignty throughout the entire kingdom."
        },
        "title": "Daniel in the Lions' Den",
        "verse": {
          "ref": "Daniel 6:22",
          "text": "My God sent his angel, and he shut the mouths of the lions. They have not hurt me."
        },
        "words": [
          "DANIEL",
          "LIONS",
          "PRAYER",
          "ANGEL",
          "FAITH"
        ]
      },
      "es": {
        "application": {
          "heart": "Permanecer fiel a Dios incluso cuando los demás me presionen a hacer lo indebido.",
          "home": "Crear el hábito de orar tres veces al día: al levantarse, al comer y antes de dormir.",
          "school": "No avergonzarme de mi fe y dar buen ejemplo ante mis compañeros de clase."
        },
        "challenge": "Esta semana oraré puntualmente 3 veces al día como hacía Daniel.",
        "imageColorDesc": "Daniel orando en paz en el foso rodeado de leones mansos y el ángel de Dios.",
        "imageColoringDesc": "Dibujo para colorear de Daniel orando en el foso con los leones tranquilos.",
        "prayer": "Dios amado, dame la fe y el valor de Daniel para orar siempre y confiar en Tu protección. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "1 vez a la semana",
              "3 veces al día",
              "Solo los domingos"
            ],
            "question": "¿Cuántas veces al día oraba Daniel a Dios?"
          },
          {
            "answerIndex": 0,
            "options": [
              "A Su poderoso ángel",
              "A los soldados del rey",
              "A cazadores"
            ],
            "question": "¿A quién envió Dios para cerrar la boca de los leones?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Salió herido",
              "Salió sano y salvo sin rasguños",
              "Escapó de noche"
            ],
            "question": "¿Qué le pasó a Daniel en el foso?"
          }
        ],
        "ref": "Daniel 6",
        "storyByAge": {
          "3-5": "¡Daniel amaba orar a Dios tres veces al día! Unos hombres malos lo arrojaron a un foso con leones hambrientos. ¡Pero Dios envió un ángel resplandeciente que cerró la boca de los leones! Se portaron como gatitos mansos y Daniel salió sano y salvo.",
          "6-8": "Daniel oraba en su habitación con las ventanas abiertas hacia Jerusalén. Aunque firmaron una ley prohibiendo orar, Daniel no dejó de buscar a Dios. Fue arrojado al foso de los leones, pero a la mañana siguiente el rey comprobó que el Dios vivo lo había protegido milagrosamente.",
          "9-12": "Daniel 6 demuestra que la fidelidad a Dios trasciende cualquier ley terrenal injusta. Daniel no negoció sus convicciones. Su testimonio y rescate milagroso sirvieron para que el rey Darío reconociera al Dios de Daniel como el Dios viviente y eterno."
        },
        "title": "Daniel en el Foso de los Leones",
        "verse": {
          "ref": "Daniel 6:22",
          "text": "Mi Dios envió su ángel, el cual cerró la boca de los leones, para que no me hiciesen daño."
        },
        "words": [
          "DANIEL",
          "LEONES",
          "ORACION",
          "ANGEL",
          "FE"
        ]
      },
      "fr": {
        "application": {
          "heart": "Demeurer fidèle à Dieu même sous la pression de mon entourage.",
          "home": "Prendre l'habitude de prier le matin, aux repas et le soir au coucher.",
          "school": "Ne pas avoir honte de ma foi devant mes amis et faire preuve d'honnêteté partout."
        },
        "challenge": "Cette semaine, je prierai fidèlement 3 fois par jour à l'exemple de Daniel !",
        "imageColorDesc": "Daniel priant avec sérénité au milieu des lions dociles et l'ange envoyé de Dieu.",
        "imageColoringDesc": "Coloriage de Daniel priant dans la fosse aux côtés des lions paisibles.",
        "prayer": "Seigneur Dieu, accorde-moi le courage et la fidélité de Daniel pour Te prier chaque jour avec ferveur. Amen !",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Une fois par semaine",
              "Trois fois par jour",
              "Uniquement le dimanche"
            ],
            "question": "Combien de fois par jour Daniel priait-il Dieu ?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Son ange puissant",
              "Les gardes du roi",
              "Des dompteurs"
            ],
            "question": "Qui Dieu a-t-Il envoyé pour fermer la gueule des lions ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Il a été blessé",
              "Il est sorti sain et sauf sans une égratignure",
              "Il a fui"
            ],
            "question": "Qu'est-il arrivé à Daniel dans la fosse ?"
          }
        ],
        "ref": "Daniel 6",
        "storyByAge": {
          "3-5": "Daniel aimait prier Dieu trois fois par jour ! Des hommes jaloux l'ont jeté dans une fosse avec de gros lions. Mais Dieu a envoyé un bel ange qui a fermé la bouche des lions. Ils sont devenus doux comme des chatons et Daniel est sorti sans une égratignure !",
          "6-8": "Daniel priait fidèlement chaque jour dans sa chambre tournée vers Jérusalem. Même lorsqu'un décret interdit de prier, Daniel resta fidèle. Jeté dans la fosse aux lions, Dieu envoya Son ange pour le garder. Au matin, le roi le trouva en parfaite santé !",
          "9-12": "Le chapitre 6 de Daniel illustre la fidélité héroïque. Face au choix entre le compromis politique et la fidélité à Dieu, Daniel choisit la loyauté absolue. Cette foi inébranlable amena le roi Darius à reconnaître la souveraineté éternelle du Dieu de Daniel."
        },
        "title": "Daniel dans la Fosse aux Lions",
        "verse": {
          "ref": "Daniel 6:22",
          "text": "Mon Dieu a envoyé son ange et fermé la gueule des lions, qui ne m'ont fait aucun mal."
        },
        "words": [
          "DANIEL",
          "LIONS",
          "PRIERE",
          "ANGE",
          "FOI"
        ]
      },
      "icon": "🦁👑",
      "id": "daniel",
      "imageColor": "assets/images/daniel_pixar.jpg",
      "imageColoring": "assets/images/daniel_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Permanecer fiel a Deus mesmo diante de dificuldades ou pressões dos outros.",
          "home": "Cultivar o hábito de orar de manhã, nas refeições e antes de dormir.",
          "school": "Não ter vergonha da minha fé diante dos colegas e agir sempre com integridade."
        },
        "challenge": "Esta semana vou orar pontualmente 3 vezes ao dia como Daniel fazia!",
        "imageColorDesc": "Daniel orando com serenidade cercado por leões mansos e o anjo do Senhor.",
        "imageColoringDesc": "Desenho para colorir de Daniel orando na cova com os leões amigos.",
        "prayer": "Deus amado, dá-me um coração corajoso e fiel como o de Daniel para Te buscar em oração todos os dias. Amém!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "1 vez na semana",
              "3 vezes ao dia",
              "Apenas no sábado"
            ],
            "question": "Quantas vezes ao dia Daniel orava a Deus?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Seu anjo poderoso",
              "Soldados do rei",
              "Domadores"
            ],
            "question": "Quem Deus enviou para proteger Daniel na cova?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Ficou ferido",
              "Saiu são e salvo sem arranhões",
              "Fugiu à noite"
            ],
            "question": "O que aconteceu com Daniel na cova dos leões?"
          }
        ],
        "ref": "Daniel 6",
        "storyByAge": {
          "3-5": "Daniel amava orar a Deus três vezes ao dia! Pessoas invejosas o jogaram numa cova funda com leões. Mas Deus enviou um anjo brilhante que fechou a boquinha de todos os leões. Eles viraram gatinhos mansos e Daniel saiu sem nenhum arranhão!",
          "6-8": "Daniel orava fielmente em seu quarto voltado para Jerusalém. Homens maus criaram uma lei proibindo orações, mas Daniel continuou fiel. Jogaram-no na cova dos leões, mas na manhã seguinte Daniel respondeu ao rei: 'Ó rei, Deus enviou Seu anjo e fechou a boca dos leões!'.",
          "9-12": "Daniel 6 é um tributo à fidelidade inabalável. Quando pressionado a renunciar sua devoção para salvar a própria vida, Daniel preferiu honrar a Deus. O livramento milagroso demonstrou ao império persa que o Senhor reina sobre todas as nações."
        },
        "title": "Daniel na Cova dos Leões",
        "verse": {
          "ref": "Daniel 6:22",
          "text": "O meu Deus enviou o seu anjo, e fechou a boca dos leões, para que não me fizessem dano."
        },
        "words": [
          "DANIEL",
          "LEOES",
          "ORACAO",
          "ANJO",
          "FE"
        ]
      }
    },
    "davi": {
      "en": {
        "application": {
          "heart": "Place full trust in God whenever confronting difficult challenges at school.",
          "home": "Never fear the dark or night terrors, knowing God Almighty watches over my room.",
          "school": "Stand up bravely for others against bullying and speak truth with kindness."
        },
        "challenge": "This week I will face one fear bravely by praying and trusting in God like David did!",
        "imageColorDesc": "Young David holding his sling and smooth stones, standing courageous in the name of the Lord.",
        "imageColoringDesc": "Coloring page of courageous David facing the giant with faith in God Almighty.",
        "prayer": "Almighty God, You are greater than any fear or giant. Fill my heart with David's bold faith today. Amen!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "10 stones",
              "5 smooth stones",
              "Only 1 stone"
            ],
            "question": "How many smooth stones did David take from the stream?"
          },
          {
            "answerIndex": 1,
            "options": [
              "In King Saul's name",
              "In the name of the Lord Almighty",
              "In his own name"
            ],
            "question": "In whose name did David face Goliath?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Tending sheep",
              "Leading the army",
              "Serving as king"
            ],
            "question": "What was David doing before the battle?"
          }
        ],
        "ref": "1 Samuel 17",
        "storyByAge": {
          "3-5": "David was a young shepherd boy who loved singing praises to God. A giant named Goliath tried to scare everyone. But David said: 'God is bigger than any giant!'. With a sling and smooth stone, David won because God was with him!",
          "6-8": "Goliath the giant intimidated the whole army of Israel. Young David arrived and asked: 'Who is this giant to defy the armies of the living God?'. Refusing heavy armor, David took his shepherd's staff, sling, and five smooth stones. In the name of the Lord, he defeated the giant!",
          "9-12": "The story of 1 Samuel 17 reminds us that God's power is not measured by human weapons or physical size. Where seasoned soldiers saw an unbeatable giant, David saw an opportunity for God's glory. When we face our own 'giants' — fear, anxiety, bullying — God fights for us."
        },
        "title": "David and Goliath",
        "verse": {
          "ref": "1 Samuel 17:45",
          "text": "You come against me with sword and spear and javelin, but I come against you in the name of the Lord Almighty."
        },
        "words": [
          "DAVID",
          "GOLIATH",
          "SLING",
          "FAITH",
          "COURAGE"
        ]
      },
      "es": {
        "application": {
          "heart": "Confiar en Dios ante exámenes difíciles o situaciones complicadas.",
          "home": "No tener miedo a la oscuridad ni a pesadillas, recordando que Dios guarda mi hogar.",
          "school": "Tener valor para defender a quien sufra burlas en la escuela con paz y respeto."
        },
        "challenge": "Esta semana venceré un miedo orando a Dios con valentía como David.",
        "imageColorDesc": "El joven David con su honda y piedras del arroyo, confiando con valentía en el Señor de los Ejércitos.",
        "imageColoringDesc": "Dibujo para colorear de David con su honda confiando en el poder de Dios frente a Goliat.",
        "prayer": "Dios Todopoderoso, gracias porque eres más grande que cualquier gigante. Llena mi corazón de fe y valentía. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "10 piedras",
              "5 piedras lisas",
              "Solo 1 piedra"
            ],
            "question": "¿Cuántas piedras lisas tomó David del arroyo?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Del rey Saúl",
              "De Jehová de los ejércitos",
              "En su propio nombre"
            ],
            "question": "¿En el nombre de quién fue David a la batalla?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Cuidaba las ovejas",
              "Era capitán del ejército",
              "Era juez"
            ],
            "question": "¿Qué hacía David antes de la batalla?"
          }
        ],
        "ref": "1 Samuel 17",
        "storyByAge": {
          "3-5": "David era un pastorcito valiente que cuidaba ovejas. Un gigante enorme llamado Goliat asustaba a todos. ¡Pero David no tuvo miedo! Tomó una piedrita en su honda y venció porque Dios estaba a su lado.",
          "6-8": "Goliat desafió a los ejércitos de Israel durante cuarenta días. David fue a llevar provisiones a sus hermanos y dijo: '¿Quién es este para desafiar a Dios?'. Con su cayado, su honda y cinco piedras lisas del arroyo, David derrotó al gigante en el nombre del Señor.",
          "9-12": "En 1 Samuel 17 vemos que la batalla es de Dios. Mientras los guerreros se fijaban en la estatura de Goliat, David confiaba en la grandeza del Dios todopoderoso. Ningún desafío humano es invencible cuando caminamos en el nombre del Señor."
        },
        "title": "David y el Gigante Goliat",
        "verse": {
          "ref": "1 Samuel 17:45",
          "text": "Tú vienes a mí con espada y lanza y jabalina; mas yo vengo a ti en el nombre de Jehová de los ejércitos."
        },
        "words": [
          "DAVID",
          "GOLIAT",
          "HONDA",
          "PIEDRA",
          "VALOR"
        ]
      },
      "fr": {
        "application": {
          "heart": "Faire confiance à Dieu lors des examens ou des défis scolaires.",
          "home": "Ne pas avoir peur du noir ou des mauvais rêves, sachant que le Seigneur protège ma chambre.",
          "school": "Avoir le courage de dire la vérité et défendre ceux qui sont victimes de moqueries avec douceur."
        },
        "challenge": "Cette semaine, je vaincrai une de mes peurs en priant avec assurance comme David !",
        "imageColorDesc": "Le jeune David avec sa fronde et ses pierres polies, fort de sa foi en l'Éternel des armées.",
        "imageColoringDesc": "Coloriage de David avec sa fronde, affrontant le géant avec courage et foi en Dieu.",
        "prayer": "Seigneur Dieu Tout-Puissant, Tu es plus grand que toutes mes peurs. Remplis mon cœur du courage et de la foi de David ! Amen !",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "10 pierres",
              "5 pierres polies",
              "Une seule pierre"
            ],
            "question": "Combien de pierres polies David a-t-il ramassées dans le torrent ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Du roi Saül",
              "Au nom de l'Éternel des armées",
              "En son propre nom"
            ],
            "question": "Au nom de qui David a-t-il marché contre Goliath ?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Il gardait les brebis",
              "Il était général de l'armée",
              "Il vivait au palais"
            ],
            "question": "Que faisait David avant ce combat ?"
          }
        ],
        "ref": "1 Samuel 17",
        "storyByAge": {
          "3-5": "David était un jeune berger qui aimait Dieu. Un méchant géant nommé Goliath faisait peur à tout le monde. Mais David n'avait pas peur, car Dieu était son ami ! Avec une petite pierre et sa fronde, David a vaincu le géant !",
          "6-8": "Goliath effrayait l'armée d'Israël. Le jeune David entendit ses provocations et dit : 'Qui est cet homme pour défier l'armée du Dieu vivant ?'. Il refusa les armures lourdes, prit sa fronde et cinq pierres polies du torrent. Au nom de l'Éternel, il abattit le géant d'un seul tir !",
          "9-12": "Le récit de 1 Samuel 17 enseigne que la victoire dépend de la foi et non de la force humaine. Là où les soldats voyaient un obstacle insurmontable, David voyait la fidélité de Dieu. Aucun 'géant' — peur, anxiété, intimidation — n'est plus grand que le Tout-Puissant."
        },
        "title": "David et le Géant Goliath",
        "verse": {
          "ref": "1 Samuel 17:45",
          "text": "Tu marches contre moi avec l'épée, la lance et le javelot; et moi, je marche contre toi au nom de l'Éternel des armées."
        },
        "words": [
          "DAVID",
          "GOLIATH",
          "FRONDE",
          "PIERRE",
          "FOI"
        ]
      },
      "icon": "⚔️🛡️",
      "id": "davi",
      "imageColor": "assets/images/david_pixar.jpg",
      "imageColoring": "assets/images/david_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Confiar em Deus quando enfrentar provas difíceis ou desafios escolares.",
          "home": "Não ter medo do escuro ou de pesadelos, sabendo que o Senhor dos Exércitos protege a minha casa.",
          "school": "Ter coragem para falar a verdade e defender quem estiver sofrendo bullying com mansidão e firmeza."
        },
        "challenge": "Esta semana vou vencer um medo orando com coragem como Davi!",
        "imageColorDesc": "O jovem Davi com a funda e as pedrinhas do riacho, confiando com coragem no Senhor dos Exércitos!",
        "imageColoringDesc": "Desenho para colorir de Davi com sua funda, enfrentando o gigante com a força de Deus.",
        "prayer": "Senhor Deus Todo-Poderoso, Tu és maior do que qualquer medo. Enche o meu coraçãozinho de coragem e fé como o de Davi! Amém!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "10 pedras",
              "5 pedras lisas",
              "1 pedra apenas"
            ],
            "question": "Quantas pedras lisas do ribeiro Davi pegou?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Do rei Saul",
              "Do Senhor dos Exércitos",
              "Em seu próprio nome"
            ],
            "question": "Em nome de quem Davi foi lutar contra Golias?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Cuidava de ovelhas",
              "Era capitão do exército",
              "Morava no palácio"
            ],
            "question": "O que Davi fazia antes da batalha?"
          }
        ],
        "ref": "1 Samuel 17",
        "storyByAge": {
          "3-5": "Davi era um menino pastorzinho que cuidava de ovelhas. Apareceu um gigante muito bravo chamado Golias. Todos tiveram medo, menos Davi! Davi pegou pedrinhas, girou sua fundinha e venceu o gigante porque Deus estava com ele!",
          "6-8": "O gigante Golias desafiava o exército de Israel com ameaças. O jovem Davi ouviu e declarou: 'Quem é esse homem para afrontar o exército do Deus vivo?'. Recusou armaduras pesadas, levou apenas sua funda e cinco pedras lisas do ribeiro. Em nome do Senhor, venceu o gigante com uma pedrada certeira!",
          "9-12": "1 Samuel 17 demonstra que as maiores vitórias pertencem ao Senhor. Enquanto soldados experientes tremiam perante a força física de Golias, Davi via a situação sob a ótica da fé. Nenhum 'gigante' na nossa vida — medo, insegurança, zombaria — é páreo para o Deus que nos defende."
        },
        "title": "Davi e o Gigante Golias",
        "verse": {
          "ref": "1 Samuel 17:45",
          "text": "Tu vens a mim com espada, e com lança, e com escudo; porém eu vou a ti em nome do Senhor dos Exércitos."
        },
        "words": [
          "DAVI",
          "GOLIAS",
          "FUNDA",
          "PEDRA",
          "CORAGEM"
        ]
      }
    },
    "en": {
      "application": {
        "heart": "Never be selfish! Trust that God provides for us and that small acts of kindness become great miracles in His hands.",
        "home": "Help mom and dad with a cheerful smile and share my toys and snacks with my siblings without arguing.",
        "school": "When I see a classmate without snack or school supplies, share with love just like the young boy in the Bible."
      },
      "challenge": "This week I will practice generosity: I will cheerfully share a snack or toy with a friend in need, remembering Jesus' miracle!",
      "imageColorDesc": "Jesus blesses the basket with 5 loaves and 2 fish to feed the hungry multitude in warm golden sunlight.",
      "imageColoringDesc": "Crisp black and white line art of the loaves and fish basket with 12 leftover baskets ready for coloring.",
      "prayer": "Dear Lord Jesus, thank You for taking care of me every single day. Teach my heart to be generous and to share what I have with joy. I place my hands and everything I am into Your loving hands. Amen!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "5 loaves and 2 fish",
            "10 loaves and 1 fish",
            "3 loaves and 4 fish"
          ],
          "question": "How many loaves and fish did the boy offer to Jesus?"
        },
        {
          "answerIndex": 1,
          "options": [
            "He complained it wasn't enough",
            "He prayed and gave thanks to God",
            "He sent everyone home hungry"
          ],
          "question": "What did Jesus do before distributing the food to the crowd?"
        },
        {
          "answerIndex": 2,
          "options": [
            "No baskets were left",
            "5 small baskets",
            "12 full baskets"
          ],
          "question": "How many baskets of leftover pieces were collected?"
        }
      ],
      "ref": "John 6:1-14",
      "storyByAge": {
        "3-5": "Once upon a time, on a bright and sunny day, a huge crowd of people came to hear their friend Jesus on a soft green hillside. They walked for hours, and everyone's tummy started to rumble with hunger!\n\nA kind little boy opened his lunch basket. Guess what he brought? Just five warm little loaves of bread and two small fish!\n\nHe ran over and said: 'Jesus, you can take my lunch to help!'. Jesus smiled with tender love, looked up to heaven, and thanked God our Heavenly Father. And a wonderful miracle happened: that little lunch multiplied and fed everyone! There were even twelve full baskets left over! Jesus loves and cares for us so much!",
        "6-8": "On a sunny afternoon near the Sea of Galilee, more than five thousand people gathered on the green hillsides to listen to Jesus teach. The hours flew by and the sun began to set. The people were far from home and very hungry.\n\nThe disciples came to Jesus and said: 'Send the crowds away so they can buy food in the villages.' But Jesus replied: 'You give them something to eat.' The apostle Andrew looked around and found a young boy with five barley loaves and two small fish. It seemed like almost nothing for such a huge crowd!\n\nYet that generous boy placed everything he had into Jesus' hands. Jesus told everyone to sit down on the grass, took the bread and fish, looked up to heaven, and gave thanks. Then the disciples began handing out food... and it never ran out! Everyone ate until they were completely full, and they gathered twelve large baskets of leftovers!",
        "9-12": "The narrative of John 6:1-14 reveals one of the most profound miracles in Jesus' earthly ministry: the feeding of the five thousand beside the Sea of Galilee. A vast multitude followed Christ because of the compassionate healings and signs He performed.\n\nTesting His disciples' faith, Jesus asked Philip where they could buy bread. Philip calculated that two hundred denarii would not buy enough bread for each person to receive even a tiny bite. In the midst of human impossibility, a young anonymous boy stepped forward, willingly offering his humble lunch — five barley loaves and two fish.\n\nJesus received that sincere offering, gave thanks to the Father, and multiplied it abundantly. Not only were thousands satisfied, but twelve baskets of fragments were gathered so that nothing was wasted. The spiritual lesson is timeless: no matter how small our resources seem, when we surrender what we have into Christ's hands, He multiplies it to bless countless lives!"
      },
      "title": "The Feeding of the 5,000",
      "verse": {
        "ref": "John 6:11",
        "text": "Jesus then took the loaves, gave thanks, and distributed to those who were seated as much as they wanted. He did the same with the fish."
      },
      "words": [
        "JESUS",
        "BREAD",
        "FISH",
        "BASKET",
        "MIRACLE"
      ]
    },
    "es": {
      "application": {
        "heart": "¡No ser egoísta! Confiar en que Dios provee y que pequeñas acciones de bondad se convierten en grandes milagros.",
        "home": "Ayudar a mamá y papá con una sonrisa y compartir mis juguetes y meriendas con mis hermanos sin pelear.",
        "school": "Cuando vea a un compañero sin merienda o sin lápices en el recreo, compartir con amor como el muchacho de la Biblia."
      },
      "challenge": "Esta semana practicaré la generosidad: compartiré con alegría una merienda o un juguete con un amigo que lo necesite, ¡recordando el milagro de Jesús!",
      "imageColorDesc": "Jesús bendice la cesta con 5 panes y 2 peces para alimentar a la multitud en una hermosa tarde soleada.",
      "imageColoringDesc": "Dibujo nítido en contorno blanco y negro puro de la cesta de panes y peces con las 12 cestas de sobras para colorear.",
      "prayer": "Querido Señor Jesús, gracias por cuidar de mí todos los días. Enseña a mi corazoncito a ser generoso y a compartir lo que tengo con alegría. Pongo mis manitas y todo lo que soy en Tus manos de amor. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "5 panes y 2 peces",
            "10 panes y 1 pez",
            "3 panes y 4 peces"
          ],
          "question": "¿Cuántos panes y peces ofreció el niño a Jesús?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Se quejó de que había poca comida",
            "Oró y dio gracias a Dios en los cielos",
            "Despidió a la gente con hambre"
          ],
          "question": "¿Qué hizo Jesús antes de repartir el alimento a la multitud?"
        },
        {
          "answerIndex": 2,
          "options": [
            "No sobró ninguna canasta",
            "5 canastas pequeñas",
            "12 canastas grandes llenas"
          ],
          "question": "¿Cuántas canastas llenas de sobras recogieron después de comer?"
        }
      ],
      "ref": "Juan 6:1-14",
      "storyByAge": {
        "3-5": "Había una vez, en un día hermoso y soleado, muchísima gente que fue a ver a su amigo Jesús en una colina verde. ¡Caminaron tanto que la pancita de todos empezó a hacer ruido de hambre!\n\nUn niño muy bueno abrió su canastita. ¿Sabes qué traía para merendar? ¡Cinco pancitos calentitos y dos pececitos!\n\nCorrió hacia Jesús y le dijo: '¡Jesús, toma mi comida para ayudar!'. Jesús sonrió con infinito amor, miró al cielo y dio gracias a Dios Padre. Y ocurrió un milagro maravilloso: ¡esa comidita se multiplicó y alimentó a todos! ¡Sobraron doce canastas llenas! ¡Jesús nos cuida con todo Su amor!",
        "6-8": "En una tarde soleada junto al Mar de Galilea, una multitud de más de cinco mil personas se reunió en las colinas para escuchar las preciosas enseñanzas de Jesús. Pasaron las horas y el sol comenzó a ponerse. La gente estaba lejos de casa y con mucha hambre.\n\nLos discípulos dijeron: 'Señor, despide a la gente para que compren comida en las aldeas'. Pero Jesús respondió: 'Denles ustedes de comer'. El apóstol Andrés miró alrededor y encontró a un joven con cinco panes de cebada y dos pececitos. ¡Parecía casi nada para tanta gente!\n\nSin embargo, aquel muchacho generoso puso todo lo que tenía en las manos de Jesús. Jesús mandó a todos que se sentaran sobre la hierba, tomó los panes y los peces, miró al cielo y dio gracias. Luego los discípulos comenzaron a repartir... ¡y la comida no se acababa! Todos comieron hasta saciarse, ¡y recogieron doce canastas llenas de sobras!",
        "9-12": "El relato de Juan 6:1-14 presenta uno de los milagros más emblemáticos del ministerio de Jesús: la multiplicación de los panes y peces junto al Mar de Galilea. Una gran multitud seguía al Maestro porque veía las señales de compasión y sanidad que realizaba.\n\nPara probar la fe de Sus discípulos, Jesús preguntó dónde comprarían pan. Felipe calculó que doscientos denarios de pan no bastarían para que cada uno tomase un poco. En medio de aquella imposibilidad humana, un joven anónimo ofreció voluntariamente su almuerzo sencillo: cinco panes de cebada y dos peces.\n\nJesús tomó esa ofrenda sincera, dio gracias al Padre celestial y la repartió. Milagrosamente, miles fueron saciados en abundancia y se recogieron doce cestas llenas para que nada se perdiera. La enseñanza es profunda: no importa cuán pequeños parezcan nuestros recursos; cuando entregamos lo que somos y tenemos en las manos de Cristo, Él lo multiplica para bendecir al mundo entero."
      },
      "title": "La Multiplicación de los Panes y los Peces",
      "verse": {
        "ref": "Juan 6:11",
        "text": "Y tomó Jesús aquellos panes, y habiendo dado gracias, los repartió entre los discípulos, y los discípulos entre los que estaban recostados; asimismo de los peces, cuanto querían."
      },
      "words": [
        "JESUS",
        "PANES",
        "PECES",
        "CESTA",
        "MILAGRO"
      ]
    },
    "fr": {
      "application": {
        "heart": "Ne pas être égoïste ! Faire confiance à Dieu qui prend soin de nous et savoir que les petits gestes d'amour deviennent de grands miracles.",
        "home": "Aider maman et papa avec le sourire et partager mes jouets et mon goûter avec mes frères et sœurs sans me disputer.",
        "school": "Quand je vois un camarade sans goûter ou sans crayon à la récréation, partager avec amour comme le garçon de la Bible."
      },
      "challenge": "Cette semaine, je vais pratiquer la générosité : je partagerai avec joie un goûter ou un jeu avec un ami dans le besoin, en me souvenant du miracle de Jésus !",
      "imageColorDesc": "Jésus bénit le panier contenant 5 pains et 2 poissons pour nourrir la foule sur une belle colline verdoyante.",
      "imageColoringDesc": "Dessin au trait noir et blanc pur du panier de pains et de poissons avec les 12 paniers de restes à colorier.",
      "prayer": "Cher Seigneur Jésus, merci de prendre soin de moi chaque jour. Enseigne à mon petit cœur à être généreux et à partager ce que j'ai avec joie. Je remets mes mains et tout ce que je suis entre Tes mains d'amour. Amen !",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "5 pains et 2 poissons",
            "10 pains et 1 poisson",
            "3 pains et 4 poissons"
          ],
          "question": "Combien de pains et de poissons le garçon a-t-il offerts à Jésus ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Il s'est plaint qu'il y en avait trop peu",
            "Il a prié et rendu grâces à Dieu",
            "Il a renvoyé la foule le ventre vide"
          ],
          "question": "Qu'a fait Jésus avant de distribuer le repas à la foule ?"
        },
        {
          "answerIndex": 2,
          "options": [
            "Aucun panier n'est resté",
            "5 petits paniers",
            "12 grands paniers pleins"
          ],
          "question": "Combien de paniers pleins de restes ont été ramassés après le repas ?"
        }
      ],
      "ref": "Jean 6:1-14",
      "storyByAge": {
        "3-5": "Il était une fois, par une belle journée ensoleillée, beaucoup de personnes qui vinrent écouter leur ami Jésus sur une douce colline. Elles avaient marché longtemps et leur petit ventre commençait à gargouiller de faim !\n\nUn petit garçon très gentil ouvrit son panier. Sais-tu ce qu'il avait apporté pour son goûter ? Cinq petits pains dorés et deux petits poissons !\n\nIl courut vers Jésus et dit : 'Jésus, tu peux prendre mon goûter pour aider !'. Jésus sourit avec un amour infini, leva les yeux vers le ciel et remercia Dieu notre Père. Et un miracle formidable se produisit : ce petit repas se multiplia et nourrit tout le monde ! Il resta même douze paniers pleins ! Jésus prend tellement soin de nous !",
        "6-8": "Par un bel après-midi près de la mer de Galilée, plus de cinq mille personnes s'étaient rassemblées sur les collines verdoyantes pour écouter les enseignements remplis d'amour de Jésus. Le soleil commençait à se coucher et les gens avaient très faim.\n\nLes disciples dirent à Jésus : 'Renvoie la foule afin qu'elle aille acheter de quoi manger dans les villages'. Mais Jésus répondit : 'Donnez-leur vous-mêmes à manger'. L'apôtre André regarda autour de lui et aperçut un jeune garçon avec cinq pains d'orge et deux petits poissons. Cela semblait presque rien pour tant de monde !\n\nCependant, ce garçon généreux mit tout ce qu'il possédait entre les mains de Jésus. Jésus fit asseoir tout le monde sur l'herbe, prit les pains et les poissons, rendit grâces à Dieu et commença à distribuer. La nourriture ne s'épuisait pas ! Tous mangèrent à satiété, et les disciples remplirent douze grands paniers de morceaux qui restaient !",
        "9-12": "Le récit de Jean 6:1-14 relate l'un des miracles les plus marquants du ministère de Jésus : la multiplication des pains et des poissons au bord de la mer de Galilée. Une foule immense suivait le Christ, attirée par Sa compassion et Ses guérisons.\n\nPour éprouver la foi de Ses disciples, Jésus demanda où acheter du pain. Philippe calcula que deux cents deniers ne suffiraient pas pour que chacun en reçoive un petit morceau. C'est dans ce contexte d'impossibilité humaine qu'un jeune garçon anonyme fit don de son humble repas : cinq pains d'orge et deux poissons.\n\nJésus accueillit cette offrande sincère, rendit grâces au Père céleste et la partagea. Miraculeusement, des milliers de personnes furent rassasiées avec abondance, et douze paniers pleins de restes furent ramassés afin que rien ne soit perdu. La leçon spirituelle est inoubliable : peu importe la modestie de nos ressources ; lorsque nous offrons ce que nous sommes et ce que nous avons entre les mains de Christ, Il le multiplie pour bénir des foules !"
      },
      "title": "La Multiplication des Pains et des Poissons",
      "verse": {
        "ref": "Jean 6:11",
        "text": "Jésus prit les pains, rendit grâces, et les distribua à ceux qui étaient assis; il leur donna de même des poissons, autant qu'ils en voulurent."
      },
      "words": [
        "JESUS",
        "PAINS",
        "POISSONS",
        "PANIER",
        "MIRACLE"
      ]
    },
    "icon": "🍞🐟",
    "id": "joao6",
    "imageColor": "assets/images/loaves_pixar.jpg",
    "imageColoring": "assets/images/loaves_coloring.jpg",
    "jonas": {
      "en": {
        "application": {
          "heart": "Trust that God always hears our sincere prayers of repentance wherever we are.",
          "home": "Do not hide mistakes from parents; admit them quickly and ask for forgiveness.",
          "school": "Complete school assignments promptly without complaining or delaying."
        },
        "challenge": "This week I will practice obeying right away the first time I am asked to do something!",
        "imageColorDesc": "The friendly great fish in the sea teaching the lesson of obedience with Jonah.",
        "imageColoringDesc": "Coloring page showing Jonah, the great fish, and ocean waves ready for coloring.",
        "prayer": "Lord God, forgive me when I am stubborn. Help me to listen to Your voice and obey with a willing heart. Amen!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Tarshish",
              "Nineveh",
              "Jerusalem"
            ],
            "question": "To which city did God send Jonah to preach?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Slept",
              "Prayed in repentance to the Lord",
              "Swam"
            ],
            "question": "What did Jonah do inside the belly of the fish?"
          },
          {
            "answerIndex": 1,
            "options": [
              "1 day",
              "3 days and 3 nights",
              "7 days"
            ],
            "question": "How long was Jonah in the belly of the great fish?"
          }
        ],
        "ref": "Jonah 1-3",
        "storyByAge": {
          "3-5": "God asked Jonah to help people in a faraway city, but Jonah ran away in a boat! A big splash came and Jonah fell into the water. God sent a great big fish to keep him safe! Inside, Jonah prayed, said 'I'm sorry', and then happily obeyed God!",
          "6-8": "God called Jonah to preach repentance in Nineveh, but Jonah tried to flee by ship. When a great storm arose, Jonah was cast into the sea. God provided a great fish to swallow him. After three days of prayer, the fish set him on dry ground, and Jonah went to Nineveh as God commanded.",
          "9-12": "The book of Jonah teaches that no one can hide from God's presence. God's discipline is redemptive, not destructive. Inside the fish, Jonah rediscovered humble prayer and learned that God's heart longs to extend mercy to all nations."
        },
        "title": "Jonah and the Great Fish",
        "verse": {
          "ref": "Jonah 2:2",
          "text": "In my distress I called to the Lord, and he answered me. From deep in the realm of the dead I called for help, and you listened to my cry."
        },
        "words": [
          "JONAH",
          "FISH",
          "SEA",
          "PRAYER",
          "OBEY"
        ]
      },
      "es": {
        "application": {
          "heart": "Comprender que Dios siempre escucha nuestras oraciones sinceras dondequiera que estemos.",
          "home": "No esconder mis errores a mis padres; pedir disculpas rápido y enmendar el error.",
          "school": "Hacer las tareas que pide el profesor sin poner pretextos ni postergarlas."
        },
        "challenge": "Esta semana practicaré la obediencia inmediata la primera vez que me pidan algo.",
        "imageColorDesc": "El gran pez en el mar y la lección de obediencia y amor con Jonás.",
        "imageColoringDesc": "Dibujo para colorear de Jonás, el gran pez y las olas del mar.",
        "prayer": "Señor Dios, perdóname cuando soy desobediente. Enséñame a escuchar Tu voz y a cumplir Tu voluntad con alegría. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Tarsis",
              "Nínive",
              "Jerusalén"
            ],
            "question": "¿A qué ciudad envió Dios a Jonás a predicar?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Durmió",
              "Oró al Señor arrepentido",
              "Intentó nadar"
            ],
            "question": "¿Qué hizo Jonás dentro del gran pez?"
          },
          {
            "answerIndex": 1,
            "options": [
              "1 día",
              "3 días y 3 noches",
              "7 días"
            ],
            "question": "¿Cuánto tiempo estuvo Jonás en el vientre del gran pez?"
          }
        ],
        "ref": "Jonás 1-3",
        "storyByAge": {
          "3-5": "Dios le dijo a Jonás que fuera a una ciudad a predicar, ¡pero Jonás huyó en un barco! Vino una ola grande y cayó al agua. Dios envió un pez enorme para protegerlo. ¡Allí adentro Jonás oró, pidió perdón y fue a obedecer a Dios muy contento!",
          "6-8": "Dios envió a Jonás a predicar en Nínive, pero él intentó huir a Tarsis. En medio de una tormenta fue arrojado al mar, y Dios preparó un gran pez para que lo tragase. Jonás oró con arrepentimiento durante tres días, el pez lo dejó en tierra firme y Jonás cumplió la misión de Dios.",
          "9-12": "El libro de Jonás enseña que es inútil huir de Dios y resalta la inmensidad de Su gracia. En el vientre del pez, Jonás experimentó que Dios escucha el clamor sincero y nos concede segundas oportunidades para obedecerle."
        },
        "title": "Jonás y el Gran Pez",
        "verse": {
          "ref": "Jonás 2:2",
          "text": "Invoqué en mi angustia a Jehová, y él me oyó; desde el seno del Seol clamé, y mi voz oíste."
        },
        "words": [
          "JONAS",
          "PEZ",
          "MAR",
          "ORACION",
          "OBEDECER"
        ]
      },
      "fr": {
        "application": {
          "heart": "Savoir que Dieu entend toujours mes prières sincères où que je me trouve.",
          "home": "Ne pas cacher mes bêtises à mes parents ; reconnaître mes torts et demander pardon rapidement.",
          "school": "Faire mes devoirs et mes corvées sans rechigner et sans remettre à plus tard."
        },
        "challenge": "Cette semaine, j'obéirai dès la première demande sans rouspéter !",
        "imageColorDesc": "Le grand poisson bienveillant et la leçon d'obéissance et de grâce avec Jonas.",
        "imageColoringDesc": "Coloriage de Jonas, du grand poisson et des vagues de la mer.",
        "prayer": "Seigneur Dieu, pardonne-moi lorsque je suis désobéissant. Apprends-moi à écouter Ta voix et à Te suivre avec joie. Amen !",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Tarsis",
              "Ninive",
              "Jérusalem"
            ],
            "question": "Dans quelle ville Dieu a-t-Il envoyé Jonas prêcher ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Il a dormi",
              "Il a prié l'Éternel avec repentance",
              "Il a nagé"
            ],
            "question": "Qu'a fait Jonas dans le ventre du grand poisson ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "1 jour",
              "3 jours et 3 nuits",
              "7 jours"
            ],
            "question": "Combien de temps Jonas est-il resté dans le ventre du poisson ?"
          }
        ],
        "ref": "Jonas 1-3",
        "storyByAge": {
          "3-5": "Dieu demanda à Jonas d'aller aider les gens d'une grande ville, mais Jonas s'est enfui en bateau ! Une grande vague est arrivée et Jonas est tombé à l'eau. Dieu a envoyé un très grand poisson pour le sauver ! Dans son ventre, Jonas a prié, demandé pardon et a obéi avec joie !",
          "6-8": "Dieu chargea Jonas d'aller prêcher à Ninive, mais Jonas prit un bateau pour fuir vers Tarsis. Une terrible tempête éclata et Jonas fut jeté à la mer. Dieu prépara un grand poisson pour l'avaler. Après trois jours de prière sincère, le poisson le déposa sur la plage et Jonas alla accomplir la volonté de Dieu.",
          "9-12": "Le livre de Jonas montre qu'on ne peut fuir la présence de Dieu et illustre la grandeur de Son pardon. Dans le ventre du poisson, Jonas retrouva la prière véritable. Cette histoire prouve que la miséricorde de Dieu s'adresse à tous ceux qui reviennent à Lui de tout leur cœur."
        },
        "title": "Jonas et le Grand Poisson",
        "verse": {
          "ref": "Jonas 2:2",
          "text": "Dans ma détresse, j'ai invoqué l'Éternel, et il m'a exaucé; du sein du séjour des morts j'ai crié, et tu as entendu ma voix."
        },
        "words": [
          "JONAS",
          "POISSON",
          "MER",
          "PRIERE",
          "OBEIR"
        ]
      },
      "icon": "🐋🌊",
      "id": "jonas",
      "imageColor": "assets/images/jonah_pixar.jpg",
      "imageColoring": "assets/images/jonah_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Saber que Deus sempre nos ouve e perdoa quando oramos com sinceridade.",
          "home": "Não tentar esconder quando fizer algo errado; pedir perdão logo aos pais.",
          "school": "Fazer as tarefas escolares que o professor pede sem enrolar ou inventar desculpas."
        },
        "challenge": "Esta semana vou praticar a obediência imediata da primeira vez que me pedirem algo!",
        "imageColorDesc": "O grande peixe amigo no mar e a lição de amor e obediência com Jonas.",
        "imageColoringDesc": "Desenho para colorir de Jonas, o grande peixe e as ondas do mar.",
        "prayer": "Senhor Deus, perdoa-me quando sou teimoso. Ensina-me a ouvir Tua voz e a obedecer com alegria no coração. Amém!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Társis",
              "Nínive",
              "Jerusalém"
            ],
            "question": "Para qual cidade Deus mandou Jonas pregar?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Dormiu",
              "Orou ao Senhor com arrependimento",
              "Tentou nadar"
            ],
            "question": "O que Jonas fez dentro do grande peixe?"
          },
          {
            "answerIndex": 1,
            "options": [
              "1 dia",
              "3 dias e 3 noites",
              "7 dias"
            ],
            "question": "Quantos dias Jonas ficou na barriga do grande peixe?"
          }
        ],
        "ref": "Jonas 1-3",
        "storyByAge": {
          "3-5": "Deus pediu para Jonas ir a uma cidade ajudar as pessoas, mas Jonas fugiu num barquinho! Veio uma onda bem grandona e Jonas caiu no mar. Deus cuidou dele e mandou um peixe grandão engolir Jonas com carinho. Lá dentro Jonas orou, pediu perdão e obedeceu todo feliz!",
          "6-8": "Deus mandou Jonas pregar em Nínive, mas ele fugiu para Társis. Veio uma forte tempestade e Jonas foi lançado ao mar. Deus preparou um grande peixe para resgatá-lo. Após três dias de oração, o peixe o levou à praia e Jonas foi obedecer à ordem de Deus.",
          "9-12": "O livro de Jonas revela a soberania divina e o alcance universal da misericórdia. Não podemos fugir da presença de Deus. No ventre do peixe, Jonas descobriu o poder da oração contrita e compreendeu que a graça de Deus perdoa a todo aquele que se arrepende."
        },
        "title": "Jonas e o Grande Peixe",
        "verse": {
          "ref": "Jonas 2:2",
          "text": "Na minha angústia clamei ao Senhor, e ele me respondeu; do ventre do peixe gritei, e tu ouviste a minha voz."
        },
        "words": [
          "JONAS",
          "PEIXE",
          "MAR",
          "ORACAO",
          "OBEDECER"
        ]
      }
    },
    "moises": {
      "en": {
        "application": {
          "heart": "Learn to wait patiently on God's perfect timing instead of worrying.",
          "home": "Trust that God provides solutions when family situations seem difficult or confusing.",
          "school": "Stay calm and prayerful during school tests and stressful moments."
        },
        "challenge": "This week, whenever I face a hard moment, I will pray first instead of complaining!",
        "imageColorDesc": "Moses raising his staff as the Red Sea parts into majestic walls of water for God's people.",
        "imageColoringDesc": "Coloring page showing Moses parting the sea with his staff and people walking on dry ground.",
        "prayer": "Almighty Lord, You parted the Red Sea and made a way. Guide my footsteps and bring peace to my heart today. Amen!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Dead Sea",
              "Red Sea",
              "Sea of Galilee"
            ],
            "question": "Which sea did God part so the people could cross?"
          },
          {
            "answerIndex": 1,
            "options": [
              "His cloak",
              "His staff",
              "A sword"
            ],
            "question": "What did Moses stretch out over the water?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Deep mud",
              "Completely dry",
              "Knee-deep water"
            ],
            "question": "How was the ground as the people crossed the sea?"
          }
        ],
        "ref": "Exodus 14",
        "storyByAge": {
          "3-5": "Moses led God's people to a huge blue sea! Moses held up his wooden staff to the sky. God sent a strong wind and whoosh! The sea opened right down the middle with dry ground to walk on! God is so powerful!",
          "6-8": "Trapped between the Red Sea ahead and Pharaoh's army behind, the Israelites were frightened. Moses declared in faith: 'Do not be afraid. Stand firm and see the deliverance the Lord will bring!'. As Moses stretched out his staff, the waters parted, and the people crossed safely on dry ground!",
          "9-12": "Exodus 14 reveals God as the divine Deliverer. In human impossibility, God opened a way where there was no way. The crossing of the Red Sea stands as a permanent testimony that God fights on behalf of His children when they trust His commands."
        },
        "title": "Moses and the Red Sea",
        "verse": {
          "ref": "Exodus 14:14",
          "text": "The Lord will fight for you; you need only to be still."
        },
        "words": [
          "MOSES",
          "SEA",
          "STAFF",
          "FREE",
          "MIRACLE"
        ]
      },
      "es": {
        "application": {
          "heart": "Confiar en el socorro divino sin quejarse ni perder la paz.",
          "home": "Recordar que Dios abre puertas y ayuda a la familia en momentos difíciles.",
          "school": "Mantener la calma en exámenes o situaciones complicadas sabiendo que Dios me acompaña."
        },
        "challenge": "Esta semana, ante cualquier problema en la escuela o en casa, oraré primero en lugar de quejarme.",
        "imageColorDesc": "Moisés alzando su vara mientras las aguas del Mar Rojo se dividen formando murallas de agua.",
        "imageColoringDesc": "Dibujo para colorear de Moisés abriendo el mar y el pueblo cruzando en seco.",
        "prayer": "Señor Dios Todopoderoso, Tú abriste el Mar Rojo con Tu gran poder. Abre caminos de bendición en mi vida. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Mar Muerto",
              "Mar Rojo",
              "Mar de Galilea"
            ],
            "question": "¿Qué mar abrió Dios para que el pueblo cruzara?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Su manto",
              "Su vara",
              "Una espada"
            ],
            "question": "¿Qué extendió Moisés sobre las aguas?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Lleno de fango",
              "Completamente seco",
              "Con agua hasta la rodilla"
            ],
            "question": "¿Cómo estaba el suelo del mar al cruzar?"
          }
        ],
        "ref": "Éxodo 14",
        "storyByAge": {
          "3-5": "Moisés guiaba al pueblo y llegaron ante un mar azul inmenso. Moisés levantó su vara de madera al cielo. ¡Dios sopló un viento fuerte y el mar se abrió en dos! ¡El suelo quedó seco y todos cruzaron felices!",
          "6-8": "Con el ejército de Faraón detrás y el Mar Rojo delante, el pueblo sintió miedo. Pero Moisés dijo: '¡No temáis; estad firmes y ved la salvación de Jehová!'. Moisés extendió su vara, las aguas se abrieron en dos murallas y el pueblo pasó en tierra seca hasta la otra orilla.",
          "9-12": "Éxodo 14 enseña que cuando los recursos humanos se agotan, Dios manifiesta Su poder salvador. La orden de avanzar hacia el mar demuestra que la fe requiere pasos valientes. Dios abre caminos donde no hay camino."
        },
        "title": "Moisés y el Mar Rojo",
        "verse": {
          "ref": "Éxodo 14:14",
          "text": "Jehová peleará por vosotros, y vosotros estaréis tranquilos."
        },
        "words": [
          "MOISES",
          "MAR",
          "VARA",
          "LIBRE",
          "MILAGRO"
        ]
      },
      "fr": {
        "application": {
          "heart": "Faire confiance au secours de Dieu sans paniquer ni murmurer.",
          "home": "Savoir que Dieu apporte des solutions lorsque notre famille rencontre des difficultés.",
          "school": "Garder son calme lors des contrôles scolaires en sachant que Dieu m'accompagne."
        },
        "challenge": "Cette semaine, face à une difficulté, je prierai d'abord au lieu de me plaindre !",
        "imageColorDesc": "Moïse levant son bâton tandis que la mer Rouge se divise en deux murailles d'eau majestueuses.",
        "imageColoringDesc": "Coloriage de Moïse ouvrant la mer Rouge et du peuple marchant à pied sec.",
        "prayer": "Seigneur Dieu Tout-Puissant, Tu as ouvert la mer Rouge avec puissance. Ouvre des chemins de paix dans ma vie ! Amen !",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "La mer Morte",
              "La mer Rouge",
              "La mer de Galilée"
            ],
            "question": "Quelle mer Dieu a-t-Il ouverte pour faire passer Son peuple ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Son manteau",
              "Son bâton",
              "Une épée"
            ],
            "question": "Qu'a étendu Moïse sur les eaux sur l'ordre de Dieu ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Boueux",
              "Complètement sec",
              "De l'eau jusqu'aux genoux"
            ],
            "question": "Comment était le fond de la mer lorsque le peuple a traversé ?"
          }
        ],
        "ref": "Exode 14",
        "storyByAge": {
          "3-5": "Moïse conduisait le peuple et ils arrivèrent devant une immense mer bleue ! Moïse leva son bâton de bois vers le ciel. Dieu envoya un vent fort et la mer s'ouvrit en deux ! Le sol était tout sec et tout le monde traversa dans la joie !",
          "6-8": "Coincés entre la mer Rouge et l'armée de Pharaon, les Israélites eurent grand peur. Mais Moïse leur dit avec foi : 'Ne craignez rien, restez en place et regardez la délivrance que l'Éternel va vous accorder !'. Moïse étendit son bâton sur la mer, les eaux se séparèrent et le peuple traversa à sec !",
          "9-12": "Exode 14 montre que lorsque toutes les issues humaines sont bloquées, Dieu ouvre un chemin miraculeux. L'ordre d'avancer exigeait une foi active. La traversée de la mer Rouge prouve que Dieu combat toujours pour Ses enfants."
        },
        "title": "Moïse et la Mer Rouge",
        "verse": {
          "ref": "Exode 14:14",
          "text": "L'Éternel combattra pour vous; et vous, gardez le silence."
        },
        "words": [
          "MOISE",
          "MER",
          "BATON",
          "LIBRE",
          "MIRACLE"
        ]
      },
      "icon": "🌊🦯",
      "id": "moises",
      "imageColor": "assets/images/moses_pixar.jpg",
      "imageColoring": "assets/images/moses_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Aprender a confiar no socorro de Deus sem murmurar ou se desesperar.",
          "home": "Lembrar de que Deus abre portas e resolve problemas quando nossa família parece não ter saída.",
          "school": "Manter a calma em situações difíceis, sabendo que Deus está comigo em cada teste e desafio."
        },
        "challenge": "Esta semana, quando surgir uma dificuldade, vou orar primeiro em vez de reclamar!",
        "imageColorDesc": "Moisés ergue o cajado e as águas do Mar Vermelho se abrem formando muralhas de água!",
        "imageColoringDesc": "Desenho para colorir de Moisés com o cajado abrindo o mar e o povo passando a pé enxuto.",
        "prayer": "Senhor Deus Todo-Poderoso, Tu abriste o Mar Vermelho e cuidas de mim com poder. Abre caminhos de paz na minha vida! Amém!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Mar Morto",
              "Mar Vermelho",
              "Mar da Galileia"
            ],
            "question": "Qual mar Deus abriu no meio para o povo passar?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Sua capa",
              "Seu cajado",
              "Uma espada"
            ],
            "question": "O que Moisés estendeu sobre as águas por ordem de Deus?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Com lama funda",
              "Completamente seco",
              "Com água no joelho"
            ],
            "question": "Como ficou o chão do mar por onde o povo atravessou?"
          }
        ],
        "ref": "Êxodo 14",
        "storyByAge": {
          "3-5": "Moisés guiava o povo no deserto e chegaram na frente de um mar azul bem grandão! Moisés levantou seu cajadinho de madeira para o céu. Deus mandou um vento forte e o mar se abriu no meio! O chão ficou sequinho e todo mundo passou feliz!",
          "6-8": "O povo de Israel estava encurralado entre o Mar Vermelho e os soldados de Faraó. Moisés disse com fé: 'Não temais; aquietai-vos e vede o livramento do Senhor!'. Deus mandou marchar. Moisés estendeu o cajado, as águas se dividiram em duas muralhas e o povo atravessou a pé enxuto em total segurança!",
          "9-12": "Êxodo 14 marca o ápice da libertação de Israel. Quando todas as saídas humanas se fecharam, Deus abriu um caminho no meio do mar. O milagre nos ensina que quando Deus manda avançar pela fé, Ele mesmo remove os obstáculos e peleja por nós."
        },
        "title": "Moisés e a Abertura do Mar Vermelho",
        "verse": {
          "ref": "Êxodo 14:14",
          "text": "O Senhor pelejará por vós, e vós vos calareis."
        },
        "words": [
          "MOISES",
          "MAR",
          "CAJADO",
          "LIVRE",
          "MILAGRE"
        ]
      }
    },
    "noe": {
      "en": {
        "application": {
          "heart": "Rest in God's promises and remember that He shields us through life's storms.",
          "home": "Practice immediate obedience to parents with a cheerful attitude, just as Noah obeyed God.",
          "school": "Stand up for what is right even when everyone else is making wrong choices."
        },
        "challenge": "This week I will draw a rainbow to remember God's faithfulness and practice prompt obedience at home!",
        "imageColorDesc": "The massive wooden ark with animal pairs and a vibrant rainbow shining across the sky.",
        "imageColoringDesc": "Coloring page of Noah's ark, smiling giraffes, elephants, and the rainbow of promise.",
        "prayer": "Heavenly Father, thank You for Noah's inspiring faith. Help me to obey You with joy and trust Your covenant forever. Amen!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Canoe",
              "Ark",
              "Ferry"
            ],
            "question": "What was the name of the great boat built by Noah?"
          },
          {
            "answerIndex": 0,
            "options": [
              "A beautiful rainbow",
              "A shooting star",
              "A comet"
            ],
            "question": "What sign did God place in the sky as a covenant?"
          },
          {
            "answerIndex": 1,
            "options": [
              "For vacations",
              "Because he faithfully obeyed God",
              "To go fishing"
            ],
            "question": "Why did Noah build the ark?"
          }
        ],
        "ref": "Genesis 6-9",
        "storyByAge": {
          "3-5": "Noah loved God and built a huge friendly boat called the Ark! Two by two, all the animals came aboard: tall giraffes, fluffy rabbits, and roaring lions. Rain fell, but they were warm and safe inside. Then God placed a gorgeous rainbow in the sky!",
          "6-8": "God chose faithful Noah to build a three-story wooden ark to protect his family and all species of animals. Noah obeyed with patience. When the rain stopped and the land dried, God placed a colorful rainbow in the clouds as His eternal covenant of love.",
          "9-12": "Genesis 6–9 portrays the power of persevering obedience. Standing firm against the culture of his day, Noah walked closely with God. The rainbow remains an enduring reminder that God remembers His covenant and keeps every single promise."
        },
        "title": "Noah and the Great Ark",
        "verse": {
          "ref": "Genesis 9:13",
          "text": "I have set my rainbow in the clouds, and it will be the sign of the covenant between me and the earth."
        },
        "words": [
          "NOAH",
          "ARK",
          "ANIMALS",
          "RAIN",
          "RAINBOW"
        ]
      },
      "es": {
        "application": {
          "heart": "Confiar en que Dios cumple lo que promete y recordar el arcoíris como símbolo de Su amor.",
          "home": "Obedecer a mamá y papá a la primera con alegría, tal como Noé obedeció a Dios.",
          "school": "Tener valor para hacer lo correcto aunque otros hagan lo malo."
        },
        "challenge": "Esta semana dibujaré un arcoíris para recordar las promesas de Dios y obedeceré a mis padres con una sonrisa.",
        "imageColorDesc": "La inmensa arca de madera con los animales y el arcoíris de la promesa brillando en el cielo.",
        "imageColoringDesc": "Dibujo para colorear de Noé, los animales en parejas y el arcoíris en las nubes.",
        "prayer": "Señor Dios, gracias por el ejemplo de Noé. Ayúdame a ser obediente de corazón y a confiar en Tus promesas. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Canoa",
              "Arca",
              "Balsa"
            ],
            "question": "¿Cómo se llamaba la gran nave que construyó Noé?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Un hermoso arcoíris",
              "Una estrella fugaz",
              "Un rayo"
            ],
            "question": "¿Qué puso Dios en el cielo como señal de Su pacto?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Para pasear",
              "Porque obedeció fielmente la voz de Dios",
              "Para nadar"
            ],
            "question": "¿Por qué construyó Noé el arca?"
          }
        ],
        "ref": "Génesis 6-9",
        "storyByAge": {
          "3-5": "Noé era un hombre bueno que amaba a Dios. Construyó un barco gigante llamado el Arca y subió a los animalitos de dos en dos: jirafas, leones y pajaritos. Llovió mucho, pero dentro estaban seguros. ¡Luego Dios pintó un hermoso arcoíris!",
          "6-8": "Dios vio la fe de Noé y le mandó construir un arca de tres pisos para salvar a su familia y a los animales. Noé trabajó con paciencia y obediencia. Cuando cesó la lluvia, Noé dio gracias al Señor, quien puso un arcoíris en el cielo como señal de Su pacto.",
          "9-12": "La historia de Noé en Génesis 6 al 9 muestra la fidelidad ante la adversidad. La fe de Noé lo llevó a actuar con valentía. El arcoíris simboliza el pacto inquebrantable de gracia y protección de Dios hacia la creación."
        },
        "title": "Noé y la Gran Arca",
        "verse": {
          "ref": "Génesis 9:13",
          "text": "Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra."
        },
        "words": [
          "NOE",
          "ARCA",
          "ANIMALES",
          "LLUVIA",
          "ARCOIRIS"
        ]
      },
      "fr": {
        "application": {
          "heart": "Faire confiance aux promesses de Dieu et voir dans l'arc-en-ciel Sa constante fidélité.",
          "home": "Obéir immédiatement à mes parents avec le sourire, comme Noé a obéi au Seigneur.",
          "school": "Avoir le courage de faire le bien même lorsque les autres choisissent de mal agir."
        },
        "challenge": "Cette semaine, je dessinerai un arc-en-ciel pour me souvenir des promesses de Dieu et j'obéirai à mes parents sans rechigner !",
        "imageColorDesc": "L'immense arche en bois avec les couples d'animaux et le magnifique arc-en-ciel brillant dans le ciel.",
        "imageColoringDesc": "Coloriage de l'arche de Noé avec les girafes, les éléphants et l'arc-en-ciel de l'alliance.",
        "prayer": "Père céleste, merci pour la foi de Noé. Donne-moi un cœur obéissant et apprends-moi à toujours Te faire confiance. Amen !",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Une barque",
              "L'Arche",
              "Un voilier"
            ],
            "question": "Quel était le nom du grand bateau construit par Noé ?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Un bel arc-en-ciel",
              "Une étoile filante",
              "Un éclair"
            ],
            "question": "Quel signe Dieu a-t-Il placé dans le ciel comme promesse d'alliance ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Pour faire une croisière",
              "Parce qu'il a obéi fidèlement à Dieu",
              "Pour aller à la pêche"
            ],
            "question": "Pourquoi Noé a-t-il bâti l'arche ?"
          }
        ],
        "ref": "Genèse 6-9",
        "storyByAge": {
          "3-5": "Noé aimait Dieu de tout son cœur. Dieu lui demanda de construire un très grand bateau appelé l'Arche ! Tous les animaux montèrent deux par deux : girafes, lions et lapins. Il a plu très fort, mais tous étaient en sécurité. Puis Dieu peignit un magnifique arc-en-ciel dans le ciel !",
          "6-8": "Dieu vit la fidélité de Noé et lui donna les plans d'une grande arche pour préserver sa famille et les espèces animales. Noé obéit avec persévérance. Après le déluge, la terre sécha et Dieu plaça Son arc-en-ciel dans les nuées en signe de Sa promesse éternelle.",
          "9-12": "Le récit de Genèse 6 à 9 illustre l'obéissance audacieuse de la foi. Au milieu d'une société corrompue, Noé marcha avec Dieu. L'arc-en-ciel rappelle à chaque génération que Dieu demeure fidèle à Ses alliances et protège ceux qui se confient en Lui."
        },
        "title": "Noé et la Grande Arche",
        "verse": {
          "ref": "Genèse 9:13",
          "text": "J'ai placé mon arc dans la nue, et il servira de signe d'alliance entre moi et la terre."
        },
        "words": [
          "NOE",
          "ARCHE",
          "ANIMAUX",
          "PLUIE",
          "ARCENCIEL"
        ]
      },
      "icon": "🚢🌈",
      "id": "noe",
      "imageColor": "assets/images/noah_pixar.jpg",
      "imageColoring": "assets/images/noah_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Confiar que Deus cumpre todas as Suas promessas e lembrar do arco-íris como sinal de fidelidade.",
          "home": "Obedecer aos pais de primeira com alegria, assim como Noé obedeceu a Deus.",
          "school": "Ter a coragem de fazer o que é certo mesmo quando outras pessoas fazem o errado."
        },
        "challenge": "Esta semana vou desenhar um arco-íris e praticar a obediência aos meus pais sem reclamar!",
        "imageColorDesc": "A imensa arca de madeira com os casais de animais e o lindo arco-íris brilhando no céu.",
        "imageColoringDesc": "Desenho para colorir da arca de Noé, girafas, elefantes e o arco-íris da promessa.",
        "prayer": "Senhor Deus, obrigado pela história de Noé. Ajuda-me a ser obediente de coração e a confiar em Ti em qualquer momento. Amém!",
        "quiz": [
          {
            "answerIndex": 1,
            "options": [
              "Canoa",
              "Arca",
              "Navio"
            ],
            "question": "Qual é o nome do grande barco construído por Noé?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Um lindo arco-íris",
              "Uma estrela cadente",
              "Um cometa"
            ],
            "question": "O que Deus colocou no céu como sinal de Sua aliança?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Para passear",
              "Porque obedeceu fielmente a Deus",
              "Para pescar"
            ],
            "question": "Por que Noé construiu a arca?"
          }
        ],
        "ref": "Gênesis 6-9",
        "storyByAge": {
          "3-5": "Noé amava a Deus e construiu um barcão bem grandão chamado Arca! Colocou lá dentro bichinhos de dois em dois: girafas, leõezinhos e coelhinhos. Choveu bastante, mas todo mundo ficou seguro. Depois, Deus pintou um lindo arco-íris no céu!",
          "6-8": "Deus viu a fidelidade de Noé e o instruiu a construir uma arca para salvar sua família e espécies de animais. Durante anos, Noé obedeceu com fé. Quando o dilúvio cessou, a arca pousou em terra firme e Deus colocou o arco-íris no céu como aliança de amor eterno.",
          "9-12": "A história de Noé em Gênesis 6 a 9 destaca a obediência perseverante em tempos difíceis. Construir a arca demandou fé prática. O arco-íris é o lembrete perene de que a graça de Deus preserva Seus filhos e que Sua palavra jamais falha."
        },
        "title": "Noé e a Grande Arca",
        "verse": {
          "ref": "Gênesis 9:13",
          "text": "O meu arco tenho posto nas nuvens; este será por sinal da aliança entre mim e a terra."
        },
        "words": [
          "NOE",
          "ARCA",
          "ANIMAIS",
          "CHUVA",
          "ARCOIRIS"
        ]
      }
    },
    "pastor": {
      "en": {
        "application": {
          "heart": "Listen to Jesus' voice through Scripture and trust His gentle guidance in every decision.",
          "home": "Remember that I am never alone at night when I feel scared, for my Shepherd watches over me.",
          "school": "Reach out to someone who is sitting alone at lunch, just as Jesus seeks the lost sheep."
        },
        "challenge": "This week I will say a bedtime prayer thanking Jesus for being my Good Shepherd!",
        "imageColorDesc": "The Good Shepherd tenderly holding the rescued sheep in His arms among lush green pastures.",
        "imageColoringDesc": "Coloring page of the Good Shepherd gently caring for His little sheep with His staff.",
        "prayer": "Lord Jesus, my Good Shepherd, thank You for watching over me and holding me in Your loving hands. Amen!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Searches with love until He finds it",
              "Gives up and leaves it",
              "Gets angry"
            ],
            "question": "What does the Good Shepherd do when one sheep is lost?"
          },
          {
            "answerIndex": 1,
            "options": [
              "To dangerous rocks",
              "Beside green pastures and quiet waters",
              "Into a storm"
            ],
            "question": "Where does the Good Shepherd lead His sheep in Psalm 23?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Complaining",
              "Carrying it joyfully on his shoulders",
              "Empty-handed"
            ],
            "question": "How does the shepherd return home with the found sheep?"
          }
        ],
        "ref": "Psalm 23 / Luke 15:1-7",
        "storyByAge": {
          "3-5": "Jesus is our loving Shepherd and we are His precious little lambs! When one little lamb got lost, the Good Shepherd searched until He found it, cuddled it in His arms, and carried it home safely!",
          "6-8": "In Luke 15, Jesus told of a shepherd with one hundred sheep. When one was lost, he searched through the hills until he found it. Joyfully placing it on his shoulders, he called his friends to celebrate. That is how deeply Jesus cares for each of us!",
          "9-12": "Psalm 23 and Luke 15 reveal God's intimate and watchful character. The shepherd provides nourishment, guidance, and protection against dangers. Declaring 'The Lord is my shepherd' means finding complete security and spiritual rest in Christ."
        },
        "title": "The Good Shepherd and the Lost Sheep",
        "verse": {
          "ref": "Psalm 23:1-2",
          "text": "The Lord is my shepherd; I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters."
        },
        "words": [
          "JESUS",
          "SHEPHERD",
          "SHEEP",
          "CARE",
          "LOVE"
        ]
      },
      "es": {
        "application": {
          "heart": "Escuchar la voz de Jesús a través de Su Palabra y seguir Sus caminos de amor.",
          "home": "Saber que nunca estoy solo cuando siento miedo por la noche; el Buen Pastor cuida de mí.",
          "school": "Ser amigo de quien esté solo en el recreo, cuidando a los demás como Jesús."
        },
        "challenge": "Esta semana oraré antes de dormir agradeciendo a Jesús por ser mi Buen Pastor protector.",
        "imageColorDesc": "El Buen Pastor sosteniendo con cariño a la ovejita rescatada en verdes prados.",
        "imageColoringDesc": "Dibujo para colorear del Buen Pastor cuidando a sus ovejas con su cayado.",
        "prayer": "Señor Jesús, mi Buen Pastor, gracias por cuidarme y guiarme cada día. En Ti confío siempre. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "La busca con amor hasta hallarla",
              "La abandona",
              "Se olvida de ella"
            ],
            "question": "¿Qué hace el Buen Pastor cuando una oveja se pierde?"
          },
          {
            "answerIndex": 1,
            "options": [
              "A lugares peligrosos",
              "A verdes pastos y aguas de reposo",
              "A la tormenta"
            ],
            "question": "¿A dónde guía el Pastor a sus ovejas en el Salmo 23?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Enojado",
              "Con gozo llevándola en sus hombros",
              "Con las manos vacías"
            ],
            "question": "¿Cómo regresa el pastor a casa con la oveja?"
          }
        ],
        "ref": "Salmo 23 / Lucas 15:1-7",
        "storyByAge": {
          "3-5": "¡Jesús es nuestro Buen Pastor y nosotros somos Sus ovejitas queridas! Cuando una ovejita se perdió, el Pastor la buscó con amor, la abrazó y la llevó a casa feliz.",
          "6-8": "En Lucas 15, un pastor tenía cien ovejas y una se perdió en las colinas. Fue a buscarla con paciencia y, al hallarla, la puso sobre sus hombros con alegría diciendo: '¡Alegraos conmigo, porque he encontrado mi oveja que se había perdido!'. ¡Así nos ama Jesús!",
          "9-12": "El Salmo 23 y la parábola de Lucas 15 enseñan la protección constante de Dios. Saber que el Señor es nuestro Pastor disipa el temor y nos llena de paz, pues Su vara y Su cayado nos infunden aliento en cualquier dificultad."
        },
        "title": "El Buen Pastor y la Oveja Perdida",
        "verse": {
          "ref": "Salmo 23:1-2",
          "text": "Jehová es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará."
        },
        "words": [
          "JESUS",
          "PASTOR",
          "OVEJA",
          "CUIDADO",
          "AMOR"
        ]
      },
      "fr": {
        "application": {
          "heart": "Écouter la voix de Jésus et me reposer dans Sa fidélité et Sa tendresse.",
          "home": "Savoir que je ne suis jamais seul la nuit ; mon Bon Berger veille sur ma chambre.",
          "school": "Être attentif à un camarade isolé dans la cour et l'inviter à jouer avec moi."
        },
        "challenge": "Cette semaine, je prierai avant de dormir en remerciant Jésus d'être mon Bon Berger protecteur !",
        "imageColorDesc": "Le Bon Berger tenant avec tendresse la brebis retrouvée dans de verts pâturages.",
        "imageColoringDesc": "Coloriage du Bon Berger veillant sur son troupeau avec sa houlette.",
        "prayer": "Seigneur Jésus, mon Bon Berger, merci de veiller sur moi nuit et jour avec tant d'amour. Amen !",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Il la cherche avec amour jusqu'à ce qu'il la trouve",
              "Il l'abandonne",
              "Il l'oublie"
            ],
            "question": "Que fait le Bon Berger quand une brebis s'est égarée ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Dans les rochers escarpés",
              "Dans de verts pâturages et près des eaux paisibles",
              "Dans le désert"
            ],
            "question": "Où le Berger conduit-il ses brebis dans le Psaume 23 ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "En soupirant",
              "En la portant joyeusement sur ses épaules",
              "Sans la brebis"
            ],
            "question": "Comment le berger rentre-t-il à la maison avec la brebis ?"
          }
        ],
        "ref": "Psaume 23 / Luc 15:1-7",
        "storyByAge": {
          "3-5": "Jésus est notre Bon Berger et nous sommes Ses petits agneaux adorés ! Quand une petite brebis s'est perdue, le Bon Berger est parti la chercher, l'a prise dans Ses bras et l'a ramenée à la maison !",
          "6-8": "Dans Luc 15, un berger avait cent brebis et l'une d'elles s'égara. Il quitta les quatre-vingt-dix-neuf pour la chercher sur les collines. Dès qu'il la trouva, il la mit sur ses épaules tout joyeux et invita ses amis à se réjouir. C'est ainsi que Jésus veille sur chacun de nous !",
          "9-12": "Le Psaume 23 et la parabole de Luc 15 soulignent la bienveillance inconditionnelle de Dieu. Le Bon Berger nous rassure : face à nos doutes et nos peurs, Sa présence constante nous restaure et nous guide sur les sentiers de la paix."
        },
        "title": "Le Bon Berger et la Brebis Égarée",
        "verse": {
          "ref": "Psaume 23:1-2",
          "text": "L'Éternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles."
        },
        "words": [
          "JESUS",
          "BERGER",
          "BREBIS",
          "AMOUR",
          "PAIX"
        ]
      },
      "icon": "🐑💚",
      "id": "pastor",
      "imageColor": "assets/images/shepherd_pixar.jpg",
      "imageColoring": "assets/images/shepherd_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Ouvir a voz de Jesus através da Bíblia e confiar na Sua direção amorosa.",
          "home": "Saber que nunca estou sozinho quando sinto medo à noite, pois o Bom Pastor vigia meu quarto.",
          "school": "Ser amigo de quem está sozinho no recreio, acolhendo o próximo como Jesus acolhe a ovelhinha."
        },
        "challenge": "Esta semana vou orar antes de dormir agradecendo a Jesus por cuidar de mim como Bom Pastor!",
        "imageColorDesc": "O Bom Pastor segura carinhosamente a ovelhinha resgatada nos braços em pastos verdejantes.",
        "imageColoringDesc": "Desenho para colorir do Bom Pastor cuidando de suas ovelhinhas com cajado.",
        "prayer": "Senhor Jesus, meu Bom Pastor, obrigado por me amar e me proteger sempre. Tu és meu refúgio e minha paz. Amém!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "Vai atrás dela com amor até encontrá-la",
              "Fica bravo e a abandona",
              "Esquece dela"
            ],
            "question": "O que o Bom Pastor faz quando uma ovelhinha se perde?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Para o deserto escuro",
              "Para verdes pastos e águas tranquilas",
              "Para penhascos"
            ],
            "question": "Onde o Bom Pastor guia Suas ovelhas no Salmo 23?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Reclamando",
              "Com a ovelha nos ombros cheio de alegria",
              "De mãos vazias"
            ],
            "question": "Como o pastor volta para casa ao achar a ovelha?"
          }
        ],
        "ref": "Salmo 23 / Lucas 15:1-7",
        "storyByAge": {
          "3-5": "Jesus é o nosso Bom Pastor e nós somos Suas ovelhinhas! Quando uma ovelhinha se perdeu no mato, o Bom Pastor foi procurá-la com carinho, colocou-a no colo e a levou para casa feliz!",
          "6-8": "Em Lucas 15, Jesus conta sobre um pastor que tinha cem ovelhas. Quando uma se perdeu, ele foi pelos montes até encontrá-la. Ele não brigou; colocou-a nos ombros com alegria e celebrou com os amigos. É assim que Jesus cuida de cada um de nós!",
          "9-12": "O Salmo 23 e a parábola de Lucas 15 retratam a fidelidade protetora de Deus. Para uma ovelha, o pastor é sustento, direção e escudo. Saber que o Senhor é nosso Pastor nos dá a certeza de que nunca estamos desamparados."
        },
        "title": "O Bom Pastor e a Ovelhinha",
        "verse": {
          "ref": "Salmo 23:1-2",
          "text": "O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas."
        },
        "words": [
          "JESUS",
          "PASTOR",
          "OVELHA",
          "AMOR",
          "CUIDADO"
        ]
      }
    },
    "pt": {
      "application": {
        "heart": "Não ser egoísta! Confiar que Deus cuida de tudo e que pequenas atitudes de bondade se transformam em grandes milagres.",
        "home": "Ajudar a mamãe e o papai com um sorriso e partilhar meus brinquedos e lanchinhos com meus irmãos sem brigar.",
        "school": "Quando ver um colega sem merenda ou sem lápis no recreio, repartir com amor assim como o rapazinho da Bíblia."
      },
      "challenge": "Esta semana vou praticar a generosidade: vou repartir com alegria um lanche ou brinquedo com um amigo que precisa, lembrando do milagre de Jesus!",
      "imageColorDesc": "Jesus abençoa o cesto com 5 pães e 2 peixes para alimentar a multidão. Ao olhar para a imagem, a criança já identifica a história!",
      "imageColoringDesc": "Desenho nítido em contorno preto e branco puro do cesto de pães e peixes com os 12 cestos de sobras para colorir.",
      "prayer": "Querido Senhor Jesus, obrigado por cuidar de mim todos os dias. Ensina meu coraçãozinho a ser generoso e a repartir o que tenho com alegria. Coloco minhas mãozinhas e tudo o que sou em Tuas mãos de amor. Amém!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "5 pães e 2 peixinhos",
            "10 pães e 1 peixe",
            "3 pães e 4 peixes"
          ],
          "question": "Quantos pães e peixinhos o menino ofereceu a Jesus?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Reclamou que a comida era pouca",
            "Orou e deu graças a Deus aos céus",
            "Mandou as pessoas embora com fome"
          ],
          "question": "O que Jesus fez antes de distribuir o lanche para a multidão?"
        },
        {
          "answerIndex": 2,
          "options": [
            "Nenhum cesto sobrou",
            "5 cestos pequenos",
            "12 cestos grandes cheios"
          ],
          "question": "Quantos cestos cheios de sobras foram recolhidos depois que todos comeram?"
        }
      ],
      "ref": "João 6:1-14",
      "storyByAge": {
        "3-5": "Era uma vez, em um dia lindo e ensolarado, muitas e muitas pessoas foram ver o amigo Jesus perto de um gramado verdinho. Elas andaram bastante e a barriguinha de todo mundo começou a fazer barulho de fome!\n\nUm garotinho muito legal abriu seu cestinho. Sabe o que ele tinha trazido para o lanche? Cinco pãezinhos quentinhos e dois peixinhos!\n\nEle correu e disse: 'Jesus, pode pegar o meu lanche para ajudar!'. Jesus sorriu com muito amor, olhou para o céu e agradeceu ao Papai do Céu. E aconteceu um milagre maravilhoso: aquele lanchinho cresceu, cresceu e alimentou todo mundo! Sobraram até doze cestos cheios! Jesus cuida de nós com muito carinho!",
        "6-8": "Numa tarde ensolarada perto do Mar da Galileia, uma enorme multidão de mais de cinco mil pessoas se reuniu nas colinas verdes para ouvir os ensinamentos cheios de amor de Jesus. As horas se passaram e o sol começou a se pôr. As pessoas estavam longe de casa e com muita fome.\n\nOs discípulos de Jesus disseram: 'Senhor, despeça o povo para comprarem comida nas aldeias'. Mas Jesus respondeu: 'Vocês mesmos deem de comer a eles'. O apóstolo André olhou ao redor e viu um jovem rapaz. Ele tinha apenas cinco pães de cevada e dois pequenos peixinhos. Parecia quase nada para tanta gente!\n\nPorém, aquele rapaz generoso ofereceu tudo o que tinha nas mãos de Jesus. Jesus mandou todos se assentarem sobre a relva, tomou os pães e os peixes, ergueu os olhos aos céus e deu graças. Em seguida, os discípulos começaram a distribuir... e a comida não acabava mais! Todos comeram até ficarem satisfeitos, e quando recolheram os pedaços que sobraram, encheram doze cestos grandes!",
        "9-12": "O relato de João 6:1-14 nos apresenta um dos milagres mais inspiradores do ministério de Jesus: a multiplicação dos pães e peixes junto ao Mar da Galileia. Uma multidão imensa acompanhava o Mestre porque via os sinais de compaixão e cura que Ele realizava.\n\nAo ver a necessidade física do povo faminto no fim do dia, Jesus colocou a fé de Seus discípulos à prova ao perguntar onde comprariam pão. Filipe calculou que duzentos denários não seriam suficientes nem para um pedaço minúsculo a cada pessoa. É nesse cenário de aparente escassez que surge um jovem anônimo, que voluntariamente colocou seu almoço simples — cinco pães de cevada e dois peixes — à disposição do Senhor.\n\nJesus acolheu aquela oferta sincera, rendeu graças ao Pai celestial e repartiu com o povo. Milagrosamente, todos foram saciados com fartura, e recolheram doze cestos cheios de sobras para que nada se perdesse. A lição é poderosa e profunda: não importa quão pequenos pareçam os nossos recursos; quando entregamos o que somos e o que temos com generosidade nas mãos de Cristo, Ele multiplica para abençoar milhares!"
      },
      "title": "A Multiplicação dos Pães e dos Peixes",
      "verse": {
        "ref": "João 6:11",
        "text": "Jesus tomou os pães e, havendo dado graças, distribuiu-os pelos que estavam assentados; e do mesmo modo os peixes, tanto quanto eles queriam."
      },
      "words": [
        "JESUS",
        "PAES",
        "PEIXES",
        "CESTO",
        "MILAGRE"
      ]
    },
    "samaritano": {
      "en": {
        "application": {
          "heart": "Look past appearances and treat every person with divine dignity and kindness.",
          "home": "Cheerfully assist parents and siblings with chores without being asked twice.",
          "school": "Sit with someone who has no one to play with during recess or help carry dropped books."
        },
        "challenge": "This week I will perform a secret act of kindness to help someone at home or school!",
        "imageColorDesc": "The Good Samaritan bandaging the wounded traveler with deep compassion and love.",
        "imageColoringDesc": "Coloring page showing practical kindness and helping those in need along the road.",
        "prayer": "Lord Jesus, fill my heart with Your pure love. Open my eyes to notice those who need help and give me willing hands to serve. Amen!",
        "quiz": [
          {
            "answerIndex": 2,
            "options": [
              "The priest",
              "The Levite",
              "The Good Samaritan"
            ],
            "question": "Who stopped to help the wounded traveler?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Fear",
              "Deep compassion and love",
              "Indifference"
            ],
            "question": "What did the Samaritan feel when he saw the hurting man?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Love your neighbor with practical action",
              "Only help best friends",
              "Ignore needy people"
            ],
            "question": "What did Jesus teach through this parable?"
          }
        ],
        "ref": "Luke 10:25-37",
        "storyByAge": {
          "3-5": "A kind traveler saw someone hurt by the side of the road. Other people walked away, but he stopped to help! He put bandages on his hurts, gave him fresh water, and took him to a safe inn. Jesus teaches us to love and help our friends!",
          "6-8": "Jesus told of a traveler wounded on the road to Jericho. A priest and a Levite walked past without helping. But a Samaritan felt deep compassion: he bandaged his wounds, placed him on his own donkey, took him to an inn, and paid all expenses. Jesus said: 'Go and do likewise!'.",
          "9-12": "The parable of the Good Samaritan redefines neighborly love. Compassion is not merely a feeling; it is sacrificial action that crosses social barriers. True love reflects Christ's grace by serving anyone in need regardless of differences."
        },
        "title": "The Good Samaritan",
        "verse": {
          "ref": "Luke 10:27",
          "text": "Love your neighbor as yourself."
        },
        "words": [
          "JESUS",
          "LOVE",
          "HELP",
          "NEIGHBOR",
          "KINDNESS"
        ]
      },
      "es": {
        "application": {
          "heart": "No juzgar a las personas por su ropa o aspecto; tratarlas con amor y dignidad.",
          "home": "Ayudar a mis hermanos y familiares cuando necesiten un favor sin esperar nada a cambio.",
          "school": "Ser amigo de quien esté solo en el recreo o ayudar a recoger los lápices caídos de un compañero."
        },
        "challenge": "Esta semana haré una buena acción para ayudar a un compañero o familiar sin que me lo pidan.",
        "imageColorDesc": "El buen samaritano curando al hombre herido con compasión y ternura en el camino.",
        "imageColoringDesc": "Dibujo para colorear que enseña sobre ayudar al prójimo y amar con hechos prácticos.",
        "prayer": "Señor Jesús, llena mi corazón de Tu compasión. Ayúdame a amar a mi prójimo con acciones generosas cada día. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 2,
            "options": [
              "El sacerdote",
              "El levita",
              "El buen samaritano"
            ],
            "question": "¿Quién se detuvo a ayudar al hombre herido?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Miedo",
              "Misericordia y amor",
              "Indiferencia"
            ],
            "question": "¿Qué sintió el samaritano al ver al hombre herido?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Amar y ayudar al prójimo con hechos",
              "Ayudar solo a conocidos",
              "Desviar la mirada"
            ],
            "question": "¿Qué nos enseñó Jesús a través de esta historia?"
          }
        ],
        "ref": "Lucas 10:25-37",
        "storyByAge": {
          "3-5": "Un hombre bueno iba de viaje y vio a alguien herido. Otros pasaron de largo, ¡pero él se detuvo con amor! Le curó las heridas, le dio agua y lo llevó a descansar seguro. ¡Jesús nos enseñó que amar es ayudar a los demás!",
          "6-8": "Jesús contó de un viajero herido por ladrones. Un sacerdote y un levita pasaron de largo sin ayudarlo. Pero un samaritano se llenó de compasión: vendó sus heridas con aceite y vino, lo subió a su cabalgadura, lo llevó al mesón y pagó todo. Jesús concluyó: '¡Ve, y haz tú lo mismo!'.",
          "9-12": "La parábola del Buen Samaritano derriba prejuicios. Jesús enseña que el prójimo es cualquiera que necesite misericordia. El amor genuino no se queda en discursos, sino que invierte tiempo, recursos y empatía para restaurar al caído."
        },
        "title": "El Buen Samaritano",
        "verse": {
          "ref": "Lucas 10:27",
          "text": "Amarás a tu prójimo como a ti mismo."
        },
        "words": [
          "JESUS",
          "AMOR",
          "AYUDAR",
          "PROJIMO",
          "BONDAD"
        ]
      },
      "fr": {
        "application": {
          "heart": "Ne jamais juger sur les apparences et traiter chaque personne avec respect et bonté.",
          "home": "Aider volontiers mes parents et mes frères et sœurs à la maison avec joie.",
          "school": "Aller vers celui qui est tout seul à la récréation ou aider un camarade qui a fait tomber ses affaires."
        },
        "challenge": "Cette semaine, je ferai une bonne action discrète pour aider quelqu'un autour de moi !",
        "imageColorDesc": "Le bon Samaritain soignant le voyageur blessé avec compassion et amour sur la route.",
        "imageColoringDesc": "Coloriage enseignant la bonté pratique et l'aide à son prochain dans le besoin.",
        "prayer": "Seigneur Jésus, remplis mon cœur de Ton amour véritable. Ouvre mes yeux pour voir ceux qui souffrent et donne-moi des mains prêtes à servir. Amen !",
        "quiz": [
          {
            "answerIndex": 2,
            "options": [
              "Le prêtre",
              "Le lévite",
              "Le bon Samaritain"
            ],
            "question": "Qui s'est arrêté pour secourir l'homme blessé ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "De la peur",
              "Une profonde compassion",
              "De l'indifférence"
            ],
            "question": "Qu'a ressenti le Samaritain en voyant l'homme blessé ?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Aimer son prochain par des actes concrets",
              "N'aider que ses amis",
              "Ignorer ceux qui souffrent"
            ],
            "question": "Que nous enseigne Jésus à travers cette parabole ?"
          }
        ],
        "ref": "Luc 10:25-37",
        "storyByAge": {
          "3-5": "Un homme très gentil voyageait et vit quelqu'un de blessé au bord du chemin. D'autres passèrent sans s'arrêter, mais lui eut pitié ! Il soigna ses bobos, lui donna de l'eau et le mit à l'abri dans une auberge. Jésus nous montre qu'aimer, c'est aider son prochain !",
          "6-8": "Jésus raconta l'histoire d'un homme attaqué par des brigands. Un prêtre et un lévite passèrent sans s'arrêter. Mais un Samaritain fut ému de compassion : il pansa ses plaies, le mit sur sa monture, le conduisit dans une auberge et paya tous les frais. Jésus dit : 'Va, et toi aussi, fais de même !'.",
          "9-12": "La parabole du Bon Samaritain redéfinit la notion de prochain. L'amour authentique transcende les barrières religieuses et sociales. Il se traduit par une action concrète, généreuse et désintéressée envers celui qui souffre."
        },
        "title": "Le Bon Samaritain",
        "verse": {
          "ref": "Luc 10:27",
          "text": "Tu aimeras ton prochain comme toi-même."
        },
        "words": [
          "JESUS",
          "AMOUR",
          "AIDER",
          "PROCHAIN",
          "BONTE"
        ]
      },
      "icon": "🤝❤️",
      "id": "samaritano",
      "imageColor": "assets/images/samaritan_pixar.jpg",
      "imageColoring": "assets/images/samaritan_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Não julgar ninguém pela aparência ou pelas roupas; tratar todos com respeito e amor.",
          "home": "Ajudar meus irmãos e pais quando precisarem de um favor com um coração alegre.",
          "school": "Ser amigo de quem não tem amigos no recreio ou ajudar um colega que deixou cair o material."
        },
        "challenge": "Esta semana vou fazer uma boa ação para ajudar alguém sem esperar nada em troca!",
        "imageColorDesc": "O bom samaritano cuidando do homem ferido com amor e compaixão sincera.",
        "imageColoringDesc": "Desenho para colorir ensinando sobre o amor ao próximo e ajudar quem precisa.",
        "prayer": "Senhor Jesus, enche meu coração com Teu amor puro. Ajuda-me a enxergar quem precisa e a estender a mão para ajudar. Amém!",
        "quiz": [
          {
            "answerIndex": 2,
            "options": [
              "O sacerdote",
              "O levita",
              "O bom samaritano"
            ],
            "question": "Quem parou para ajudar o homem ferido na estrada?"
          },
          {
            "answerIndex": 1,
            "options": [
              "Medo",
              "Muita compaixão e amor",
              "Indiferença"
            ],
            "question": "O que o samaritano sentiu ao ver o homem ferido?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Ajudar o próximo com atitudes reais",
              "Ajudar só quem gostamos",
              "Desviar de quem precisa"
            ],
            "question": "O que Jesus nos ensinou nesta parábola?"
          }
        ],
        "ref": "Lucas 10:25-37",
        "storyByAge": {
          "3-5": "Um homem bondoso estava viajando e viu alguém machucado no caminho. Outras pessoas não ajudaram, mas ele teve pena! Ele cuidou dos machucados com curativo, deu água e o levou para descansar seguro. Jesus nos ensinou que amar é ajudar o amiguinho!",
          "6-8": "Jesus contou sobre um viajante ferido por ladrões na estrada de Jericó. Um sacerdote e um levita passaram e desviaram. Mas um samaritano encheu-se de compaixão: tratou suas feridas, colocou-o em seu animal, levou-o a uma hospedaria e pagou tudo. Jesus disse: 'Vai e faze da mesma maneira!'.",
          "9-12": "A parábola do Bom Samaritano redefining quem é o nosso próximo. O amor bíblico vai além de palavras e preconceitos; é uma ação prática, generosa e sacrificial. Amar o próximo significa estender a mão a quem sofre sem exigir nada em troca."
        },
        "title": "O Bom Samaritano",
        "verse": {
          "ref": "Lucas 10:27",
          "text": "Amarás o teu próximo como a ti mesmo."
        },
        "words": [
          "JESUS",
          "AMOR",
          "AJUDAR",
          "PROXIMO",
          "BONDADE"
        ]
      }
    },
    "tumulo": {
      "en": {
        "application": {
          "heart": "Never fear darkness or trouble, knowing the living Christ walks with me every step.",
          "home": "Celebrate that Jesus is alive and present in our home, bringing joy and peace.",
          "school": "Be a cheerful friend and share the great news of Jesus' living hope with classmates."
        },
        "challenge": "This week I will share joy and say to someone: 'Jesus is alive and loves you!'",
        "imageColorDesc": "The large stone rolled away, the empty tomb bathed in resurrection light, and the shining angel.",
        "imageColoringDesc": "Coloring page showing the rolled-away stone, open tomb, and Easter lilies.",
        "prayer": "Lord Jesus, I praise You because You are alive! Thank You for conquering death and giving me living hope. Amen!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "The stone rolled away and the tomb empty",
              "Guards blocking the way",
              "The tomb sealed shut"
            ],
            "question": "What did the women find on Sunday morning at the tomb?"
          },
          {
            "answerIndex": 1,
            "options": [
              "'Go away'",
              "'Do not be afraid, He has risen!'",
              "'Look in another town'"
            ],
            "question": "What did the angel say to the women?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Jesus is alive forever and loves us",
              "The story ended sadly",
              "It was just a myth"
            ],
            "question": "What does the empty tomb mean for us?"
          }
        ],
        "ref": "Matthew 28:1-10",
        "storyByAge": {
          "3-5": "Early on Sunday morning, the sun rose over a quiet garden. Women went to Jesus' tomb, but the giant stone was rolled away! A shining angel smiled and said: 'Don't cry! Jesus is alive!'. Everyone danced with joy!",
          "6-8": "At dawn on the first day of the week, women visited the tomb. An angel of the Lord rolled back the heavy stone and said: 'Do not be afraid! Jesus has risen, just as He said! Come see the empty place!'. Filled with joy, they ran to tell the disciples that Jesus is alive!",
          "9-12": "The resurrection of Jesus Christ in Matthew 28 is the foundation of Christian hope. The empty tomb proves that life triumphs over death, sin is defeated, and Christ reigns forever as our living Lord and Savior."
        },
        "title": "The Empty Tomb (Jesus is Risen!)",
        "verse": {
          "ref": "Matthew 28:6",
          "text": "He is not here; he has risen, just as he said. Come and see the place where he lay."
        },
        "words": [
          "JESUS",
          "TOMB",
          "RISEN",
          "ANGEL",
          "LIFE"
        ]
      },
      "es": {
        "application": {
          "heart": "No temer en momentos difíciles, sabiendo que Cristo resucitado reina en mi corazón.",
          "home": "Celebrar que Jesús vive y llena nuestro hogar de paz, amor y esperanza.",
          "school": "Compartir la buena noticia con mis amigos: ¡Jesús es nuestro amigo vivo y fiel!"
        },
        "challenge": "Esta semana compartiré la alegría con mi familia diciendo: '¡Jesús resucitó y está con nosotros!'",
        "imageColorDesc": "La gran piedra removida, la tumba vacía iluminada por la luz de la resurrección y el ángel de paz.",
        "imageColoringDesc": "Dibujo para colorear de la tumba abierta, la piedra rodada y los lirios de la Pascua.",
        "prayer": "Señor Jesús, ¡Te alabo porque estás vivo! Gracias por vencer la muerte y darme vida eterna. ¡Amén!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "La piedra rodada y la tumba vacía",
              "La tumba cerrada",
              "Soldados atacándolas"
            ],
            "question": "¿Qué encontraron las mujeres al llegar a la tumba el domingo?"
          },
          {
            "answerIndex": 1,
            "options": [
              "'Regresen tristes'",
              "'¡No temáis, ha resucitado!'",
              "'No está aquí nadie'"
            ],
            "question": "¿Qué les dijo el ángel del Señor?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Que Jesús vive para siempre",
              "Que todo terminó triste",
              "Un cuento antiguo"
            ],
            "question": "¿Qué significa la tumba vacía para nosotros?"
          }
        ],
        "ref": "Mateo 28:1-10",
        "storyByAge": {
          "3-5": "¡El domingo por la mañana salió el sol en el jardín! Unas mujeres fueron a la tumba de Jesús, ¡pero la gran piedra había sido rodada! Un ángel brillante dijo: '¡No lloren, Jesús resucitó y vive para siempre!'. ¡Todos saltaron de alegría!",
          "6-8": "Al amanecer del primer día de la semana, las mujeres llegaron al sepulcro. Un ángel del Señor removió la pesada piedra y les dijo: '¡No temáis! Sé que buscáis a Jesús. ¡No está aquí, pues ha resucitado como dijo!'. Corrieron llenas de gozo a anunciar que Jesús está vivo.",
          "9-12": "La resurrección de Cristo en Mateo 28 es el pilar de nuestra fe. La tumba vacía no es ausencia, sino la victoria definitiva de la vida sobre la muerte, asegurando perdón, salvación y esperanza eterna a la humanidad."
        },
        "title": "La Tumba Vacía (¡Jesús Resucitó!)",
        "verse": {
          "ref": "Mateo 28:6",
          "text": "No está aquí, pues ha resucitado, como dijo. Venid, ved el lugar donde fue puesto el Señor."
        },
        "words": [
          "JESUS",
          "TUMBA",
          "RESUCITO",
          "ANGEL",
          "VIDA"
        ]
      },
      "fr": {
        "application": {
          "heart": "Ne jamais avoir peur face aux épreuves, car le Christ ressuscité marche avec moi.",
          "home": "Célébrer la joie de savoir que Jésus est vivant et présent dans notre maison chaque jour.",
          "school": "Être un ami joyeux et partager cette espérance avec mes camarades d'école."
        },
        "challenge": "Cette semaine, je partagerai la joie autour de moi en disant : 'Jésus est vivant et Il prend soin de nous !'",
        "imageColorDesc": "La grande pierre roulée, le tombeau vide baigné de lumière et l'ange resplendissant.",
        "imageColoringDesc": "Coloriage montrant la pierre déplacée, l'entrée ouverte du sépulcre et les fleurs du matin.",
        "prayer": "Seigneur Jésus, je Te loue de tout mon cœur car Tu es vivant ! Merci de m'accorder une espérance éternelle. Amen !",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "La pierre roulée et le tombeau vide",
              "Le tombeau fermé à clé",
              "Des gardes menaçants"
            ],
            "question": "Qu'ont trouvé les femmes en arrivant au tombeau le dimanche matin ?"
          },
          {
            "answerIndex": 1,
            "options": [
              "'Partez d'ici'",
              "'N'ayez pas peur, Il est ressuscité !'",
              "'Il n'y a plus d'espoir'"
            ],
            "question": "Qu'a dit l'ange du Seigneur aux femmes ?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Que Jésus est vivant pour toujours",
              "Une fin tragique",
              "Une vieille légende"
            ],
            "question": "Que signifie le tombeau vide pour nous aujourd'hui ?"
          }
        ],
        "ref": "Matthieu 28:1-10",
        "storyByAge": {
          "3-5": "Le dimanche matin, le soleil s'est levé sur le jardin. Des femmes sont allées au tombeau, mais la grosse pierre était roulée sur le côté ! Un ange brillant a souri et dit : 'Ne pleurez plus ! Jésus est ressuscité et Il est vivant pour toujours !'. Quelle joie !",
          "6-8": "À l'aube du premier jour de la semaine, des femmes allèrent au sépulcre. Un ange du Seigneur roula la lourde pierre et dit : 'N'ayez pas peur ! Jésus n'est pas ici ; Il est ressuscité comme Il l'avait promis !'. Remplies d'une joie immense, elles coururent annoncer la bonne nouvelle aux disciples !",
          "9-12": "La résurrection dans Matthieu 28 est le cœur de l'Évangile. Le tombeau vide atteste la victoire définitive de Jésus sur la mort et le péché. Parce qu'Il vit, nous avons l'assurance du salut et la certitude de Son amour quotidien."
        },
        "title": "Le Tombeau Vide (Jésus est Ressuscité !)",
        "verse": {
          "ref": "Matthieu 28:6",
          "text": "Il n'est point ici; il est ressuscité, comme il l'avait dit. Venez, voyez le lieu où il était couché."
        },
        "words": [
          "JESUS",
          "TOMBEAU",
          "VIVANT",
          "ANGE",
          "VIE"
        ]
      },
      "icon": "🌅✝️",
      "id": "tumulo",
      "imageColor": "assets/images/tomb_pixar.jpg",
      "imageColoring": "assets/images/tomb_coloring.jpg",
      "pt": {
        "application": {
          "heart": "Não ter medo dos momentos difíceis, sabendo que Jesus reina no meu coração.",
          "home": "Celebrar a alegria de que Jesus está vivo na nossa casa, enchendo nossa família de paz e esperança.",
          "school": "Compartilhar a boa notícia com meus colegas: Jesus é o nosso amigo vivo e fiel!"
        },
        "challenge": "Esta semana vou espalhar a alegria da ressurreição contando a um amigo que Jesus está vivo!",
        "imageColorDesc": "A grande pedra foi rolada, o túmulo está vazio e a luz da ressurreição ilumina o jardim!",
        "imageColoringDesc": "Desenho para colorir com a pedra removida, a entrada aberta do sepulcro e os lírios da Páscoa.",
        "prayer": "Senhor Jesus, eu Te louvo porque Tu estás vivo! Obrigado por vencer a morte e me dar esperança eterna. Amém!",
        "quiz": [
          {
            "answerIndex": 0,
            "options": [
              "A pedra rolada e o túmulo vazio",
              "Soldados impedindo a passagem",
              "O túmulo trancado"
            ],
            "question": "O que as mulheres encontraram ao chegar ao túmulo no domingo?"
          },
          {
            "answerIndex": 1,
            "options": [
              "'Voltem para casa'",
              "'Não tenham medo, Ele ressuscitou!'",
              "'Ele não está vivo'"
            ],
            "question": "O que o anjo do Senhor disse às mulheres?"
          },
          {
            "answerIndex": 0,
            "options": [
              "Que Jesus está vivo para sempre",
              "Que a história acabou triste",
              "Apenas uma lembrança antiga"
            ],
            "question": "O que o túmulo vazio significa para nós hoje?"
          }
        ],
        "ref": "Mateus 28:1-10",
        "storyByAge": {
          "3-5": "No domingo de manhã, o sol nasceu bem quentinho no jardim. Três mulheres foram ao túmulo de Jesus. Mas a grande pedra tinha sido rolada! Um anjo lindo disse: 'Não chorem! Jesus ressuscitou e está vivo!'. Que alegria maravilhosa!",
          "6-8": "Ao amanhecer do primeiro dia da semana, as mulheres foram ao sepulcro. Um anjo do Senhor desceu dos céus, removeu a pesada pedra e disse: 'Não tenham medo! Jesus não está aqui; ressuscitou, como havia dito!'. Elas correram felizes para contar a todos: Jesus está vivo!",
          "9-12": "A ressurreição em Mateus 28 é a verdade suprema do Cristianismo: a vitória sobre o pecado e a morte. O sepulcro vazio proclama que Jesus vive para sempre e nos assegura paz, esperança e vida eterna."
        },
        "title": "O Túmulo Vazio (Jesus Ressuscitou!)",
        "verse": {
          "ref": "Mateus 28:6",
          "text": "Ele não está aqui, porque já ressuscitou, como havia dito. Vinde, vede o lugar onde o Senhor jazia."
        },
        "words": [
          "JESUS",
          "TUMULO",
          "RESSUSCITOU",
          "ANJO",
          "VIDA"
        ]
      }
    }
  },
  "jonas": {
    "en": {
      "application": {
        "heart": "Trust that God always hears our sincere prayers of repentance wherever we are.",
        "home": "Do not hide mistakes from parents; admit them quickly and ask for forgiveness.",
        "school": "Complete school assignments promptly without complaining or delaying."
      },
      "challenge": "This week I will practice obeying right away the first time I am asked to do something!",
      "imageColorDesc": "The friendly great fish in the sea teaching the lesson of obedience with Jonah.",
      "imageColoringDesc": "Coloring page showing Jonah, the great fish, and ocean waves ready for coloring.",
      "prayer": "Lord God, forgive me when I am stubborn. Help me to listen to Your voice and obey with a willing heart. Amen!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Tarshish",
            "Nineveh",
            "Jerusalem"
          ],
          "question": "To which city did God send Jonah to preach?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Slept",
            "Prayed in repentance to the Lord",
            "Swam"
          ],
          "question": "What did Jonah do inside the belly of the fish?"
        },
        {
          "answerIndex": 1,
          "options": [
            "1 day",
            "3 days and 3 nights",
            "7 days"
          ],
          "question": "How long was Jonah in the belly of the great fish?"
        }
      ],
      "ref": "Jonah 1-3",
      "storyByAge": {
        "3-5": "God asked Jonah to help people in a faraway city, but Jonah ran away in a boat! A big splash came and Jonah fell into the water. God sent a great big fish to keep him safe! Inside, Jonah prayed, said 'I'm sorry', and then happily obeyed God!",
        "6-8": "God called Jonah to preach repentance in Nineveh, but Jonah tried to flee by ship. When a great storm arose, Jonah was cast into the sea. God provided a great fish to swallow him. After three days of prayer, the fish set him on dry ground, and Jonah went to Nineveh as God commanded.",
        "9-12": "The book of Jonah teaches that no one can hide from God's presence. God's discipline is redemptive, not destructive. Inside the fish, Jonah rediscovered humble prayer and learned that God's heart longs to extend mercy to all nations."
      },
      "title": "Jonah and the Great Fish",
      "verse": {
        "ref": "Jonah 2:2",
        "text": "In my distress I called to the Lord, and he answered me. From deep in the realm of the dead I called for help, and you listened to my cry."
      },
      "words": [
        "JONAH",
        "FISH",
        "SEA",
        "PRAYER",
        "OBEY"
      ]
    },
    "es": {
      "application": {
        "heart": "Comprender que Dios siempre escucha nuestras oraciones sinceras dondequiera que estemos.",
        "home": "No esconder mis errores a mis padres; pedir disculpas rápido y enmendar el error.",
        "school": "Hacer las tareas que pide el profesor sin poner pretextos ni postergarlas."
      },
      "challenge": "Esta semana practicaré la obediencia inmediata la primera vez que me pidan algo.",
      "imageColorDesc": "El gran pez en el mar y la lección de obediencia y amor con Jonás.",
      "imageColoringDesc": "Dibujo para colorear de Jonás, el gran pez y las olas del mar.",
      "prayer": "Señor Dios, perdóname cuando soy desobediente. Enséñame a escuchar Tu voz y a cumplir Tu voluntad con alegría. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Tarsis",
            "Nínive",
            "Jerusalén"
          ],
          "question": "¿A qué ciudad envió Dios a Jonás a predicar?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Durmió",
            "Oró al Señor arrepentido",
            "Intentó nadar"
          ],
          "question": "¿Qué hizo Jonás dentro del gran pez?"
        },
        {
          "answerIndex": 1,
          "options": [
            "1 día",
            "3 días y 3 noches",
            "7 días"
          ],
          "question": "¿Cuánto tiempo estuvo Jonás en el vientre del gran pez?"
        }
      ],
      "ref": "Jonás 1-3",
      "storyByAge": {
        "3-5": "Dios le dijo a Jonás que fuera a una ciudad a predicar, ¡pero Jonás huyó en un barco! Vino una ola grande y cayó al agua. Dios envió un pez enorme para protegerlo. ¡Allí adentro Jonás oró, pidió perdón y fue a obedecer a Dios muy contento!",
        "6-8": "Dios envió a Jonás a predicar en Nínive, pero él intentó huir a Tarsis. En medio de una tormenta fue arrojado al mar, y Dios preparó un gran pez para que lo tragase. Jonás oró con arrepentimiento durante tres días, el pez lo dejó en tierra firme y Jonás cumplió la misión de Dios.",
        "9-12": "El libro de Jonás enseña que es inútil huir de Dios y resalta la inmensidad de Su gracia. En el vientre del pez, Jonás experimentó que Dios escucha el clamor sincero y nos concede segundas oportunidades para obedecerle."
      },
      "title": "Jonás y el Gran Pez",
      "verse": {
        "ref": "Jonás 2:2",
        "text": "Invoqué en mi angustia a Jehová, y él me oyó; desde el seno del Seol clamé, y mi voz oíste."
      },
      "words": [
        "JONAS",
        "PEZ",
        "MAR",
        "ORACION",
        "OBEDECER"
      ]
    },
    "fr": {
      "application": {
        "heart": "Savoir que Dieu entend toujours mes prières sincères où que je me trouve.",
        "home": "Ne pas cacher mes bêtises à mes parents ; reconnaître mes torts et demander pardon rapidement.",
        "school": "Faire mes devoirs et mes corvées sans rechigner et sans remettre à plus tard."
      },
      "challenge": "Cette semaine, j'obéirai dès la première demande sans rouspéter !",
      "imageColorDesc": "Le grand poisson bienveillant et la leçon d'obéissance et de grâce avec Jonas.",
      "imageColoringDesc": "Coloriage de Jonas, du grand poisson et des vagues de la mer.",
      "prayer": "Seigneur Dieu, pardonne-moi lorsque je suis désobéissant. Apprends-moi à écouter Ta voix et à Te suivre avec joie. Amen !",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Tarsis",
            "Ninive",
            "Jérusalem"
          ],
          "question": "Dans quelle ville Dieu a-t-Il envoyé Jonas prêcher ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Il a dormi",
            "Il a prié l'Éternel avec repentance",
            "Il a nagé"
          ],
          "question": "Qu'a fait Jonas dans le ventre du grand poisson ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "1 jour",
            "3 jours et 3 nuits",
            "7 jours"
          ],
          "question": "Combien de temps Jonas est-il resté dans le ventre du poisson ?"
        }
      ],
      "ref": "Jonas 1-3",
      "storyByAge": {
        "3-5": "Dieu demanda à Jonas d'aller aider les gens d'une grande ville, mais Jonas s'est enfui en bateau ! Une grande vague est arrivée et Jonas est tombé à l'eau. Dieu a envoyé un très grand poisson pour le sauver ! Dans son ventre, Jonas a prié, demandé pardon et a obéi avec joie !",
        "6-8": "Dieu chargea Jonas d'aller prêcher à Ninive, mais Jonas prit un bateau pour fuir vers Tarsis. Une terrible tempête éclata et Jonas fut jeté à la mer. Dieu prépara un grand poisson pour l'avaler. Après trois jours de prière sincère, le poisson le déposa sur la plage et Jonas alla accomplir la volonté de Dieu.",
        "9-12": "Le livre de Jonas montre qu'on ne peut fuir la présence de Dieu et illustre la grandeur de Son pardon. Dans le ventre du poisson, Jonas retrouva la prière véritable. Cette histoire prouve que la miséricorde de Dieu s'adresse à tous ceux qui reviennent à Lui de tout leur cœur."
      },
      "title": "Jonas et le Grand Poisson",
      "verse": {
        "ref": "Jonas 2:2",
        "text": "Dans ma détresse, j'ai invoqué l'Éternel, et il m'a exaucé; du sein du séjour des morts j'ai crié, et tu as entendu ma voix."
      },
      "words": [
        "JONAS",
        "POISSON",
        "MER",
        "PRIERE",
        "OBEIR"
      ]
    },
    "icon": "🐋🌊",
    "id": "jonas",
    "imageColor": "assets/images/jonah_pixar.jpg",
    "imageColoring": "assets/images/jonah_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Saber que Deus sempre nos ouve e perdoa quando oramos com sinceridade.",
        "home": "Não tentar esconder quando fizer algo errado; pedir perdão logo aos pais.",
        "school": "Fazer as tarefas escolares que o professor pede sem enrolar ou inventar desculpas."
      },
      "challenge": "Esta semana vou praticar a obediência imediata da primeira vez que me pedirem algo!",
      "imageColorDesc": "O grande peixe amigo no mar e a lição de amor e obediência com Jonas.",
      "imageColoringDesc": "Desenho para colorir de Jonas, o grande peixe e as ondas do mar.",
      "prayer": "Senhor Deus, perdoa-me quando sou teimoso. Ensina-me a ouvir Tua voz e a obedecer com alegria no coração. Amém!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Társis",
            "Nínive",
            "Jerusalém"
          ],
          "question": "Para qual cidade Deus mandou Jonas pregar?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Dormiu",
            "Orou ao Senhor com arrependimento",
            "Tentou nadar"
          ],
          "question": "O que Jonas fez dentro do grande peixe?"
        },
        {
          "answerIndex": 1,
          "options": [
            "1 dia",
            "3 dias e 3 noites",
            "7 dias"
          ],
          "question": "Quantos dias Jonas ficou na barriga do grande peixe?"
        }
      ],
      "ref": "Jonas 1-3",
      "storyByAge": {
        "3-5": "Deus pediu para Jonas ir a uma cidade ajudar as pessoas, mas Jonas fugiu num barquinho! Veio uma onda bem grandona e Jonas caiu no mar. Deus cuidou dele e mandou um peixe grandão engolir Jonas com carinho. Lá dentro Jonas orou, pediu perdão e obedeceu todo feliz!",
        "6-8": "Deus mandou Jonas pregar em Nínive, mas ele fugiu para Társis. Veio uma forte tempestade e Jonas foi lançado ao mar. Deus preparou um grande peixe para resgatá-lo. Após três dias de oração, o peixe o levou à praia e Jonas foi obedecer à ordem de Deus.",
        "9-12": "O livro de Jonas revela a soberania divina e o alcance universal da misericórdia. Não podemos fugir da presença de Deus. No ventre do peixe, Jonas descobriu o poder da oração contrita e compreendeu que a graça de Deus perdoa a todo aquele que se arrepende."
      },
      "title": "Jonas e o Grande Peixe",
      "verse": {
        "ref": "Jonas 2:2",
        "text": "Na minha angústia clamei ao Senhor, e ele me respondeu; do ventre do peixe gritei, e tu ouviste a minha voz."
      },
      "words": [
        "JONAS",
        "PEIXE",
        "MAR",
        "ORACAO",
        "OBEDECER"
      ]
    }
  },
  "moises": {
    "en": {
      "application": {
        "heart": "Learn to wait patiently on God's perfect timing instead of worrying.",
        "home": "Trust that God provides solutions when family situations seem difficult or confusing.",
        "school": "Stay calm and prayerful during school tests and stressful moments."
      },
      "challenge": "This week, whenever I face a hard moment, I will pray first instead of complaining!",
      "imageColorDesc": "Moses raising his staff as the Red Sea parts into majestic walls of water for God's people.",
      "imageColoringDesc": "Coloring page showing Moses parting the sea with his staff and people walking on dry ground.",
      "prayer": "Almighty Lord, You parted the Red Sea and made a way. Guide my footsteps and bring peace to my heart today. Amen!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Dead Sea",
            "Red Sea",
            "Sea of Galilee"
          ],
          "question": "Which sea did God part so the people could cross?"
        },
        {
          "answerIndex": 1,
          "options": [
            "His cloak",
            "His staff",
            "A sword"
          ],
          "question": "What did Moses stretch out over the water?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Deep mud",
            "Completely dry",
            "Knee-deep water"
          ],
          "question": "How was the ground as the people crossed the sea?"
        }
      ],
      "ref": "Exodus 14",
      "storyByAge": {
        "3-5": "Moses led God's people to a huge blue sea! Moses held up his wooden staff to the sky. God sent a strong wind and whoosh! The sea opened right down the middle with dry ground to walk on! God is so powerful!",
        "6-8": "Trapped between the Red Sea ahead and Pharaoh's army behind, the Israelites were frightened. Moses declared in faith: 'Do not be afraid. Stand firm and see the deliverance the Lord will bring!'. As Moses stretched out his staff, the waters parted, and the people crossed safely on dry ground!",
        "9-12": "Exodus 14 reveals God as the divine Deliverer. In human impossibility, God opened a way where there was no way. The crossing of the Red Sea stands as a permanent testimony that God fights on behalf of His children when they trust His commands."
      },
      "title": "Moses and the Red Sea",
      "verse": {
        "ref": "Exodus 14:14",
        "text": "The Lord will fight for you; you need only to be still."
      },
      "words": [
        "MOSES",
        "SEA",
        "STAFF",
        "FREE",
        "MIRACLE"
      ]
    },
    "es": {
      "application": {
        "heart": "Confiar en el socorro divino sin quejarse ni perder la paz.",
        "home": "Recordar que Dios abre puertas y ayuda a la familia en momentos difíciles.",
        "school": "Mantener la calma en exámenes o situaciones complicadas sabiendo que Dios me acompaña."
      },
      "challenge": "Esta semana, ante cualquier problema en la escuela o en casa, oraré primero en lugar de quejarme.",
      "imageColorDesc": "Moisés alzando su vara mientras las aguas del Mar Rojo se dividen formando murallas de agua.",
      "imageColoringDesc": "Dibujo para colorear de Moisés abriendo el mar y el pueblo cruzando en seco.",
      "prayer": "Señor Dios Todopoderoso, Tú abriste el Mar Rojo con Tu gran poder. Abre caminos de bendición en mi vida. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Mar Muerto",
            "Mar Rojo",
            "Mar de Galilea"
          ],
          "question": "¿Qué mar abrió Dios para que el pueblo cruzara?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Su manto",
            "Su vara",
            "Una espada"
          ],
          "question": "¿Qué extendió Moisés sobre las aguas?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Lleno de fango",
            "Completamente seco",
            "Con agua hasta la rodilla"
          ],
          "question": "¿Cómo estaba el suelo del mar al cruzar?"
        }
      ],
      "ref": "Éxodo 14",
      "storyByAge": {
        "3-5": "Moisés guiaba al pueblo y llegaron ante un mar azul inmenso. Moisés levantó su vara de madera al cielo. ¡Dios sopló un viento fuerte y el mar se abrió en dos! ¡El suelo quedó seco y todos cruzaron felices!",
        "6-8": "Con el ejército de Faraón detrás y el Mar Rojo delante, el pueblo sintió miedo. Pero Moisés dijo: '¡No temáis; estad firmes y ved la salvación de Jehová!'. Moisés extendió su vara, las aguas se abrieron en dos murallas y el pueblo pasó en tierra seca hasta la otra orilla.",
        "9-12": "Éxodo 14 enseña que cuando los recursos humanos se agotan, Dios manifiesta Su poder salvador. La orden de avanzar hacia el mar demuestra que la fe requiere pasos valientes. Dios abre caminos donde no hay camino."
      },
      "title": "Moisés y el Mar Rojo",
      "verse": {
        "ref": "Éxodo 14:14",
        "text": "Jehová peleará por vosotros, y vosotros estaréis tranquilos."
      },
      "words": [
        "MOISES",
        "MAR",
        "VARA",
        "LIBRE",
        "MILAGRO"
      ]
    },
    "fr": {
      "application": {
        "heart": "Faire confiance au secours de Dieu sans paniquer ni murmurer.",
        "home": "Savoir que Dieu apporte des solutions lorsque notre famille rencontre des difficultés.",
        "school": "Garder son calme lors des contrôles scolaires en sachant que Dieu m'accompagne."
      },
      "challenge": "Cette semaine, face à une difficulté, je prierai d'abord au lieu de me plaindre !",
      "imageColorDesc": "Moïse levant son bâton tandis que la mer Rouge se divise en deux murailles d'eau majestueuses.",
      "imageColoringDesc": "Coloriage de Moïse ouvrant la mer Rouge et du peuple marchant à pied sec.",
      "prayer": "Seigneur Dieu Tout-Puissant, Tu as ouvert la mer Rouge avec puissance. Ouvre des chemins de paix dans ma vie ! Amen !",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "La mer Morte",
            "La mer Rouge",
            "La mer de Galilée"
          ],
          "question": "Quelle mer Dieu a-t-Il ouverte pour faire passer Son peuple ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Son manteau",
            "Son bâton",
            "Une épée"
          ],
          "question": "Qu'a étendu Moïse sur les eaux sur l'ordre de Dieu ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Boueux",
            "Complètement sec",
            "De l'eau jusqu'aux genoux"
          ],
          "question": "Comment était le fond de la mer lorsque le peuple a traversé ?"
        }
      ],
      "ref": "Exode 14",
      "storyByAge": {
        "3-5": "Moïse conduisait le peuple et ils arrivèrent devant une immense mer bleue ! Moïse leva son bâton de bois vers le ciel. Dieu envoya un vent fort et la mer s'ouvrit en deux ! Le sol était tout sec et tout le monde traversa dans la joie !",
        "6-8": "Coincés entre la mer Rouge et l'armée de Pharaon, les Israélites eurent grand peur. Mais Moïse leur dit avec foi : 'Ne craignez rien, restez en place et regardez la délivrance que l'Éternel va vous accorder !'. Moïse étendit son bâton sur la mer, les eaux se séparèrent et le peuple traversa à sec !",
        "9-12": "Exode 14 montre que lorsque toutes les issues humaines sont bloquées, Dieu ouvre un chemin miraculeux. L'ordre d'avancer exigeait une foi active. La traversée de la mer Rouge prouve que Dieu combat toujours pour Ses enfants."
      },
      "title": "Moïse et la Mer Rouge",
      "verse": {
        "ref": "Exode 14:14",
        "text": "L'Éternel combattra pour vous; et vous, gardez le silence."
      },
      "words": [
        "MOISE",
        "MER",
        "BATON",
        "LIBRE",
        "MIRACLE"
      ]
    },
    "icon": "🌊🦯",
    "id": "moises",
    "imageColor": "assets/images/moses_pixar.jpg",
    "imageColoring": "assets/images/moses_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Aprender a confiar no socorro de Deus sem murmurar ou se desesperar.",
        "home": "Lembrar de que Deus abre portas e resolve problemas quando nossa família parece não ter saída.",
        "school": "Manter a calma em situações difíceis, sabendo que Deus está comigo em cada teste e desafio."
      },
      "challenge": "Esta semana, quando surgir uma dificuldade, vou orar primeiro em vez de reclamar!",
      "imageColorDesc": "Moisés ergue o cajado e as águas do Mar Vermelho se abrem formando muralhas de água!",
      "imageColoringDesc": "Desenho para colorir de Moisés com o cajado abrindo o mar e o povo passando a pé enxuto.",
      "prayer": "Senhor Deus Todo-Poderoso, Tu abriste o Mar Vermelho e cuidas de mim com poder. Abre caminhos de paz na minha vida! Amém!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Mar Morto",
            "Mar Vermelho",
            "Mar da Galileia"
          ],
          "question": "Qual mar Deus abriu no meio para o povo passar?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Sua capa",
            "Seu cajado",
            "Uma espada"
          ],
          "question": "O que Moisés estendeu sobre as águas por ordem de Deus?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Com lama funda",
            "Completamente seco",
            "Com água no joelho"
          ],
          "question": "Como ficou o chão do mar por onde o povo atravessou?"
        }
      ],
      "ref": "Êxodo 14",
      "storyByAge": {
        "3-5": "Moisés guiava o povo no deserto e chegaram na frente de um mar azul bem grandão! Moisés levantou seu cajadinho de madeira para o céu. Deus mandou um vento forte e o mar se abriu no meio! O chão ficou sequinho e todo mundo passou feliz!",
        "6-8": "O povo de Israel estava encurralado entre o Mar Vermelho e os soldados de Faraó. Moisés disse com fé: 'Não temais; aquietai-vos e vede o livramento do Senhor!'. Deus mandou marchar. Moisés estendeu o cajado, as águas se dividiram em duas muralhas e o povo atravessou a pé enxuto em total segurança!",
        "9-12": "Êxodo 14 marca o ápice da libertação de Israel. Quando todas as saídas humanas se fecharam, Deus abriu um caminho no meio do mar. O milagre nos ensina que quando Deus manda avançar pela fé, Ele mesmo remove os obstáculos e peleja por nós."
      },
      "title": "Moisés e a Abertura do Mar Vermelho",
      "verse": {
        "ref": "Êxodo 14:14",
        "text": "O Senhor pelejará por vós, e vós vos calareis."
      },
      "words": [
        "MOISES",
        "MAR",
        "CAJADO",
        "LIVRE",
        "MILAGRE"
      ]
    }
  },
  "noe": {
    "en": {
      "application": {
        "heart": "Rest in God's promises and remember that He shields us through life's storms.",
        "home": "Practice immediate obedience to parents with a cheerful attitude, just as Noah obeyed God.",
        "school": "Stand up for what is right even when everyone else is making wrong choices."
      },
      "challenge": "This week I will draw a rainbow to remember God's faithfulness and practice prompt obedience at home!",
      "imageColorDesc": "The massive wooden ark with animal pairs and a vibrant rainbow shining across the sky.",
      "imageColoringDesc": "Coloring page of Noah's ark, smiling giraffes, elephants, and the rainbow of promise.",
      "prayer": "Heavenly Father, thank You for Noah's inspiring faith. Help me to obey You with joy and trust Your covenant forever. Amen!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Canoe",
            "Ark",
            "Ferry"
          ],
          "question": "What was the name of the great boat built by Noah?"
        },
        {
          "answerIndex": 0,
          "options": [
            "A beautiful rainbow",
            "A shooting star",
            "A comet"
          ],
          "question": "What sign did God place in the sky as a covenant?"
        },
        {
          "answerIndex": 1,
          "options": [
            "For vacations",
            "Because he faithfully obeyed God",
            "To go fishing"
          ],
          "question": "Why did Noah build the ark?"
        }
      ],
      "ref": "Genesis 6-9",
      "storyByAge": {
        "3-5": "Noah loved God and built a huge friendly boat called the Ark! Two by two, all the animals came aboard: tall giraffes, fluffy rabbits, and roaring lions. Rain fell, but they were warm and safe inside. Then God placed a gorgeous rainbow in the sky!",
        "6-8": "God chose faithful Noah to build a three-story wooden ark to protect his family and all species of animals. Noah obeyed with patience. When the rain stopped and the land dried, God placed a colorful rainbow in the clouds as His eternal covenant of love.",
        "9-12": "Genesis 6–9 portrays the power of persevering obedience. Standing firm against the culture of his day, Noah walked closely with God. The rainbow remains an enduring reminder that God remembers His covenant and keeps every single promise."
      },
      "title": "Noah and the Great Ark",
      "verse": {
        "ref": "Genesis 9:13",
        "text": "I have set my rainbow in the clouds, and it will be the sign of the covenant between me and the earth."
      },
      "words": [
        "NOAH",
        "ARK",
        "ANIMALS",
        "RAIN",
        "RAINBOW"
      ]
    },
    "es": {
      "application": {
        "heart": "Confiar en que Dios cumple lo que promete y recordar el arcoíris como símbolo de Su amor.",
        "home": "Obedecer a mamá y papá a la primera con alegría, tal como Noé obedeció a Dios.",
        "school": "Tener valor para hacer lo correcto aunque otros hagan lo malo."
      },
      "challenge": "Esta semana dibujaré un arcoíris para recordar las promesas de Dios y obedeceré a mis padres con una sonrisa.",
      "imageColorDesc": "La inmensa arca de madera con los animales y el arcoíris de la promesa brillando en el cielo.",
      "imageColoringDesc": "Dibujo para colorear de Noé, los animales en parejas y el arcoíris en las nubes.",
      "prayer": "Señor Dios, gracias por el ejemplo de Noé. Ayúdame a ser obediente de corazón y a confiar en Tus promesas. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Canoa",
            "Arca",
            "Balsa"
          ],
          "question": "¿Cómo se llamaba la gran nave que construyó Noé?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Un hermoso arcoíris",
            "Una estrella fugaz",
            "Un rayo"
          ],
          "question": "¿Qué puso Dios en el cielo como señal de Su pacto?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Para pasear",
            "Porque obedeció fielmente la voz de Dios",
            "Para nadar"
          ],
          "question": "¿Por qué construyó Noé el arca?"
        }
      ],
      "ref": "Génesis 6-9",
      "storyByAge": {
        "3-5": "Noé era un hombre bueno que amaba a Dios. Construyó un barco gigante llamado el Arca y subió a los animalitos de dos en dos: jirafas, leones y pajaritos. Llovió mucho, pero dentro estaban seguros. ¡Luego Dios pintó un hermoso arcoíris!",
        "6-8": "Dios vio la fe de Noé y le mandó construir un arca de tres pisos para salvar a su familia y a los animales. Noé trabajó con paciencia y obediencia. Cuando cesó la lluvia, Noé dio gracias al Señor, quien puso un arcoíris en el cielo como señal de Su pacto.",
        "9-12": "La historia de Noé en Génesis 6 al 9 muestra la fidelidad ante la adversidad. La fe de Noé lo llevó a actuar con valentía. El arcoíris simboliza el pacto inquebrantable de gracia y protección de Dios hacia la creación."
      },
      "title": "Noé y la Gran Arca",
      "verse": {
        "ref": "Génesis 9:13",
        "text": "Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra."
      },
      "words": [
        "NOE",
        "ARCA",
        "ANIMALES",
        "LLUVIA",
        "ARCOIRIS"
      ]
    },
    "fr": {
      "application": {
        "heart": "Faire confiance aux promesses de Dieu et voir dans l'arc-en-ciel Sa constante fidélité.",
        "home": "Obéir immédiatement à mes parents avec le sourire, comme Noé a obéi au Seigneur.",
        "school": "Avoir le courage de faire le bien même lorsque les autres choisissent de mal agir."
      },
      "challenge": "Cette semaine, je dessinerai un arc-en-ciel pour me souvenir des promesses de Dieu et j'obéirai à mes parents sans rechigner !",
      "imageColorDesc": "L'immense arche en bois avec les couples d'animaux et le magnifique arc-en-ciel brillant dans le ciel.",
      "imageColoringDesc": "Coloriage de l'arche de Noé avec les girafes, les éléphants et l'arc-en-ciel de l'alliance.",
      "prayer": "Père céleste, merci pour la foi de Noé. Donne-moi un cœur obéissant et apprends-moi à toujours Te faire confiance. Amen !",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Une barque",
            "L'Arche",
            "Un voilier"
          ],
          "question": "Quel était le nom du grand bateau construit par Noé ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Un bel arc-en-ciel",
            "Une étoile filante",
            "Un éclair"
          ],
          "question": "Quel signe Dieu a-t-Il placé dans le ciel comme promesse d'alliance ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Pour faire une croisière",
            "Parce qu'il a obéi fidèlement à Dieu",
            "Pour aller à la pêche"
          ],
          "question": "Pourquoi Noé a-t-il bâti l'arche ?"
        }
      ],
      "ref": "Genèse 6-9",
      "storyByAge": {
        "3-5": "Noé aimait Dieu de tout son cœur. Dieu lui demanda de construire un très grand bateau appelé l'Arche ! Tous les animaux montèrent deux par deux : girafes, lions et lapins. Il a plu très fort, mais tous étaient en sécurité. Puis Dieu peignit un magnifique arc-en-ciel dans le ciel !",
        "6-8": "Dieu vit la fidélité de Noé et lui donna les plans d'une grande arche pour préserver sa famille et les espèces animales. Noé obéit avec persévérance. Après le déluge, la terre sécha et Dieu plaça Son arc-en-ciel dans les nuées en signe de Sa promesse éternelle.",
        "9-12": "Le récit de Genèse 6 à 9 illustre l'obéissance audacieuse de la foi. Au milieu d'une société corrompue, Noé marcha avec Dieu. L'arc-en-ciel rappelle à chaque génération que Dieu demeure fidèle à Ses alliances et protège ceux qui se confient en Lui."
      },
      "title": "Noé et la Grande Arche",
      "verse": {
        "ref": "Genèse 9:13",
        "text": "J'ai placé mon arc dans la nue, et il servira de signe d'alliance entre moi et la terre."
      },
      "words": [
        "NOE",
        "ARCHE",
        "ANIMAUX",
        "PLUIE",
        "ARCENCIEL"
      ]
    },
    "icon": "🚢🌈",
    "id": "noe",
    "imageColor": "assets/images/noah_pixar.jpg",
    "imageColoring": "assets/images/noah_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Confiar que Deus cumpre todas as Suas promessas e lembrar do arco-íris como sinal de fidelidade.",
        "home": "Obedecer aos pais de primeira com alegria, assim como Noé obedeceu a Deus.",
        "school": "Ter a coragem de fazer o que é certo mesmo quando outras pessoas fazem o errado."
      },
      "challenge": "Esta semana vou desenhar um arco-íris e praticar a obediência aos meus pais sem reclamar!",
      "imageColorDesc": "A imensa arca de madeira com os casais de animais e o lindo arco-íris brilhando no céu.",
      "imageColoringDesc": "Desenho para colorir da arca de Noé, girafas, elefantes e o arco-íris da promessa.",
      "prayer": "Senhor Deus, obrigado pela história de Noé. Ajuda-me a ser obediente de coração e a confiar em Ti em qualquer momento. Amém!",
      "quiz": [
        {
          "answerIndex": 1,
          "options": [
            "Canoa",
            "Arca",
            "Navio"
          ],
          "question": "Qual é o nome do grande barco construído por Noé?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Um lindo arco-íris",
            "Uma estrela cadente",
            "Um cometa"
          ],
          "question": "O que Deus colocou no céu como sinal de Sua aliança?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Para passear",
            "Porque obedeceu fielmente a Deus",
            "Para pescar"
          ],
          "question": "Por que Noé construiu a arca?"
        }
      ],
      "ref": "Gênesis 6-9",
      "storyByAge": {
        "3-5": "Noé amava a Deus e construiu um barcão bem grandão chamado Arca! Colocou lá dentro bichinhos de dois em dois: girafas, leõezinhos e coelhinhos. Choveu bastante, mas todo mundo ficou seguro. Depois, Deus pintou um lindo arco-íris no céu!",
        "6-8": "Deus viu a fidelidade de Noé e o instruiu a construir uma arca para salvar sua família e espécies de animais. Durante anos, Noé obedeceu com fé. Quando o dilúvio cessou, a arca pousou em terra firme e Deus colocou o arco-íris no céu como aliança de amor eterno.",
        "9-12": "A história de Noé em Gênesis 6 a 9 destaca a obediência perseverante em tempos difíceis. Construir a arca demandou fé prática. O arco-íris é o lembrete perene de que a graça de Deus preserva Seus filhos e que Sua palavra jamais falha."
      },
      "title": "Noé e a Grande Arca",
      "verse": {
        "ref": "Gênesis 9:13",
        "text": "O meu arco tenho posto nas nuvens; este será por sinal da aliança entre mim e a terra."
      },
      "words": [
        "NOE",
        "ARCA",
        "ANIMAIS",
        "CHUVA",
        "ARCOIRIS"
      ]
    }
  },
  "pastor": {
    "en": {
      "application": {
        "heart": "Listen to Jesus' voice through Scripture and trust His gentle guidance in every decision.",
        "home": "Remember that I am never alone at night when I feel scared, for my Shepherd watches over me.",
        "school": "Reach out to someone who is sitting alone at lunch, just as Jesus seeks the lost sheep."
      },
      "challenge": "This week I will say a bedtime prayer thanking Jesus for being my Good Shepherd!",
      "imageColorDesc": "The Good Shepherd tenderly holding the rescued sheep in His arms among lush green pastures.",
      "imageColoringDesc": "Coloring page of the Good Shepherd gently caring for His little sheep with His staff.",
      "prayer": "Lord Jesus, my Good Shepherd, thank You for watching over me and holding me in Your loving hands. Amen!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Searches with love until He finds it",
            "Gives up and leaves it",
            "Gets angry"
          ],
          "question": "What does the Good Shepherd do when one sheep is lost?"
        },
        {
          "answerIndex": 1,
          "options": [
            "To dangerous rocks",
            "Beside green pastures and quiet waters",
            "Into a storm"
          ],
          "question": "Where does the Good Shepherd lead His sheep in Psalm 23?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Complaining",
            "Carrying it joyfully on his shoulders",
            "Empty-handed"
          ],
          "question": "How does the shepherd return home with the found sheep?"
        }
      ],
      "ref": "Psalm 23 / Luke 15:1-7",
      "storyByAge": {
        "3-5": "Jesus is our loving Shepherd and we are His precious little lambs! When one little lamb got lost, the Good Shepherd searched until He found it, cuddled it in His arms, and carried it home safely!",
        "6-8": "In Luke 15, Jesus told of a shepherd with one hundred sheep. When one was lost, he searched through the hills until he found it. Joyfully placing it on his shoulders, he called his friends to celebrate. That is how deeply Jesus cares for each of us!",
        "9-12": "Psalm 23 and Luke 15 reveal God's intimate and watchful character. The shepherd provides nourishment, guidance, and protection against dangers. Declaring 'The Lord is my shepherd' means finding complete security and spiritual rest in Christ."
      },
      "title": "The Good Shepherd and the Lost Sheep",
      "verse": {
        "ref": "Psalm 23:1-2",
        "text": "The Lord is my shepherd; I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters."
      },
      "words": [
        "JESUS",
        "SHEPHERD",
        "SHEEP",
        "CARE",
        "LOVE"
      ]
    },
    "es": {
      "application": {
        "heart": "Escuchar la voz de Jesús a través de Su Palabra y seguir Sus caminos de amor.",
        "home": "Saber que nunca estoy solo cuando siento miedo por la noche; el Buen Pastor cuida de mí.",
        "school": "Ser amigo de quien esté solo en el recreo, cuidando a los demás como Jesús."
      },
      "challenge": "Esta semana oraré antes de dormir agradeciendo a Jesús por ser mi Buen Pastor protector.",
      "imageColorDesc": "El Buen Pastor sosteniendo con cariño a la ovejita rescatada en verdes prados.",
      "imageColoringDesc": "Dibujo para colorear del Buen Pastor cuidando a sus ovejas con su cayado.",
      "prayer": "Señor Jesús, mi Buen Pastor, gracias por cuidarme y guiarme cada día. En Ti confío siempre. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "La busca con amor hasta hallarla",
            "La abandona",
            "Se olvida de ella"
          ],
          "question": "¿Qué hace el Buen Pastor cuando una oveja se pierde?"
        },
        {
          "answerIndex": 1,
          "options": [
            "A lugares peligrosos",
            "A verdes pastos y aguas de reposo",
            "A la tormenta"
          ],
          "question": "¿A dónde guía el Pastor a sus ovejas en el Salmo 23?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Enojado",
            "Con gozo llevándola en sus hombros",
            "Con las manos vacías"
          ],
          "question": "¿Cómo regresa el pastor a casa con la oveja?"
        }
      ],
      "ref": "Salmo 23 / Lucas 15:1-7",
      "storyByAge": {
        "3-5": "¡Jesús es nuestro Buen Pastor y nosotros somos Sus ovejitas queridas! Cuando una ovejita se perdió, el Pastor la buscó con amor, la abrazó y la llevó a casa feliz.",
        "6-8": "En Lucas 15, un pastor tenía cien ovejas y una se perdió en las colinas. Fue a buscarla con paciencia y, al hallarla, la puso sobre sus hombros con alegría diciendo: '¡Alegraos conmigo, porque he encontrado mi oveja que se había perdido!'. ¡Así nos ama Jesús!",
        "9-12": "El Salmo 23 y la parábola de Lucas 15 enseñan la protección constante de Dios. Saber que el Señor es nuestro Pastor disipa el temor y nos llena de paz, pues Su vara y Su cayado nos infunden aliento en cualquier dificultad."
      },
      "title": "El Buen Pastor y la Oveja Perdida",
      "verse": {
        "ref": "Salmo 23:1-2",
        "text": "Jehová es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará."
      },
      "words": [
        "JESUS",
        "PASTOR",
        "OVEJA",
        "CUIDADO",
        "AMOR"
      ]
    },
    "fr": {
      "application": {
        "heart": "Écouter la voix de Jésus et me reposer dans Sa fidélité et Sa tendresse.",
        "home": "Savoir que je ne suis jamais seul la nuit ; mon Bon Berger veille sur ma chambre.",
        "school": "Être attentif à un camarade isolé dans la cour et l'inviter à jouer avec moi."
      },
      "challenge": "Cette semaine, je prierai avant de dormir en remerciant Jésus d'être mon Bon Berger protecteur !",
      "imageColorDesc": "Le Bon Berger tenant avec tendresse la brebis retrouvée dans de verts pâturages.",
      "imageColoringDesc": "Coloriage du Bon Berger veillant sur son troupeau avec sa houlette.",
      "prayer": "Seigneur Jésus, mon Bon Berger, merci de veiller sur moi nuit et jour avec tant d'amour. Amen !",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Il la cherche avec amour jusqu'à ce qu'il la trouve",
            "Il l'abandonne",
            "Il l'oublie"
          ],
          "question": "Que fait le Bon Berger quand une brebis s'est égarée ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Dans les rochers escarpés",
            "Dans de verts pâturages et près des eaux paisibles",
            "Dans le désert"
          ],
          "question": "Où le Berger conduit-il ses brebis dans le Psaume 23 ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "En soupirant",
            "En la portant joyeusement sur ses épaules",
            "Sans la brebis"
          ],
          "question": "Comment le berger rentre-t-il à la maison avec la brebis ?"
        }
      ],
      "ref": "Psaume 23 / Luc 15:1-7",
      "storyByAge": {
        "3-5": "Jésus est notre Bon Berger et nous sommes Ses petits agneaux adorés ! Quand une petite brebis s'est perdue, le Bon Berger est parti la chercher, l'a prise dans Ses bras et l'a ramenée à la maison !",
        "6-8": "Dans Luc 15, un berger avait cent brebis et l'une d'elles s'égara. Il quitta les quatre-vingt-dix-neuf pour la chercher sur les collines. Dès qu'il la trouva, il la mit sur ses épaules tout joyeux et invita ses amis à se réjouir. C'est ainsi que Jésus veille sur chacun de nous !",
        "9-12": "Le Psaume 23 et la parabole de Luc 15 soulignent la bienveillance inconditionnelle de Dieu. Le Bon Berger nous rassure : face à nos doutes et nos peurs, Sa présence constante nous restaure et nous guide sur les sentiers de la paix."
      },
      "title": "Le Bon Berger et la Brebis Égarée",
      "verse": {
        "ref": "Psaume 23:1-2",
        "text": "L'Éternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles."
      },
      "words": [
        "JESUS",
        "BERGER",
        "BREBIS",
        "AMOUR",
        "PAIX"
      ]
    },
    "icon": "🐑💚",
    "id": "pastor",
    "imageColor": "assets/images/shepherd_pixar.jpg",
    "imageColoring": "assets/images/shepherd_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Ouvir a voz de Jesus através da Bíblia e confiar na Sua direção amorosa.",
        "home": "Saber que nunca estou sozinho quando sinto medo à noite, pois o Bom Pastor vigia meu quarto.",
        "school": "Ser amigo de quem está sozinho no recreio, acolhendo o próximo como Jesus acolhe a ovelhinha."
      },
      "challenge": "Esta semana vou orar antes de dormir agradecendo a Jesus por cuidar de mim como Bom Pastor!",
      "imageColorDesc": "O Bom Pastor segura carinhosamente a ovelhinha resgatada nos braços em pastos verdejantes.",
      "imageColoringDesc": "Desenho para colorir do Bom Pastor cuidando de suas ovelhinhas com cajado.",
      "prayer": "Senhor Jesus, meu Bom Pastor, obrigado por me amar e me proteger sempre. Tu és meu refúgio e minha paz. Amém!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Vai atrás dela com amor até encontrá-la",
            "Fica bravo e a abandona",
            "Esquece dela"
          ],
          "question": "O que o Bom Pastor faz quando uma ovelhinha se perde?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Para o deserto escuro",
            "Para verdes pastos e águas tranquilas",
            "Para penhascos"
          ],
          "question": "Onde o Bom Pastor guia Suas ovelhas no Salmo 23?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Reclamando",
            "Com a ovelha nos ombros cheio de alegria",
            "De mãos vazias"
          ],
          "question": "Como o pastor volta para casa ao achar a ovelha?"
        }
      ],
      "ref": "Salmo 23 / Lucas 15:1-7",
      "storyByAge": {
        "3-5": "Jesus é o nosso Bom Pastor e nós somos Suas ovelhinhas! Quando uma ovelhinha se perdeu no mato, o Bom Pastor foi procurá-la com carinho, colocou-a no colo e a levou para casa feliz!",
        "6-8": "Em Lucas 15, Jesus conta sobre um pastor que tinha cem ovelhas. Quando uma se perdeu, ele foi pelos montes até encontrá-la. Ele não brigou; colocou-a nos ombros com alegria e celebrou com os amigos. É assim que Jesus cuida de cada um de nós!",
        "9-12": "O Salmo 23 e a parábola de Lucas 15 retratam a fidelidade protetora de Deus. Para uma ovelha, o pastor é sustento, direção e escudo. Saber que o Senhor é nosso Pastor nos dá a certeza de que nunca estamos desamparados."
      },
      "title": "O Bom Pastor e a Ovelhinha",
      "verse": {
        "ref": "Salmo 23:1-2",
        "text": "O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas."
      },
      "words": [
        "JESUS",
        "PASTOR",
        "OVELHA",
        "AMOR",
        "CUIDADO"
      ]
    }
  },
  "salmo91": {
    "en": {
      "application": {
        "heart": "Keep full faith that God is my everlasting fortress.",
        "home": "Pray with parents at bedtime, thanking God for His angels protecting our home.",
        "school": "Remain calm and trust God during anxious moments or stressful exams."
      },
      "challenge": "This week I will read Psalm 91 before bed and thank God for His heavenly protection!",
      "imageColorDesc": "Resting safely under the shadow of the Almighty surrounded by God's protective angels.",
      "imageColoringDesc": "Coloring page showing protective wings, shielding angels, and resting in peace.",
      "prayer": "Lord God, You are my refuge and strength. Thank You for guarding my steps every day. Amen!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "In the shadow of the Almighty",
            "In danger",
            "Nowhere"
          ],
          "question": "Where does the one who dwells in the shelter of the Most High rest?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Refuge and fortress",
            "A stranger",
            "A burden"
          ],
          "question": "What is the Lord to us in Psalm 91?"
        },
        {
          "answerIndex": 0,
          "options": [
            "His holy angels",
            "No one",
            "Earthly guards"
          ],
          "question": "Whom does God command to guard our ways?"
        }
      ],
      "ref": "Psalm 91:1-2",
      "storyByAge": {
        "3-5": "God is like a big warm protective hug! When storms or dark nights come, God covers us with His loving wings. We are totally safe in God's hands!",
        "6-8": "Psalm 91 teaches us that God is our ultimate fortress! He commands His angels to guard our every step. When we pray and trust in Him, peace and courage fill our heart.",
        "9-12": "Psalm 91 reminds believers of God's abiding presence. Dwelling in the shelter of the Most High involves daily intimacy with Christ, where fears are conquered through divine peace and confidence."
      },
      "title": "God's Protection: Psalm 91",
      "verse": {
        "ref": "Psalm 91:1-2",
        "text": "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, 'He is my refuge and my fortress, my God, in whom I trust.'"
      },
      "words": [
        "GOD",
        "REFUGE",
        "ANGELS",
        "PEACE",
        "TRUST"
      ]
    },
    "es": {
      "application": {
        "heart": "Tener la certeza de que Dios es mi refugio y fortaleza en todo momento.",
        "home": "Orar con mi familia antes de dormir agradeciendo la protección de Dios en nuestro hogar.",
        "school": "Mantener la calma en exámenes o pruebas difíciles confiando en el Señor."
      },
      "challenge": "Esta semana leeré el Salmo 91 con mis padres antes de descansar.",
      "imageColorDesc": "El abrigo del Altísimo y los ángeles de Dios guardando en paz a Sus hijos amados.",
      "imageColoringDesc": "Dibujo para colorear con alas protectoras, ángeles de luz y paz en el corazón.",
      "prayer": "Señor Dios, Tú eres mi esperanza y mi castillo. Gracias por cuidar de mí y de mi familia siempre. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "Bajo la sombra del Omnipotente",
            "En el peligro",
            "En soledad"
          ],
          "question": "¿Dónde morará el que habita al abrigo del Altísimo?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Esperanza y castillo mío",
            "Un extraño",
            "Un peso"
          ],
          "question": "¿Qué es el Señor según el Salmo 91?"
        },
        {
          "answerIndex": 0,
          "options": [
            "A Sus ángeles protectores",
            "A nadie",
            "A soldados"
          ],
          "question": "¿A quiénes manda Dios para cuidarnos?"
        }
      ],
      "ref": "Salmo 91:1-2",
      "storyByAge": {
        "3-5": "¡Dios nos cuida como un abrazo fuerte y calientito! Cuando tenemos miedo a la noche, Dios nos protege con Sus alas de amor. ¡Con Papá Dios estamos siempre seguros!",
        "6-8": "El Salmo 91 nos enseña que Dios es nuestro castillo fuerte. Él envía a Sus ángeles para cuidarnos en todos nuestros caminos. ¡Cuando oramos, el miedo se va!",
        "9-12": "Habitar al abrigo del Altísimo implica una vida consagrada a la presencia de Dios. En medio de cualquier tormenta terrenal, la sombra del Omnipotente nos asegura victoria y protección."
      },
      "title": "La Protección de Dios: Salmo 91",
      "verse": {
        "ref": "Salmo 91:1-2",
        "text": "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente. Diré yo a Jehová: Esperanza mía, y castillo mío; mi Dios, en quien confiaré."
      },
      "words": [
        "DIOS",
        "REFUGIO",
        "ANGELES",
        "PAZ",
        "FE"
      ]
    },
    "fr": {
      "application": {
        "heart": "Garder la certitude inébranlable que Dieu est mon refuge à jamais.",
        "home": "Prier en famille au coucher et remercier Dieu pour Ses anges gardiens.",
        "school": "Rester paisible et confiant lors des devoirs ou des épreuves scolaires."
      },
      "challenge": "Cette semaine, je lirai le Psaume 91 avant de dormir en remerciant Dieu pour Sa garde fidèle !",
      "imageColorDesc": "Le repos paisible à l'ombre du Tout-Puissant et les anges veillant sur Ses enfants.",
      "imageColoringDesc": "Coloriage montrant les ailes protectrices, la paix et la forteresse de Dieu.",
      "prayer": "Seigneur Dieu, Tu es mon refuge et ma forteresse. Merci de garder ma vie et celle de ma famille dans Ta paix. Amen !",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "À l'ombre du Tout-Puissant",
            "Dans la tempête",
            "Nulle part"
          ],
          "question": "Où repose celui qui demeure sous l'abri du Très-Haut ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Mon refuge et ma forteresse",
            "Un fardeau",
            "Un juge sévère"
          ],
          "question": "Qu'est l'Éternel pour nous dans le Psaume 91 ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Ses anges protecteurs",
            "Personne",
            "Des soldats"
          ],
          "question": "Qui Dieu envoie-t-Il pour garder nos voies ?"
        }
      ],
      "ref": "Psaume 91:1-2",
      "storyByAge": {
        "3-5": "Dieu prend soin de nous comme un grand câlin rassurant ! Quand la nuit est noire, Dieu déploie Ses ailes d'amour pour nous protéger. Nous sommes en sécurité avec Lui !",
        "6-8": "Le Psaume 91 nous rappelle que Dieu est notre forteresse imprenable ! Il ordonne à Ses anges de garder tous nos pas. La prière chasse toutes les frayeurs !",
        "9-12": "Demeurer sous l'abri du Très-Haut décrit une communion constante avec Dieu. À l'ombre du Tout-Puissant, aucune angoisse ne peut détruire la paix parfaite que Christ nous accorde."
      },
      "title": "La Protection de Dieu : Psaume 91",
      "verse": {
        "ref": "Psaume 91:1-2",
        "text": "Celui qui demeure sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant. Je dis à l'Éternel: Mon refuge et ma forteresse, mon Dieu en qui je me confie!"
      },
      "words": [
        "DIEU",
        "REFUGE",
        "ANGES",
        "PAIX",
        "FOI"
      ]
    },
    "icon": "🛡️🕊️",
    "id": "salmo91",
    "imageColor": "assets/images/salmo91_pixar.jpg",
    "imageColoring": "assets/images/salmo91_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Ter a certeza de que Deus é meu refúgio e não ter medo de nada.",
        "home": "Orar com a família antes de dormir, agradecendo a Deus pelos anjos que guardam a nossa casa.",
        "school": "Manter a calma e a paz em dias de testes ou quando surgirem conflitos na escola."
      },
      "challenge": "Esta semana vou ler o Salmo 91 antes de dormir e agradecer a Deus por Sua proteção!",
      "imageColorDesc": "Criança dormindo em paz sob as asas luminosas de Deus e a guarda protetora dos Seus santos anjos.",
      "imageColoringDesc": "Desenho para colorir das asas protetoras de Deus, anjos da guarda e o sono tranquilo da criança.",
      "prayer": "Senhor meu Deus, Tu és meu refúgio e minha fortaleza. Obrigado por guardar a mim e à minha família com Teus anjos. Amém!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "À sombra do Onipotente",
            "No deserto",
            "Em perigo"
          ],
          "question": "Onde descansa aquele que habita no esconderijo do Altíssimo?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Refúgio e fortaleza",
            "Um estranho",
            "Um peso"
          ],
          "question": "O que o Senhor é para a nossa vida segundo o Salmo 91?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Seus anjos poderosos",
            "Ninguém",
            "Soldados terrenos"
          ],
          "question": "Quem Deus manda para guardar todos os nossos caminhos?"
        }
      ],
      "ref": "Salmo 91:1-2",
      "storyByAge": {
        "3-5": "Deus é como um abraço bem quentinho e seguro! Quando sentimos medo do escuro ou do trovão, Deus coloca Suas asinhas de amor por cima de nós. Nenhum mal pode nos pegar porque o Papai do Céu cuida de nós de dia e de noite!",
        "6-8": "O Salmo 91 nos ensina que Deus é o nosso melhor refúgio! Como uma fortaleza alta e protegida, o Senhor manda Seus anjos guardarem todos os nossos caminhos. Quando oramos e confiamos Nele, nosso coração se enche de coragem e paz!",
        "9-12": "O Salmo 91 é um clássico cântico de confiança espiritual. Habitar no esconderijo do Altíssimo significa manter uma vida constante de oração e intimidade com Deus. Sob as asas do Onipotente, descobrimos que nenhuma aflição terrena pode abalar a segurança eterna que temos em Cristo."
      },
      "title": "A Proteção de Deus: Salmo 91",
      "verse": {
        "ref": "Salmo 91:1-2",
        "text": "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará. Direi do Senhor: Ele é o meu refúgio e a minha fortaleza, e nele confiarei."
      },
      "words": [
        "DEUS",
        "REFUGIO",
        "ANJOS",
        "PAZ",
        "FORCA"
      ]
    }
  },
  "samaritano": {
    "en": {
      "application": {
        "heart": "Look past appearances and treat every person with divine dignity and kindness.",
        "home": "Cheerfully assist parents and siblings with chores without being asked twice.",
        "school": "Sit with someone who has no one to play with during recess or help carry dropped books."
      },
      "challenge": "This week I will perform a secret act of kindness to help someone at home or school!",
      "imageColorDesc": "The Good Samaritan bandaging the wounded traveler with deep compassion and love.",
      "imageColoringDesc": "Coloring page showing practical kindness and helping those in need along the road.",
      "prayer": "Lord Jesus, fill my heart with Your pure love. Open my eyes to notice those who need help and give me willing hands to serve. Amen!",
      "quiz": [
        {
          "answerIndex": 2,
          "options": [
            "The priest",
            "The Levite",
            "The Good Samaritan"
          ],
          "question": "Who stopped to help the wounded traveler?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Fear",
            "Deep compassion and love",
            "Indifference"
          ],
          "question": "What did the Samaritan feel when he saw the hurting man?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Love your neighbor with practical action",
            "Only help best friends",
            "Ignore needy people"
          ],
          "question": "What did Jesus teach through this parable?"
        }
      ],
      "ref": "Luke 10:25-37",
      "storyByAge": {
        "3-5": "A kind traveler saw someone hurt by the side of the road. Other people walked away, but he stopped to help! He put bandages on his hurts, gave him fresh water, and took him to a safe inn. Jesus teaches us to love and help our friends!",
        "6-8": "Jesus told of a traveler wounded on the road to Jericho. A priest and a Levite walked past without helping. But a Samaritan felt deep compassion: he bandaged his wounds, placed him on his own donkey, took him to an inn, and paid all expenses. Jesus said: 'Go and do likewise!'.",
        "9-12": "The parable of the Good Samaritan redefines neighborly love. Compassion is not merely a feeling; it is sacrificial action that crosses social barriers. True love reflects Christ's grace by serving anyone in need regardless of differences."
      },
      "title": "The Good Samaritan",
      "verse": {
        "ref": "Luke 10:27",
        "text": "Love your neighbor as yourself."
      },
      "words": [
        "JESUS",
        "LOVE",
        "HELP",
        "NEIGHBOR",
        "KINDNESS"
      ]
    },
    "es": {
      "application": {
        "heart": "No juzgar a las personas por su ropa o aspecto; tratarlas con amor y dignidad.",
        "home": "Ayudar a mis hermanos y familiares cuando necesiten un favor sin esperar nada a cambio.",
        "school": "Ser amigo de quien esté solo en el recreo o ayudar a recoger los lápices caídos de un compañero."
      },
      "challenge": "Esta semana haré una buena acción para ayudar a un compañero o familiar sin que me lo pidan.",
      "imageColorDesc": "El buen samaritano curando al hombre herido con compasión y ternura en el camino.",
      "imageColoringDesc": "Dibujo para colorear que enseña sobre ayudar al prójimo y amar con hechos prácticos.",
      "prayer": "Señor Jesús, llena mi corazón de Tu compasión. Ayúdame a amar a mi prójimo con acciones generosas cada día. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 2,
          "options": [
            "El sacerdote",
            "El levita",
            "El buen samaritano"
          ],
          "question": "¿Quién se detuvo a ayudar al hombre herido?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Miedo",
            "Misericordia y amor",
            "Indiferencia"
          ],
          "question": "¿Qué sintió el samaritano al ver al hombre herido?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Amar y ayudar al prójimo con hechos",
            "Ayudar solo a conocidos",
            "Desviar la mirada"
          ],
          "question": "¿Qué nos enseñó Jesús a través de esta historia?"
        }
      ],
      "ref": "Lucas 10:25-37",
      "storyByAge": {
        "3-5": "Un hombre bueno iba de viaje y vio a alguien herido. Otros pasaron de largo, ¡pero él se detuvo con amor! Le curó las heridas, le dio agua y lo llevó a descansar seguro. ¡Jesús nos enseñó que amar es ayudar a los demás!",
        "6-8": "Jesús contó de un viajero herido por ladrones. Un sacerdote y un levita pasaron de largo sin ayudarlo. Pero un samaritano se llenó de compasión: vendó sus heridas con aceite y vino, lo subió a su cabalgadura, lo llevó al mesón y pagó todo. Jesús concluyó: '¡Ve, y haz tú lo mismo!'.",
        "9-12": "La parábola del Buen Samaritano derriba prejuicios. Jesús enseña que el prójimo es cualquiera que necesite misericordia. El amor genuino no se queda en discursos, sino que invierte tiempo, recursos y empatía para restaurar al caído."
      },
      "title": "El Buen Samaritano",
      "verse": {
        "ref": "Lucas 10:27",
        "text": "Amarás a tu prójimo como a ti mismo."
      },
      "words": [
        "JESUS",
        "AMOR",
        "AYUDAR",
        "PROJIMO",
        "BONDAD"
      ]
    },
    "fr": {
      "application": {
        "heart": "Ne jamais juger sur les apparences et traiter chaque personne avec respect et bonté.",
        "home": "Aider volontiers mes parents et mes frères et sœurs à la maison avec joie.",
        "school": "Aller vers celui qui est tout seul à la récréation ou aider un camarade qui a fait tomber ses affaires."
      },
      "challenge": "Cette semaine, je ferai une bonne action discrète pour aider quelqu'un autour de moi !",
      "imageColorDesc": "Le bon Samaritain soignant le voyageur blessé avec compassion et amour sur la route.",
      "imageColoringDesc": "Coloriage enseignant la bonté pratique et l'aide à son prochain dans le besoin.",
      "prayer": "Seigneur Jésus, remplis mon cœur de Ton amour véritable. Ouvre mes yeux pour voir ceux qui souffrent et donne-moi des mains prêtes à servir. Amen !",
      "quiz": [
        {
          "answerIndex": 2,
          "options": [
            "Le prêtre",
            "Le lévite",
            "Le bon Samaritain"
          ],
          "question": "Qui s'est arrêté pour secourir l'homme blessé ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "De la peur",
            "Une profonde compassion",
            "De l'indifférence"
          ],
          "question": "Qu'a ressenti le Samaritain en voyant l'homme blessé ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Aimer son prochain par des actes concrets",
            "N'aider que ses amis",
            "Ignorer ceux qui souffrent"
          ],
          "question": "Que nous enseigne Jésus à travers cette parabole ?"
        }
      ],
      "ref": "Luc 10:25-37",
      "storyByAge": {
        "3-5": "Un homme très gentil voyageait et vit quelqu'un de blessé au bord du chemin. D'autres passèrent sans s'arrêter, mais lui eut pitié ! Il soigna ses bobos, lui donna de l'eau et le mit à l'abri dans une auberge. Jésus nous montre qu'aimer, c'est aider son prochain !",
        "6-8": "Jésus raconta l'histoire d'un homme attaqué par des brigands. Un prêtre et un lévite passèrent sans s'arrêter. Mais un Samaritain fut ému de compassion : il pansa ses plaies, le mit sur sa monture, le conduisit dans une auberge et paya tous les frais. Jésus dit : 'Va, et toi aussi, fais de même !'.",
        "9-12": "La parabole du Bon Samaritain redéfinit la notion de prochain. L'amour authentique transcende les barrières religieuses et sociales. Il se traduit par une action concrète, généreuse et désintéressée envers celui qui souffre."
      },
      "title": "Le Bon Samaritain",
      "verse": {
        "ref": "Luc 10:27",
        "text": "Tu aimeras ton prochain comme toi-même."
      },
      "words": [
        "JESUS",
        "AMOUR",
        "AIDER",
        "PROCHAIN",
        "BONTE"
      ]
    },
    "icon": "🤝❤️",
    "id": "samaritano",
    "imageColor": "assets/images/samaritan_pixar.jpg",
    "imageColoring": "assets/images/samaritan_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Não julgar ninguém pela aparência ou pelas roupas; tratar todos com respeito e amor.",
        "home": "Ajudar meus irmãos e pais quando precisarem de um favor com um coração alegre.",
        "school": "Ser amigo de quem não tem amigos no recreio ou ajudar um colega que deixou cair o material."
      },
      "challenge": "Esta semana vou fazer uma boa ação para ajudar alguém sem esperar nada em troca!",
      "imageColorDesc": "O bom samaritano cuidando do homem ferido com amor e compaixão sincera.",
      "imageColoringDesc": "Desenho para colorir ensinando sobre o amor ao próximo e ajudar quem precisa.",
      "prayer": "Senhor Jesus, enche meu coração com Teu amor puro. Ajuda-me a enxergar quem precisa e a estender a mão para ajudar. Amém!",
      "quiz": [
        {
          "answerIndex": 2,
          "options": [
            "O sacerdote",
            "O levita",
            "O bom samaritano"
          ],
          "question": "Quem parou para ajudar o homem ferido na estrada?"
        },
        {
          "answerIndex": 1,
          "options": [
            "Medo",
            "Muita compaixão e amor",
            "Indiferença"
          ],
          "question": "O que o samaritano sentiu ao ver o homem ferido?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Ajudar o próximo com atitudes reais",
            "Ajudar só quem gostamos",
            "Desviar de quem precisa"
          ],
          "question": "O que Jesus nos ensinou nesta parábola?"
        }
      ],
      "ref": "Lucas 10:25-37",
      "storyByAge": {
        "3-5": "Um homem bondoso estava viajando e viu alguém machucado no caminho. Outras pessoas não ajudaram, mas ele teve pena! Ele cuidou dos machucados com curativo, deu água e o levou para descansar seguro. Jesus nos ensinou que amar é ajudar o amiguinho!",
        "6-8": "Jesus contou sobre um viajante ferido por ladrões na estrada de Jericó. Um sacerdote e um levita passaram e desviaram. Mas um samaritano encheu-se de compaixão: tratou suas feridas, colocou-o em seu animal, levou-o a uma hospedaria e pagou tudo. Jesus disse: 'Vai e faze da mesma maneira!'.",
        "9-12": "A parábola do Bom Samaritano redefining quem é o nosso próximo. O amor bíblico vai além de palavras e preconceitos; é uma ação prática, generosa e sacrificial. Amar o próximo significa estender a mão a quem sofre sem exigir nada em troca."
      },
      "title": "O Bom Samaritano",
      "verse": {
        "ref": "Lucas 10:27",
        "text": "Amarás o teu próximo como a ti mesmo."
      },
      "words": [
        "JESUS",
        "AMOR",
        "AJUDAR",
        "PROXIMO",
        "BONDADE"
      ]
    }
  },
  "tumulo": {
    "en": {
      "application": {
        "heart": "Never fear darkness or trouble, knowing the living Christ walks with me every step.",
        "home": "Celebrate that Jesus is alive and present in our home, bringing joy and peace.",
        "school": "Be a cheerful friend and share the great news of Jesus' living hope with classmates."
      },
      "challenge": "This week I will share joy and say to someone: 'Jesus is alive and loves you!'",
      "imageColorDesc": "The large stone rolled away, the empty tomb bathed in resurrection light, and the shining angel.",
      "imageColoringDesc": "Coloring page showing the rolled-away stone, open tomb, and Easter lilies.",
      "prayer": "Lord Jesus, I praise You because You are alive! Thank You for conquering death and giving me living hope. Amen!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "The stone rolled away and the tomb empty",
            "Guards blocking the way",
            "The tomb sealed shut"
          ],
          "question": "What did the women find on Sunday morning at the tomb?"
        },
        {
          "answerIndex": 1,
          "options": [
            "'Go away'",
            "'Do not be afraid, He has risen!'",
            "'Look in another town'"
          ],
          "question": "What did the angel say to the women?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Jesus is alive forever and loves us",
            "The story ended sadly",
            "It was just a myth"
          ],
          "question": "What does the empty tomb mean for us?"
        }
      ],
      "ref": "Matthew 28:1-10",
      "storyByAge": {
        "3-5": "Early on Sunday morning, the sun rose over a quiet garden. Women went to Jesus' tomb, but the giant stone was rolled away! A shining angel smiled and said: 'Don't cry! Jesus is alive!'. Everyone danced with joy!",
        "6-8": "At dawn on the first day of the week, women visited the tomb. An angel of the Lord rolled back the heavy stone and said: 'Do not be afraid! Jesus has risen, just as He said! Come see the empty place!'. Filled with joy, they ran to tell the disciples that Jesus is alive!",
        "9-12": "The resurrection of Jesus Christ in Matthew 28 is the foundation of Christian hope. The empty tomb proves that life triumphs over death, sin is defeated, and Christ reigns forever as our living Lord and Savior."
      },
      "title": "The Empty Tomb (Jesus is Risen!)",
      "verse": {
        "ref": "Matthew 28:6",
        "text": "He is not here; he has risen, just as he said. Come and see the place where he lay."
      },
      "words": [
        "JESUS",
        "TOMB",
        "RISEN",
        "ANGEL",
        "LIFE"
      ]
    },
    "es": {
      "application": {
        "heart": "No temer en momentos difíciles, sabiendo que Cristo resucitado reina en mi corazón.",
        "home": "Celebrar que Jesús vive y llena nuestro hogar de paz, amor y esperanza.",
        "school": "Compartir la buena noticia con mis amigos: ¡Jesús es nuestro amigo vivo y fiel!"
      },
      "challenge": "Esta semana compartiré la alegría con mi familia diciendo: '¡Jesús resucitó y está con nosotros!'",
      "imageColorDesc": "La gran piedra removida, la tumba vacía iluminada por la luz de la resurrección y el ángel de paz.",
      "imageColoringDesc": "Dibujo para colorear de la tumba abierta, la piedra rodada y los lirios de la Pascua.",
      "prayer": "Señor Jesús, ¡Te alabo porque estás vivo! Gracias por vencer la muerte y darme vida eterna. ¡Amén!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "La piedra rodada y la tumba vacía",
            "La tumba cerrada",
            "Soldados atacándolas"
          ],
          "question": "¿Qué encontraron las mujeres al llegar a la tumba el domingo?"
        },
        {
          "answerIndex": 1,
          "options": [
            "'Regresen tristes'",
            "'¡No temáis, ha resucitado!'",
            "'No está aquí nadie'"
          ],
          "question": "¿Qué les dijo el ángel del Señor?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Que Jesús vive para siempre",
            "Que todo terminó triste",
            "Un cuento antiguo"
          ],
          "question": "¿Qué significa la tumba vacía para nosotros?"
        }
      ],
      "ref": "Mateo 28:1-10",
      "storyByAge": {
        "3-5": "¡El domingo por la mañana salió el sol en el jardín! Unas mujeres fueron a la tumba de Jesús, ¡pero la gran piedra había sido rodada! Un ángel brillante dijo: '¡No lloren, Jesús resucitó y vive para siempre!'. ¡Todos saltaron de alegría!",
        "6-8": "Al amanecer del primer día de la semana, las mujeres llegaron al sepulcro. Un ángel del Señor removió la pesada piedra y les dijo: '¡No temáis! Sé que buscáis a Jesús. ¡No está aquí, pues ha resucitado como dijo!'. Corrieron llenas de gozo a anunciar que Jesús está vivo.",
        "9-12": "La resurrección de Cristo en Mateo 28 es el pilar de nuestra fe. La tumba vacía no es ausencia, sino la victoria definitiva de la vida sobre la muerte, asegurando perdón, salvación y esperanza eterna a la humanidad."
      },
      "title": "La Tumba Vacía (¡Jesús Resucitó!)",
      "verse": {
        "ref": "Mateo 28:6",
        "text": "No está aquí, pues ha resucitado, como dijo. Venid, ved el lugar donde fue puesto el Señor."
      },
      "words": [
        "JESUS",
        "TUMBA",
        "RESUCITO",
        "ANGEL",
        "VIDA"
      ]
    },
    "fr": {
      "application": {
        "heart": "Ne jamais avoir peur face aux épreuves, car le Christ ressuscité marche avec moi.",
        "home": "Célébrer la joie de savoir que Jésus est vivant et présent dans notre maison chaque jour.",
        "school": "Être un ami joyeux et partager cette espérance avec mes camarades d'école."
      },
      "challenge": "Cette semaine, je partagerai la joie autour de moi en disant : 'Jésus est vivant et Il prend soin de nous !'",
      "imageColorDesc": "La grande pierre roulée, le tombeau vide baigné de lumière et l'ange resplendissant.",
      "imageColoringDesc": "Coloriage montrant la pierre déplacée, l'entrée ouverte du sépulcre et les fleurs du matin.",
      "prayer": "Seigneur Jésus, je Te loue de tout mon cœur car Tu es vivant ! Merci de m'accorder une espérance éternelle. Amen !",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "La pierre roulée et le tombeau vide",
            "Le tombeau fermé à clé",
            "Des gardes menaçants"
          ],
          "question": "Qu'ont trouvé les femmes en arrivant au tombeau le dimanche matin ?"
        },
        {
          "answerIndex": 1,
          "options": [
            "'Partez d'ici'",
            "'N'ayez pas peur, Il est ressuscité !'",
            "'Il n'y a plus d'espoir'"
          ],
          "question": "Qu'a dit l'ange du Seigneur aux femmes ?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Que Jésus est vivant pour toujours",
            "Une fin tragique",
            "Une vieille légende"
          ],
          "question": "Que signifie le tombeau vide pour nous aujourd'hui ?"
        }
      ],
      "ref": "Matthieu 28:1-10",
      "storyByAge": {
        "3-5": "Le dimanche matin, le soleil s'est levé sur le jardin. Des femmes sont allées au tombeau, mais la grosse pierre était roulée sur le côté ! Un ange brillant a souri et dit : 'Ne pleurez plus ! Jésus est ressuscité et Il est vivant pour toujours !'. Quelle joie !",
        "6-8": "À l'aube du premier jour de la semaine, des femmes allèrent au sépulcre. Un ange du Seigneur roula la lourde pierre et dit : 'N'ayez pas peur ! Jésus n'est pas ici ; Il est ressuscité comme Il l'avait promis !'. Remplies d'une joie immense, elles coururent annoncer la bonne nouvelle aux disciples !",
        "9-12": "La résurrection dans Matthieu 28 est le cœur de l'Évangile. Le tombeau vide atteste la victoire définitive de Jésus sur la mort et le péché. Parce qu'Il vit, nous avons l'assurance du salut et la certitude de Son amour quotidien."
      },
      "title": "Le Tombeau Vide (Jésus est Ressuscité !)",
      "verse": {
        "ref": "Matthieu 28:6",
        "text": "Il n'est point ici; il est ressuscité, comme il l'avait dit. Venez, voyez le lieu où il était couché."
      },
      "words": [
        "JESUS",
        "TOMBEAU",
        "VIVANT",
        "ANGE",
        "VIE"
      ]
    },
    "icon": "🌅✝️",
    "id": "tumulo",
    "imageColor": "assets/images/tomb_pixar.jpg",
    "imageColoring": "assets/images/tomb_coloring.jpg",
    "pt": {
      "application": {
        "heart": "Não ter medo dos momentos difíceis, sabendo que Jesus reina no meu coração.",
        "home": "Celebrar a alegria de que Jesus está vivo na nossa casa, enchendo nossa família de paz e esperança.",
        "school": "Compartilhar a boa notícia com meus colegas: Jesus é o nosso amigo vivo e fiel!"
      },
      "challenge": "Esta semana vou espalhar a alegria da ressurreição contando a um amigo que Jesus está vivo!",
      "imageColorDesc": "A grande pedra foi rolada, o túmulo está vazio e a luz da ressurreição ilumina o jardim!",
      "imageColoringDesc": "Desenho para colorir com a pedra removida, a entrada aberta do sepulcro e os lírios da Páscoa.",
      "prayer": "Senhor Jesus, eu Te louvo porque Tu estás vivo! Obrigado por vencer a morte e me dar esperança eterna. Amém!",
      "quiz": [
        {
          "answerIndex": 0,
          "options": [
            "A pedra rolada e o túmulo vazio",
            "Soldados impedindo a passagem",
            "O túmulo trancado"
          ],
          "question": "O que as mulheres encontraram ao chegar ao túmulo no domingo?"
        },
        {
          "answerIndex": 1,
          "options": [
            "'Voltem para casa'",
            "'Não tenham medo, Ele ressuscitou!'",
            "'Ele não está vivo'"
          ],
          "question": "O que o anjo do Senhor disse às mulheres?"
        },
        {
          "answerIndex": 0,
          "options": [
            "Que Jesus está vivo para sempre",
            "Que a história acabou triste",
            "Apenas uma lembrança antiga"
          ],
          "question": "O que o túmulo vazio significa para nós hoje?"
        }
      ],
      "ref": "Mateus 28:1-10",
      "storyByAge": {
        "3-5": "No domingo de manhã, o sol nasceu bem quentinho no jardim. Três mulheres foram ao túmulo de Jesus. Mas a grande pedra tinha sido rolada! Um anjo lindo disse: 'Não chorem! Jesus ressuscitou e está vivo!'. Que alegria maravilhosa!",
        "6-8": "Ao amanhecer do primeiro dia da semana, as mulheres foram ao sepulcro. Um anjo do Senhor desceu dos céus, removeu a pesada pedra e disse: 'Não tenham medo! Jesus não está aqui; ressuscitou, como havia dito!'. Elas correram felizes para contar a todos: Jesus está vivo!",
        "9-12": "A ressurreição em Mateus 28 é a verdade suprema do Cristianismo: a vitória sobre o pecado e a morte. O sepulcro vazio proclama que Jesus vive para sempre e nos assegura paz, esperança e vida eterna."
      },
      "title": "O Túmulo Vazio (Jesus Ressuscitou!)",
      "verse": {
        "ref": "Mateus 28:6",
        "text": "Ele não está aqui, porque já ressuscitou, como havia dito. Vinde, vede o lugar onde o Senhor jazia."
      },
      "words": [
        "JESUS",
        "TUMULO",
        "RESSUSCITOU",
        "ANJO",
        "VIDA"
      ]
    }
  },
  "lampada": {
    "icon": "💡📖",
    "id": "lampada",
    "imageColor": "assets/images/lampada_pixar.jpg",
    "imageColoring": "assets/images/lampada_coloring.jpg",
    "pt": {
      "title": "Salmo 119:105: Lâmpada e Luz",
      "ref": "Salmo 119:105",
      "imageColorDesc": "Crianças caminhando em um bosque florido com uma lanterna dourada e a Bíblia Sagrada emitindo raios de luz celestiais que iluminam o caminho dos seus passos.",
      "imageColoringDesc": "Desenho para colorir de crianças segurando uma lanterna e a Bíblia aberta iluminando o caminho dos pés com alegria.",
      "verse": {
        "ref": "Salmo 119:105",
        "text": "Lâmpada para os meus pés é a tua palavra e luz para o meu caminho."
      },
      "storyByAge": {
        "3-5": "Vocês já tentaram andar no escuro? Quando ligamos uma lanterninha, tudo fica claro e seguro! A Bíblia é a lâmpada do Papai do Céu para o nosso coração. Quando ouvimos a Palavra de Deus, Jesus ilumina nossos passinhos e nos ensina a ser crianças boas, obedientes e alegres!",
        "6-8": "Imagine caminhar por uma trilha na floresta à noite sem nenhuma luz. Seria perigoso tropeçar, não é? O salmista nos ensina que a Palavra de Deus é exatamente como uma lâmpada brilhante colocada pertinho dos nossos pés: ela nos mostra o caminho certo, nos livra do perigo e enche a nossa vida com a verdade de Jesus!",
        "9-12": "O Salmo 119:105 expressa um dos maiores princípios bíblicos: em um mundo repleto de dúvidas e caminhos confusos, a Palavra de Deus é o nosso guia seguro e infalível. As Escrituras iluminam nossa mente, fortalecem nosso caráter e nos dão sabedoria prática para tomar boas decisões todos os dias com integridade e fé."
      },
      "application": {
        "home": "Ler um versículo bíblico todos os dias antes de dormir com a família para iluminar o nosso lar com paz.",
        "school": "Escolher sempre a verdade e a honestidade na escola, deixando a luz da Palavra de Deus guiar as minhas atitudes.",
        "heart": "Guardar os conselhos da Bíblia na memória e lembrar que Deus nunca nos deixa caminhar sozinhos no escuro."
      },
      "prayer": "Senhor meu Deus, muito obrigado pela Tua Santa Palavra. Que ela seja a lâmpada que guia todos os meus passos e a luz que ilumina o meu coração em todos os momentos da vida. Em nome de Jesus, Amém!",
      "words": ["LAMPADA", "LUZ", "PALAVRA", "CAMINHO", "GUIA"],
      "quiz": [
        {
          "question": "O que a Palavra de Deus é para os nossos pés de acordo com o Salmo 119:105?",
          "options": ["Lâmpada brilhante", "Uma pedra de tropeço", "Um fardo pesado"],
          "answerIndex": 0
        },
        {
          "question": "O que a Bíblia faz em nosso caminho?",
          "options": ["Ilumina com luz e verdade", "Deixa tudo escuro", "Nos faz perder a direção"],
          "answerIndex": 0
        },
        {
          "question": "Como podemos usar a lâmpada de Deus no nosso dia a dia?",
          "options": ["Lendo a Bíblia e obedecendo aos Seus ensinamentos", "Esquecendo a Palavra", "Desobedecendo aos pais"],
          "answerIndex": 0
        }
      ],
      "challenge": "Esta semana vou ler o Salmo 119:105 com meus pais e fazer um desenho de uma lâmpada para lembrar que a Bíblia é o meu guia!"
    },
    "en": {
      "title": "Psalm 119:105: Lamp and Light",
      "ref": "Psalm 119:105",
      "imageColorDesc": "Children walking along an enchanted garden path holding a glowing vintage lantern and looking at an open Holy Bible radiating heavenly light.",
      "imageColoringDesc": "Coloring page of children holding a lantern and an open Bible lighting their path with joy.",
      "verse": {
        "ref": "Psalm 119:105",
        "text": "Your word is a lamp for my feet, a light on my path."
      },
      "storyByAge": {
        "3-5": "Have you ever walked in the dark? When we switch on a little flashlight, everything becomes bright and safe! God's Word is like a warm golden flashlight for our heart. Jesus guides our little steps so we never stumble!",
        "6-8": "Walking through a dark garden path at night would be scary without light. But God's Word is a glowing lamp right by our feet! It shows us the right choices, protects us from stumbling, and fills our life with heavenly guidance every day.",
        "9-12": "Psalm 119:105 reminds us of the paramount role of Scripture in our lives. In a world with complex choices, God's Word provides clarity, moral wisdom, and divine illumination so we can walk with confidence, integrity, and faith."
      },
      "application": {
        "home": "Read a Bible verse each morning or evening with parents to illuminate our household.",
        "school": "Act with honesty, kindness, and integrity in class, letting the light of God's Word guide our behavior.",
        "heart": "Memorize Psalm 119:105 and trust God's truth to guide every single decision."
      },
      "prayer": "Heavenly Father, thank You for Your precious Word. May it always be a lamp to my feet and a bright light to my path wherever I go. In Jesus' name, Amen!",
      "words": ["LAMP", "LIGHT", "WORD", "PATH", "GUIDE"],
      "quiz": [
        {
          "question": "What is God's Word compared to in Psalm 119:105?",
          "options": ["A lamp for our feet", "A sharp stone", "A heavy cloud"],
          "answerIndex": 0
        },
        {
          "question": "What does God's Word do for our path?",
          "options": ["It is a light on our path", "It makes the path dark", "It hides the way"],
          "answerIndex": 0
        },
        {
          "question": "How can we let God's lamp guide us?",
          "options": ["By reading Scripture and obeying Jesus", "By ignoring God's voice", "By being selfish"],
          "answerIndex": 0
        }
      ],
      "challenge": "This week I will memorize Psalm 119:105 and thank God every night for His guiding Word!"
    },
    "es": {
      "title": "Salmo 119:105: Lámpara y Luz",
      "ref": "Salmo 119:105",
      "imageColorDesc": "Niños caminando por un sendero con una linterna dorada y la Santa Biblia brillando con luz celestial en su camino.",
      "imageColoringDesc": "Dibujo para colorear de niños con una lámpara y la Biblia abierta iluminando el camino de sus pies.",
      "verse": {
        "ref": "Salmo 119:105",
        "text": "Lámpara es a mis pies tu palabra, y lumbrera a mi camino."
      },
      "storyByAge": {
        "3-5": "¿Alguna vez has caminado a oscuras? ¡Cuando encendemos una linterna todo se ilumina! La Biblia es la lamparita de Dios para nuestro corazón. ¡Jesús guía nuestros pasitos con Su gran amor!",
        "6-8": "Caminar de noche por un sendero sin luz sería peligroso. ¡Pero la Palabra de Dios es una lámpara brillante para nuestros pies! Nos muestra el buen camino, nos libra de tropezar y llena nuestra vida de paz y verdad.",
        "9-12": "El Salmo 119:105 nos enseña el inmenso valor de las Escrituras. En un mundo lleno de dudas y decisiones difíciles, la Palabra de Dios es la brújula y la luz perfecta que guía nuestro entendimiento y fortalece nuestro testimonio."
      },
      "application": {
        "home": "Leer un versículo con la familia cada noche para llenar nuestro hogar de luz.",
        "school": "Ser un ejemplo de verdad y bondad en la escuela, dejando que la Palabra ilumine nuestras acciones.",
        "heart": "Guardar las enseñanzas bíblicas en el corazón y confiar en que Dios nunca nos dejará en la oscuridad."
      },
      "prayer": "Señor Dios, gracias por Tu Santa Palabra. Que sea siempre la lámpara que guía mis pasos y la luz en mi camino cada día. ¡En el nombre de Jesús, Amén!",
      "words": ["LAMPARA", "LUZ", "PALABRA", "CAMINO", "GUIA"],
      "quiz": [
        {
          "question": "¿Qué es la Palabra de Dios para nuestros pies según el Salmo 119:105?",
          "options": ["Lámpara a mis pies", "Una piedra de tropiezo", "Una nube oscura"],
          "answerIndex": 0
        },
        {
          "question": "¿Qué hace la Palabra de Dios en nuestro camino?",
          "options": ["Es lumbrera y luz", "Lo oscurece", "Nos hace perder el rumbo"],
          "answerIndex": 0
        },
        {
          "question": "¿Cómo podemos seguir la luz de la Palabra?",
          "options": ["Leyendo la Biblia y obedeciendo a Dios", "Olvidando las Escrituras", "Peleando con los demás"],
          "answerIndex": 0
        }
      ],
      "challenge": "¡Esta semana memorizaré el Salmo 119:105 y compartiré su hermosa luz con un amigo!"
    },
    "fr": {
      "title": "Psaume 119:105 : Lampe et Lumière",
      "ref": "Psaume 119:105",
      "imageColorDesc": "Enfants marchant sur un sentier avec une lanterne dorée et la Sainte Bible rayonnant de lumière céleste.",
      "imageColoringDesc": "Coloriage d'enfants tenant une lanterne et la Bible ouverte éclairant leurs pas sur le chemin.",
      "verse": {
        "ref": "Psaume 119:105",
        "text": "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier."
      },
      "storyByAge": {
        "3-5": "As-tu déjà marché dans le noir ? Quand on allume une petite lampe, tout s'éclaire ! La Parole de Dieu est comme une douce lanterne pour notre petit cœur. Jésus guide nos pas pour que nous ne trébuchions jamais !",
        "6-8": "Marcher sur un chemin sombre la nuit est difficile sans lumière. Mais la Parole de Dieu est une lampe brillante placée juste devant nos pieds ! Elle nous montre la bonne direction et remplit notre vie de sagesse et de paix.",
        "9-12": "Le Psaume 119:105 souligne la suprématie des Écritures dans notre vie chrétienne. Dans les moments de doute, la Parole divine éclaire notre intelligence, dirige nos choix et nous ancre dans la vérité éternelle de Dieu."
      },
      "application": {
        "home": "Lire un verset biblique chaque jour en famille pour éclairer notre foyer de paix.",
        "school": "Être honnête et bienveillant à l'école, laissant briller la lumière de Dieu dans mes actes.",
        "heart": "Méditer la Parole de Dieu et Lui faire entièrement confiance pour guider mon avenir."
      },
      "prayer": "Seigneur Dieu, merci pour Ta sainte Parole. Qu'elle soit chaque jour une lampe à mes pieds et une lumière éclatante sur mon chemin. Au nom de Jésus, Amen !",
      "words": ["LAMPE", "LUMIERE", "PAROLE", "SENTIER", "GUIDE"],
      "quiz": [
        {
          "question": "Que représente la Parole de Dieu pour nos pieds dans le Psaume 119:105 ?",
          "options": ["Une lampe à nos pieds", "Une pierre d'achoppement", "Un obstacle"],
          "answerIndex": 0
        },
        {
          "question": "Que fait la Parole sur notre sentier ?",
          "options": ["Elle est une lumière sur notre sentier", "Elle l'obscurcit", "Elle nous égare"],
          "answerIndex": 0
        },
        {
          "question": "Comment suivre la lumière de Dieu dans notre vie ?",
          "options": ["En lisant la Bible et en obéissant à Jésus", "En ignorant la Parole", "En étant désobéissant"],
          "answerIndex": 0
        }
      ],
      "challenge": "Cette semaine, je vais mémoriser le Psaume 119:105 et remercier Dieu pour Sa lumière bienveillante !"
    }
  }
};

// --- 3. TÍTULOS DOS PRESETS EM CADA IDIOMA ---
const PRESET_TITLES = {
  joao6: { pt: "João 6: Pães e Peixes", en: "John 6: Loaves & Fish", es: "Juan 6: Panes y Peces", fr: "Jean 6: Pains et Poissons" },
  criancas: { pt: "Jesus e as Crianças", en: "Jesus & Children", es: "Jesús y los Niños", fr: "Jésus et les Enfants" },
  cruz: { pt: "O Amor na Cruz", en: "Love on the Cross", es: "El Amor en la Cruz", fr: "L'Amour sur la Croix" },
  tumulo: { pt: "O Túmulo Vazio", en: "The Empty Tomb", es: "La Tumba Vacía", fr: "Le Tombeau Vide" },
  pastor: { pt: "O Bom Pastor", en: "The Good Shepherd", es: "El Buen Pastor", fr: "Le Bon Berger" },
  noe: { pt: "A Arca de Noé", en: "Noah's Ark", es: "El Arca de Noé", fr: "L'Arche de Noé" },
  davi: { pt: "Davi e Golias", en: "David and Goliath", es: "David y Goliat", fr: "David et Goliath" },
  daniel: { pt: "Daniel na Cova", en: "Daniel in Lions' Den", es: "Daniel en el Foso", fr: "Daniel dans la Fosse" },
  jonas: { pt: "Jonas e o Peixe", en: "Jonah and the Fish", es: "Jonás y el Gran Pez", fr: "Jonas et le Poisson" },
  moises: { pt: "O Mar Vermelho", en: "Moses & Red Sea", es: "El Mar Rojo", fr: "La Mer Rouge" },
  samaritano: { pt: "O Bom Samaritano", en: "The Good Samaritan", es: "El Buen Samaritano", fr: "Le Bon Samaritain" },
  criacao: { pt: "A Criação do Mundo", en: "The Creation", es: "La Creación", fr: "La Création du Monde" },
  joao316: { pt: "João 3:16: Amor de Deus", en: "John 3:16: God's Love", es: "Juan 3:16: Amor de Dios", fr: "Jean 3:16 : Amour de Dieu" },
  salmo91: { pt: "Salmo 91: Proteção", en: "Psalm 91: Protection", es: "Salmo 91: Protección", fr: "Psaume 91 : Protection" },
  filipenses413: { pt: "Filipenses 4:13: Minha Força", en: "Philippians 4:13: Strength", es: "Filipenses 4:13: Fuerza", fr: "Philippiens 4:13 : Force" },
  lampada: { pt: "Salmo 119:105: Lâmpada", en: "Psalm 119:105: Lamp", es: "Salmo 119:105: Lámpara", fr: "Psaume 119:105 : Lampe" }
};

const THEME_GALLERY = {
  joao6: { color: "assets/images/loaves_pixar.jpg", coloring: "assets/images/loaves_coloring.jpg" },
  salmo91: { color: "assets/images/salmo91_pixar.jpg", coloring: "assets/images/salmo91_coloring.jpg" },
  filipenses413: { color: "assets/images/filipenses_pixar.jpg", coloring: "assets/images/filipenses_coloring.jpg" },
  lampada: { color: "assets/images/lampada_pixar.jpg", coloring: "assets/images/lampada_coloring.jpg" },
  joao316: { color: "assets/images/joao316_pixar.jpg", coloring: "assets/images/joao316_coloring.jpg" },
  noe: { color: "assets/images/noah_pixar.jpg", coloring: "assets/images/noah_coloring.jpg" },
  criancas: { color: "assets/images/children_pixar.jpg", coloring: "assets/images/children_coloring.jpg" },
  pastor: { color: "assets/images/shepherd_pixar.jpg", coloring: "assets/images/shepherd_coloring.jpg" },
  davi: { color: "assets/images/david_pixar.jpg", coloring: "assets/images/david_coloring.jpg" },
  daniel: { color: "assets/images/daniel_pixar.jpg", coloring: "assets/images/daniel_coloring.jpg" },
  moises: { color: "assets/images/moses_pixar.jpg", coloring: "assets/images/moses_coloring.jpg" },
  jonas: { color: "assets/images/jonah_pixar.jpg", coloring: "assets/images/jonah_coloring.jpg" },
  samaritano: { color: "assets/images/samaritan_pixar.jpg", coloring: "assets/images/samaritan_coloring.jpg" },
  criacao: { color: "assets/images/creation_pixar.jpg", coloring: "assets/images/creation_coloring.jpg" },
  tumulo: { color: "assets/images/tomb_pixar.jpg", coloring: "assets/images/tomb_coloring.jpg" },
  cruz: { color: "assets/images/cross_pixar.jpg", coloring: "assets/images/cross_coloring.jpg" }
};

function handleThemeVisualChange(themeKey) {
  const t = THEME_GALLERY[themeKey];
  if (!t) return;
  currentStoryObj.imageColor = t.color;
  currentStoryObj.imageColoring = t.coloring;
  document.getElementById("story-image-color").src = t.color;
  document.getElementById("coloring-image").src = t.coloring;

  const selPixar = document.getElementById("theme-visual-select-pixar");
  const selColoring = document.getElementById("theme-visual-select-coloring");
  if (selPixar) selPixar.value = themeKey;
  if (selColoring) selColoring.value = themeKey;

  showToastNotification("🎨 Cena bíblica atualizada (3D Pixar + Desenho para Colorir combinados)!");
}

// --- 4. ESTADO GLOBAL DA APLICAÇÃO ---
let currentLang = "pt"; // 'pt' | 'en' | 'es' | 'fr'
let currentStoryKey = "joao6";
let currentStoryObj = STORIES_DB.joao6;
let currentAge = "6-8";
let currentInputMode = "ref"; // 'ref' | 'text'
let lastActiveInput = "ref";
let currentGridAnswers = [];
let answersRevealed = false;
let isSpeaking = false;
let currentSeed = Math.floor(Math.random() * 999999);

// --- 5. INICIALIZAÇÃO DA APLICAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  
  const savedLang = localStorage.getItem("biblekids_lang");
  if (savedLang && ["pt", "en", "es", "fr"].includes(savedLang)) {
    currentLang = savedLang;
  }
  setLanguage(currentLang);
  loadStory("joao6");
});

// --- 6. CONFIGURAÇÃO DE EVENTOS ---
function setupEventListeners() {
  // Seletor de Idioma (Header)
  const langButtons = document.querySelectorAll(".lang-pill");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      if (selected && selected !== currentLang) {
        setLanguage(selected);
      }
    });
  });

  // Alternador de Modo de Entrada (Referência vs Texto Escrito)
  document.getElementById("tab-mode-ref").addEventListener("click", () => switchInputMode("ref"));
  document.getElementById("tab-mode-text").addEventListener("click", () => switchInputMode("text"));

  // Detectar digitação nos campos para priorizar a entrada do usuário
  const passInput = document.getElementById("passage-input");
  const verseInput = document.getElementById("verse-text-input");

  passInput.addEventListener("input", () => {
    lastActiveInput = "ref";
    clearPresetButtonsActive();
  });
  verseInput.addEventListener("input", () => {
    lastActiveInput = "text";
    clearPresetButtonsActive();
  });

  // Botões de Presets (1 Clique)
  const presetButtons = document.querySelectorAll(".preset-btn");
  presetButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      clearPresetButtonsActive();
      btn.classList.add("active");
      const storyKey = btn.dataset.story;
      if (STORIES_DB[storyKey]) {
        currentStoryKey = storyKey;
        const localized = getLocalizedStory(STORIES_DB[storyKey]);
        passInput.value = localized.ref;
        verseInput.value = localized.verse ? localized.verse.text : "";
        lastActiveInput = "ref";
        loadStory(storyKey);
        showToastNotification(`📖 Aula carregada: ${localized.title}`);
      }
    });
  });

  // Mudança de Faixa Etária
  document.getElementById("age-select").addEventListener("change", (e) => {
    currentAge = e.target.value;
    updateStoryTextByAge();
  });

  // Botão Principal: Gerar Aula Bíblica
  document.getElementById("btn-generate").addEventListener("click", handleGenerate);

  // Tecla Enter nos campos de entrada
  passInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleGenerate();
  });
  verseInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  });

  // Seletor de Tema Visual Rápido (3D Pixar e Colorir)
  const selPixar = document.getElementById("theme-visual-select-pixar");
  if (selPixar) selPixar.addEventListener("change", (e) => handleThemeVisualChange(e.target.value));
  const selColoring = document.getElementById("theme-visual-select-coloring");
  if (selColoring) selColoring.addEventListener("change", (e) => handleThemeVisualChange(e.target.value));

  // Ferramentas de Imagem: 3D Pixar
  document.getElementById("btn-gen-pixar-ai").addEventListener("click", () => generatePixarImageAI(false));
  document.getElementById("btn-regen-pixar-ai").addEventListener("click", () => generatePixarImageAI(true));
  document.getElementById("btn-copy-pixar-prompt").addEventListener("click", (e) => {
    const loc = getLocalizedStory(currentStoryObj);
    const prompt = buildMasterImagePrompt(loc.ref || loc.title, currentAge);
    copyToClipboard(prompt, e.currentTarget, "✅ Copiado!");
  });
  document.getElementById("btn-download-pixar").addEventListener("click", () => downloadImage("pixar"));

  // Upload Local de Imagem 3D Pixar
  const uploadPixarTrigger = document.getElementById("btn-upload-pixar-trigger");
  const uploadPixarInput = document.getElementById("upload-pixar-file");
  uploadPixarTrigger.addEventListener("click", () => uploadPixarInput.click());
  uploadPixarInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      handleLocalFileUpload("pixar", e.target.files[0]);
    }
  });

  // Ferramentas de Imagem: Para Colorir
  document.getElementById("btn-gen-coloring-ai").addEventListener("click", () => generateColoringImageAI(false));
  document.getElementById("btn-regen-coloring-ai").addEventListener("click", () => generateColoringImageAI(true));
  document.getElementById("btn-filter-lineart").addEventListener("click", enhanceLineArtCanvas);
  document.getElementById("btn-copy-coloring-prompt").addEventListener("click", (e) => {
    const loc = getLocalizedStory(currentStoryObj);
    const prompt = buildColoringImagePrompt(loc.ref || loc.title, currentAge);
    copyToClipboard(prompt, e.currentTarget, "✅ Copiado!");
  });
  document.getElementById("btn-download-coloring").addEventListener("click", () => downloadImage("coloring"));

  // Upload Local de Desenho para Colorir
  const uploadColoringTrigger = document.getElementById("btn-upload-coloring-trigger");
  const uploadColoringInput = document.getElementById("upload-coloring-file");
  uploadColoringTrigger.addEventListener("click", () => uploadColoringInput.click());
  uploadColoringInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      handleLocalFileUpload("coloring", e.target.files[0]);
    }
  });

  // Caça-Palavras: Mostrar / Ocultar Respostas
  document.getElementById("btn-toggle-answers").addEventListener("click", toggleWordSearchAnswers);

  // Áudio da História (Text-to-Speech)
  document.getElementById("btn-speech").addEventListener("click", toggleSpeech);

  // Ações de Exportação
  document.getElementById("btn-print").addEventListener("click", () => window.print());
  document.getElementById("btn-pdf").addEventListener("click", exportPDF);
  document.getElementById("btn-docx").addEventListener("click", exportDOCX);

  // Toggle API Key Box
  document.getElementById("btn-toggle-api").addEventListener("click", () => {
    const sec = document.getElementById("api-config-section");
    sec.classList.toggle("hidden");
  });
}

function clearPresetButtonsActive() {
  const presetButtons = document.querySelectorAll(".preset-btn");
  presetButtons.forEach(b => b.classList.remove("active"));
}

function showToastNotification(message) {
  const banner = document.getElementById("toast-banner");
  if (!banner) return;
  banner.innerHTML = `<span>✨ ${message}</span>`;
  banner.classList.remove("hidden");
  setTimeout(() => {
    banner.classList.add("hidden");
  }, 4500);
}

// --- 7. MUDANÇA DE IDIOMA E LOCALIZAÇÃO DINÂMICA ---
function setLanguage(lang) {
  if (!I18N_STRINGS[lang]) return;
  currentLang = lang;
  localStorage.setItem("biblekids_lang", lang);

  const langButtons = document.querySelectorAll(".lang-pill");
  langButtons.forEach(btn => {
    if (btn.dataset.lang === lang) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  document.documentElement.lang = (lang === "pt") ? "pt-BR" : (lang === "es") ? "es-ES" : (lang === "fr") ? "fr-FR" : "en-US";

  const translatable = document.querySelectorAll("[data-i18n]");
  translatable.forEach(el => {
    const key = el.dataset.i18n;
    if (I18N_STRINGS[lang][key]) {
      el.textContent = I18N_STRINGS[lang][key];
    }
  });

  const presetButtons = document.querySelectorAll(".preset-btn");
  presetButtons.forEach(btn => {
    const key = btn.dataset.story;
    const titleSpan = btn.querySelector(".p-title");
    if (titleSpan && PRESET_TITLES[key] && PRESET_TITLES[key][lang]) {
      titleSpan.textContent = PRESET_TITLES[key][lang];
    }
  });

  const ageSelect = document.getElementById("age-select");
  if (ageSelect) {
    ageSelect.options[0].text = I18N_STRINGS[lang].opt_age_35;
    ageSelect.options[1].text = I18N_STRINGS[lang].opt_age_68;
    ageSelect.options[2].text = I18N_STRINGS[lang].opt_age_912;
  }

  const passInput = document.getElementById("passage-input");
  if (passInput) {
    passInput.placeholder = (lang === "en") ? "Ex: John 3:16, Psalm 23, Philippians 4:13..." :
                            (lang === "es") ? "Ej: Juan 3:16, Salmo 23, Filipenses 4:13..." :
                            (lang === "fr") ? "Ex : Jean 3:16, Psaume 23, Philippiens 4:13..." :
                            "Ex: João 3:16, Salmo 23, Filipenses 4:13...";
  }

  const verseInput = document.getElementById("verse-text-input");
  if (verseInput) {
    verseInput.placeholder = (lang === "en") ? "Paste or write the sacred Bible verse here... (e.g. 'For God so loved the world...', 'The Lord is my shepherd...', 'I can do all this through him who gives me strength')" :
                             (lang === "es") ? "Pegue o escriba el versículo sagrado aquí... (ej: 'Porque de tal manera amó Dios al mundo...', 'Jehová es mi pastor; nada me faltará', 'Todo lo puedo en Cristo que me fortalece')" :
                             (lang === "fr") ? "Collez ou écrivez le verset biblique ici... (ex : 'Car Dieu a tant aimé le monde...', 'L'Éternel est mon berger...', 'Je puis tout par celui qui me fortifie')" :
                             "Cole ou digite o versículo sagrado aqui... (Ex: 'Porque Deus amou o mundo de tal maneira...', 'O Senhor é o meu pastor e nada me faltará', 'Tudo posso naquele que me fortalece')";
  }

  if (currentStoryKey && STORIES_DB[currentStoryKey]) {
    loadStory(currentStoryKey);
  } else if (currentStoryObj) {
    renderCurrentStory();
  }
}

function switchInputMode(mode) {
  currentInputMode = mode;
  lastActiveInput = mode;
  const tabRef = document.getElementById("tab-mode-ref");
  const tabText = document.getElementById("tab-mode-text");
  const groupRef = document.getElementById("group-passage-ref");
  const groupText = document.getElementById("group-verse-text");

  if (mode === "ref") {
    tabRef.classList.add("active");
    tabText.classList.remove("active");
    groupRef.classList.remove("hidden");
    groupText.classList.add("hidden");
    document.getElementById("passage-input").focus();
  } else {
    tabText.classList.add("active");
    tabRef.classList.remove("active");
    groupText.classList.remove("hidden");
    groupRef.classList.add("hidden");
    document.getElementById("verse-text-input").focus();
  }
}

// --- 8. CARREGAMENTO E RENDERIZAÇÃO DA AULA ---
function getLocalizedStory(story) {
  if (!story) return null;
  return story[currentLang] || story.pt || story.en || story;
}

function loadStory(storyKey) {
  const story = STORIES_DB[storyKey];
  if (!story) return;

  currentStoryKey = storyKey;
  currentStoryObj = story;
  renderCurrentStory();
}

function renderCurrentStory() {
  const localized = getLocalizedStory(currentStoryObj);
  if (!localized) return;

  // Atualizar Cabeçalho
  document.getElementById("activity-title").textContent = localized.title;
  document.getElementById("activity-ref").textContent = localized.ref;
  document.getElementById("title-icon").textContent = currentStoryObj.icon || "📖✨";
  
  const ageSelect = document.getElementById("age-select");
  const ageLabel = ageSelect.options[ageSelect.selectedIndex].text.split("(")[0].trim();
  document.getElementById("activity-age").textContent = ageLabel;

  // Imagem Colorida (3D Pixar)
  const imgColor = document.getElementById("story-image-color");
  imgColor.src = currentStoryObj.imageColor || "assets/images/cross_pixar.jpg";
  imgColor.alt = localized.title;
  document.getElementById("story-image-desc").textContent = localized.imageColorDesc || localized.title;

  // Imagem para Colorir (P&B)
  const imgColoring = document.getElementById("coloring-image");
  imgColoring.src = currentStoryObj.imageColoring || "assets/images/cross_coloring.jpg";
  imgColoring.alt = localized.title;
  document.getElementById("coloring-caption").textContent = localized.imageColoringDesc || I18N_STRINGS[currentLang].coloring_caption_default;

  // Sincronizar Seletores de Tema Visual
  const selPixar = document.getElementById("theme-visual-select-pixar");
  const selColoring = document.getElementById("theme-visual-select-coloring");
  let matchedKey = "";
  for (const k in THEME_GALLERY) {
    if (THEME_GALLERY[k].color === currentStoryObj.imageColor) {
      matchedKey = k;
      break;
    }
  }
  if (!matchedKey && THEME_GALLERY[currentStoryKey]) {
    matchedKey = currentStoryKey;
  }
  if (matchedKey) {
    if (selPixar) selPixar.value = matchedKey;
    if (selColoring) selColoring.value = matchedKey;
  }

  // Texto Narrado por Idade
  updateStoryTextByAge();

  // Versículo de Ouro para Memorizar
  document.getElementById("memory-verse-text").textContent = `"${localized.verse.text}"`;
  document.getElementById("memory-verse-ref").textContent = `— ${localized.verse.ref}`;

  // Aplicação da Palavra
  document.getElementById("app-home-text").textContent = localized.application.home;
  document.getElementById("app-school-text").textContent = localized.application.school;
  document.getElementById("app-heart-text").textContent = localized.application.heart;
  document.getElementById("prayer-text").textContent = `"${localized.prayer}"`;

  // Caça-Palavras
  buildWordSearch(localized.words || ["JESUS", "AMOR", "PAZ", "FE", "VIDA"]);

  // Quiz Bíblico
  renderQuiz(localized.quiz || []);

  // Desafio Prático da Semana
  document.getElementById("challenge-text").textContent = `"${localized.challenge}"`;

  // Gabarito do Professor
  renderTeacherGuide(localized);

  // Status
  document.getElementById("status-badge").textContent = I18N_STRINGS[currentLang].status_ready;
}

function updateStoryTextByAge() {
  const localized = getLocalizedStory(currentStoryObj);
  if (!localized) return;

  const storyBody = document.getElementById("story-body");
  const text = (localized.storyByAge && localized.storyByAge[currentAge]) ? localized.storyByAge[currentAge] : 
               (localized.storyByAge && localized.storyByAge["6-8"]) ? localized.storyByAge["6-8"] : "";
  
  const paragraphs = text.split("\n\n").filter(p => p.trim().length > 0);
  storyBody.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join("");

  const ageSelect = document.getElementById("age-select");
  const ageLabel = ageSelect.options[ageSelect.selectedIndex].text.split("(")[0].trim();
  document.getElementById("activity-age").textContent = ageLabel;
}

// --- 9. CAÇA-PALAVRAS BÍBLICO (EXATAMENTE 5 PALAVRAS) ---
function buildWordSearch(words) {
  const gridContainer = document.getElementById("wordsearch-grid");
  const tagsContainer = document.getElementById("wordsearch-tags");
  gridContainer.innerHTML = "";
  tagsContainer.innerHTML = "";

  const cleanWords = words.slice(0, 5).map(w => w.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z]/g, ""));
  const maxWordLen = Math.max(9, ...cleanWords.map(w => w.length));
  const size = Math.min(13, maxWordLen + 2);

  gridContainer.style.gridTemplateColumns = `repeat(${size}, 32px)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 32px)`;

  const grid = Array.from({ length: size }, () => Array(size).fill(""));
  currentGridAnswers = [];
  answersRevealed = false;

  words.slice(0, 5).forEach(word => {
    const li = document.createElement("li");
    li.className = "wordsearch-tag";
    li.id = `ws-tag-${word.replace(/\s+/g, "_")}`;
    li.innerHTML = `<span>⭐ ${word}</span> <span class="tag-status">⬜</span>`;
    tagsContainer.appendChild(li);
  });

  cleanWords.forEach(word => {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < 250) {
      attempts++;
      const dir = Math.random() > 0.5 ? "H" : "V";
      const maxRow = dir === "V" ? size - word.length : size - 1;
      const maxCol = dir === "H" ? size - word.length : size - 1;

      if (maxRow < 0 || maxCol < 0) continue;

      const row = Math.floor(Math.random() * (maxRow + 1));
      const col = Math.floor(Math.random() * (maxCol + 1));

      let canPlace = true;
      for (let i = 0; i < word.length; i++) {
        const r = dir === "V" ? row + i : row;
        const c = dir === "H" ? col + i : col;
        if (grid[r][c] !== "" && grid[r][c] !== word[i]) {
          canPlace = false;
          break;
        }
      }

      if (canPlace) {
        for (let i = 0; i < word.length; i++) {
          const r = dir === "V" ? row + i : row;
          const c = dir === "H" ? col + i : col;
          grid[r][c] = word[i];
          currentGridAnswers.push(`${r}-${c}`);
        }
        placed = true;
      }
    }
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === "") {
        grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
      }

      const cell = document.createElement("div");
      cell.className = "ws-cell";
      cell.dataset.pos = `${r}-${c}`;
      cell.textContent = grid[r][c];

      cell.addEventListener("click", () => {
        cell.classList.toggle("selected");
      });

      gridContainer.appendChild(cell);
    }
  }
}

function toggleWordSearchAnswers() {
  answersRevealed = !answersRevealed;
  const cells = document.querySelectorAll(".ws-cell");
  
  cells.forEach(cell => {
    if (currentGridAnswers.includes(cell.dataset.pos)) {
      if (answersRevealed) cell.classList.add("highlight-answer");
      else cell.classList.remove("highlight-answer");
    }
  });

  const loc = getLocalizedStory(currentStoryObj);
  if (loc && loc.words) {
    loc.words.slice(0, 5).forEach(word => {
      const tag = document.getElementById(`ws-tag-${word.replace(/\s+/g, "_")}`);
      if (tag) {
        if (answersRevealed) {
          tag.classList.add("found");
          tag.querySelector(".tag-status").textContent = "✅";
        } else {
          tag.classList.remove("found");
          tag.querySelector(".tag-status").textContent = "⬜";
        }
      }
    });
  }
}

// --- 10. QUIZ BÍBLICO INTERATIVO ---
function renderQuiz(quizItems) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  quizItems.forEach((item, qIdx) => {
    const card = document.createElement("div");
    card.className = "quiz-card";

    const title = document.createElement("div");
    title.className = "quiz-question-title";
    title.textContent = `${qIdx + 1}. ${item.question}`;
    card.appendChild(title);

    const optionsBox = document.createElement("div");
    optionsBox.className = "quiz-options";

    item.options.forEach((optText, optIdx) => {
      const letter = String.fromCharCode(65 + optIdx);
      const label = document.createElement("label");
      label.className = "quiz-option-label";

      label.innerHTML = `
        <span class="option-circle">${letter}</span>
        <span>${optText}</span>
      `;

      label.addEventListener("click", () => {
        const siblingLabels = optionsBox.querySelectorAll(".quiz-option-label");
        siblingLabels.forEach(l => l.classList.remove("correct", "incorrect"));

        if (optIdx === item.answerIndex) {
          label.classList.add("correct");
        } else {
          label.classList.add("incorrect");
          if (siblingLabels[item.answerIndex]) {
            siblingLabels[item.answerIndex].classList.add("correct");
          }
        }
      });

      optionsBox.appendChild(label);
    });

    card.appendChild(optionsBox);
    container.appendChild(card);
  });
}

// --- 11. GABARITO DO PROFESSOR ---
function renderTeacherGuide(localized) {
  const quizAnswersDiv = document.getElementById("teacher-quiz-answers");
  const wordsAnswersDiv = document.getElementById("teacher-words-answers");

  if (localized.quiz && localized.quiz.length > 0) {
    quizAnswersDiv.innerHTML = localized.quiz.map((q, idx) => {
      const letter = String.fromCharCode(65 + q.answerIndex);
      return `<p><strong>${idx + 1}:</strong> [ ${letter} ] — ${q.options[q.answerIndex]}</p>`;
    }).join("");
  } else {
    quizAnswersDiv.innerHTML = "<p>—</p>";
  }

  if (localized.words && localized.words.length > 0) {
    wordsAnswersDiv.innerHTML = `<p><strong>5 Palavras:</strong> ${localized.words.slice(0, 5).join(" • ")}</p>`;
  } else {
    wordsAnswersDiv.innerHTML = "<p>—</p>";
  }
}

// --- 12. SELEÇÃO TEMÁTICA INTELIGENTE DE IMAGENS ---
function pickBestThematicImages(text) {
  const lower = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 1. Salmo 119:105 / Lâmpada e Luz nos Passos / Bíblia Guia
  if (lower.includes("lampada") || lower.includes("lamp") || lower.includes("lampe") || lower.includes("lampara") || 
      lower.includes("salmo 119") || lower.includes("psalm 119") || lower.includes("psaume 119") || 
      lower.includes("meus pes") || lower.includes("meu caminho") || lower.includes("lanterna") || lower.includes("lantern") ||
      lower.includes("palavra e luz") || lower.includes("luz para") || lower.includes("guia")) {
    return {
      color: "assets/images/lampada_pixar.jpg",
      coloring: "assets/images/lampada_coloring.jpg",
      desc: "A Palavra de Deus como lâmpada brilhante iluminando os passos das crianças no caminho da vida."
    };
  }

  // 2. Salmo 91 / Proteção Divina / Anjos da Guarda / Asas do Altíssimo / Refúgio
  if (lower.includes("salmo 91") || lower.includes("psalm 91") || lower.includes("psaume 91") || 
      lower.includes("esconderijo") || lower.includes("altissimo") || lower.includes("anjo") || lower.includes("angel") || 
      lower.includes("asas") || lower.includes("wings") || lower.includes("refugio") || lower.includes("refuge") || 
      lower.includes("fortaleza") || lower.includes("dormir") || lower.includes("sono") || lower.includes("protecao") || lower.includes("protection")) {
    return {
      color: "assets/images/salmo91_pixar.jpg",
      coloring: "assets/images/salmo91_coloring.jpg",
      desc: "O descanso seguro sob as asas luminosas de Deus e a proteção amorosa dos Seus santos anjos."
    };
  }

  // 3. Filipenses 4:13 / Superação / Coragem Cristã / Vitória / Tudo Posso
  if (lower.includes("filipenses 4") || lower.includes("philippians 4") || lower.includes("philippiens 4") || 
      lower.includes("tudo posso") || lower.includes("posso tudo") || lower.includes("fortalece") || lower.includes("strengthen") || 
      lower.includes("can do all") || lower.includes("todo lo puedo") || lower.includes("je puis tout") ||
      lower.includes("superacao") || lower.includes("topo") || lower.includes("montanha") || lower.includes("conseguir")) {
    return {
      color: "assets/images/filipenses_pixar.jpg",
      coloring: "assets/images/filipenses_coloring.jpg",
      desc: "A coragem e a força vitoriosa com Jesus ao nosso lado para vencer qualquer desafio."
    };
  }

  // 4. João 3:16 / Amor Infinito / Crianças de Todas as Nações / Graça
  if (lower.includes("joao 3") || lower.includes("john 3") || lower.includes("juan 3") || lower.includes("jean 3") || 
      lower.includes("amou o mundo") || lower.includes("loved the world") || lower.includes("amo al mundo") || lower.includes("tant aime") || 
      lower.includes("deu o seu filho") || lower.includes("gave his only") || lower.includes("vida eterna") || lower.includes("eternal life")) {
    return {
      color: "assets/images/joao316_pixar.jpg",
      coloring: "assets/images/joao316_coloring.jpg",
      desc: "Jesus acolhendo as crianças com ternura e a luz infinita do amor de Deus para o mundo."
    };
  }

  // 5. O Bom Pastor / Ovelhinhas / Salmo 23
  if (lower.includes("pastor") || lower.includes("ovelh") || lower.includes("shepherd") || lower.includes("sheep") || 
      lower.includes("berger") || lower.includes("salmo 23") || lower.includes("psalm 23") || lower.includes("psaume 23") ||
      lower.includes("nada me faltara") || lower.includes("pasto") || lower.includes("aguas tranquilas")) {
    return {
      color: "assets/images/shepherd_pixar.jpg",
      coloring: "assets/images/shepherd_coloring.jpg",
      desc: "O Bom Pastor cuidando carinhosamente de cada ovelhinha em pastos verdejantes."
    };
  }

  // 6. Jesus e as Crianças / Acolhimento Infantil / Família
  if (lower.includes("crianc") || lower.includes("child") || lower.includes("nino") || lower.includes("enfant") || 
      lower.includes("pequen") || lower.includes("bebe") || lower.includes("familia") || lower.includes("mateus 19")) {
    return {
      color: "assets/images/children_pixar.jpg",
      coloring: "assets/images/children_coloring.jpg",
      desc: "Jesus acolhendo e abençoando as crianças com ternura e amor eterno."
    };
  }

  // 7. Davi e Golias / Gigante / Funda / Batalha
  if (lower.includes("davi") || lower.includes("david") || lower.includes("golias") || lower.includes("goliath") || 
      lower.includes("gigante") || lower.includes("funda") || lower.includes("pedrinha") || lower.includes("1 samuel 17")) {
    return {
      color: "assets/images/david_pixar.jpg",
      coloring: "assets/images/david_coloring.jpg",
      desc: "Davi com fé e coragem confiando no Deus Todo-Poderoso para vencer o gigante."
    };
  }

  // 8. Daniel na Cova dos Leões / Oração / Fidelidade
  if (lower.includes("oracao") || lower.includes("orar") || lower.includes("pray") || lower.includes("leao") || 
      lower.includes("lion") || lower.includes("fiel") || lower.includes("daniel")) {
    return {
      color: "assets/images/daniel_pixar.jpg",
      coloring: "assets/images/daniel_coloring.jpg",
      desc: "A oração sincera a Deus e o livramento divino diante das dificuldades."
    };
  }

  // 9. A Criação do Mundo / Natureza / Universo / Gênesis 1
  if (lower.includes("sol") || lower.includes("lua") || lower.includes("estrela") || lower.includes("terra") || 
      lower.includes("ceu") || lower.includes("mundo") || lower.includes("world") || 
      lower.includes("natureza") || lower.includes("criacao") || lower.includes("genesis 1")) {
    return {
      color: "assets/images/creation_pixar.jpg",
      coloring: "assets/images/creation_coloring.jpg",
      desc: "A beleza da criação divina e a glória de Deus iluminando todo o universo."
    };
  }

  // 10. O Bom Samaritano / Ajuda ao Próximo / Compaixão
  if (lower.includes("ajudar") || lower.includes("proximo") || lower.includes("neighbor") || lower.includes("compaixao") || 
      lower.includes("amigo") || lower.includes("friend") || lower.includes("bondade") || lower.includes("samaritano")) {
    return {
      color: "assets/images/samaritan_pixar.jpg",
      coloring: "assets/images/samaritan_coloring.jpg",
      desc: "O amor ao próximo demonstrado em atitudes reais de misericórdia e ajuda."
    };
  }

  // 11. Ressurreição / O Túmulo Vazio / Esperança
  if (lower.includes("vida") || lower.includes("ressuscit") || lower.includes("risen") || lower.includes("vivo") || 
      lower.includes("alive") || lower.includes("tumulo") || lower.includes("esperanca") || lower.includes("hope") || lower.includes("pascoa")) {
    return {
      color: "assets/images/tomb_pixar.jpg",
      coloring: "assets/images/tomb_coloring.jpg",
      desc: "A vitória da ressurreição e a alegria da vida que nunca tem fim em Cristo."
    };
  }

  // 12. Multiplicação dos Pães e Peixes / Generosidade
  if (lower.includes("pao") || lower.includes("peixe") || lower.includes("fome") || lower.includes("comida") || 
      lower.includes("multiplic") || lower.includes("cesto") || lower.includes("lanche") || lower.includes("partilhar") || lower.includes("joao 6")) {
    return {
      color: "assets/images/loaves_pixar.jpg",
      coloring: "assets/images/loaves_coloring.jpg",
      desc: "Jesus abençoando o lanche para multiplicar e alimentar com abundância."
    };
  }

  // 13. A Arca de Noé / Dilúvio / Animais / Aliança
  if (lower.includes("arca") || lower.includes("chuva") || lower.includes("arco-iris") || lower.includes("diluvio") || 
      lower.includes("noe") || lower.includes("noah") || lower.includes("bichos") || lower.includes("alianca")) {
    return {
      color: "assets/images/noah_pixar.jpg",
      coloring: "assets/images/noah_coloring.jpg",
      desc: "A arca de Noé, os animais e o arco-íris da fidelidade de Deus."
    };
  }

  // 14. Moisés e o Mar Vermelho / Libertação
  if (lower.includes("mar") || lower.includes("aguas") || lower.includes("cajado") || lower.includes("moises") || 
      lower.includes("moses") || lower.includes("libertacao")) {
    return {
      color: "assets/images/moses_pixar.jpg",
      coloring: "assets/images/moses_coloring.jpg",
      desc: "Moisés abrindo o mar com poder e o livramento milagroso do povo de Deus."
    };
  }

  // 15. Jonas e o Grande Peixe
  if (lower.includes("jonas") || lower.includes("jonah") || lower.includes("baleia")) {
    return {
      color: "assets/images/jonah_pixar.jpg",
      coloring: "assets/images/jonah_coloring.jpg",
      desc: "Jonas e o grande peixe, ensinando sobre a obediência e o amor perdoador de Deus."
    };
  }

  // 16. Fallback padrão: O Amor na Cruz e o Perdão
  return {
    color: "assets/images/cross_pixar.jpg",
    coloring: "assets/images/cross_coloring.jpg",
    desc: "A mensagem bíblica e a verdade do amor de Deus para o nosso coração."
  };
}

// --- 13. GERAÇÃO INTELIGENTE POR VERSÍCULO OU TEXTO ESCRITO ---
function handleGenerate() {
  const statusBadge = document.getElementById("status-badge");
  statusBadge.textContent = I18N_STRINGS[currentLang].status_generating;

  const passVal = document.getElementById("passage-input").value.trim();
  const textVal = document.getElementById("verse-text-input").value.trim();

  let inputVal = "";
  if (currentInputMode === "text" && textVal) {
    inputVal = textVal;
  } else if (currentInputMode === "ref" && passVal) {
    inputVal = passVal;
  } else {
    inputVal = textVal || passVal;
  }

  if (!inputVal) {
    showToastNotification("Por favor, digite uma referência ou cole o texto do versículo!");
    statusBadge.textContent = I18N_STRINGS[currentLang].status_ready;
    return;
  }

  const p = (passVal + " " + textVal).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 1. Checagem de versículos ultra famosos
  if (p.includes("salmo 119") || p.includes("psalm 119") || p.includes("psaume 119") || 
      p.includes("lampada") || p.includes("lamp") || p.includes("lampe") || p.includes("lampara") || 
      p.includes("luz para o meu caminho") || p.includes("light unto my path") || p.includes("lumbrera a mi camino") || p.includes("lumiere sur mon sentier")) {
    loadStoryDirect("lampada");
    return;
  }

  if (p.includes("salmo 91") || p.includes("psalm 91") || p.includes("psaume 91") || 
      p.includes("esconderijo do altissimo") || p.includes("shelter of the most high") || p.includes("abrigo del altisimo") || p.includes("abri du tres-haut")) {
    loadStoryDirect("salmo91");
    return;
  }

  if (p.includes("filipenses 4:13") || p.includes("philippians 4:13") || p.includes("philippiens 4:13") || 
      p.includes("tudo posso") || p.includes("i can do all") || p.includes("todo lo puedo") || p.includes("je puis tout")) {
    loadStoryDirect("filipenses413");
    return;
  }

  if (p.includes("joao 3:16") || p.includes("john 3:16") || p.includes("juan 3:16") || p.includes("jean 3:16") || 
      p.includes("deus amou o mundo") || p.includes("god so loved") || p.includes("amo dios al mundo") || p.includes("dieu a tant aime")) {
    loadStoryDirect("joao316");
    return;
  }

  // 2. Mapeamento inteligente para os 12 temas clássicos
  if (p.includes("mateus 19") || p.includes("matthew 19") || p.includes("mateo 19") || p.includes("matthieu 19") || 
      p.includes("deixai vir a mim") || p.includes("let the little children") || p.includes("dejad a los ninos")) {
    loadStoryDirect("criancas");
    return;
  }
  if (p.includes("lucas 23") || p.includes("luke 23") || p.includes("luc 23") || 
      p.includes("cruz") || p.includes("calvario") || p.includes("perdoa-lhes") || p.includes("forgive them") || p.includes("pardonne")) {
    loadStoryDirect("cruz");
    return;
  }
  if (p.includes("mateus 28") || p.includes("matthew 28") || p.includes("mateo 28") || p.includes("matthieu 28") || 
      p.includes("ressuscit") || p.includes("risen") || p.includes("resucit") || p.includes("tumulo vazio") || p.includes("empty tomb")) {
    loadStoryDirect("tumulo");
    return;
  }
  if (p.includes("salmo 23") || p.includes("psalm 23") || p.includes("psaume 23") || 
      p.includes("nada me faltara") || p.includes("lack nothing") || p.includes("nada me faltara") || p.includes("ne manquerai de rien")) {
    loadStoryDirect("pastor");
    return;
  }
  if (p.includes("genesis 6") || p.includes("genese 6") || p.includes("diluvio") || p.includes("arca de noe") || p.includes("noah's ark")) {
    loadStoryDirect("noe");
    return;
  }
  if (p.includes("1 samuel 17") || p.includes("davi e golias") || p.includes("david and goliath") || p.includes("david y goliat")) {
    loadStoryDirect("davi");
    return;
  }
  if (p.includes("daniel 6") || p.includes("cova dos leoes") || p.includes("lions' den") || p.includes("foso de los leones") || p.includes("fosse aux lions")) {
    loadStoryDirect("daniel");
    return;
  }
  if (p.includes("jonas") || p.includes("jonah") || p.includes("grande peixe") || p.includes("great fish") || p.includes("grand poisson")) {
    loadStoryDirect("jonas");
    return;
  }
  if (p.includes("exodo 14") || p.includes("exodus 14") || p.includes("exode 14") || p.includes("mar vermelho") || p.includes("red sea") || p.includes("mar rojo") || p.includes("mer rouge")) {
    loadStoryDirect("moises");
    return;
  }
  if (p.includes("lucas 10") || p.includes("luke 10") || p.includes("luc 10") || p.includes("bom samaritano") || p.includes("good samaritan") || p.includes("buen samaritano") || p.includes("bon samaritain")) {
    loadStoryDirect("samaritano");
    return;
  }
  if (p.includes("genesis 1") || p.includes("genese 1") || p.includes("no principio criou") || p.includes("in the beginning god created") || p.includes("en el principio creo") || p.includes("au commencement dieu")) {
    loadStoryDirect("criacao");
    return;
  }
  if (p.includes("joao 6") || p.includes("john 6") || p.includes("juan 6") || p.includes("jean 6") || p.includes("multiplicacao dos paes") || p.includes("feeding of")) {
    loadStoryDirect("joao6");
    return;
  }

  // 3. Criação de aula personalizada para versículo inédito
  generateCustomBibleLesson(passVal, textVal);
}

function loadStoryDirect(storyKey) {
  clearPresetButtonsActive();
  const btns = document.querySelectorAll(".preset-btn");
  btns.forEach(b => {
    if (b.dataset.story === storyKey) b.classList.add("active");
  });
  loadStory(storyKey);
  const loc = getLocalizedStory(STORIES_DB[storyKey]);
  showToastNotification(`Aula carregada com sucesso: ${loc.title}`);
  scrollToWorksheet();
}

function scrollToWorksheet() {
  const ws = document.getElementById("worksheet-content");
  if (ws) {
    ws.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Criação dinâmica para versículos personalizados inéditos
function generateCustomBibleLesson(passVal, textVal) {
  clearPresetButtonsActive();

  let refStr = "";
  let verseText = "";

  if (passVal && textVal) {
    refStr = passVal;
    verseText = textVal;
  } else if (passVal && !textVal) {
    refStr = passVal;
    verseText = passVal;
  } else {
    verseText = textVal || passVal || "Palavra de Deus";
    const refRegex = /(?:[1-3]\s*)?[a-zA-ZáéíóúâêîôûãõçÁÉÍÓÚÂÊÎÔÛÃÕÇ]+\s*\d+(?:\s*:\s*\d+(?:-\d+)?)?/i;
    const matchRef = verseText.match(refRegex);
    if (matchRef && matchRef[0].length >= 3) {
      refStr = matchRef[0].trim();
    } else {
      refStr = (currentLang === "en") ? "Holy Bible" : (currentLang === "es") ? "Santa Biblia" : (currentLang === "fr") ? "Sainte Bible" : "Bíblia Sagrada";
    }
  }

  let titleStr = "";
  if (refStr && !["Holy Bible", "Santa Biblia", "Sainte Bible", "Bíblia Sagrada"].includes(refStr)) {
    titleStr = (currentLang === "en") ? `Bible Lesson: ${refStr}` :
               (currentLang === "es") ? `Lección Bíblica: ${refStr}` :
               (currentLang === "fr") ? `Leçon Biblique : ${refStr}` :
               `Lição Bíblica: ${refStr}`;
  } else {
    const wordsPreview = verseText.split(/\s+/).slice(0, 6).join(" ");
    titleStr = `"${wordsPreview}..."`;
  }

  // Selecionar o par de imagens ideal (colorido + contorno P&B) baseado no tema do texto e referência combinados
  const queryToMatch = (refStr + " " + verseText).trim();
  const visualTheme = pickBestThematicImages(queryToMatch);

  // Extrair 5 palavras reais do próprio texto digitado pelo usuário (com 4 a 10 letras)
  const rawWords = queryToMatch.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z\s]/g, " ").split(/\s+/);
  const filteredWords = rawWords.filter(w => w.length >= 4 && w.length <= 10 && !["PARA", "COMO", "QUE", "QUAL", "ONDE", "QUEM", "ESSE", "ESTA", "DEUS", "MAIS"].includes(w));
  const uniqueWords = [...new Set(filteredWords)];
  
  const defaultKeywords = (currentLang === "en") ? ["FAITH", "PEACE", "TRUTH", "LIGHT", "LOVE"] :
                          (currentLang === "es") ? ["AMOR", "VIDA", "PAZ", "GRACIA", "JESUS"] :
                          (currentLang === "fr") ? ["AMOUR", "PAIX", "VIE", "GRACE", "JESUS"] :
                          ["JESUS", "AMOR", "VIDA", "PAZ", "GRACA"];
  
  const extractedWords = (uniqueWords.length >= 3) ? [...uniqueWords.slice(0, 5), ...defaultKeywords].slice(0, 5) : defaultKeywords;

  const localizedStory = {
    title: titleStr,
    ref: refStr,
    imageColorDesc: visualTheme.desc,
    imageColoringDesc: (currentLang === "en") ? `Pure black and white line art coloring page based on: ${refStr}.` :
                       (currentLang === "es") ? `Dibujo para colorear en blanco y negro puro basado en: ${refStr}.` :
                       (currentLang === "fr") ? `Coloriage en noir et blanc pur inspiré de : ${refStr}.` :
                       `Desenho para colorir em contorno preto e branco puro baseado em: ${refStr}.`,
    verse: {
      text: verseText,
      ref: refStr
    },
    storyByAge: {
      "3-5": (currentLang === "en") ? `Did you know God has a special message for you today? In His Word, God tells us: "${verseText}". This means that Jesus loves us with all His heart, watches over our steps, and fills our life with happiness!` :
             (currentLang === "es") ? `¿Sabías que Dios tiene un mensaje hermoso para ti hoy? En Su Palabra nos dice: "${verseText}". ¡Esto significa que Jesús nos ama muchísimo, cuida de nosotros y llena nuestro corazón de paz y alegría!` :
             (currentLang === "fr") ? `Sais-tu que Dieu a un message précieux pour toi aujourd'hui ? Dans Sa Parole, Il nous dit : "${verseText}". Cela signifie que Jésus t'aime de tout Son cœur et veille sur toi avec une immense tendresse !` :
             `Vocês sabiam que a Bíblia tem uma mensagem linda para o nosso coraçãozinho hoje? Ela diz assim: "${verseText}". Isso nos ensina que o Papai do Céu cuida de nós todos os dias, nos abraça com amor e nos ajuda a sermos crianças boas, alegres e obedientes!`,

      "6-8": (currentLang === "en") ? `In today's lesson, we discover a precious biblical teaching: "${verseText}". When we listen to God's voice and trust Him, His Word guides our decisions at home and at school. God promises to be our faithful guide every single day!` :
             (currentLang === "es") ? `En la lección de hoy aprendemos una verdad muy importante de la Biblia: "${verseText}". Cuando escuchamos la voz de Dios y confiamos en Él, Su Palabra ilumina nuestro camino, enseñándonos a amar y actuar con rectitud.` :
             (currentLang === "fr") ? `Dans la leçon d'aujourd'hui, nous découvrons une précieuse vérité biblique : "${verseText}". Lorsque nous écoutons la voix de Dieu et Lui faisons confiance, Sa Parole éclaire notre route et nous apprend à faire le bien.` :
             `Na nossa lição de hoje, aprendemos um ensinamento poderoso da Bíblia Sagrada: "${verseText}". Quando guardamos essas palavras de Deus em nossa mente e em nosso coração, aprendemos a fazer o que é certo, a ter paz e a confiar que o Senhor cuida de nós em todas as situações!`,

      "9-12": (currentLang === "en") ? `The biblical passage of ${refStr} challenges us to live with Christian faith and dedication. Scripture declares: "${verseText}". Living according to God's Word transforms our character, guiding us to be beacons of hope, integrity, and love in our world.` :
              (currentLang === "es") ? `El pasaje bíblico de ${refStr} nos desafía a vivir una fe activa y valiente. Las Sagradas Escrituras afirman: "${verseText}". Esta verdad fortalece nuestro espíritu, llamándonos a ser luz y bendición en el hogar y en la escuela.` :
              (currentLang === "fr") ? `Le passage biblique de ${refStr} nous appelle à vivre une foi engagée. L'Écriture proclame : "${verseText}". Cette vérité divine nourrit notre âme et nous inspire à refléter la justice et l'amour de Dieu dans notre quotidien.` :
              `O texto bíblico de ${refStr} nos desafia a aprofundar nossa vida com Deus. A Palavra declara: "${verseText}". Esse ensinamento sagrado molda nosso caráter, nos dá sabedoria e nos convida a ser testemunhas fiéis do amor, da justiça e da verdade de Cristo onde quer que estejamos.`
    },
    application: {
      home: (currentLang === "en") ? "Practice this biblical teaching at home by honoring mom and dad and helping with a cheerful heart." :
            (currentLang === "es") ? "Practicar esta enseñanza en casa honrando a mis padres y ayudando con alegría." :
            (currentLang === "fr") ? "Pratiquer cet enseignement à la maison en obéissant à mes parents avec le sourire." :
            "Praticar esse ensinamento em casa ajudando meus pais com um sorriso e tratando meus irmãos com carinho.",
      school: (currentLang === "en") ? "Be a kind, truthful, and helpful friend in the classroom and playground." :
              (currentLang === "es") ? "Ser un amigo bondadoso y sincero en la escuela, compartiendo con los demás." :
              (currentLang === "fr") ? "Être un camarade bienveillant et honnête à l'école, prêt à aider ceux qui en ont besoin." :
              "Ser um amigo leal, respeitoso e verdadeiro na escola, ajudando quem estiver triste ou com dificuldades.",
      heart: (currentLang === "en") ? "Store this scripture in my memory and trust God's promises with full peace." :
             (currentLang === "es") ? "Guardar este versículo en mi corazón y confiar plenamente en las promesas de Dios." :
             (currentLang === "fr") ? "Garder ce verset dans mon cœur et m'appuyer sur les promesses divines." :
             "Guardar esse versículo sagrado no coração e orar todos os dias com gratidão e fé."
    },
    prayer: (currentLang === "en") ? "Dear Lord, thank You for Your precious Word. Help me to remember this verse and live it out every day with joy. In Jesus' name, Amen!" :
            (currentLang === "es") ? "Señor Dios, gracias por Tu preciosa Palabra. Ayúdame a recordar este versículo y a vivirlo cada día con amor. ¡Amén!" :
            (currentLang === "fr") ? "Seigneur Dieu, merci pour Ta précieuse Parole. Aide-moi à garder ce verset dans mon cœur et à le vivre avec joie. Amen !" :
            "Senhor meu Deus, obrigado por Tua preciosa Palavra. Guarda este versículo no meu coraçãozinho e ensina-me a viver a Tua verdade todos os dias com alegria. Em nome de Jesus, Amém!",
    words: extractedWords,
    quiz: [
      {
        question: (currentLang === "en") ? `What does God teach us through the message of ${refStr}?` :
                  (currentLang === "es") ? `¿Qué nos enseña Dios a través del mensaje de ${refStr}?` :
                  (currentLang === "fr") ? `Que nous enseigne Dieu à travers le message de ${refStr} ?` :
                  `O que Deus nos ensina através da mensagem de ${refStr}?`,
        options: (currentLang === "en") ? ["To trust Him and live in love", "To worry all the time", "To be selfish"] :
                 (currentLang === "es") ? ["A confiar en Dios y amar al prójimo", "A vivir con miedo", "A ser egoísta"] :
                 (currentLang === "fr") ? ["À faire confiance à Dieu et à aimer", "À vivre dans la peur", "À être égoïste"] :
                 ["A confiar no Senhor e viver em amor", "A ter medo e reclamar", "A ser egoísta"],
        answerIndex: 0
      },
      {
        question: (currentLang === "en") ? "Where should we store God's Word?" :
                  (currentLang === "es") ? "¿Dónde debemos guardar la Palabra de Dios?" :
                  (currentLang === "fr") ? "Où devons-nous garder la Parole de Dieu ?" :
                  "Onde devemos guardar a mensagem de Deus?",
        options: (currentLang === "en") ? ["Only on paper", "In our heart and daily actions", "Forget it quickly"] :
                 (currentLang === "es") ? ["Solo en un libro", "En el corazón y en las acciones", "Olvidarlo pronto"] :
                 (currentLang === "fr") ? ["Uniquement sur papier", "Dans notre cœur et nos actions", "L'oublier vite"] :
                 ["Apenas no papel", "No coração e em nossas atitudes diárias", "Esquecer logo"],
        answerIndex: 1
      },
      {
        question: (currentLang === "en") ? "How can we apply this scripture in our lives?" :
                  (currentLang === "es") ? "¿Cómo podemos aplicar este versículo en nuestra vida?" :
                  (currentLang === "fr") ? "Comment appliquer ce verset dans notre vie ?" :
                  "Como podemos praticar esse versículo em nossa vida?",
        options: (currentLang === "en") ? ["With kindness, honesty and prayer", "Ignoring others", "Never sharing"] :
                 (currentLang === "es") ? ["Con bondad, honestidad y oración", "Ignorando a los demás", "Sin ayudar"] :
                 (currentLang === "fr") ? ["Avec bonté, honnêteté et prière", "En ignorant les autres", "Sans partager"] :
                 ["Com bondade, oração e atitudes de amor", "Ignorando os amigos", "Sendo desobediente"],
        answerIndex: 0
      }
    ],
    challenge: (currentLang === "en") ? `This week I will read ${refStr} with my family and practice its message of love and faith!` :
               (currentLang === "es") ? `¡Esta semana leeré ${refStr} con mi familia y pondré en práctica su mensaje de fe y amor!` :
               (currentLang === "fr") ? `Cette semaine, je lirai ${refStr} en famille et je mettrai en pratique son message d'amour !` :
               `Esta semana vou ler ${refStr} com minha família e colocar essa mensagem bíblica em prática com uma boa ação!`
  };

  const customObj = {
    id: "custom_" + Date.now(),
    icon: "📖✨",
    imageColor: visualTheme.color,
    imageColoring: visualTheme.coloring,
    pt: localizedStory,
    en: localizedStory,
    es: localizedStory,
    fr: localizedStory
  };

  currentStoryKey = customObj.id;
  currentStoryObj = customObj;
  renderCurrentStory();

  showToastNotification(`✨ Aula bíblica criada com sucesso: ${titleStr}!`);
  scrollToWorksheet();
}

// --- 14. ESTÚDIO DE IMAGENS & GERADOR DE IA (3D PIXAR & COLORIR) ---
function buildMasterImagePrompt(passage, ageGroup) {
  const ageLabels = {
    "3-5": "toddlers and early childhood (ages 3 to 5)",
    "6-8": "children (ages 6 to 8, primary school)",
    "9-12": "juniors and pre-teens (ages 9 to 12)"
  };
  const ageStr = ageLabels[ageGroup] || "children";

  return `Cute 3D Pixar Disney style animation illustration of the biblical story: ${passage}. Warm golden sunlight, soft expressive eyes, friendly characters, vibrant uplifting colors, gentle rounded shapes, detailed biblical landscape, volumetric lighting, family friendly Christian storybook art for ${ageStr}, 4k ultra HD render, highly detailed, no text, no letters, no watermark.`;
}

function buildColoringImagePrompt(passage, ageGroup) {
  return `Coloring book page for children, pure black and white line art of biblical scene: ${passage}. Bold clean black outlines, solid white background (#FFFFFF), zero shading, zero grayscale, zero colors, no gradients, wide open spaces for coloring with crayons and colored pencils, crisp line drawing for kids, no text, no watermark.`;
}

function generatePixarImageAI(forceRegen) {
  const loading = document.getElementById("loading-pixar");
  const img = document.getElementById("story-image-color");
  loading.classList.remove("hidden");

  if (forceRegen) currentSeed = Math.floor(Math.random() * 999999);

  const loc = getLocalizedStory(currentStoryObj);
  const prompt = buildMasterImagePrompt(loc.ref || loc.title, currentAge);
  const aiUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=768&nologo=true&seed=${currentSeed}`;

  const testImg = new Image();
  testImg.onload = () => {
    img.src = aiUrl;
    currentStoryObj.imageColor = aiUrl;
    loading.classList.add("hidden");
    showToastNotification("🎨 Nova ilustração 3D Pixar gerada com sucesso!");
  };
  testImg.onerror = () => {
    loading.classList.add("hidden");
    showToastNotification("💡 Imagem temática pronta mantida. Use 'Copiar Prompt' para gerar no Midjourney/DALL-E ou faça Upload da sua imagem.");
  };
  testImg.src = aiUrl;
}

function generateColoringImageAI(forceRegen) {
  const loading = document.getElementById("loading-coloring");
  const img = document.getElementById("coloring-image");
  loading.classList.remove("hidden");

  if (forceRegen) currentSeed = Math.floor(Math.random() * 999999) + 1;

  const loc = getLocalizedStory(currentStoryObj);
  const prompt = buildColoringImagePrompt(loc.ref || loc.title, currentAge);
  const aiUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=768&height=1024&nologo=true&seed=${currentSeed}`;

  const testImg = new Image();
  testImg.onload = () => {
    img.src = aiUrl;
    currentStoryObj.imageColoring = aiUrl;
    loading.classList.add("hidden");
    showToastNotification("🖍️ Novo desenho para colorir gerado com sucesso!");
  };
  testImg.onerror = () => {
    loading.classList.add("hidden");
    showToastNotification("💡 Desenho temático pronto mantido. Use 'Copiar Prompt' ou faça Upload de um desenho do seu computador.");
  };
  testImg.src = aiUrl;
}

function handleLocalFileUpload(type, file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    if (type === "pixar") {
      document.getElementById("story-image-color").src = dataUrl;
      currentStoryObj.imageColor = dataUrl;
      showToastNotification("📁 Sua imagem foi carregada com sucesso na aula!");
    } else {
      document.getElementById("coloring-image").src = dataUrl;
      currentStoryObj.imageColoring = dataUrl;
      showToastNotification("📁 Seu desenho de colorir foi carregado com sucesso!");
    }
  };
  reader.readAsDataURL(file);
}

function enhanceLineArtCanvas() {
  const img = document.getElementById("coloring-image");
  if (!img.src) return;

  const canvas = document.getElementById("hidden-process-canvas");
  const ctx = canvas.getContext("2d");

  const tempImg = new Image();
  tempImg.crossOrigin = "anonymous";
  tempImg.onload = () => {
    canvas.width = tempImg.naturalWidth || 800;
    canvas.height = tempImg.naturalHeight || 1000;
    ctx.drawImage(tempImg, 0, 0);

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        const val = gray < 195 ? 0 : 255;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
      }
      ctx.putImageData(imgData, 0, 0);
      const convertedUrl = canvas.toDataURL("image/png");
      img.src = convertedUrl;
      currentStoryObj.imageColoring = convertedUrl;
      showToastNotification("🖌️ Contornos e traços pretos acentuados com sucesso!");
    } catch (e) {
      console.warn("Canvas cross-origin filter warning", e);
      showToastNotification("O desenho já está pronto com alto contraste.");
    }
  };
  tempImg.src = img.src;
}

function downloadImage(type) {
  const img = (type === "pixar") ? document.getElementById("story-image-color") : document.getElementById("coloring-image");
  const a = document.createElement("a");
  a.href = img.src;
  a.download = `biblekids_${type}_${currentStoryKey}.jpg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToastNotification("⬇️ Download da imagem iniciado!");
}

function copyToClipboard(text, btn, successMessage) {
  const origText = btn.textContent;
  const finish = () => {
    btn.textContent = successMessage;
    btn.classList.add("copied");
    showToastNotification("📋 Prompt profissional copiado para a área de transferência!");
    setTimeout(() => {
      btn.textContent = origText;
      btn.classList.remove("copied");
    }, 2500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(finish).catch(() => {
      fallbackCopy(text);
      finish();
    });
  } else {
    fallbackCopy(text);
    finish();
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

// --- 15. NARRAÇÃO EM ÁUDIO (TEXT-TO-SPEECH MULTILÍNGUE) ---
function toggleSpeech() {
  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não suporta narração por voz.");
    return;
  }

  const btn = document.getElementById("btn-speech");
  const txtSpan = document.getElementById("txt-btn-speech");

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    btn.classList.remove("speaking");
    txtSpan.textContent = I18N_STRINGS[currentLang].btn_speech;
    return;
  }

  const loc = getLocalizedStory(currentStoryObj);
  const storyText = (loc.storyByAge && loc.storyByAge[currentAge]) ? loc.storyByAge[currentAge] : "";
  const textToRead = `${loc.title}. ${storyText}. ${loc.verse.text}`;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = (currentLang === "pt") ? "pt-BR" : (currentLang === "es") ? "es-ES" : (currentLang === "fr") ? "fr-FR" : "en-US";
  utterance.rate = 0.92;

  utterance.onend = () => {
    isSpeaking = false;
    btn.classList.remove("speaking");
    txtSpan.textContent = I18N_STRINGS[currentLang].btn_speech;
  };
  utterance.onerror = () => {
    isSpeaking = false;
    btn.classList.remove("speaking");
    txtSpan.textContent = I18N_STRINGS[currentLang].btn_speech;
  };

  window.speechSynthesis.speak(utterance);
  isSpeaking = true;
  btn.classList.add("speaking");
  txtSpan.textContent = I18N_STRINGS[currentLang].btn_speech_stop;
}

// --- 16. EXPORTAÇÃO EM PDF A4 LOCAL ---
function exportPDF() {
  const element = document.getElementById("worksheet-content");
  const opt = {
    margin: [8, 8, 8, 8],
    filename: `biblekids_${currentLang}_${currentStoryKey}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  if (window.html2pdf) {
    html2pdf().set(opt).from(element).save();
    showToastNotification("📄 Gerando PDF da aula para impressão A4...");
  } else {
    window.print();
  }
}

// --- 17. EXPORTAÇÃO EM MICROSOFT WORD (.DOCX) LOCAL ---
function exportDOCX() {
  const loc = getLocalizedStory(currentStoryObj);
  try {
    if (window.docx) {
      const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = window.docx;

      const doc = new Document({
        sections: [{
          properties: {},
          children: [
            new Paragraph({
              text: `BibleKids - ${loc.title}`,
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER
            }),
            new Paragraph({
              text: `${loc.ref} | ${currentAge} ${I18N_STRINGS[currentLang].years_label}`,
              alignment: AlignmentType.CENTER
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              text: I18N_STRINGS[currentLang].sec1_title,
              heading: HeadingLevel.HEADING_1
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: (loc.storyByAge && loc.storyByAge[currentAge]) ? loc.storyByAge[currentAge] : ""
                })
              ]
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              text: `${I18N_STRINGS[currentLang].label_memory_verse} "${loc.verse.text}" (${loc.verse.ref})`,
              children: [new TextRun({ bold: true })]
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              text: I18N_STRINGS[currentLang].sec4_title,
              heading: HeadingLevel.HEADING_1
            }),
            new Paragraph({ text: `• ${I18N_STRINGS[currentLang].app_home_title}: ${loc.application.home}` }),
            new Paragraph({ text: `• ${I18N_STRINGS[currentLang].app_school_title}: ${loc.application.school}` }),
            new Paragraph({ text: `• ${I18N_STRINGS[currentLang].app_heart_title}: ${loc.application.heart}` }),
            new Paragraph({ text: "" }),
            new Paragraph({
              text: `${I18N_STRINGS[currentLang].label_prayer} "${loc.prayer}"`,
              children: [new TextRun({ italics: true })]
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
              text: I18N_STRINGS[currentLang].sec5_title,
              heading: HeadingLevel.HEADING_1
            }),
            new Paragraph({ text: `${I18N_STRINGS[currentLang].label_words_to_find} ${(loc.words || []).slice(0, 5).join(", ")}` }),
            new Paragraph({ text: "" }),
            new Paragraph({
              text: `${I18N_STRINGS[currentLang].sec7_title}: "${loc.challenge}"`,
              heading: HeadingLevel.HEADING_1
            })
          ]
        }]
      });

      Packer.toBlob(doc).then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `biblekids_${currentLang}_${currentStoryKey}.docx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToastNotification("📝 Download do arquivo Word (.docx) concluído!");
      });
      return;
    }
  } catch (e) {
    console.warn("docx export error, falling back to word html", e);
  }

  const content = document.getElementById("worksheet-content").innerHTML;
  const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>BibleKids</title></head><body>";
  const footer = "</body></html>";
  const sourceHTML = header + content + footer;

  const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  const fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = `biblekids_${currentLang}_${currentStoryKey}.doc`;
  fileDownload.click();
  document.body.removeChild(fileDownload);
}
