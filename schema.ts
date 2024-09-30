interface Metadata {
  description: string;
  createdDate: string; // not needed when a child of Translation
}

interface Translation {
  title: string;
  metadata: Metadata;
}

interface ID {
  id: string;
  title: string;
  metadata: Metadata;
  translations: {
    [languageCode: string]: Translation;
  };
}

interface Category {
  id: string;
  title: string;
  metadata: Metadata;
  translations: {
    [languageCode: string]: Translation;
  };
  ids: {
    [id: string]: ID;
  };
}

interface Area {
  id: string;
  title: string;
  metadata: Metadata;
  translations?: {
    [languageCode: string]: Translation;
  };
  categories: {
    [id: string]: Category;
  };
}

interface JohnnyDecimalSystem {
  systemId: string; // e.g. A01, ref. https://jdcm.al/13.11
  systemTitle: string; // e.g. "Johnny's personal system"
  areas: {
    [id: string]: Area;
  };
}

const jdSystem: JohnnyDecimalSystem = {
  systemId: "A01",
  systemTitle: "Test",
  areas: {
    "10-19": {
      id: "10-19",
      title: "First area",
      metadata: {
        description: "The first one.",
        createdDate: "2024-09-30T04:20:30",
      },
      categories: {
        "11": {
          id: "11",
          title: "Eleven",
          metadata: {
            description: "It's so great.",
            createdDate: "2024-09-30T04:24:50",
          },
          translations: {
            DE: {
              title: "",
              metadata: {
                description: "Es ist so toll.",
                createdDate: "2024-09-30T06:16:53", // not needed here
              },
            },
          },
          ids: {},
        },
      },
    },
  },
};

const test = jdSystem.areas["10-19"].categories["10"].ids;
