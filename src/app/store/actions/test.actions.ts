export class GetTests {
    static readonly type = '[Test] AddTest';

    constructor(public delayTime: number) {}
}

export class GetTestsSuccess {
    static readonly type = '[Test] AddTestSuccess';
}

export class GetTestsFailure {
    static readonly type = '[Test] GetTestsFailure';
}
