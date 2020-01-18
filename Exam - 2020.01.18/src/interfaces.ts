export interface Racer {
    firstName: string,
    lastName: string,
    id: number,
    dateOfBirth: string,
    racingTeam?: string,
    hasContract?: boolean,
    salary?: number,
    terms?: number,
    wonRaces?: number,
}

export interface RaceInterface {
    overtake(overtakerId: number, otherId: number): string,
    winRace(): string,
    showStandings(): string
}

export type QualiData = {
    id: number,
    lapTime?: number,
    position?: number
}