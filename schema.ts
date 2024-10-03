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
  isHeader?: Boolean; // if you don't say it is, it isn't
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
  ids?: {
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
  categories?: {
    [id: string]: Category;
  };
  translations?: {
    [languageCode: string]: Translation;
  };
}

interface Extensions {
  jd__smallBusiness?: JDSmallBusiness;
  // operationsManual?: OperationsManual;
  // [key: string]: any; // Allows for future extensibility
}

interface JDSmallBusiness {
  placeholder: string;
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
                // operationsManual: {
                //   description: "My great ops manual",
                //   version: "1.0.0",
                //   createdDate: "2024-10-01T05:48:43",
                //   updatedDate: "2024-10-01T05:48:43",
                // },
                jd__smallBusiness: {
                  placeholder: "whatever",
                },
              },
            },
            "11.12": {
              id: "11.12",
              title: "Passports, residency, & citizenship",
              metadata: {
                description:
                  "> Proof of where you were born and/or live.\n> - For trip-specific travel documents and visas, see [jd:15.50].",
                createdDate: "2024-10-03T05:13:00",
                updatedDate: "2024-10-03T05:13:00",
              },
            },
          },
        },
        "12": {
          id: "12",
          title: "Where I live & how I get around",
          emoji: "🏡",
          metadata: {
            description:
              "> This **category** is all about your home and neighbourhood, and how you get from A to B.\n> \n> > If you have a lot going on in this category you might need to expand your system (see the [website](https://jdcm.al), [workbook](https://jdcm.al/14.02), or [workshop](https://jdcm.al/14.03)).\n> > *e.g. you own rental properties, you collect and do up old cars, you’re a farmer and maintain machinery and multiple vehicles.*\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in the manual for more information.",
            createdDate: "2024-10-03T05:13:00",
            updatedDate: "2024-10-03T05:13:00",
          },
          ids: {
            "12.10": {
              id: "12.10",
              title: "Home records",
              emoji: "📄",
              isHeader: true,
              metadata: {
                description:
                  "> All the paperwork and instructions related to having a roof over your head.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in the manual for more information.",
                createdDate: "2024-10-03T05:13:00",
                updatedDate: "2024-10-03T05:13:00",
              },
            },
            "12.11": {
              id: "12.11",
              title: "Official documents",
              metadata: {
                description:
                  "> The important documents associated with being the current or past resident of an address, neatly sorted by year-month.\n> *e.g. rental leases and renewals, security deposits, inspection reports, rental ledgers, purchasing contracts, property deeds, formal disputes.*\n> - This can also include the future, so store your rental applications or property searches here too.",
                createdDate: "2024-10-03T05:13:00",
                updatedDate: "2024-10-03T05:13:00",
              },
            },
          },
        },
      },
    },
  },
};

// @ts-ignore
module.exports = lifeAdmin;
