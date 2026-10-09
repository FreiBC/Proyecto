$(function () {
  const albumNotes = {
    sound: "Sounding the Seventh Trumpet (2001) fue el debut de la banda y muestra sus raíces metalcore.",
    waking: "Waking the Fallen (2003) ayudó a ampliar su audiencia y se convirtió en uno de sus discos más queridos.",
    city: "City of Evil (2005) marcó un giro hacia el heavy metal y el hard rock, con canciones como “Bat Country”.",
    nightmare: "Nightmare (2010) fue el primer álbum de estudio publicado después de la muerte de The Rev.",
    hail: "Hail to the King (2013) se convirtió en uno de sus álbumes más exitosos y dio nombre a uno de sus himnos.",
    stage: "The Stage (2016) explora el metal progresivo y gira alrededor de preguntas sobre la humanidad y la tecnología.",
    dream: "Life Is But a Dream... (2023) es una de sus obras más experimentales, con influencias de distintos estilos."
  };

  const excuses = {
    nightmare: [
      "Profe, mi tarea entró en modo Nightmare. Estoy negociando su regreso con el coro.",
      "La hice, pero The Rev la está cuidando en otra dimensión. Le mando saludos."
    ],
    bat: [
      "Profe, iba a entregar la tarea, pero me desvié rumbo a Bat Country. El GPS tampoco entendió el riff.",
      "Mi tarea tomó un giro inesperado y ahora está viajando por el desierto. Muy buen álbum, pésima logística."
    ],
    heaven: [
      "Profe, mi tarea tuvo un pequeño Piece of Heaven y se quedó descansando. Yo también, aparentemente.",
      "La tarea estaba lista, pero empezó a contar una historia larguísima. Para el final ya era otro periodo."
    ],
    stage: [
      "Profe, mi tarea está en The Stage: hay luces, hay concepto... todavía no hay archivo adjunto.",
      "La tarea se volvió experimental. Ni yo sé qué género de archivo es, pero prometo encontrarlo."
    ]
  };

  $(".album-card").on("click", function () {
    const albumId = $(this).data("album");
    const note = albumNotes[albumId];
    if (note) {
      $("#album-detail").text(note);
      $(".album-card").attr("aria-pressed", "false");
      $(this).attr("aria-pressed", "true");
    }
  });

  $("#excuse-button").on("click", function () {
    const options = excuses[$("#mood-select").val()];
    const current = $("#excuse-output").text();
    let next = options[Math.floor(Math.random() * options.length)];

    if (options.length > 1 && next === current) {
      next = options[(options.indexOf(next) + 1) % options.length];
    }
    $("#excuse-output").text(`“${next}”`);
  });

  $(".menu-toggle").on("click", function () {
    const isOpen = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", String(!isOpen));
    $("#main-nav").toggleClass("is-open", !isOpen);
  });

  $("#main-nav a").on("click", function () {
    $(".menu-toggle").attr("aria-expanded", "false");
    $("#main-nav").removeClass("is-open");
  });
});
