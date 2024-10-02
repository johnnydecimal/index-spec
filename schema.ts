interface Metadata {
  description: string;
  urls?: [string]; // an array of interesting URLs
  createdDate: string; // no harm always requiring it; why not?
  updatedDate: string; // allows us to do diffs
}

interface Translation {
  title: string;
  metadata: Metadata;
}

interface ID {
  id: string;
  title: string;
  emoji?: string;
  // not tags: we _generate_ tags, we don't store them
  isHeader: Boolean;
  metadata: Metadata;
  translations?: {
    [languageCode: string]: Translation;
  };
  extensions?: Extensions;
}

interface Category {
  id: string;
  title: string;
  emoji: string;
  metadata: Metadata;
  ids: {
    [id: string]: ID;
  };
  translations?: {
    [languageCode: string]: Translation;
  };
}

interface Area {
  id: string;
  title: string;
  emoji: string;
  version: string;
  metadata: Metadata;
  categories: {
    [id: string]: Category;
  };
  translations?: {
    [languageCode: string]: Translation;
  };
}

interface Extensions {
  operationsManual?: OperationsManual;
  [key: string]: any; // Allows for future extensibility
}

interface OperationsManual {
  description: string;
  url?: string;
  version: string;
  createdDate: string;
  updatedDate: string;
}

interface JohnnyDecimalSystem {
  systemId: string; // e.g. A01, ref. https://jdcm.al/13.11
  systemTitle: string; // e.g. "Johnny's personal system"
  schemaVersion: string;
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
              title: "Elf",
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

const lifeAdmin: JohnnyDecimalSystem = {
  systemId: "L01",
  systemTitle: "Life admin",
  schemaVersion: "1.0.0",
  areas: {
    "10-19": {
      id: "10-19",
      title: "Life admin",
      emoji: "🧑‍🔧",
      version: "1.1.0",
      metadata: {
        description: "The standard life admin area. v1.1.0.",
        createdDate: "2024-09-30T23:48:06",
        updatedDate: "2024-09-30T23:48:06",
      },
      categories: {
        "11": {
          id: "11",
          title: "Me & other living things",
          emoji: "🙋",
          metadata: {
            createdDate: "2024-09-30T23:46:55",
            updatedDate: "2024-09-30T23:46:55",
            description:
              "{&quot;content&quot;:&quot;\n&gt; This **category** is all about you, and other things that have a beating heart: your family, friends, and pets.\n&gt; \n&gt; &gt; If you have a lot going on in this category you might need to expand your system (see the [website](https://jdcm.al), [workbook](https://jdcm.al/14.02), or [workshop](https://jdcm.al/14.03)).\n&gt; &gt; *e.g. your health situation is complicated, managing your children’s care, schooling, and activities takes a lot of effort.*\n&gt; \n&gt; This is a **heading**. Don’t store anything here. See **02.03** in the manual for more information.\n&quot;}",
          },
          ids: {
            "11.10": {
              id: "11.10",
              title: "Personal records",
              emoji: "🗂️",
              isHeader: true,
              metadata: {
                description:
                  "> The boring documentation that you need in order to be a human being.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in the manual for more information.\n",
                createdDate: "2024-09-30T23:53:37",
                updatedDate: "2024-09-30T23:53:37",
              },
            },
            "11.11": {
              id: "11.11",
              title: "Birth certificate & proof of name",
              isHeader: false,
              metadata: {
                description:
                  "> Proof of your birth and name (or change of name) – where it all begins!",
                urls: [
                  "https://www.accesscanberra.act.gov.au/births-relationships-and-deaths",
                ],
                createdDate: "2024-09-30T23:53:37",
                updatedDate: "2024-09-30T23:53:37",
              },
              extensions: {
                operationsManual: {
                  description: "My great ops manual",
                  version: "1.0.0",
                  createdDate: "2024-10-01T05:48:43",
                  updatedDate: "2024-10-01T05:48:43",
                },
              },
            },
          },
        },
      },
    },
  },
};
