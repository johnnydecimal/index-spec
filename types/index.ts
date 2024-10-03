interface Dates {
  createdDate: string; // no harm always requiring it; why not?
  updatedDate: string; // allows us to do diffs
}

export interface ACMetadata extends Dates {
  // no description -- this lives on the relevant .00 note
  emoji?: string;
  /* TODO: think about AC versioning.
     Is it MAJOR for area, MINOR for category, PATCH?
     1.1.0 = first area release
     1.2.0 = this category updated; categories in area remain stable
     2.1.0 = the categories in this area updated

     …or is the only thing that it makes sense to track a version on
     a category? And areas are just made up of versioned categories?
   */
  version?: string;
}

export interface IDMetadata extends Dates {
  description?: string;
  emoji?: string;
  isHeader?: Boolean; // if you don't say it is, it isn't
  urls?: [string]; // an array of interesting URLs
  // not tags: we _generate_ tags, we don't store them
}

export interface Translation {
  title: string;
  // TODO: work this out when you get to it
  // metadata: Metadata;
}

export interface ID {
  id: string;
  title: string;
  metadata: IDMetadata;
  translations?: {
    [languageCode: string]: Translation;
  };
  extensions?: Extensions;
}

export interface Category {
  id: string;
  title: string;
  metadata: ACMetadata;
  ids?: {
    [id: string]: ID;
  };
  translations?: {
    [languageCode: string]: Translation;
  };
}

export interface Area {
  id: string;
  title: string;
  metadata: ACMetadata;
  categories?: {
    [id: string]: Category;
  };
  translations?: {
    [languageCode: string]: Translation;
  };
}

export interface Extensions {
  jd__smallBusiness?: JDSmallBusiness;
  // operationsManual?: OperationsManual;
  // [key: string]: any; // Allows for future extensibility
}

export interface JDSmallBusiness {
  placeholder: string;
}

export interface OperationsManual {
  description: string;
  url?: string;
  version: string;
  createdDate: string;
  updatedDate: string;
}

export interface JohnnyDecimalSystem {
  systemId: string; // e.g. A01, ref. https://jdcm.al/13.11
  systemTitle: string; // e.g. "Johnny's personal system"
  schemaVersion: string;
  areas: {
    [id: string]: Area;
  };
}

export interface Options {
  headerSquare: boolean;
  emoji: boolean;
}
