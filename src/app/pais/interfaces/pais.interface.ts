// To parse this data:
//
//   import { Convert } from "./file";
//
//   const rESTContriesResponse = Convert.toRESTContriesResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Country {
    name:           Name;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    cca2:           string;
    ccn3:           string;
    callingCodes:   string[];
    capital?:       string;
    altSpellings:   string[];
    subregion:      string;
    region:         string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number;
    gini?:          number;
    timezones:      string[];
    borders?:       string[];
    nativeName:     string;
    numericCode:    string;
    flags:          Flags;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs?: RegionalBloc[];
    cioc?:          string;
    independent:    boolean;
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Language {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym:        string;
    name:           string;
    otherNames:     string[];
    otherAcronyms?: string[];
}

export interface Translations {
    ara: Ara;
    cym: Cym
    bre: Bre
}


export interface Ara {
    common: string;
}

export interface Bre {
    common: string;
}
export interface Cym {
    common: string;
}

export interface Name {
    common: string;
}

