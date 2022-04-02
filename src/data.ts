export interface PlaceMark {
    longitude: number;
    latitude: number;
    balloonContent: string;
    iconColor: string;
}

export const placeMarks: PlaceMark[] = [
    {
        longitude: 53.669376,
        latitude: 23.821614,
        balloonContent: `
            <div [style.width]="200px" [ngStyle]="{'width':'200px', 'height':'60px', 'background-color': '#eee'}"
                <h1 [style.font-size]="40px">Macdonald</h1>
            </div>
            <div id="content">
                <p>Fast food organization</p>
            </div>
        `,
        iconColor: '#ffb452',
    },
    {
        longitude: 53.669532,
        latitude: 23.820628,
        balloonContent: 'Паспортный стол',
        iconColor: '#ffb452',
    },
];
