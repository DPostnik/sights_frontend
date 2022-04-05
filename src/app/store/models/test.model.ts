export interface TestStateModel {
    tests: string[];
    isLoading: boolean;
}

export interface SightsStateModel {
    isLoading: boolean;
    sights: SightModel[];
    total: number;
}

export interface SightModel {
    id: number;
    name: string;
    description: string;
    date: Date;
    founder: string;
    coordinates: ICoordinates;
    city: ICity;
}

export interface ICoordinates {
    id: number;
    longitude: number;
    latitude: number;
}

export interface ICity {
    id: number;
    regionId: number;
    name: string;
}
