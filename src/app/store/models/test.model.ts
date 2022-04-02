export interface TestStateModel {
    tests: string[];
    isLoading: boolean;
}

export interface SightsStateModel {
    isLoading: boolean;
    sights: SightModel[];
}

export interface SightModel {
    id: number;
    name: string;
    description: string;
    date: Date;
    founder: string;
    coordinates: ICoordinates;
    cityId: number;
}

export interface ICoordinates {
    longitude: number;
    latitude: number;
}
