import { writable } from 'svelte/store';

export const messages = writable([
    {value : "Hey, salut ! 👋", position : "left", delay : 0},
    {value : "Moi c’est Alexandre Orliaguet", position : "left", delay : 2000},
    {value : "Je suis un étudiant en Master UI/UX à l’ECV Digital Aix-En-Provence", position : "left", delay : 3600},
    {value : "Tu veux en apprendre plus sur moi ? Alors pose-moi une question ! 😊", position : "left", delay : 5000}
]);