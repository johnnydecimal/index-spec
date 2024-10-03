import { JohnnyDecimalSystem } from "./types";

const lifeAdmin: JohnnyDecimalSystem = {
  systemId: "Z01", // JD:QS:LA reserved
  systemTitle: "Life Admin",
  schemaVersion: "1.0.0",
  areas: {
    "10-19": {
      id: "10-19",
      title: "Life admin",
      metadata: {
        createdDate: "2024-01-10T00:00:00",
        updatedDate: "2024-01-10T00:00:00",
        version: "",
      },
      categories: {
        "10": {
          id: "10",
          title: "Life admin area management",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "10.00": {
              id: "10.00",
              title: "Life admin area management",
              metadata: {
                description:
                  "The standard 'life admin' area. See https://jdcm.al/14.11.",
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
          },
        },
        "11": {
          id: "11",
          title: "Me & other living things",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
            version: "",
          },
          ids: {
            "11.00": {
              id: "11.00",
              title: "Me & other living things category management",
              metadata: {
                description:
                  "> This **category** is all about you, and other things that have a beating heart: your family, friends, and pets.\n> \n> > If you have a lot going on in this category you might need to expand your system (see the [website](https://jdcm.al), [workbook](https://jdcm.al/14.02), or [workshop](https://jdcm.al/14.03)).\n> > *e.g. your health situation is complicated, managing your children’s care, schooling, and activities takes a lot of effort.*\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in the manual for more information.",
                emoji: "\u2699\uFE0F", // gear
                isHeader: true,
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
            "11.01": {
              id: "11.01",
              title: "Inbox",
              metadata: {
                description:
                  "> This is the inbox for category **11 🙋 Me & other living things**. See **00.00 ■ System management** in the manual for more information.\n> \n> Pro tip: when you start to organise your system, move all of your stuff in to the relevant category inbox as a first step. This is a really simple way to go from total chaos to pretty good. Then tackle each category inbox in turn, moving each item to its proper home in an ID.",
                emoji: "\uD83D\uDCE5", // inbox tray
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
            "11.02": {
              id: "11.02",
              title: "System manual",
              metadata: {
                description:
                  "> We’ve saved the manual in your system for you. Find it here.\n> \n> This is version 1.0.4 of the Quick Start: Life admin pack.",
                emoji: "\uD83D\uDCD9", // orange book
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
            "11.09": {
              id: "11.09",
              title: "Archive",
              metadata: {
                description:
                  "> This is the archive for category **11 🙋 Me & other living things**. See **00.00 ■ System management** in the manual for more information.",
                emoji: "\uD83D\uDCE6", // package
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
            "11.10": {
              id: "11.10",
              title: "Personal records",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.11": {
              id: "11.11",
              title: "Birth certificate & proof of name",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.12": {
              id: "11.12",
              title: "Passports, residency, & citizenship",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.13": {
              id: "11.13",
              title: "Identity cards",
              metadata: {
                description:
                  "> Documents issued by someone else as proof of your association with them.\n> *e.g. your employer or college, the government.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.14": {
              id: "11.14",
              title: "Licenses",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.15": {
              id: "11.15",
              title: "Voter registration & elections",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.16": {
              id: "11.16",
              title: "Legal documents & certificates",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.17": {
              id: "11.17",
              title: "Academic records & qualifications",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.20": {
              id: "11.20",
              title: "Physical health & wellbeing",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.21": {
              id: "11.21",
              title: "Health insurance & claims",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.22": {
              id: "11.22",
              title: "Health records & registrations",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.23": {
              id: "11.23",
              title: "Primary care",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.24": {
              id: "11.24",
              title: "Eyes, ears, & teeth",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.25": {
              id: "11.25",
              title: "Immunity",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.26": {
              id: "11.26",
              title: "Physical therapy",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.27": {
              id: "11.27",
              title: "Fitness, nutrition, sleep, & other pro-active wellbeing",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.28": {
              id: "11.28",
              title: "Reproductive health",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.29": {
              id: "11.29",
              title: "Surgical & specialist care",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.30": {
              id: "11.30",
              title: "Mental health & wellbeing",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.31": {
              id: "11.31",
              title: "Psychologist, psychiatrist, & counselling",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.32": {
              id: "11.32",
              title: "My thoughts, journalling, diaries, & other writing",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.33": {
              id: "11.33",
              title: "Spiritual",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.34": {
              id: "11.34",
              title: "Habits, routines, & planning",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.35": {
              id: "11.35",
              title: "Brain training",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.40": {
              id: "11.40",
              title: "Family",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.41": {
              id: "11.41",
              title: "My partner",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.42": {
              id: "11.42",
              title: "My kids",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.43": {
              id: "11.43",
              title: "My family",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.44": {
              id: "11.44",
              title: "Dating & relationships",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.45": {
              id: "11.45",
              title: "Celebrations & gifting",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.46": {
              id: "11.46",
              title: "Letters, cards, & mementos",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.50": {
              id: "11.50",
              title: "Friends, clubs, & organisations",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.51": {
              id: "11.51",
              title: "My friends",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.52": {
              id: "11.52",
              title: "Groups, clubs, & volunteering",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.53": {
              id: "11.53",
              title: "Official correspondence",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.60": {
              id: "11.60",
              title: "Pets & other animals",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.61": {
              id: "11.61",
              title: "Pet health insurance & claims",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.62": {
              id: "11.62",
              title: "Pet health records & registrations",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.70": {
              id: "11.70",
              title: "My brilliant career",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.71": {
              id: "11.71",
              title: "My sales pitch",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.72": {
              id: "11.72",
              title: "My jobs past, present, & future",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.73": {
              id: "11.73",
              title: "My side-hustles",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.80": {
              id: "11.80",
              title: "Personal development & who I am",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.81": {
              id: "11.81",
              title: "Goals & dreams",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.82": {
              id: "11.82",
              title: "Hobbies & learning",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.83": {
              id: "11.83",
              title: "My library",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
        "12": {
          id: "12",
          title: "Where I life & how I get around",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "12.00": {
              id: "12.00",
              title: "System management",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.01": {
              id: "12.01",
              title: "Inbox",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.09": {
              id: "12.09",
              title: "Archive",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.10": {
              id: "12.10",
              title: "Home records",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.11": {
              id: "12.11",
              title: "Official documents",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.12": {
              id: "12.12",
              title: "Home insurance & claims",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.13": {
              id: "12.13",
              title: "Moving",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.14": {
              id: "12.14",
              title: "Inventory",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.15": {
              id: "12.15",
              title: "My home's user manual",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.16": {
              id: "12.16",
              title: "Appliances, tools, & gadgets",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.17": {
              id: "12.17",
              title: "Rates, taxes, & fees",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.20": {
              id: "12.20",
              title: "Home services & health",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.21": {
              id: "12.21",
              title: "Electricity, gas, & water",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.22": {
              id: "12.22",
              title: "Internet, phone, TV, & cable",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.23": {
              id: "12.23",
              title: "All other utilities & services",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.24": {
              id: "12.24",
              title: "Repairs, maintenance, & upkeep",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.25": {
              id: "12.25",
              title: "Renovation & improvements",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.30": {
              id: "12.30",
              title: "Getting around",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.31": {
              id: "12.31",
              title: "Motor vehicle purchase, leasing, & rental",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.32": {
              id: "12.32",
              title: "Motor vehicle insurance & claims",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.33": {
              id: "12.33",
              title: "Mechanics, repairs, & maintenance",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.34": {
              id: "12.34",
              title: "Permits & tolls",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.35": {
              id: "12.35",
              title: "Bicycles & scooters",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.36": {
              id: "12.36",
              title: "Public transport",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.40": {
              id: "12.40",
              title: "My kitchen & garden",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.41": {
              id: "12.41",
              title: "Indoor plants",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.42": {
              id: "12.42",
              title: "Outdoor plants",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.43": {
              id: "12.43",
              title: "Growing herbs, vegetables, & fruit",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.44": {
              id: "12.44",
              title: "Meals & recipes",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.50": {
              id: "12.50",
              title: "Housemates, neighbours, & the neighbourhood",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.51": {
              id: "12.51",
              title: "Housemates",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.52": {
              id: "12.52",
              title: "Neighbours",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.53": {
              id: "12.53",
              title: "The neighbourhood",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
        "13": {
          id: "13",
          title: "Money earned, saved, owed, & spent",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "13.00": {
              id: "13.00",
              title: "System management",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.01": {
              id: "13.01",
              title: "Inbox",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.09": {
              id: "13.09",
              title: "Archive",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.10": {
              id: "13.10",
              title: "Earned",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.11": {
              id: "13.11",
              title: "Payslips, invoices, & remittance",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.12": {
              id: "13.12",
              title: "Expenses & claims",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.13": {
              id: "13.13",
              title: "Government services",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.14": {
              id: "13.14",
              title: "Gifts, prizes, inheritance, & windfalls",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.15": {
              id: "13.15",
              title: "Selling my stuff",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.20": {
              id: "13.20",
              title: "Saved",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.21": {
              id: "13.21",
              title: "Budgets & planning",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.22": {
              id: "13.22",
              title: "Bank accounts",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.23": {
              id: "13.23",
              title: "Investments & assets",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.24": {
              id: "13.24",
              title: "Pension",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.30": {
              id: "13.30",
              title: "Owed",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.31": {
              id: "13.31",
              title: "Credit cards",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.32": {
              id: "13.32",
              title: "Mortgage",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.33": {
              id: "13.33",
              title: "Personal loans",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.34": {
              id: "13.34",
              title: "Tax returns & accounting",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.35": {
              id: "13.35",
              title: "Tickets & fines",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.40": {
              id: "13.40",
              title: "Spent & sent",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.41": {
              id: "13.41",
              title: "Purchase receipts",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.42": {
              id: "13.42",
              title: "Subscriptions, memberships, & donations",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.43": {
              id: "13.43",
              title: "Payment services",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.44": {
              id: "13.44",
              title: "Money transfer services",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.50": {
              id: "13.50",
              title: "Financial administration",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.51": {
              id: "13.51",
              title: "My credit rating",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
        "14": {
          id: "14",
          title: "My online life",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "14.00": {
              id: "14.00",
              title: "System management",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.01": {
              id: "14.01",
              title: "Inbox",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.09": {
              id: "14.09",
              title: "Archive",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.10": {
              id: "14.10",
              title: "Computers & other devices",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.11": {
              id: "14.11",
              title: "My computers & servers",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.12": {
              id: "14.12",
              title: "My mobile devices",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.13": {
              id: "14.13",
              title: "My wi-fi & network devices",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.14": {
              id: "14.14",
              title: "My data storage & backups",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.15": {
              id: "14.15",
              title: "My accessories",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.20": {
              id: "14.20",
              title: "Software & accounts",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.21": {
              id: "14.21",
              title: "My emergency recovery kit",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.22": {
              id: "14.22",
              title: "Software, licenses, & downloads",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.23": {
              id: "14.23",
              title: "Email accounts",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.24": {
              id: "14.24",
              title: "Social media accounts",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.25": {
              id: "14.25",
              title: "Domains & hosting",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.26": {
              id: "14.26",
              title: "All other accounts",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.30": {
              id: "14.30",
              title: "My online presence",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.31": {
              id: "14.31",
              title: "My blog",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
        "15": {
          id: "15",
          title: "Travel, events, & entertainment",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "15.00": {
              id: "15.00",
              title: "System management",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.01": {
              id: "15.01",
              title: "Inbox",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.09": {
              id: "15.09",
              title: "Archive",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.10": {
              id: "15.10",
              title: "Inspiration & history",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.11": {
              id: "15.11",
              title: "Places I've been, or want to go",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.12": {
              id: "15.12",
              title: "Places I'd like to eat or drink",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.13": {
              id: "15.13",
              title: "Inspirational or useful websites, apps, & guides",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.20": {
              id: "15.20",
              title: "Administration & checklist",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.21": {
              id: "15.21",
              title: "Important documents & lists",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.22": {
              id: "15.22",
              title: "Going-away checklists",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.23": {
              id: "15.23",
              title: "Travel insurance & claims",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.24": {
              id: "15.24",
              title: "Loyalty programs",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.30": {
              id: "15.30",
              title: "Events",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.31": {
              id: "15.31",
              title: "Eating out",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.32": {
              id: "15.32",
              title: "Music",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.33": {
              id: "15.33",
              title: "Movies",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.34": {
              id: "15.34",
              title: "The arts",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.35": {
              id: "15.35",
              title: "Sport",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.36": {
              id: "15.36",
              title: "Fairs & shows",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.37": {
              id: "15.37",
              title: "Conferences & expos",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.40": {
              id: "15.40",
              title: "Short or routine trips",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.41": {
              id: "15.41",
              title: "All short trips",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.50": {
              id: "15.50",
              title: "Longer trips",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.51": {
              id: "15.51",
              title: "Longer trips from the past",
              metadata: {
                description: "",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
      },
    },
  },
};

// module.exports = lifeAdmin;
