// utils/bad-words.filter.ts
import { Filter } from "bad-words";

// Crear una instancia del filtro
const customFilter = new Filter();

// Extender el filtro con palabras y frases personalizadas
const additionalBannedWords = [
      "puto",
      "trola",
      "cabrón",
      "tela chupo",
      "chupamela",
      "forro",
      "mierda",
      "caca",
      "culo",
      "pene",
      "verga",
      "pija",
      "chota",
      "hijo de puta",
      "la concha de tu madre",
      "la puta que te parió",
      "me cago en tu madre",
      "me cago en la concha de tu madre",
      "la concha de la lora",
      "la puta madre que te parió",
      "la puta madre que te re parió",
      "tela chupaste",
      "elmas pijudo",
      "elmas capito",
      "elmas capo",
      "elmas capa",
];

customFilter.addWords(...additionalBannedWords);

// Exportar el filtro personalizado
export default customFilter;
