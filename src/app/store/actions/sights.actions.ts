export class GetSights {
    static readonly type = '[Test] LoadSights';

    constructor(public limit: number, public offset: number) {}
}

export class GetSightsSuccess {
    static readonly type = '[Test] LoadSightsSuccess';
}

export class GetSightsFailure {
    static readonly type = '[Test] LoadSightsFailed';
}
